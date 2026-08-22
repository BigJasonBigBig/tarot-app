// -----------------------------------------------------------------------
// BaZi (八字/四柱推命) — the four pillars (年柱/月柱/日柱/時柱).
//
// Unlike Zi Wei Dou Shu (js/ziwei-lunar.js), BaZi does NOT use the lunar
// calendar at all: the year boundary is the solar term 立春 (Start of
// Spring, sun ecliptic longitude 315 deg), the month boundary is one of
// the 12 "節" solar terms (each 30 deg apart, starting at 315 deg), and
// the day/hour pillars are a continuous sexagenary (60-cycle) count that
// doesn't depend on the calendar at all. This is why BaZi needs its own
// calendar module instead of reusing ziwei-lunar.js.
//
// All boundary comparisons use the *exact* astronomical instant (not a
// calendar-day rounding like the lunar month boundaries in ziwei-lunar.js)
// since solar-term boundaries are conventionally precise to the
// hour/minute in real almanacs and BaZi charts are sensitive to exact
// birth time near a boundary.
// -----------------------------------------------------------------------
(function (root) {
    'use strict';

    const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const CST_OFFSET_MS = 8 * 3600 * 1000;
    function cstDayKey(jsDate) {
        const shifted = new Date(jsDate.getTime() + CST_OFFSET_MS);
        return Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth(), shifted.getUTCDate());
    }

    function elonAt(Astronomy, time) {
        const p = Astronomy.SunPosition(time);
        return p.elon !== undefined ? p.elon : Astronomy.EclipticLongitude(Astronomy.Body.Sun, time);
    }

    // Forward-only, small-window search for the sun crossing a given
    // ecliptic longitude on/before jsDate, stepping through ~200-day
    // windows. Same safety pattern proven in js/ziwei-lunar.js: backward
    // searches and large single windows are both unreliable in this build
    // of the Astronomy library.
    function solarLongitudeOnOrBefore(Astronomy, jsDate, targetLon) {
        const WINDOW_DAYS = 200;
        let t = Astronomy.MakeTime(new Date(jsDate.getTime() - 400 * 24 * 3600 * 1000));
        let found = null;
        for (let i = 0; i < 8; i++) {
            const hit = Astronomy.SearchSunLongitude(targetLon, t, WINDOW_DAYS);
            if (hit && hit.date.getTime() <= jsDate.getTime()) {
                found = hit;
                t = Astronomy.MakeTime(new Date(hit.date.getTime() + 24 * 3600 * 1000));
            } else if (hit) {
                break;
            } else {
                t = Astronomy.MakeTime(new Date(t.date.getTime() + WINDOW_DAYS * 24 * 3600 * 1000));
            }
        }
        if (!found) throw new Error('solarLongitudeOnOrBefore: not found for ' + jsDate.toISOString() + ' target=' + targetLon);
        return found;
    }

    // The 12 "節" (jie) solar terms, in order starting at 立春 (315 deg),
    // each 30 deg apart, and the month branch each one starts. Verified:
    // 立春(315)->寅, 驚蟄(345)->卯, 清明(15)->辰, 立夏(45)->巳,
    // 芒種(75)->午, 小暑(105)->未, 立秋(135)->申, 白露(165)->酉,
    // 寒露(195)->戌, 立冬(225)->亥, 大雪(255)->子, 小寒(285)->丑.
    const JIE_TARGETS = [315, 345, 15, 45, 75, 105, 135, 165, 195, 225, 255, 285];
    const JIE_TO_MONTH_BRANCH = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1];

    // Month branch directly from the sun's longitude at the exact instant
    // — no search needed, just bin the longitude into one of the 12
    // 30-degree slices starting at 315.
    function monthBranchFromElon(elon) {
        const offset = ((elon - 315) % 360 + 360) % 360;
        return JIE_TO_MONTH_BRANCH[Math.floor(offset / 30)];
    }

    // Which of the 12 JIE_TARGETS slices the given longitude falls in
    // (0 = just passed 立春/315, 1 = just passed 驚蟄/345, ... 11 = just
    // passed 小寒/285). Used to find the two 節 boundaries immediately
    // surrounding a given instant (for 大運 起運 calculations).
    function jieBinIndex(elon) {
        const offset = ((elon - 315) % 360 + 360) % 360;
        return Math.floor(offset / 30);
    }

    // Next 節 crossing at/after the given AstroTime, using the same safe
    // ~200-day windowed forward stepping as solarLongitudeOnOrBefore.
    //
    // IMPORTANT: unlike js/ziwei-lunar.js's nextNewMoon/nextWinterSolstice
    // (which nudge the search start forward by a day because *those*
    // callers always pass in an AstroTime that's already essentially AT a
    // matching event, and need the *next* one), this function's only
    // caller (起運/qiyunAgeYears) passes in the birth instant, which is
    // essentially never exactly at a jie boundary — nudging forward by a
    // full day here would overshoot and skip an imminent crossing (e.g. a
    // birth just hours before a 節 boundary), landing on the SAME target
    // longitude's occurrence a full year later instead. Confirmed by a
    // failing test: a 1990-03-05 birth (elon 344.5, ~1 day before 驚蟄)
    // returned an "起運" age of ~122 years before this was fixed to search
    // from the birth instant itself rather than birth+1 day.
    function solarLongitudeAfter(Astronomy, afterTime, targetLon) {
        const WINDOW_DAYS = 200;
        let t = afterTime;
        for (let i = 0; i < 4; i++) {
            const hit = Astronomy.SearchSunLongitude(targetLon, t, WINDOW_DAYS);
            if (hit) return hit;
            t = Astronomy.MakeTime(new Date(t.date.getTime() + WINDOW_DAYS * 24 * 3600 * 1000));
        }
        throw new Error('solarLongitudeAfter: not found after ' + afterTime.date.toISOString() + ' target=' + targetLon);
    }

    // 起運 (age at which the first 大運/Luck Pillar begins): the distance
    // in days between birth and the nearest 節 boundary — forward (next
    // 節 ahead) if 順排, backward (previous 節 behind) if 逆排 — converted
    // to age via the standard "三天一歲" (3 days = 1 year) rule. Returns a
    // continuous fractional-year age; the caller can further break it into
    // years/months/days for display.
    function qiyunAgeYears(Astronomy, birthTime, elonAtBirth, forward) {
        const binIdx = jieBinIndex(elonAtBirth);
        let distanceDays;
        if (forward) {
            const nextTarget = JIE_TARGETS[(binIdx + 1) % 12];
            const nextHit = solarLongitudeAfter(Astronomy, birthTime, nextTarget);
            distanceDays = (nextHit.date.getTime() - birthTime.date.getTime()) / (24 * 3600 * 1000);
        } else {
            const prevTarget = JIE_TARGETS[binIdx];
            const prevHit = solarLongitudeOnOrBefore(Astronomy, birthTime.date, prevTarget);
            distanceDays = (birthTime.date.getTime() - prevHit.date.getTime()) / (24 * 3600 * 1000);
        }
        return distanceDays / 3;
    }

    // Standard sexagenary year stem/branch from a Gregorian year number
    // (anchored the same way as js/ziwei-placement.js's yearGanZhi: 1984
    // is a well-known 甲子 year).
    function yearGanZhiFromNumber(year) {
        const stemIndex = ((year - 4) % 10 + 10) % 10;
        const branchIndex = ((year - 4) % 12 + 12) % 12;
        return { stemIndex: stemIndex, branchIndex: branchIndex };
    }

    // 五虎遁 (year stem -> stem assigned to the 寅 month) — identical table
    // to js/ziwei-placement.js's yinPalaceStemIndex, duplicated here so
    // this module has no dependency on ziwei-placement.js.
    function yinMonthStemIndex(yearStemIndex) {
        return (2 * (yearStemIndex % 5) + 2) % 10;
    }
    function monthStemAtBranch(monthBranchIndex, yinStemIdx) {
        const stepsFromYin = ((monthBranchIndex - 2) % 12 + 12) % 12;
        return (yinStemIdx + stepsFromYin) % 10;
    }

    // 五鼠遁 (day stem -> stem assigned to the 子 hour) — verified against
    // the standard mnemonic "甲己還加甲，乙庚丙作初，丙辛從戊起，丁壬庚子居，
    // 戊癸何方發，壬子是真途".
    function ziHourStemIndex(dayStemIndex) {
        return (2 * (dayStemIndex % 5)) % 10;
    }
    function hourToBranchIndex(hour) {
        const h = ((hour % 24) + 24) % 24;
        return Math.floor(((h + 1) % 24) / 2);
    }

    // Julian Day Number for a proleptic-Gregorian calendar date (integer
    // Y/M/D, no time-of-day) — the standard Fliegel & Van Flandern
    // algorithm.
    function jdnFromYMD(Y, M, D) {
        const a = Math.floor((14 - M) / 12);
        const y = Y + 4800 - a;
        const m = M + 12 * a - 3;
        return D + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4)
            - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    }

    // Day-pillar sexagenary index = (JDN + 49) % 60 — calibrated and
    // cross-checked against two independently published reference dates:
    // 2024-01-01 = 甲子日 (index 0), and 2000-01-01 = 戊午日 (index 54).
    // Both agree exactly with offset 49, which is strong evidence the
    // formula (and the assumed civil day, see below) is correct.
    const DAY_PILLAR_JDN_OFFSET = 49;

    // Which calendar day "counts" for the day pillar, applying the
    // mainstream "隔夜晚子時" convention: the day column already advances
    // to the *next* calendar day once local time reaches 23:00 (the start
    // of 子時), rather than waiting for midnight. This is documented as
    // the mainstream convention among modern software (a rival "早晚子時同
    //日" convention exists but is less common) — see bazi-plan.md.
    function effectiveDayForDayPillar(year, month, day, hour) {
        if (hour < 23) return { year: year, month: month, day: day };
        // Roll forward one calendar day using a real Date object so
        // month/year rollovers (e.g. Dec 31 23:xx -> Jan 1) are handled
        // correctly without reimplementing calendar math.
        const d = new Date(Date.UTC(year, month - 1, day + 1, 12, 0, 0));
        return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
    }

    function dayPillarIndex(year, month, day, hour) {
        const eff = effectiveDayForDayPillar(year, month, day, hour);
        const jdn = jdnFromYMD(eff.year, eff.month, eff.day);
        return ((jdn + DAY_PILLAR_JDN_OFFSET) % 60 + 60) % 60;
    }

    // 立春 instant for a given Gregorian calendar year, searched forward
    // from a safely-early anchor (mid-January) within the year.
    function lichunOfYear(Astronomy, year) {
        const anchor = new Date(Date.UTC(year, 0, 15, 0, 0, 0));
        const t = Astronomy.MakeTime(anchor);
        const hit = Astronomy.SearchSunLongitude(315, t, 60);
        if (!hit) throw new Error('lichunOfYear: not found for year ' + year);
        return hit;
    }

    // Public: full four-pillar computation. `birth` = { year, month, day,
    // hour } in solar (Gregorian) terms, hour 0-23 local birth time
    // (minutes aren't needed at the precision this tool targets).
    function computeFourPillars(Astronomy, birth) {
        const birthInstant = new Date(Date.UTC(birth.year, birth.month - 1, birth.day, birth.hour, birth.minute || 0, 0));
        const birthTime = Astronomy.MakeTime(birthInstant);
        const elon = elonAt(Astronomy, birthTime);

        // --- Year pillar: 立春-bounded ---
        const lichunThisCalendarYear = lichunOfYear(Astronomy, birth.year);
        const baziYear = (birthInstant.getTime() >= lichunThisCalendarYear.date.getTime()) ? birth.year : birth.year - 1;
        const yearGZ = yearGanZhiFromNumber(baziYear);

        // --- Month pillar: 節-bounded, direct from the sun's longitude ---
        const monthBranchIndex = monthBranchFromElon(elon);
        const yinStemIdx = yinMonthStemIndex(yearGZ.stemIndex);
        const monthStemIndex = monthStemAtBranch(monthBranchIndex, yinStemIdx);

        // --- Day pillar: continuous 60-cycle, JDN-based ---
        const dayIdx = dayPillarIndex(birth.year, birth.month, birth.day, birth.hour);
        const dayStemIndex = dayIdx % 10;
        const dayBranchIndex = dayIdx % 12;

        // --- Hour pillar: 12 shichen branch + 五鼠遁 stem ---
        const hourBranchIndex = hourToBranchIndex(birth.hour);
        const ziStemIdx = ziHourStemIndex(dayStemIndex);
        const hourStemIndex = (ziStemIdx + hourBranchIndex) % 10;

        function pillar(stemIndex, branchIndex) {
            return {
                stemIndex: stemIndex,
                branchIndex: branchIndex,
                stem: HEAVENLY_STEMS[stemIndex],
                branch: EARTHLY_BRANCHES[branchIndex],
                ganzhi: HEAVENLY_STEMS[stemIndex] + EARTHLY_BRANCHES[branchIndex],
            };
        }

        return {
            baziYear: baziYear,
            elonAtBirth: elon,
            birthTime: birthTime, // AstroTime, needed by computeQiyun for 大運 起運
            year: pillar(yearGZ.stemIndex, yearGZ.branchIndex),
            month: pillar(monthStemIndex, monthBranchIndex),
            day: pillar(dayStemIndex, dayBranchIndex),
            hour: pillar(hourStemIndex, hourBranchIndex),
        };
    }

    // Public: 起運 direction + age, given a computeFourPillars() result and
    // whether the person is male. Direction rule (verified mnemonic):
    // 陽年男/陰年女 -> 順排 (forward through the 60-cycle from the month
    // pillar); 陰年男/陽年女 -> 逆排 (backward).
    function computeQiyun(Astronomy, fourPillarsResult, isMale) {
        const yearStemIsYang = fourPillarsResult.year.stemIndex % 2 === 0;
        const forward = yearStemIsYang === isMale;
        const ageYears = qiyunAgeYears(Astronomy, fourPillarsResult.birthTime, fourPillarsResult.elonAtBirth, forward);
        return { forward: forward, ageYears: ageYears };
    }

    const api = {
        computeFourPillars: computeFourPillars,
        computeQiyun: computeQiyun,
        HEAVENLY_STEMS: HEAVENLY_STEMS,
        EARTHLY_BRANCHES: EARTHLY_BRANCHES,
        _internal: {
            cstDayKey: cstDayKey,
            elonAt: elonAt,
            solarLongitudeOnOrBefore: solarLongitudeOnOrBefore,
            monthBranchFromElon: monthBranchFromElon,
            yearGanZhiFromNumber: yearGanZhiFromNumber,
            yinMonthStemIndex: yinMonthStemIndex,
            monthStemAtBranch: monthStemAtBranch,
            ziHourStemIndex: ziHourStemIndex,
            hourToBranchIndex: hourToBranchIndex,
            jdnFromYMD: jdnFromYMD,
            dayPillarIndex: dayPillarIndex,
            effectiveDayForDayPillar: effectiveDayForDayPillar,
            lichunOfYear: lichunOfYear,
            jieBinIndex: jieBinIndex,
            solarLongitudeAfter: solarLongitudeAfter,
            qiyunAgeYears: qiyunAgeYears,
            DAY_PILLAR_JDN_OFFSET: DAY_PILLAR_JDN_OFFSET,
            JIE_TARGETS: JIE_TARGETS,
            JIE_TO_MONTH_BRANCH: JIE_TO_MONTH_BRANCH,
        },
    };

    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    if (typeof root !== 'undefined') root.BaziCalendar = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
