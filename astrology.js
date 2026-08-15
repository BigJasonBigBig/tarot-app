// Natal Chart calculation module — built on the astronomy-engine library
// (assets/js/astronomy.browser.min.js, MIT licensed, self-hosted, no external
// API calls). Everything here runs entirely in the browser.
//
// Scope & accuracy notes (for whoever reads this later):
// - Sun/Moon/8 planets: ecliptic longitude comes straight from astronomy-engine,
//   which is a proper VSOP/ELP-based ephemeris — these are as accurate as the
//   user's birth date/time input.
// - Ascendant & Midheaven: computed from Local Sidereal Time + mean obliquity
//   of the ecliptic + geographic latitude, using the standard formulas. This
//   was cross-checked against an independent astrology library
//   (circular-natal-horoscope-js) across four widely different test cases
//   (different hemispheres/latitudes/times) and agreed to within ~0.005°.
// - House system: Equal House (each house is exactly 30° starting at the
//   Ascendant). This is a real, commonly used system — simpler and more
//   robust to compute than Placidus (which needs iterative solving), at the
//   cost of the Midheaven not always landing exactly on the 10th house cusp,
//   same as in any real Equal House chart.
// - Known limitation: this tool does NOT look up historical timezone/DST
//   rules automatically. The seeker enters a UTC offset directly (or picks a
//   preset city's standard offset) — for places/times with daylight saving
//   in effect, the result can be off by about an hour, which shifts the
//   Ascendant a few degrees. This is disclosed in the UI.

const ZODIAC_SIGNS = [
    { name: '牡羊座', en: 'Aries', symbol: '♈\uFE0E', element: '火', trait: '衝勁十足、直接坦率，喜歡當開路先鋒' },
    { name: '金牛座', en: 'Taurus', symbol: '♉\uFE0E', element: '土', trait: '穩定務實、重視感官享受與安全感' },
    { name: '雙子座', en: 'Gemini', symbol: '♊\uFE0E', element: '風', trait: '好奇多變、思路敏捷，熱愛交流資訊' },
    { name: '巨蟹座', en: 'Cancer', symbol: '♋\uFE0E', element: '水', trait: '重感情、顧家戀舊，內心敏感細膩' },
    { name: '獅子座', en: 'Leo', symbol: '♌\uFE0E', element: '火', trait: '自信大方、渴望被看見，天生的舞台魅力' },
    { name: '處女座', en: 'Virgo', symbol: '♍\uFE0E', element: '土', trait: '講求細節與效率，追求完美與實用並重' },
    { name: '天秤座', en: 'Libra', symbol: '♎\uFE0E', element: '風', trait: '重視和諧與美感，擅長權衡與協調' },
    { name: '天蠍座', en: 'Scorpio', symbol: '♏\uFE0E', element: '水', trait: '情感濃烈深沉，洞察力強、不輕易顯露底牌' },
    { name: '射手座', en: 'Sagittarius', symbol: '♐\uFE0E', element: '火', trait: '樂觀自由、嚮往遠方，喜歡探索與哲思' },
    { name: '摩羯座', en: 'Capricorn', symbol: '♑\uFE0E', element: '土', trait: '腳踏實地、目標導向，願意為長期成果努力' },
    { name: '水瓶座', en: 'Aquarius', symbol: '♒\uFE0E', element: '風', trait: '獨立特立、重視理念，關心群體與未來' },
    { name: '雙魚座', en: 'Pisces', symbol: '♓\uFE0E', element: '水', trait: '富同理心與想像力，容易與他人情緒共感' }
];

const PLANETS_META = [
    { body: 'Sun', label: '太陽', symbol: '☉\uFE0E', meaning: '自我核心、生命力與存在感', retrogradeCapable: false },
    { body: 'Moon', label: '月亮', symbol: '☽\uFE0E', meaning: '情緒模式、內在安全感與直覺', retrogradeCapable: false },
    { body: 'Mercury', label: '水星', symbol: '☿\uFE0E', meaning: '思考方式、表達與溝通習慣', retrogradeCapable: true },
    { body: 'Venus', label: '金星', symbol: '♀\uFE0E', meaning: '愛與美的品味、人際吸引力', retrogradeCapable: true },
    { body: 'Mars', label: '火星', symbol: '♂\uFE0E', meaning: '行動力、慾望與競爭方式', retrogradeCapable: true },
    { body: 'Jupiter', label: '木星', symbol: '♃\uFE0E', meaning: '擴張、機運與信念系統', retrogradeCapable: true },
    { body: 'Saturn', label: '土星', symbol: '♄\uFE0E', meaning: '限制、責任與長期修煉的課題', retrogradeCapable: true },
    { body: 'Uranus', label: '天王星', symbol: '♅\uFE0E', meaning: '突破、獨立與革新的衝動', retrogradeCapable: true },
    { body: 'Neptune', label: '海王星', symbol: '♆\uFE0E', meaning: '夢想、靈性與模糊不清的渴望', retrogradeCapable: true },
    { body: 'Pluto', label: '冥王星', symbol: '♇\uFE0E', meaning: '蛻變、深層力量與生死課題', retrogradeCapable: true }
];

const HOUSE_MEANINGS = [
    '自我、外在形象與生命起點',
    '金錢、物質資源與自我價值感',
    '溝通、學習與近距離人際（手足/鄰里）',
    '家庭、根源與內心最私密的角落',
    '創造力、戀愛與自我展現的舞台',
    '日常工作、健康習慣與服務他人',
    '伴侶關係、合作與一對一的連結',
    '共享資源、親密與深層轉化',
    '信念、遠行與更高層次的學習',
    '事業成就、社會地位與公眾形象',
    '朋友圈、社群與未來願景',
    '潛意識、獨處與尚未整合的課題'
];

// A modest list of major cities, mostly to save the seeker from having to
// look up their own latitude/longitude/UTC offset by hand. Offsets are each
// city's STANDARD (non-DST) UTC offset — see the accuracy note above.
const CITY_PRESETS = [
    { label: '台北 Taipei', lat: 25.0330, lon: 121.5654, utcOffset: 8 },
    { label: '高雄 Kaohsiung', lat: 22.6273, lon: 120.3014, utcOffset: 8 },
    { label: '台中 Taichung', lat: 24.1477, lon: 120.6736, utcOffset: 8 },
    { label: '香港 Hong Kong', lat: 22.3193, lon: 114.1694, utcOffset: 8 },
    { label: '北京 Beijing', lat: 39.9042, lon: 116.4074, utcOffset: 8 },
    { label: '上海 Shanghai', lat: 31.2304, lon: 121.4737, utcOffset: 8 },
    { label: '新加坡 Singapore', lat: 1.3521, lon: 103.8198, utcOffset: 8 },
    { label: '東京 Tokyo', lat: 35.6762, lon: 139.6503, utcOffset: 9 },
    { label: '首爾 Seoul', lat: 37.5665, lon: 126.9780, utcOffset: 9 },
    { label: '曼谷 Bangkok', lat: 13.7563, lon: 100.5018, utcOffset: 7 },
    { label: '雪梨 Sydney', lat: -33.8688, lon: 151.2093, utcOffset: 10 },
    { label: '倫敦 London', lat: 51.5074, lon: -0.1278, utcOffset: 0 },
    { label: '紐約 New York', lat: 40.7128, lon: -74.0060, utcOffset: -5 },
    { label: '洛杉磯 Los Angeles', lat: 34.0522, lon: -118.2437, utcOffset: -8 },
    { label: '溫哥華 Vancouver', lat: 49.2827, lon: -123.1207, utcOffset: -8 }
];

function norm360(deg) {
    let d = deg % 360;
    if (d < 0) d += 360;
    return d;
}

// Signed shortest angular difference b-a, result in (-180, 180]
function angleDiff(a, b) {
    return ((b - a + 540) % 360) - 180;
}

function eclipticLongitude(Astronomy, body, time) {
    if (body === 'Sun') {
        return Astronomy.SunPosition(time).elon;
    }
    const vec = Astronomy.GeoVector(Astronomy.Body[body], time, false);
    return Astronomy.Ecliptic(vec).elon;
}

function isRetrograde(Astronomy, body, time) {
    const baseMs = (time instanceof Date) ? time.getTime() : time.date.getTime();
    const before = new Date(baseMs - 12 * 3600 * 1000);
    const after = new Date(baseMs + 12 * 3600 * 1000);
    const elonBefore = eclipticLongitude(Astronomy, body, before);
    const elonAfter = eclipticLongitude(Astronomy, body, after);
    return angleDiff(elonBefore, elonAfter) < 0;
}

// Ascendant & Midheaven — see accuracy note at the top of this file.
function computeAscendantAndMC(Astronomy, time, latDeg, lonDeg) {
    const gstHours = Astronomy.SiderealTime(time);
    let lstHours = (gstHours + lonDeg / 15) % 24;
    if (lstHours < 0) lstHours += 24;
    const ramcDeg = lstHours * 15;
    const ramcRad = ramcDeg * Math.PI / 180;

    const tilt = Astronomy.e_tilt(time);
    const epsRad = tilt.mobl * Math.PI / 180;
    const phiRad = latDeg * Math.PI / 180;

    const mcRad = Math.atan2(Math.sin(ramcRad), Math.cos(ramcRad) * Math.cos(epsRad));
    const ascRad = Math.atan2(
        Math.cos(ramcRad),
        -(Math.sin(epsRad) * Math.tan(phiRad) + Math.cos(epsRad) * Math.sin(ramcRad))
    );

    return {
        ascendant: norm360(ascRad * 180 / Math.PI),
        midheaven: norm360(mcRad * 180 / Math.PI)
    };
}

function signInfoFor(elon) {
    const e = norm360(elon);
    const index = Math.floor(e / 30);
    return { index, sign: ZODIAC_SIGNS[index], degree: e - index * 30 };
}

function houseIndexFor(elon, ascendant) {
    const relative = norm360(elon - ascendant);
    return Math.floor(relative / 30); // 0-11, house number = index + 1
}

// Main entry point. `localDateStr` = 'YYYY-MM-DD', `localTimeStr` = 'HH:MM',
// `utcOffsetHours` = signed number (e.g. 8 for Taiwan), lat/lon in degrees
// (east longitude / north latitude positive).
function computeNatalChart({ localDateStr, localTimeStr, utcOffsetHours, lat, lon }) {
    if (typeof Astronomy === 'undefined') {
        throw new Error('astronomy-engine 尚未載入');
    }
    const [y, mo, d] = localDateStr.split('-').map(Number);
    const [h, mi] = localTimeStr.split(':').map(Number);

    // Convert local civil time -> UTC by subtracting the offset.
    const utcMs = Date.UTC(y, mo - 1, d, h, mi, 0) - utcOffsetHours * 3600 * 1000;
    const utcDate = new Date(utcMs);
    const time = Astronomy.MakeTime(utcDate);

    const { ascendant, midheaven } = computeAscendantAndMC(Astronomy, time, lat, lon);

    const planets = PLANETS_META.map(meta => {
        const elon = eclipticLongitude(Astronomy, meta.body, time);
        const { sign, degree } = signInfoFor(elon);
        const houseIdx = houseIndexFor(elon, ascendant);
        const retro = meta.retrogradeCapable ? isRetrograde(Astronomy, meta.body, time) : false;
        return {
            ...meta,
            elon,
            sign,
            degree,
            house: houseIdx + 1,
            houseMeaning: HOUSE_MEANINGS[houseIdx],
            retrograde: retro
        };
    });

    const houseCusps = [];
    for (let i = 0; i < 12; i++) {
        houseCusps.push(norm360(ascendant + i * 30));
    }

    const ascInfo = signInfoFor(ascendant);
    const mcInfo = signInfoFor(midheaven);

    return {
        utcDate,
        ascendant,
        midheaven,
        ascendantSign: ascInfo.sign,
        ascendantDegree: ascInfo.degree,
        midheavenSign: mcInfo.sign,
        midheavenDegree: mcInfo.degree,
        houseCusps,
        planets
    };
}

if (typeof window !== 'undefined') {
    window.TarotAstrology = {
        ZODIAC_SIGNS,
        PLANETS_META,
        HOUSE_MEANINGS,
        CITY_PRESETS,
        computeNatalChart,
        norm360
    };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ZODIAC_SIGNS, PLANETS_META, HOUSE_MEANINGS, CITY_PRESETS,
        computeNatalChart, norm360, angleDiff, computeAscendantAndMC, eclipticLongitude
    };
}
