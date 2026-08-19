// -----------------------------------------------------------------------
// Zi Wei Dou Shu (紫微斗數) — Phase 2: palace positions + Five Elements
// Bureau (五行局).
//
// Pure functions, no DOM. Depends on ZiweiLunar (js/ziwei-lunar.js) for the
// solar->lunar conversion and on the Astronomy library only indirectly
// (passed straight through to ZiweiLunar).
//
// Every formula here was cross-checked against a fully worked public
// example (甲辰年七月初九未時 -> 命宮丑, 身宮卯) before being trusted:
// see the comments on computeLifeAndBodyPalaceIndex for the exact numbers.
// -----------------------------------------------------------------------
(function (root) {
    'use strict';

    const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    // Fixed order the twelve palace *names* take, starting from 命宮 and
    // moving in the "逆" (reverse / decreasing branch-index) direction —
    // confirmed against a published step-by-step SOP that uses this same
    // 順/逆 terminology consistently for both 命身宮 placement and palace
    // distribution ("命宮：順生月，逆生時" ... "從命宮逆佈12宮").
    const PALACE_NAMES = [
        '命宮', '兄弟宮', '夫妻宮', '子女宮', '財帛宮', '疾厄宮',
        '遷移宮', '僕役宮', '官祿宮', '田宅宮', '福德宮', '父母宮',
    ];

    // Complete 60-jiazi nayin (納音) table: element per stem+branch pair.
    // Grouped in the traditional 5-pair blocks; expanded to all 60 here for
    // direct [stemIndex*12 + branchIndex]-independent lookup by ganzhi
    // string, which is simpler and less error-prone than reconstructing the
    // block math at lookup time.
    const NAYIN_BLOCKS = [
        { pairs: ['甲子', '乙丑'], name: '海中金', element: '金' },
        { pairs: ['丙寅', '丁卯'], name: '爐中火', element: '火' },
        { pairs: ['戊辰', '己巳'], name: '大林木', element: '木' },
        { pairs: ['庚午', '辛未'], name: '路旁土', element: '土' },
        { pairs: ['壬申', '癸酉'], name: '劍鋒金', element: '金' },
        { pairs: ['甲戌', '乙亥'], name: '山頭火', element: '火' },
        { pairs: ['丙子', '丁丑'], name: '澗下水', element: '水' },
        { pairs: ['戊寅', '己卯'], name: '城頭土', element: '土' },
        { pairs: ['庚辰', '辛巳'], name: '白蠟金', element: '金' },
        { pairs: ['壬午', '癸未'], name: '楊柳木', element: '木' },
        { pairs: ['甲申', '乙酉'], name: '泉中水', element: '水' },
        { pairs: ['丙戌', '丁亥'], name: '屋上土', element: '土' },
        { pairs: ['戊子', '己丑'], name: '霹靂火', element: '火' },
        { pairs: ['庚寅', '辛卯'], name: '松柏木', element: '木' },
        { pairs: ['壬辰', '癸巳'], name: '長流水', element: '水' },
        { pairs: ['甲午', '乙未'], name: '沙中金', element: '金' },
        { pairs: ['丙申', '丁酉'], name: '山下火', element: '火' },
        { pairs: ['戊戌', '己亥'], name: '平地木', element: '木' },
        { pairs: ['庚子', '辛丑'], name: '壁上土', element: '土' },
        { pairs: ['壬寅', '癸卯'], name: '金箔金', element: '金' },
        { pairs: ['甲辰', '乙巳'], name: '覆燈火', element: '火' },
        { pairs: ['丙午', '丁未'], name: '天河水', element: '水' },
        { pairs: ['戊申', '己酉'], name: '大驛土', element: '土' },
        { pairs: ['庚戌', '辛亥'], name: '釵釧金', element: '金' },
        { pairs: ['壬子', '癸丑'], name: '桑柘木', element: '木' },
        { pairs: ['甲寅', '乙卯'], name: '大溪水', element: '水' },
        { pairs: ['丙辰', '丁巳'], name: '沙中土', element: '土' },
        { pairs: ['戊午', '己未'], name: '天上火', element: '火' },
        { pairs: ['庚申', '辛酉'], name: '石榴木', element: '木' },
        { pairs: ['壬戌', '癸亥'], name: '大海水', element: '水' },
    ];
    const NAYIN_BY_GANZHI = {};
    NAYIN_BLOCKS.forEach(function (block) {
        block.pairs.forEach(function (gz) {
            NAYIN_BY_GANZHI[gz] = { name: block.name, element: block.element };
        });
    });

    // element -> 五行局 (bureau number + display name)
    const BUREAU_BY_ELEMENT = {
        '水': { number: 2, name: '水二局' },
        '木': { number: 3, name: '木三局' },
        '金': { number: 4, name: '金四局' },
        '土': { number: 5, name: '土五局' },
        '火': { number: 6, name: '火六局' },
    };

    // Standard sexagenary year stem/branch from a Gregorian year label
    // (works for any year; 1984 is a well-known 甲子 year and satisfies
    // (1984-4)%10===0 and (1984-4)%12===0, which anchors the formula).
    function yearGanZhi(year) {
        const stemIndex = ((year - 4) % 10 + 10) % 10;
        const branchIndex = ((year - 4) % 12 + 12) % 12;
        return { stemIndex: stemIndex, branchIndex: branchIndex };
    }

    // 五虎遁 (year-stem -> the stem assigned to the 寅 palace). Standard
    // mnemonic: 甲己之年丙作首、乙庚之歲戊為頭、丙辛之年由庚起、
    // 丁壬壬位順行流、戊癸何方發、甲寅之上好追求.
    function yinPalaceStemIndex(yearStemIndex) {
        return (2 * (yearStemIndex % 5) + 2) % 10;
    }

    // Stem assigned to any of the 12 fixed palace branches, given the stem
    // assigned to 寅 (index 2). Stems advance in the natural forward
    // (increasing branch-index) direction away from 寅, same direction the
    // 60-jiazi cycle itself advances.
    function stemAtBranch(branchIndex, yinStemIdx) {
        const stepsFromYin = ((branchIndex - 2) % 12 + 12) % 12;
        return (yinStemIdx + stepsFromYin) % 10;
    }

    // Convert an hour-of-day (0-23, local birth time) to the traditional
    // 12-shichen branch index (0=子..11=亥). 子時 wraps midnight
    // (23:00-00:59).
    function hourToBranchIndex(hour) {
        const h = ((hour % 24) + 24) % 24;
        return Math.floor(((h + 1) % 24) / 2);
    }

    // Effective lunar month number to use for palace placement, applying
    // the leap-month convention: a leap month's first half (day <= 15)
    // counts as the month it repeats; its second half counts as the
    // following month. This is one of several traditional conventions
    // (see ziwei-plan.md's risk section) — documented here so it can be
    // swapped later if needed.
    function effectiveMonthForPlacement(lunarMonth, isLeapMonth, lunarDay) {
        if (!isLeapMonth) return lunarMonth;
        if (lunarDay <= 15) return lunarMonth;
        return lunarMonth === 12 ? 1 : lunarMonth + 1;
    }

    // Core formula, verified against the worked example 甲辰年七月初九未時:
    //   monthPalaceIndex = (2 + (month-1)) % 12   -- "寅起正月，順數至生月"
    //     month=7  -> (2+6)%12=8 -> 申宮  ✓ matches published example
    //   lifePalaceIndex = (monthPalaceIndex - hourIndex + 24) % 12  -- 逆生時
    //     hour=未(7) -> (8-7+24)%12=1 -> 丑宮  ✓ matches (命宮在丑)
    //   bodyPalaceIndex = (monthPalaceIndex + hourIndex) % 12  -- 順生時
    //     (8+7)%12=3 -> 卯宮  ✓ matches (身宮在卯)
    function computeLifeAndBodyPalaceIndex(effectiveMonth, hourBranchIndex) {
        const monthPalaceIndex = (2 + (effectiveMonth - 1)) % 12;
        const lifePalaceIndex = ((monthPalaceIndex - hourBranchIndex) % 12 + 12) % 12;
        const bodyPalaceIndex = (monthPalaceIndex + hourBranchIndex) % 12;
        return { monthPalaceIndex: monthPalaceIndex, lifePalaceIndex: lifePalaceIndex, bodyPalaceIndex: bodyPalaceIndex };
    }

    // Distribute the twelve palace names starting at 命宮, moving in the
    // "逆" (decreasing branch-index) direction. Returns an array of 12
    // { name, branchIndex } in PALACE_NAMES order (index 0 = 命宮).
    function distributeTwelvePalaces(lifePalaceIndex) {
        return PALACE_NAMES.map(function (name, k) {
            const branchIndex = ((lifePalaceIndex - k) % 12 + 12) % 12;
            return { name: name, branchIndex: branchIndex };
        });
    }

    // 五行局: nayin element of the 命宮's ganzhi (stem+branch), mapped to
    // the bureau number/name.
    function computeBureau(lifePalaceIndex, yearStemIndex) {
        const yinStemIdx = yinPalaceStemIndex(yearStemIndex);
        const lifeStemIndex = stemAtBranch(lifePalaceIndex, yinStemIdx);
        const ganzhi = HEAVENLY_STEMS[lifeStemIndex] + EARTHLY_BRANCHES[lifePalaceIndex];
        const nayin = NAYIN_BY_GANZHI[ganzhi];
        if (!nayin) {
            throw new Error('computeBureau: no nayin entry for ganzhi ' + ganzhi);
        }
        const bureau = BUREAU_BY_ELEMENT[nayin.element];
        return {
            lifeStemIndex: lifeStemIndex,
            ganzhi: ganzhi,
            nayinName: nayin.name,
            element: nayin.element,
            bureauNumber: bureau.number,
            bureauName: bureau.name,
        };
    }

    // ---------------------------------------------------------------
    // Phase 3: fourteen main stars (十四主星).
    //
    // Verified against two independently-worded published formulas that
    // turned out to be algebraically identical (both tested against the
    // same worked example: 十六日生, 木三局 -> Y=8 -> 紫微在酉, 天府在未):
    //   1. "(農曆生日+X)/局數=商(整除)" — X is the smallest non-negative
    //      integer completing the division; X odd -> Y=商-X, X even ->
    //      Y=商+X; then count forward (順) from 寅=1 to the Yth palace.
    //   2. Chinese Wikipedia's equivalent phrasing using "倍數/差數" —
    //      produced the identical Y=8 for the same inputs.
    // The 紫微星系/天府星系 offset tables below were cross-checked against
    // the well-known fixed facts that 七殺/破軍/貪狼 always sit in a
    // perfect trine (offset 4 apart) and that 七殺 opposes 天府 while
    // 破軍 opposes 天相 (offset 6) — both hold exactly with these tables.
    // ---------------------------------------------------------------

    // 紫微星系: starting at 紫微's own palace (offset 0), placed moving in
    // the "逆" (decreasing branch-index) direction. null = no star at that
    // offset.
    const ZIWEI_SERIES_OFFSETS = ['紫微', '天機', null, '太陽', '武曲', '天同', null, null, '廉貞'];

    // 天府星系: starting at 天府's own palace (offset 0), placed moving in
    // the "順" (increasing branch-index) direction.
    const TIANFU_SERIES_OFFSETS = ['天府', '太陰', '貪狼', '巨門', '天相', '天梁', '七殺', null, null, null, '破軍'];

    // Smallest non-negative X such that (lunarDay + X) is divisible by
    // bureauNumber.
    function ziweiCompletionX(lunarDay, bureauNumber) {
        const rem = lunarDay % bureauNumber;
        return rem === 0 ? 0 : bureauNumber - rem;
    }

    // Returns the branch index (0-11) of 紫微星, and by mirror-symmetry,
    // 天府星 (天府branch = (4 - 紫微branch) mod 12 — verified: 紫微在寅/申
    // always puts 天府 in the same palace, and the mirror formula
    // reproduces the full standard 紫微-in-X -> 天府-in-Y correspondence
    // table for all 12 positions).
    function computeZiweiAndTianfuBranch(lunarDay, bureauNumber) {
        const x = ziweiCompletionX(lunarDay, bureauNumber);
        const q = (lunarDay + x) / bureauNumber;
        const y = (x % 2 === 1) ? (q - x) : (q + x);
        // 寅(index2) is position 1; count forward (順) to the Y-th
        // position, wrapping modularly for any Y outside 1-12 (large Q+X
        // combinations, or negative Y, both occur for extreme day/bureau
        // combinations).
        const offsetFromYin = ((y - 1) % 12 + 12) % 12;
        const ziweiBranchIndex = (2 + offsetFromYin) % 12;
        const tianfuBranchIndex = ((4 - ziweiBranchIndex) % 12 + 12) % 12;
        return { ziweiBranchIndex: ziweiBranchIndex, tianfuBranchIndex: tianfuBranchIndex, x: x, y: y };
    }

    // Places all 14 main stars onto their branch indices. Returns an
    // object keyed by branchIndex (0-11) -> array of star names present
    // there (usually 0, 1, or 2 stars).
    function placeMainStars(ziweiBranchIndex, tianfuBranchIndex) {
        const starsByBranch = {};
        for (let i = 0; i < 12; i++) starsByBranch[i] = [];

        ZIWEI_SERIES_OFFSETS.forEach(function (star, k) {
            if (!star) return;
            const idx = ((ziweiBranchIndex - k) % 12 + 12) % 12;
            starsByBranch[idx].push(star);
        });
        TIANFU_SERIES_OFFSETS.forEach(function (star, k) {
            if (!star) return;
            const idx = (tianfuBranchIndex + k) % 12;
            starsByBranch[idx].push(star);
        });
        return starsByBranch;
    }

    // ---------------------------------------------------------------
    // Phase 4: 六吉星 (文昌文曲/左輔右弼/天魁天鉞) + 六煞星
    // (擎羊陀羅/火星鈴星/地空地劫), plus 祿存 (needed to derive 擎羊陀羅).
    //
    // Each formula below is a standard mnemonic verse, cross-checked
    // against at least one independently published concrete example before
    // being trusted (see the test suite for the exact checks run).
    // ---------------------------------------------------------------

    // 文曲: 辰(4)起子時，順數至生時。文昌: 戌(10)起子時，逆數至生時。
    // ("辰上順時文曲位，戌上逆時覓文昌")
    function wenquWenchang(hourBranchIndex) {
        return {
            wenqu: (4 + hourBranchIndex) % 12,
            wenchang: ((10 - hourBranchIndex) % 12 + 12) % 12,
        };
    }

    // 左輔: 辰(4)起正月，順數至生月。右弼: 戌(10)起正月，逆數至生月。
    // ("辰上順正尋左輔，戌上逆正右弼當") — uses the same leap-month-adjusted
    // "effective month" as 命宮/身宮 for consistency.
    function zuofuYoubi(effectiveMonth) {
        const steps = effectiveMonth - 1;
        return {
            zuofu: (4 + steps) % 12,
            youbi: ((10 - steps) % 12 + 12) % 12,
        };
    }

    // 天魁/天鉞 by year stem (陽貴人/陰貴人 — same table as BaZi's
    // 天乙貴人). Verified against a published concrete example: 甲/戊/庚年
    // -> 天魁在丑(1)，天鉞在未(7).
    const TIANKUI_TIANYUE_BY_STEM_GROUP = [
        { stems: [0, 4, 6], kui: 1, yue: 7 },   // 甲戊庚 -> 丑未
        { stems: [1, 5], kui: 0, yue: 8 },      // 乙己 -> 子申
        { stems: [2, 3], kui: 11, yue: 9 },     // 丙丁 -> 亥酉
        { stems: [8, 9], kui: 3, yue: 5 },      // 壬癸 -> 卯巳
        { stems: [7], kui: 6, yue: 2 },         // 辛 -> 午寅
    ];
    function tiankuiTianyue(yearStemIndex) {
        for (const g of TIANKUI_TIANYUE_BY_STEM_GROUP) {
            if (g.stems.indexOf(yearStemIndex) !== -1) {
                return { tiankui: g.kui, tianyue: g.yue };
            }
        }
        throw new Error('tiankuiTianyue: no group for stem index ' + yearStemIndex);
    }

    // 祿存 by year stem — standard mnemonic "甲祿在寅乙祿卯，丙戊祿巳丁己午，
    // 庚祿居申辛祿酉，壬祿在亥癸祿子".
    const LUCUN_BY_STEM = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0]; // indexed by stem 0-9 (甲..癸)
    function lucunBranch(yearStemIndex) {
        return LUCUN_BY_STEM[yearStemIndex];
    }

    // 擎羊 = 祿存順前一宮 (祿存+1)，陀羅 = 祿存逆後一宮 (祿存-1).
    function qingyangTuoluo(lucun) {
        return {
            qingyang: (lucun + 1) % 12,
            tuoluo: ((lucun - 1) % 12 + 12) % 12,
        };
    }

    // 火星/鈴星 base position (at 子時) by year-branch trine group, then
    // count forward (順) by hourBranchIndex. Verse: "申子辰人寅戌揚，
    // 寅午戌人丑卯方，巳酉丑人卯戌位，亥卯未人酉戌房。"
    const HUOLING_BASE_BY_BRANCH_TRINE = [
        { branches: [8, 0, 4], fire: 2, bell: 10 },  // 申子辰 -> 寅戌
        { branches: [2, 6, 10], fire: 1, bell: 3 },  // 寅午戌 -> 丑卯
        { branches: [5, 9, 1], fire: 3, bell: 10 },  // 巳酉丑 -> 卯戌
        { branches: [11, 3, 7], fire: 9, bell: 10 }, // 亥卯未 -> 酉戌
    ];
    function huoxingLingxing(yearBranchIndex, hourBranchIndex) {
        for (const g of HUOLING_BASE_BY_BRANCH_TRINE) {
            if (g.branches.indexOf(yearBranchIndex) !== -1) {
                return {
                    huoxing: (g.fire + hourBranchIndex) % 12,
                    lingxing: (g.bell + hourBranchIndex) % 12,
                };
            }
        }
        throw new Error('huoxingLingxing: no group for branch index ' + yearBranchIndex);
    }

    // 地劫: 亥(11)起子時，順數至生時。地空: 亥(11)起子時，逆數至生時。
    // ("亥上子時順安劫，逆回便是地空亡")
    function dijieDikong(hourBranchIndex) {
        return {
            dijie: (11 + hourBranchIndex) % 12,
            dikong: ((11 - hourBranchIndex) % 12 + 12) % 12,
        };
    }

    // Places all twelve auxiliary stars (六吉 + 六煞 + 祿存) onto branch
    // indices, in the same {branchIndex: [starNames]} shape as
    // placeMainStars, so the two can be merged/displayed the same way.
    function placeAuxiliaryStars(params) {
        const starsByBranch = {};
        for (let i = 0; i < 12; i++) starsByBranch[i] = [];
        const add = (branch, name) => starsByBranch[branch].push(name);

        const wq = wenquWenchang(params.hourBranchIndex);
        add(wq.wenqu, '文曲');
        add(wq.wenchang, '文昌');

        const zy = zuofuYoubi(params.effectiveMonth);
        add(zy.zuofu, '左輔');
        add(zy.youbi, '右弼');

        const ky = tiankuiTianyue(params.yearStemIndex);
        add(ky.tiankui, '天魁');
        add(ky.tianyue, '天鉞');

        const lucun = lucunBranch(params.yearStemIndex);
        add(lucun, '祿存');
        const qt = qingyangTuoluo(lucun);
        add(qt.qingyang, '擎羊');
        add(qt.tuoluo, '陀羅');

        const hl = huoxingLingxing(params.yearBranchIndex, params.hourBranchIndex);
        add(hl.huoxing, '火星');
        add(hl.lingxing, '鈴星');

        const dd = dijieDikong(params.hourBranchIndex);
        add(dd.dijie, '地劫');
        add(dd.dikong, '地空');

        return starsByBranch;
    }

    // ---------------------------------------------------------------
    // Phase 5: 四化飛星 (化祿/化權/化科/化忌), by year stem.
    //
    // Standard "紫微斗數全書" tradition table — cross-checked against two
    // independent published sources (word-for-word identical) plus a third
    // real-world example (己年/己月 -> 武曲化祿/貪狼化權/天梁化科/文曲化忌).
    // Note: a rival "紫微斗數全集" tradition uses a different table for a
    // few stems — this is a documented, acknowledged split between
    // schools (see ziwei-plan.md's risk section), and this build follows
    // the far more common 全書 table used by nearly all modern software.
    // ---------------------------------------------------------------
    const SIHUA_BY_STEM = [
        { lu: '廉貞', quan: '破軍', ke: '武曲', ji: '太陽' }, // 甲
        { lu: '天機', quan: '天梁', ke: '紫微', ji: '太陰' }, // 乙
        { lu: '天同', quan: '天機', ke: '文昌', ji: '廉貞' }, // 丙
        { lu: '太陰', quan: '天同', ke: '天機', ji: '巨門' }, // 丁
        { lu: '貪狼', quan: '太陰', ke: '右弼', ji: '天機' }, // 戊
        { lu: '武曲', quan: '貪狼', ke: '天梁', ji: '文曲' }, // 己
        { lu: '太陽', quan: '武曲', ke: '太陰', ji: '天同' }, // 庚
        { lu: '巨門', quan: '太陽', ke: '文曲', ji: '文昌' }, // 辛
        { lu: '天梁', quan: '紫微', ke: '左輔', ji: '武曲' }, // 壬
        { lu: '破軍', quan: '巨門', ke: '太陰', ji: '貪狼' }, // 癸
    ];

    function sihuaForStem(yearStemIndex) {
        return SIHUA_BY_STEM[yearStemIndex];
    }

    // Finds which branch holds a given star name, searching both the main
    // and auxiliary star maps (四化 can land on either).
    function findStarBranch(starName, mainStarsByBranch, auxiliaryStarsByBranch) {
        for (let b = 0; b < 12; b++) {
            if (mainStarsByBranch[b] && mainStarsByBranch[b].indexOf(starName) !== -1) return b;
            if (auxiliaryStarsByBranch[b] && auxiliaryStarsByBranch[b].indexOf(starName) !== -1) return b;
        }
        return -1;
    }

    // Returns [{ type: 'lu'|'quan'|'ke'|'ji', star, branchIndex }, ...] —
    // branchIndex is -1 if the star wasn't found (shouldn't normally
    // happen, since all 14 main + 六吉 stars are always placed somewhere,
    // but guarded defensively).
    function computeSihua(yearStemIndex, mainStarsByBranch, auxiliaryStarsByBranch) {
        const table = sihuaForStem(yearStemIndex);
        return ['lu', 'quan', 'ke', 'ji'].map(function (type) {
            const star = table[type];
            return { type: type, star: star, branchIndex: findStarBranch(star, mainStarsByBranch, auxiliaryStarsByBranch) };
        });
    }

    // Public entry point. `Astronomy` is passed straight through to
    // ZiweiLunar. `birth` = { year, month, day, hour, minute? } in solar
    // (Gregorian) terms, hour 0-23 local birth time.
    function computeChart(Astronomy, ZiweiLunarLib, birth) {
        const lunar = ZiweiLunarLib.solarToLunar(Astronomy, birth.year, birth.month, birth.day);
        const hourBranchIndex = hourToBranchIndex(birth.hour);
        const effMonth = effectiveMonthForPlacement(lunar.month, lunar.isLeapMonth, lunar.day);

        const palaceIdx = computeLifeAndBodyPalaceIndex(effMonth, hourBranchIndex);
        const twelvePalaces = distributeTwelvePalaces(palaceIdx.lifePalaceIndex);

        const yg = yearGanZhi(lunar.year);
        const bureau = computeBureau(palaceIdx.lifePalaceIndex, yg.stemIndex);

        // Attach each palace's own stem (宮干), same 五虎遁-derived stem
        // used for 五行局, so the UI can show a full 干支 per palace.
        const yinStemIdxForPalaces = yinPalaceStemIndex(yg.stemIndex);
        twelvePalaces.forEach(function (p) {
            p.stemIndex = stemAtBranch(p.branchIndex, yinStemIdxForPalaces);
            p.ganzhi = HEAVENLY_STEMS[p.stemIndex] + EARTHLY_BRANCHES[p.branchIndex];
        });

        const ziweiTianfu = computeZiweiAndTianfuBranch(lunar.day, bureau.bureauNumber);
        const mainStarsByBranch = placeMainStars(ziweiTianfu.ziweiBranchIndex, ziweiTianfu.tianfuBranchIndex);

        const auxiliaryStarsByBranch = placeAuxiliaryStars({
            hourBranchIndex: hourBranchIndex,
            effectiveMonth: effMonth,
            yearStemIndex: yg.stemIndex,
            yearBranchIndex: yg.branchIndex,
        });

        const sihua = computeSihua(yg.stemIndex, mainStarsByBranch, auxiliaryStarsByBranch);

        return {
            lunar: lunar,
            hourBranchIndex: hourBranchIndex,
            effectiveMonthForPlacement: effMonth,
            lifePalaceIndex: palaceIdx.lifePalaceIndex,
            bodyPalaceIndex: palaceIdx.bodyPalaceIndex,
            twelvePalaces: twelvePalaces, // [{name, branchIndex}], index 0 = 命宮
            yearStemIndex: yg.stemIndex,
            yearBranchIndex: yg.branchIndex,
            yearGanZhi: HEAVENLY_STEMS[yg.stemIndex] + EARTHLY_BRANCHES[yg.branchIndex],
            bureau: bureau,
            ziweiBranchIndex: ziweiTianfu.ziweiBranchIndex,
            tianfuBranchIndex: ziweiTianfu.tianfuBranchIndex,
            mainStarsByBranch: mainStarsByBranch, // {0..11: [starName,...]}
            auxiliaryStarsByBranch: auxiliaryStarsByBranch, // {0..11: [starName,...]}
            sihua: sihua, // [{type:'lu'|'quan'|'ke'|'ji', star, branchIndex}]
        };
    }

    const api = {
        computeChart: computeChart,
        HEAVENLY_STEMS: HEAVENLY_STEMS,
        EARTHLY_BRANCHES: EARTHLY_BRANCHES,
        PALACE_NAMES: PALACE_NAMES,
        _internal: {
            yearGanZhi: yearGanZhi,
            yinPalaceStemIndex: yinPalaceStemIndex,
            stemAtBranch: stemAtBranch,
            hourToBranchIndex: hourToBranchIndex,
            effectiveMonthForPlacement: effectiveMonthForPlacement,
            computeLifeAndBodyPalaceIndex: computeLifeAndBodyPalaceIndex,
            distributeTwelvePalaces: distributeTwelvePalaces,
            computeBureau: computeBureau,
            NAYIN_BY_GANZHI: NAYIN_BY_GANZHI,
            ziweiCompletionX: ziweiCompletionX,
            computeZiweiAndTianfuBranch: computeZiweiAndTianfuBranch,
            placeMainStars: placeMainStars,
            ZIWEI_SERIES_OFFSETS: ZIWEI_SERIES_OFFSETS,
            TIANFU_SERIES_OFFSETS: TIANFU_SERIES_OFFSETS,
            wenquWenchang: wenquWenchang,
            zuofuYoubi: zuofuYoubi,
            tiankuiTianyue: tiankuiTianyue,
            lucunBranch: lucunBranch,
            qingyangTuoluo: qingyangTuoluo,
            huoxingLingxing: huoxingLingxing,
            dijieDikong: dijieDikong,
            placeAuxiliaryStars: placeAuxiliaryStars,
            sihuaForStem: sihuaForStem,
            findStarBranch: findStarBranch,
            computeSihua: computeSihua,
            SIHUA_BY_STEM: SIHUA_BY_STEM,
        },
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }
    if (typeof root !== 'undefined') {
        root.ZiweiPlacement = api;
    }
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
