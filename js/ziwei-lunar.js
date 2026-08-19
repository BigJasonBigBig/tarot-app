// -----------------------------------------------------------------------
// Solar (Gregorian) <-> Chinese Lunar calendar conversion.
//
// Computed directly from real astronomical events (new moons + the sun's
// ecliptic longitude crossing multiples of 30 degrees) via the Astronomy
// library already bundled for the natal chart feature (assets/js/
// astronomy.browser.min.js), rather than a pre-baked lookup table. This
// keeps the whole site consistent in *how* it does astronomy, and avoids
// the risk of a mistyped/incomplete lookup table.
//
// All calendar-day comparisons are done in China Standard Time (UTC+8),
// since that's the timezone the traditional calendar is defined in.
//
// Algorithm (standard "true new moon + true solar term" method):
//   1. A lunar month starts on the day containing a new moon (CST).
//   2. Walk new moons forward from the one on/before the winter solstice
//      of one year to the one on/before the next winter solstice. That
//      span always contains either 12 or 13 new-moon-to-new-moon months.
//   3. That month is always numbered 11 (子月) by definition.
//   4. If there are 13 months in the span, exactly one of them has no
//      "zhongqi" (a solar term at a multiple of 30 degrees ecliptic
//      longitude) falling inside it — that's the leap month, and it
//      repeats the number of the month before it.
// -----------------------------------------------------------------------
(function (root) {
    'use strict';

    const CST_OFFSET_MS = 8 * 3600 * 1000;

    function cstDayKey(jsDate) {
        const shifted = new Date(jsDate.getTime() + CST_OFFSET_MS);
        return Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth(), shifted.getUTCDate());
    }

    // Finds the new moon (Moon phase = 0 deg) whose CST calendar day is the
    // latest one <= the given jsDate.
    function newMoonOnOrBefore(Astronomy, jsDate) {
        const targetKey = cstDayKey(jsDate);
        // Start the search a little after jsDate so a new moon that lands
        // exactly on jsDate isn't missed by floating point/boundary effects.
        let t = Astronomy.MakeTime(new Date(jsDate.getTime() + 3 * 24 * 3600 * 1000));
        for (let i = 0; i < 4; i++) {
            const nm = Astronomy.SearchMoonPhase(0, t, -40);
            if (!nm) throw new Error('newMoonOnOrBefore: search failed');
            if (cstDayKey(nm.date) <= targetKey) return nm;
            t = Astronomy.MakeTime(new Date(nm.date.getTime() - 1000));
        }
        throw new Error('newMoonOnOrBefore: exceeded iterations');
    }

    // Next new moon strictly after the given AstroTime. If afterTime is
    // itself (at or extremely near) a new moon, SearchMoonPhase would just
    // return that same instant again — so we nudge the search start forward
    // by a day first (a synodic month is ~29.5 days, so this can't skip a
    // real new moon).
    function nextNewMoon(Astronomy, afterTime) {
        const nudged = Astronomy.MakeTime(new Date(afterTime.date.getTime() + 24 * 3600 * 1000));
        return Astronomy.SearchMoonPhase(0, nudged, 40);
    }

    // Winter solstice (sun ecliptic longitude = 270 deg) whose CST calendar
    // day is the latest one <= jsDate. Backward SearchSunLongitude() calls
    // are unreliable in this build of the Astronomy library (they can
    // return null on large negative windows), and even *forward* searches
    // with a window much larger than ~250 days can spuriously return null
    // (an apparent root-bracketing quirk for this near-365-day-period
    // function) — so we search forward in modest, empirically-reliable
    // ~200-day windows and step the window along until we've covered the
    // needed range, rather than one big window.
    function winterSolsticeOnOrBefore(Astronomy, jsDate) {
        const targetKey = cstDayKey(jsDate);
        const WINDOW_DAYS = 200;
        let t = Astronomy.MakeTime(new Date(jsDate.getTime() - 400 * 24 * 3600 * 1000));
        let found = null;
        for (let i = 0; i < 8; i++) {
            const ws = Astronomy.SearchSunLongitude(270, t, WINDOW_DAYS);
            if (ws && cstDayKey(ws.date) <= targetKey) {
                found = ws;
                t = Astronomy.MakeTime(new Date(ws.date.getTime() + 24 * 3600 * 1000));
            } else if (ws) {
                break; // found one, but it's after jsDate — stop, keep `found`
            } else {
                t = Astronomy.MakeTime(new Date(t.date.getTime() + WINDOW_DAYS * 24 * 3600 * 1000));
            }
        }
        if (!found) throw new Error('winterSolsticeOnOrBefore: not found for ' + jsDate.toISOString());
        return found;
    }

    // Next winter solstice strictly after the given AstroTime, using the
    // same safe ~200-day windowed stepping (see winterSolsticeOnOrBefore).
    function nextWinterSolstice(Astronomy, afterTime) {
        const WINDOW_DAYS = 200;
        let t = Astronomy.MakeTime(new Date(afterTime.date.getTime() + 24 * 3600 * 1000));
        for (let i = 0; i < 4; i++) {
            const ws = Astronomy.SearchSunLongitude(270, t, WINDOW_DAYS);
            if (ws) return ws;
            t = Astronomy.MakeTime(new Date(t.date.getTime() + WINDOW_DAYS * 24 * 3600 * 1000));
        }
        throw new Error('nextWinterSolstice: not found after ' + afterTime.date.toISOString());
    }

    // Does the lunar month [startTime, endTime) (as CST calendar days —
    // startTime's CST day up to but not including endTime's CST day)
    // contain a "zhongqi" (sun longitude crossing a multiple of 30 degrees)?
    // We search forward from startTime for the next such crossing and check
    // whether its CST calendar day falls before endTime's CST calendar day.
    //
    // IMPORTANT: this must compare CST calendar DAYS, not raw instants. A
    // zhongqi can fall on the very same CST day as the next new moon (the
    // new moon just happens to land later that same day) — that whole day
    // still belongs to the *next* lunar month under the day-based month
    // boundary rule used everywhere else (see cstDayKey/newMoonOnOrBefore),
    // so a zhongqi on that day does NOT count as "inside" the current
    // month. Comparing raw timestamps instead of days mis-classified real
    // leap months in 2020 and 2025 during testing (off by one month) until
    // this was switched to a day-based comparison.
    function containsZhongqi(Astronomy, startTime, endTime) {
        // Try every 30-degree target; the sun moves through ~30 deg in
        // ~30.4 days on average, so within a ~29.5-day lunar month there is
        // at most one crossing. We search from the sun's longitude at
        // startTime, rounded up to the next multiple of 30.
        const lonAtStart = Astronomy.SunPosition(startTime).elon !== undefined
            ? Astronomy.SunPosition(startTime).elon
            : Astronomy.EclipticLongitude(Astronomy.Body.Sun, startTime);
        let target = Math.ceil(lonAtStart / 30) * 30;
        if (target <= lonAtStart) target += 30;
        target = ((target % 360) + 360) % 360;
        const crossing = Astronomy.SearchSunLongitude(target, startTime, 35);
        if (!crossing) return false;
        return cstDayKey(crossing.date) < cstDayKey(endTime.date);
    }

    // Builds the full list of lunar months (with numbering + leap flag) for
    // the "solstice year" that contains the given jsDate — i.e. from the
    // month-11 new moon on/before the most recent winter solstice through
    // to (not including) the month-11 new moon on/before the next winter
    // solstice.
    function buildSolsticeYearMonths(Astronomy, jsDate) {
        const ws0 = winterSolsticeOnOrBefore(Astronomy, jsDate);
        // If jsDate is itself before the month-11 new moon that anchors
        // ws0's cycle (can't happen since ws0 <= jsDate and the new moon
        // anchoring ws0 is also <= ws0 <= jsDate), so we're safe.
        const ws1 = nextWinterSolstice(Astronomy, ws0);

        const nm0 = newMoonOnOrBefore(Astronomy, ws0.date);
        const nm1 = newMoonOnOrBefore(Astronomy, ws1.date);

        // Walk new moons from nm0 up to and including nm1.
        const newMoons = [nm0];
        let cursor = nm0;
        while (cstDayKey(cursor.date) < cstDayKey(nm1.date)) {
            cursor = nextNewMoon(Astronomy, cursor);
            newMoons.push(cursor);
        }
        const totalMonths = newMoons.length - 1; // 12 or 13

        // Find which interval (if any) has no zhongqi -> that's the leap month.
        let leapIndex = -1; // index into newMoons such that [newMoons[i], newMoons[i+1]) is leap
        if (totalMonths === 13) {
            for (let i = 0; i < totalMonths; i++) {
                if (!containsZhongqi(Astronomy, newMoons[i], newMoons[i + 1])) {
                    leapIndex = i;
                    break;
                }
            }
            if (leapIndex === -1) {
                // Extremely rare edge case guard: fall back to treating the
                // last non-11/12 month as leap rather than throwing, so a
                // single unusual year can't crash the whole feature.
                leapIndex = totalMonths - 1;
            }
        }

        // Assign month numbers: index 0 is always month 11. A leap month
        // must repeat the number of the month immediately BEFORE it (e.g.
        // 閏二月 comes right after 二月 and is also numbered 2) — so the
        // number only advances when the *next* interval isn't the leap one;
        // this naturally also advances right after a leap interval ends.
        const months = [];
        let num = 11;
        for (let i = 0; i < totalMonths; i++) {
            const isLeap = i === leapIndex;
            months.push({
                newMoon: newMoons[i],
                nextNewMoon: newMoons[i + 1],
                monthNumber: num,
                isLeap: isLeap,
            });
            if (i !== leapIndex - 1) {
                num = num === 12 ? 1 : num + 1;
            }
            // (leap month keeps the same `num` for the following iteration,
            // i.e. the month right after a leap month re-uses/continues
            // from the same number the leap month itself carried)
        }
        return months;
    }

    // Public: convert a Gregorian date (year, month 1-12, day) to a lunar
    // date. Returns { year, month, day, isLeapMonth } where `year` is the
    // Gregorian year the lunar year is conventionally labeled with (i.e.
    // the year its Lunar New Year / month-1-day-1 falls in).
    function findMonthContaining(cycleMonths, targetKey) {
        for (const m of cycleMonths) {
            if (targetKey >= cstDayKey(m.newMoon.date) && targetKey < cstDayKey(m.nextNewMoon.date)) {
                return m;
            }
        }
        return null;
    }

    function solarToLunar(Astronomy, year, month, day) {
        const target = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
        const targetKey = cstDayKey(target);
        let cycleMonths = buildSolsticeYearMonths(Astronomy, target);
        let found = findMonthContaining(cycleMonths, targetKey);

        // Edge case: buildSolsticeYearMonths anchors its cycle on the
        // winter solstice on/before `target`. In the narrow window each
        // year between the month-11 (子月) new moon and the *actual*
        // solstice date itself (up to ~29 days), the solstice for the
        // cycle `target` truly belongs to hasn't happened yet as of
        // `target`, so winterSolsticeOnOrBefore(target) returns the
        // *previous* year's solstice and builds the wrong (already-past)
        // cycle, which doesn't reach far enough forward to contain `target`.
        // Retry by nudging the anchor date forward past where that solstice
        // must fall, which makes buildSolsticeYearMonths pick the correct,
        // later cycle that target's month-11 actually belongs to.
        if (!found) {
            const nudgedAnchor = new Date(target.getTime() + 40 * 24 * 3600 * 1000);
            cycleMonths = buildSolsticeYearMonths(Astronomy, nudgedAnchor);
            found = findMonthContaining(cycleMonths, targetKey);
        }
        if (!found) {
            throw new Error('solarToLunar: could not locate month for date ' + target.toISOString());
        }

        const lunarDay = Math.round((targetKey - cstDayKey(found.newMoon.date)) / 86400000) + 1;

        // Determine the label year: the lunar year is named after the
        // Gregorian year its 正月初一 (month 1, day 1) falls in. Months 11
        // and 12 in our cycle belong to the *previous* lunar year's label
        // (they're the "last two months" leading up to the new year), while
        // month 1 onward belongs to the year whose solstice-cycle they're
        // the "front half" of.
        let labelYear;
        if (found.monthNumber === 11 || found.monthNumber === 12) {
            // The month-1 new moon of *this* cycle hasn't happened yet (it's
            // later in `cycleMonths`); the label year is that upcoming
            // month-1's Gregorian year.
            const month1 = cycleMonths.find(m => m.monthNumber === 1 && !m.isLeap);
            labelYear = month1
                ? new Date(month1.newMoon.date.getTime() + CST_OFFSET_MS).getUTCFullYear()
                : year; // defensive fallback, shouldn't be reachable
        } else {
            const month1 = cycleMonths.find(m => m.monthNumber === 1 && !m.isLeap);
            labelYear = month1
                ? new Date(month1.newMoon.date.getTime() + CST_OFFSET_MS).getUTCFullYear()
                : year;
        }

        return {
            year: labelYear,
            month: found.monthNumber,
            day: lunarDay,
            isLeapMonth: found.isLeap,
        };
    }

    const api = { solarToLunar, _internal: { buildSolsticeYearMonths, newMoonOnOrBefore, winterSolsticeOnOrBefore, cstDayKey } };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }
    if (typeof root !== 'undefined') {
        root.ZiweiLunar = api;
    }
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
