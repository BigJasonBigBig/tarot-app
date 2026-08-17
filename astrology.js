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
    { name: '牡羊座', en: 'Aries', symbol: '♈\uFE0E', element: '火', trait: '衝勁十足、直接坦率，凡事喜歡搶頭香、當開路先鋒，速度與行動力永遠優先於長考' },
    { name: '金牛座', en: 'Taurus', symbol: '♉\uFE0E', element: '土', trait: '穩定務實、重視感官享受與安全感，步調不疾不徐，一旦決定方向就很難被輕易動搖' },
    { name: '雙子座', en: 'Gemini', symbol: '♊\uFE0E', element: '風', trait: '好奇多變、思路敏捷，熱愛交流資訊與嘗試新鮮事，容易同時對很多事情感興趣' },
    { name: '巨蟹座', en: 'Cancer', symbol: '♋\uFE0E', element: '水', trait: '重感情、顧家戀舊，內心敏感細膩，習慣先照顧好身邊親近的人，才有安全感做其他事' },
    { name: '獅子座', en: 'Leo', symbol: '♌\uFE0E', element: '火', trait: '自信大方、渴望被看見，帶有天生的舞台魅力，喜歡在自己在乎的領域裡發光發熱' },
    { name: '處女座', en: 'Virgo', symbol: '♍\uFE0E', element: '土', trait: '講求細節與效率，追求完美與實用並重，習慣先分析清楚、抓出問題再行動' },
    { name: '天秤座', en: 'Libra', symbol: '♎\uFE0E', element: '風', trait: '重視和諧與美感，擅長權衡與協調，做決定前常常會多方考量各種立場' },
    { name: '天蠍座', en: 'Scorpio', symbol: '♏\uFE0E', element: '水', trait: '情感濃烈深沉，洞察力強、不輕易顯露底牌，一旦投入就會全心全意、不留餘地' },
    { name: '射手座', en: 'Sagittarius', symbol: '♐\uFE0E', element: '火', trait: '樂觀自由、嚮往遠方，喜歡探索與哲思，討厭被瑣碎細節或框架綁住' },
    { name: '摩羯座', en: 'Capricorn', symbol: '♑\uFE0E', element: '土', trait: '腳踏實地、目標導向，願意為長期成果努力，習慣先把責任扛起來再談其他' },
    { name: '水瓶座', en: 'Aquarius', symbol: '♒\uFE0E', element: '風', trait: '獨立特立、重視理念，關心群體與未來，喜歡用跟別人不一樣的角度看事情' },
    { name: '雙魚座', en: 'Pisces', symbol: '♓\uFE0E', element: '水', trait: '富同理心與想像力，容易與他人情緒共感，感受細膩但也容易被情緒牽著走' }
];

const PLANETS_META = [
    { body: 'Sun', label: '太陽', symbol: '☉\uFE0E', meaning: '太陽代表你最核心的自我認同、生命力來源與想要被世界看見的樣子，是整張命盤裡最基本的「主角能量」，也象徵你有意識想要活成的那個人。', retrogradeCapable: false, color: '#f5b942' },
    { body: 'Moon', label: '月亮', symbol: '☽\uFE0E', meaning: '月亮反映你最私密的情緒反應模式、內在安全感的來源，以及你在放鬆或壓力之下最真實的直覺反應，是外人不容易一眼看穿、卻主宰你日常心情起伏的那一面。', retrogradeCapable: false, color: '#b8c4d9' },
    { body: 'Mercury', label: '水星', symbol: '☿\uFE0E', meaning: '水星掌管你接收與處理資訊的方式、說話與書寫的風格，以及你如何學習新事物、與人交換想法——簡單說，就是你「腦袋運作」的方式。', retrogradeCapable: true, color: '#f97316' },
    { body: 'Venus', label: '金星', symbol: '♀\uFE0E', meaning: '金星描述你在感情與美感上的品味、什麼樣的人事物容易吸引你，以及你表達愛意、享受生活的方式，也影響你如何經營人際關係中的和諧感。', retrogradeCapable: true, color: '#f472b6' },
    { body: 'Mars', label: '火星', symbol: '♂\uFE0E', meaning: '火星代表你的行動力、慾望驅動與面對衝突時的本能反應，是你主動出擊、爭取想要的東西時展現出來的原始能量。', retrogradeCapable: true, color: '#ef4444' },
    { body: 'Jupiter', label: '木星', symbol: '♃\uFE0E', meaning: '木星象徵擴張、幸運與信念系統，代表你在哪些領域容易得到機會與成長，也反映你對人生意義與價值觀的整體樂觀程度。', retrogradeCapable: true, color: '#a78bfa' },
    { body: 'Saturn', label: '土星', symbol: '♄\uFE0E', meaning: '土星代表限制、責任與需要長期努力才能修煉出來的課題，這裡常常是你最容易自我要求、也最容易感到壓力的地方，卻也是累積扎實成果的關鍵。', retrogradeCapable: true, color: '#94a3b8' },
    { body: 'Uranus', label: '天王星', symbol: '♅\uFE0E', meaning: '天王星帶來突破、獨立與求新求變的衝動，這個位置容易展現出不按牌理出牌、渴望自由與革新的一面，有時也會帶來突如其來的轉折。', retrogradeCapable: true, color: '#22d3ee' },
    { body: 'Neptune', label: '海王星', symbol: '♆\uFE0E', meaning: '海王星象徵夢想、靈性直覺與難以言喻的渴望，這裡容易模糊界線、充滿想像力，也可能是你容易理想化、需要學會分辨現實與幻想的領域。', retrogradeCapable: true, color: '#60a5fa' },
    { body: 'Pluto', label: '冥王星', symbol: '♇\uFE0E', meaning: '冥王星代表深層的蛻變力量、隱藏的慾望與生死交關般的課題，這個位置往往牽涉到你最深層、甚至連自己都不容易察覺的心理驅動力。', retrogradeCapable: true, color: '#c0392b' }
];

// Full write-up for each of the 12 houses: the traditional Chinese house
// name (used throughout Chinese-language astrology), a short keyword phrase
// (used inline next to each planet placement), and a longer paragraph (used
// in the standalone "十二宮位詳解" reference section on the natal chart page).
const HOUSE_MEANINGS = [
    {
        number: 1, name: '命宮', keyword: '自我、外在形象與生命起點',
        description: '第一宮從上升星座開始起算，代表你與生俱來的氣質、第一印象、身體活力，以及你面對世界時最直覺的反應方式。這裡幾乎等於「你走進一個房間時，別人對你的第一眼觀感」，也象徵你展開任何新事物時的態度與起手式。'
    },
    {
        number: 2, name: '財帛宮', keyword: '金錢、物質資源與自我價值感',
        description: '第二宮掌管你賺錢與花錢的方式、對物質安全感的需求，以及更深層的「自我價值感」——你怎麼看待自己所擁有的東西，往往也反映你怎麼看待自己這個人。這裡也涉及你重視的價值觀，以及你透過什麼方式讓自己感到穩定踏實。'
    },
    {
        number: 3, name: '兄弟宮', keyword: '溝通、學習與近距離人際',
        description: '第三宮關乎日常的溝通表達、思考方式與資訊吸收的習慣，也代表手足、鄰里、同儕之間比較輕鬆、頻繁的互動。短程旅行、基礎教育、社群媒體上的發言風格，都能在這一宮找到線索——簡單說，這是你「腦袋每天在忙什麼」的宮位。'
    },
    {
        number: 4, name: '田宅宮', keyword: '家庭、根源與內心最私密的角落',
        description: '第四宮是整張星盤最私密的地方，代表原生家庭、成長背景、你對「家」的定義，以及內心最深處那個不對外人展示的自己。它也象徵晚年生活與根基，是你卸下所有社會角色後，真正能休息、被接住的地方。'
    },
    {
        number: 5, name: '子女宮', keyword: '創造力、戀愛與自我展現的舞台',
        description: '第五宮是熱情與樂趣的宮位：戀愛（尤其是曖昧與追求階段）、創作、興趣嗜好、子女，以及任何讓你單純感到「好玩」而去做的事，都屬於這裡。這一宮也考驗你敢不敢冒險表現自己、讓別人看見你的才華與光芒。'
    },
    {
        number: 6, name: '奴僕宮', keyword: '日常工作、健康習慣與服務他人',
        description: '第六宮管的是日復一日的例行公事：工作上的具體執行、身體健康與生活作息、你為他人提供服務或協助的方式。跟代表「事業成就」的第十宮不同，第六宮更貼近每天實際在做的瑣事，也提醒你留意身心是否被過度消耗。'
    },
    {
        number: 7, name: '夫妻宮', keyword: '伴侶關係、合作與一對一的連結',
        description: '第七宮是婚姻、正式合作關係與任何「一對一」連結的宮位，包括商業夥伴與公開的對手。這裡也常被形容為你的「鏡子」——你在親密關係中最容易被對方吸引、或最容易起衝突的特質，往往正是你自己尚未整合的一面。'
    },
    {
        number: 8, name: '疾厄宮', keyword: '共享資源、親密與深層轉化',
        description: '第八宮涉及與他人共享的資源（伴侶財產、遺產、稅務、貸款），以及更深層的心理與親密議題：性、死亡與重生、無法輕易說出口的恐懼與慾望。這是一個要求誠實面對自己陰影面的宮位，代表脫胎換骨般的轉化過程。'
    },
    {
        number: 9, name: '遷移宮', keyword: '信念、遠行與更高層次的學習',
        description: '第九宮代表你對世界的整體信念系統：高等教育、哲學、宗教信仰、跨文化經驗與長途旅行都屬於這裡。它問的是更大的問題——「人生的意義是什麼」「我相信什麼」，也象徵你如何拓展視野、走出熟悉的舒適圈。'
    },
    {
        number: 10, name: '官祿宮', keyword: '事業成就、社會地位與公眾形象',
        description: '第十宮座落在天頂附近，是你在社會上被看見的樣子：職涯成就、公眾聲望、權威地位，以及你希望被世人記住的形象。這裡也常與人生中的「權威人物」有關（例如上司、父母中扮演規範角色的一方），代表你如何回應社會對你的期待。'
    },
    {
        number: 11, name: '福德宮', keyword: '朋友圈、社群與未來願景',
        description: '第十一宮掌管友誼、社群歸屬感、你參與的團體與組織，以及對未來的願景與夢想。跟第五宮的個人式戀愛玩樂不同，第十一宮更關乎「志同道合的一群人」——你為了共同理念而聚在一起、彼此扶持的方式。'
    },
    {
        number: 12, name: '玄秘宮', keyword: '潛意識、獨處與尚未整合的課題',
        description: '第十二宮是星盤中最隱晦、最向內收的一宮：潛意識、夢境、獨處的需求、尚未被自己看見或接納的課題，都藏在這裡。它也與靈性修行、幕後工作、需要放下自我的場合（如醫院、靈修中心）有關，象徵在放手與交託中獲得的療癒。'
    }
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

// Major aspects only (the ones that actually read clearly on a small wheel).
// "tone" drives the line color when the wheel is drawn: soft = generally
// easeful (blue), hard = generally tense (red), neutral = conjunction,
// drawn faint since the two bodies already sit right next to each other.
const ASPECT_DEFS = [
    { name: 'conjunction', label: '合相', angle: 0, orb: 8, tone: 'neutral' },
    { name: 'sextile', label: '六分相', angle: 60, orb: 5, tone: 'soft' },
    { name: 'square', label: '四分相', angle: 90, orb: 6, tone: 'hard' },
    { name: 'trine', label: '三分相', angle: 120, orb: 6, tone: 'soft' },
    { name: 'opposition', label: '對分相', angle: 180, orb: 7, tone: 'hard' }
];

// Finds every major aspect between the given planets (any objects with a
// `.body` id and `.elon` ecliptic longitude — works for the natal chart's
// planet list as-is).
function computeAspects(planets) {
    const results = [];
    for (let i = 0; i < planets.length; i++) {
        for (let j = i + 1; j < planets.length; j++) {
            const a = planets[i], b = planets[j];
            let diff = Math.abs(norm360(a.elon - b.elon));
            if (diff > 180) diff = 360 - diff;
            for (const def of ASPECT_DEFS) {
                if (Math.abs(diff - def.angle) <= def.orb) {
                    results.push({ a: a.body, b: b.body, aspect: def.name, label: def.label, tone: def.tone, orb: Math.abs(diff - def.angle) });
                    break; // only the closest-matching aspect per pair
                }
            }
        }
    }
    return results;
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
        ASPECT_DEFS,
        computeNatalChart,
        computeAspects,
        norm360
    };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ZODIAC_SIGNS, PLANETS_META, HOUSE_MEANINGS, CITY_PRESETS, ASPECT_DEFS,
        computeNatalChart, computeAspects, norm360, angleDiff, computeAscendantAndMC, eclipticLongitude
    };
}
