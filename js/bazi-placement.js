// -----------------------------------------------------------------------
// BaZi (八字/四柱推命) — Phase 2: 地支藏干 (hidden stems) + 十神 (Ten Gods).
//
// Pure functions, no DOM. Depends on BaziCalendar (js/bazi-calendar.js)
// for the four pillars themselves.
// -----------------------------------------------------------------------
(function (root) {
    'use strict';

    const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    // 0=木 1=火 2=土 3=金 4=水
    const ELEMENT_NAMES = ['木', '火', '土', '金', '水'];

    // Stem -> element (甲乙木, 丙丁火, 戊己土, 庚辛金, 壬癸水) and yin/yang
    // (even index = 陽, odd index = 陰) — both are simple, well-known,
    // uncontested facts derivable directly from stem index.
    function stemElement(stemIndex) { return Math.floor(stemIndex / 2); }
    function stemIsYang(stemIndex) { return stemIndex % 2 === 0; }

    // 地支藏干 (hidden stems within each earthly branch), each branch's own
    // list ordered 本氣 first (the branch's primary/dominant stem) then any
    // 中氣/餘氣. Standard table, verified against a published reference.
    const BRANCH_HIDDEN_STEMS = {
        0: [9],           // 子: 癸
        1: [5, 9, 7],      // 丑: 己癸辛
        2: [0, 2, 4],      // 寅: 甲丙戊
        3: [1],           // 卯: 乙
        4: [4, 1, 9],      // 辰: 戊乙癸
        5: [2, 4, 6],      // 巳: 丙戊庚
        6: [3, 5],         // 午: 丁己
        7: [5, 3, 1],      // 未: 己丁乙
        8: [6, 8, 4],      // 申: 庚壬戊
        9: [7],           // 酉: 辛
        10: [4, 7, 3],     // 戌: 戊辛丁
        11: [8, 0],        // 亥: 壬甲
    };

    // Ten Gods (十神): the relationship between a "day master" stem and any
    // other stem, based on the five-element generating/overcoming cycle
    // (生: element i generates (i+1)%5; 克: element i overcomes (i+2)%5)
    // plus whether the two stems share the same yin/yang polarity.
    // Verified against a published worked example: for a 甲 (yang wood) day
    // master, 壬 (yang water) is 偏印 and 癸 (yin water) is 正印 (water
    // generates wood; same polarity -> 偏, different -> 正) — and
    // independently, 庚 (yang metal) is 七殺 for a 甲 day master (metal
    // overcomes wood, same polarity), 戊 (yang earth) is 偏財 (wood
    // overcomes earth, same polarity).
    const TEN_GOD_NAMES = {
        same: { sameYinYang: '比肩', diffYinYang: '劫財' },       // 同我者
        iGenerate: { sameYinYang: '食神', diffYinYang: '傷官' },  // 我生者
        generatesMe: { sameYinYang: '偏印', diffYinYang: '正印' }, // 生我者
        iOvercome: { sameYinYang: '偏財', diffYinYang: '正財' },  // 我剋者
        overcomesMe: { sameYinYang: '七殺', diffYinYang: '正官' }, // 剋我者
    };

    function tenGod(dayMasterStemIndex, otherStemIndex) {
        const meEl = stemElement(dayMasterStemIndex);
        const otherEl = stemElement(otherStemIndex);
        const sameYinYang = stemIsYang(dayMasterStemIndex) === stemIsYang(otherStemIndex);
        const polarityKey = sameYinYang ? 'sameYinYang' : 'diffYinYang';

        let category;
        if (otherEl === meEl) category = 'same';
        else if ((otherEl + 1) % 5 === meEl) category = 'generatesMe';
        else if ((meEl + 1) % 5 === otherEl) category = 'iGenerate';
        else if ((meEl + 2) % 5 === otherEl) category = 'iOvercome';
        else if ((otherEl + 2) % 5 === meEl) category = 'overcomesMe';
        else throw new Error('tenGod: unreachable element relationship'); // 5 categories cover all 5x5 cases except self

        return TEN_GOD_NAMES[category][polarityKey];
    }

    // For a given day-master stem index and a branch index, returns the
    // branch's hidden stems annotated with each one's Ten God relative to
    // the day master. The day master's own pillar (day stem) is never
    // given a Ten God label against itself — by convention it's the
    // reference point ("日主"), not one of the ten gods.
    function hiddenStemsWithTenGod(dayMasterStemIndex, branchIndex) {
        return BRANCH_HIDDEN_STEMS[branchIndex].map(function (stemIdx, i) {
            return {
                stemIndex: stemIdx,
                stem: HEAVENLY_STEMS[stemIdx],
                isPrimary: i === 0, // 本氣
                tenGod: tenGod(dayMasterStemIndex, stemIdx),
            };
        });
    }

    // Public: given the four pillars (from BaziCalendar.computeFourPillars),
    // returns the Ten God for each of the three non-day stems (day stem is
    // the reference / 日主) plus the annotated hidden-stem breakdown for
    // all four branches (including the day branch itself).
    function computeTenGods(fourPillars) {
        const dayMaster = fourPillars.day.stemIndex;
        return {
            dayMasterStemIndex: dayMaster,
            year: {
                stemTenGod: tenGod(dayMaster, fourPillars.year.stemIndex),
                hiddenStems: hiddenStemsWithTenGod(dayMaster, fourPillars.year.branchIndex),
            },
            month: {
                stemTenGod: tenGod(dayMaster, fourPillars.month.stemIndex),
                hiddenStems: hiddenStemsWithTenGod(dayMaster, fourPillars.month.branchIndex),
            },
            day: {
                stemTenGod: null, // 日主本身，不對自己論十神
                hiddenStems: hiddenStemsWithTenGod(dayMaster, fourPillars.day.branchIndex),
            },
            hour: {
                stemTenGod: tenGod(dayMaster, fourPillars.hour.stemIndex),
                hiddenStems: hiddenStemsWithTenGod(dayMaster, fourPillars.hour.branchIndex),
            },
        };
    }

    // ---------------------------------------------------------------
    // Phase 3: 五行強弱 (day master strength) — a deliberately SIMPLIFIED,
    // direction-only assessment (偏強/中和/偏弱), not a precise 用神
    // determination (see bazi-plan.md's risk section for why: true 用神
    // analysis needs seasonal nuance and combination/clash rules that are
    // genuinely contested between schools).
    //
    // Method: every stem across the chart (year/month/hour stems, plus the
    // hidden stems of all four branches) is classified as either
    // supporting the day master (same element, or generates the day
    // master) or draining it (day master generates it, day master
    // overcomes it, or it overcomes the day master). The month branch's
    // hidden stems get double weight, reflecting the traditional principle
    // that "得令" (being born in a supportive season) is the single
    // biggest factor in a day master's strength — everything else is
    // weighted equally. The day stem itself is the reference and isn't
    // scored against itself.
    // ---------------------------------------------------------------
    function isSupportive(dayMasterStemIndex, otherStemIndex) {
        const meEl = stemElement(dayMasterStemIndex);
        const otherEl = stemElement(otherStemIndex);
        return otherEl === meEl || (otherEl + 1) % 5 === meEl; // same element, or generates me
    }

    function computeDayMasterStrength(fourPillars) {
        const dm = fourPillars.day.stemIndex;
        let supportScore = 0;
        let drainScore = 0;
        function tally(stemIdx, weight) {
            if (isSupportive(dm, stemIdx)) supportScore += weight;
            else drainScore += weight;
        }

        tally(fourPillars.year.stemIndex, 1);
        tally(fourPillars.month.stemIndex, 1);
        tally(fourPillars.hour.stemIndex, 1);

        BRANCH_HIDDEN_STEMS[fourPillars.year.branchIndex].forEach(function (s) { tally(s, 1); });
        BRANCH_HIDDEN_STEMS[fourPillars.month.branchIndex].forEach(function (s) { tally(s, 2); }); // 月令，加權
        BRANCH_HIDDEN_STEMS[fourPillars.day.branchIndex].forEach(function (s) { tally(s, 1); });
        BRANCH_HIDDEN_STEMS[fourPillars.hour.branchIndex].forEach(function (s) { tally(s, 1); });

        const total = supportScore + drainScore;
        const supportRatio = total > 0 ? supportScore / total : 0.5;

        // 得令: does the month branch's 本氣 (primary hidden stem) support
        // the day master? This is the traditionally single most-cited
        // factor, surfaced separately so the UI can call it out on its own.
        const monthPrimaryStem = BRANCH_HIDDEN_STEMS[fourPillars.month.branchIndex][0];
        const isSeasonallySupported = isSupportive(dm, monthPrimaryStem);

        let verdict;
        if (supportRatio >= 0.55) verdict = '偏強';
        else if (supportRatio <= 0.45) verdict = '偏弱';
        else verdict = '中和';

        return {
            supportScore: supportScore,
            drainScore: drainScore,
            supportRatio: supportRatio,
            verdict: verdict,
            isSeasonallySupported: isSeasonallySupported,
        };
    }

    // ---------------------------------------------------------------
    // Phase 4: 大運 (Luck Pillars) — pure integer stepping through the
    // 60-cycle from the month pillar; the astronomy-dependent "起運" age
    // and direction come from BaziCalendar.computeQiyun (js/bazi-calendar.js)
    // and are passed in here as { forward, ageYears }.
    // ---------------------------------------------------------------
    function ganzhi60IndexFromStemBranch(stemIndex, branchIndex) {
        for (let i = 0; i < 60; i++) {
            if (i % 10 === stemIndex && i % 12 === branchIndex) return i;
        }
        throw new Error('ganzhi60IndexFromStemBranch: no valid combo for stem=' + stemIndex + ' branch=' + branchIndex);
    }

    // Generates `count` (default 8, covering 80 years) Luck Pillars,
    // stepping +1 (順排) or -1 (逆排) through the 60-cycle from the month
    // pillar, each one 10 years long starting at the given 起運 age.
    function computeDaYunPillars(monthPillar, qiyun, count) {
        const n = count || 8;
        const monthIndex60 = ganzhi60IndexFromStemBranch(monthPillar.stemIndex, monthPillar.branchIndex);
        const step = qiyun.forward ? 1 : -1;
        const pillars = [];
        for (let k = 0; k < n; k++) {
            const idx = ((monthIndex60 + step * (k + 1)) % 60 + 60) % 60;
            pillars.push({
                stemIndex: idx % 10,
                branchIndex: idx % 12,
                stem: HEAVENLY_STEMS[idx % 10],
                branch: EARTHLY_BRANCHES[idx % 12],
                ganzhi: HEAVENLY_STEMS[idx % 10] + EARTHLY_BRANCHES[idx % 12],
                startAge: qiyun.ageYears + k * 10,
                endAge: qiyun.ageYears + (k + 1) * 10,
            });
        }
        return pillars;
    }

    // 流年: the sexagenary pillar of any given Gregorian year, using the
    // same 立春-anchored year-boundary rule as the main year pillar (a
    // "流年" for BaZi purposes is really just "what would this year's
    // year-pillar be if you were born in it") — reuses
    // yearGanZhiFromNumber-equivalent logic via BaziCalendar, so this
    // function just wraps that for convenience alongside the other
    // BaziPlacement helpers used by the UI.
    function liuNianPillar(year) {
        const stemIndex = ((year - 4) % 10 + 10) % 10;
        const branchIndex = ((year - 4) % 12 + 12) % 12;
        return {
            stemIndex: stemIndex,
            branchIndex: branchIndex,
            stem: HEAVENLY_STEMS[stemIndex],
            branch: EARTHLY_BRANCHES[branchIndex],
            ganzhi: HEAVENLY_STEMS[stemIndex] + EARTHLY_BRANCHES[branchIndex],
            year: year,
        };
    }

    // ---------------------------------------------------------------
    // Phase 6: 格局判斷 (八格 Pattern Determination) — the eight most
    // common, least-disputed patterns, derived from the month branch's
    // hidden stems and which of them "透干" (also appears as one of the
    // year/month/hour stems). Method (cross-checked against published
    // sources on 月令取格):
    //   1. 先看月支「本氣」是否透干（出現在年干/月干/時干之一）；若是，
    //      以本氣之十神定格局。
    //   2. 若本氣未透，改看月支所藏的其餘（中氣/餘氣）是否透干；若有，
    //      以該透干之神定格局（若多個都透，取藏干表中排序較前、較主要
    //      的那一個）。
    //   3. 若一個都沒透，仍以本氣為格局依據（"不透亦用本氣"）。
    // 十神 -> 格局名稱對照：正官->正官格, 七殺->七殺格, 正財->正財格,
    // 偏財->偏財格, 食神->食神格, 傷官->傷官格, 正印->正印格, 偏印->偏印格。
    // 比肩/劫財本身不屬於這八格，但為了讓每種日主都有結果而非留白，這裡
    // 用同樣傳統、爭議很小的建祿格（比肩坐月令）／羊刃格・月劫格（劫財
    // 坐月令，陽干稱羊刃、陰干傳統稱月劫）標示。更進階、流派分歧更大的
    // 特殊格局（從格、化氣格等）不在這次範圍內，per bazi-plan.md。
    // ---------------------------------------------------------------
    const PATTERN_NAMES = {
        '正官': '正官格',
        '七殺': '七殺格',
        '正財': '正財格',
        '偏財': '偏財格',
        '食神': '食神格',
        '傷官': '傷官格',
        '正印': '正印格',
        '偏印': '偏印格',
    };

    function determineGeJuBasis(fourPillars) {
        const monthBranchIndex = fourPillars.month.branchIndex;
        const hidden = BRANCH_HIDDEN_STEMS[monthBranchIndex];
        const transparentStems = [fourPillars.year.stemIndex, fourPillars.month.stemIndex, fourPillars.hour.stemIndex];

        for (let i = 0; i < hidden.length; i++) {
            if (transparentStems.indexOf(hidden[i]) !== -1) {
                return { stemIndex: hidden[i], isPrimary: i === 0, transparent: true };
            }
        }
        // 都沒透干，仍以本氣為依據
        return { stemIndex: hidden[0], isPrimary: true, transparent: false };
    }

    function computeGeJu(fourPillars) {
        const dm = fourPillars.day.stemIndex;
        const monthBranchIndex = fourPillars.month.branchIndex;
        const hidden = BRANCH_HIDDEN_STEMS[monthBranchIndex];
        const basis = determineGeJuBasis(fourPillars);
        const god = tenGod(dm, basis.stemIndex);

        let patternName;
        if (PATTERN_NAMES[god]) {
            patternName = PATTERN_NAMES[god];
        } else if (god === '比肩') {
            patternName = '建祿格';
        } else if (god === '劫財') {
            patternName = stemIsYang(dm) ? '羊刃格' : '月劫格';
        } else {
            throw new Error('computeGeJu: unreachable ten-god value ' + god);
        }

        return {
            patternName: patternName,
            basisStemIndex: basis.stemIndex,
            basisStem: HEAVENLY_STEMS[basis.stemIndex],
            basisTenGod: god,
            basisIsPrimary: basis.isPrimary,
            basisIsTransparent: basis.transparent,
            monthBranchHiddenStems: hidden.slice(),
        };
    }

    const api = {
        computeTenGods: computeTenGods,
        computeDayMasterStrength: computeDayMasterStrength,
        computeDaYunPillars: computeDaYunPillars,
        liuNianPillar: liuNianPillar,
        computeGeJu: computeGeJu,
        tenGod: tenGod,
        stemElement: stemElement,
        stemIsYang: stemIsYang,
        ELEMENT_NAMES: ELEMENT_NAMES,
        BRANCH_HIDDEN_STEMS: BRANCH_HIDDEN_STEMS,
        HEAVENLY_STEMS: HEAVENLY_STEMS,
        EARTHLY_BRANCHES: EARTHLY_BRANCHES,
        _internal: {
            hiddenStemsWithTenGod: hiddenStemsWithTenGod,
            TEN_GOD_NAMES: TEN_GOD_NAMES,
            isSupportive: isSupportive,
            ganzhi60IndexFromStemBranch: ganzhi60IndexFromStemBranch,
            determineGeJuBasis: determineGeJuBasis,
            PATTERN_NAMES: PATTERN_NAMES,
        },
    };

    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    if (typeof root !== 'undefined') root.BaziPlacement = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
