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

// Combinatorial planet-in-house interpretations (10 planets x 12 houses = 120
// entries). Each covers what that specific placement means AND something to
// watch out for, layered on top of (not replacing) the planet's general
// meaning, the sign's flavor, and the house's general description.
const PLANET_HOUSE_INSIGHTS = {
    Sun: {
        1: "太陽在命宮，自我意識強烈、渴望被看見，天生就有主角般的存在感，容易展現出自信而有活力的形象。要注意別讓「想被注目」變成過度以自我為中心，忽略了他人的感受。",
        2: "太陽落在財帛宮，自我價值感常與物質成就、賺錢能力連結在一起，工作動力很強，容易把「賺得到錢」當成證明自己的方式。提醒自己，別把自我價值完全綁在銀行存款上。",
        3: "太陽在兄弟宮，你很需要在溝通與學習中展現自己，說話喜歡當主導、樂於分享想法，也常是手足或同儕間受矚目的一個。要留意別因為太想證明自己聰明而不小心蓋過別人的發言。",
        4: "太陽落在田宅宮，家庭與根源是你自我認同很重要的一部分，可能在家中扮演核心角色，或渴望擁有一個能展現自己風格的家。注意別讓「當家作主」的需求變成家人相處的壓力來源。",
        5: "太陽在子女宮，創造力、戀愛與自我表現是你活力的主要出口，很享受站上舞台、談戀愛或展現才華的過程。提醒自己，別把太多自我價值押注在「有沒有被欣賞」上。",
        6: "太陽落在奴僕宮，你的自我價值容易透過日常工作的表現與服務他人來獲得肯定，做事講求紀律，容易把工作等同於自己的價值。要注意別把健康和休息時間都犧牲給了工作。",
        7: "太陽在夫妻宮，你容易透過伴侶關係或公開合作來確立自我認同，甚至有點依賴另一半的肯定才感覺完整。提醒自己，先練習在關係之外也能穩穩地做自己。",
        8: "太陽落在疾厄宮，你的自我認同常與親密關係、共享資源或深層的心理議題糾纏在一起，容易在危機或轉化的時刻更清楚自己是誰。要注意別把太多能量耗在控制或被控制的關係裡。",
        9: "太陽在遷移宮，你透過探索世界、學習新知或建立信念系統來確認自己是誰，渴望遠行、追求更大的人生意義。提醒自己，理念上的堅持有時也要保留給別人說話的空間。",
        10: "太陽落在官祿宮（接近天頂），事業成就與社會地位是你自我價值很重要的來源，天生渴望被世人看見、獲得肯定與權威地位。要留意別讓工作佔據了生活裡其他重要的部分。",
        11: "太陽在福德宮，你透過朋友圈、社群認同或共同理想來確立自我，喜歡在志同道合的團體中發光發熱。提醒自己，也別忘了培養不需要靠團體認同就能安放自己的部分。",
        12: "太陽落在玄秘宮，自我認同常常比較隱晦、不張揚，可能習慣在幕後發光，或需要透過獨處、內省才能真正確認自己是誰。要注意別因為長期壓抑自我而感到隱形或不被看見。",
    },
    Moon: {
        1: "月亮在命宮，情緒起伏容易直接寫在臉上，給人的第一印象帶著明顯的情緒溫度，直覺反應快、容易心軟。要注意別讓一時的情緒波動主導了你給別人的整體形象。",
        2: "月亮落在財帛宮，安全感很大程度來自物質與存款的穩定，情緒容易隨著財務狀況起伏，購物或囤積也可能是安撫情緒的方式。提醒自己，情緒性消費前先緩一緩。",
        3: "月亮在兄弟宮，你的溝通方式偏向感性、重視語氣勝過內容，跟手足或身邊的人聊天時特別在意情感連結。注意別因情緒化的表達方式，讓對方誤解你真正想說的重點。",
        4: "月亮落在田宅宮（廟旺位置），家庭對你的情緒安全感影響極大，需要一個能放鬆、被接住的家，情緒常隨家中氣氛起伏。要留意別把原生家庭的舊情緒模式無意識帶進現在的生活。",
        5: "月亮在子女宮，你在戀愛和創作中特別重感情、容易投入深厚的情感，也可能對子女或創作出來的作品格外呵護。提醒自己，別把太多情緒需求都寄託在單一段感情或一件作品上。",
        6: "月亮落在奴僕宮，情緒狀態和身體健康、日常作息密切相關，工作環境的氣氛會直接影響你的心情。要注意壓力大時容易出現腸胃或睡眠方面的情緒化反應，記得照顧身體。",
        7: "月亮在夫妻宮，你在親密關係中特別需要情感上的呼應與被理解，容易把伴侶當成主要的情緒依靠。提醒自己，親密關係很重要，但也要練習自己安撫自己的情緒。",
        8: "月亮落在疾厄宮，情緒常和親密關係中的深層議題、共享資源或難以言說的恐懼綁在一起，情緒起伏可能比較劇烈、不容易表面化。要留意別把未處理的情緒一次性爆發在關係裡。",
        9: "月亮在遷移宮，你對異國文化、哲學或信念系統有種情感上的嚮往，透過旅行或學習能獲得情緒上的安定感。提醒自己，別把逃避現實的衝動誤認成對遠方的嚮往。",
        10: "月亮落在官祿宮，你的情緒狀態容易隨事業起伏、也可能把照顧他人的特質帶進工作中，適合需要同理心的職業。要注意別把公私領域的情緒界線模糊掉，帶著私人情緒處理公事。",
        11: "月亮在福德宮，你在朋友圈與社群中特別重視情感連結，容易把朋友當成情緒上的家人。提醒自己，友情很珍貴，但別把所有情緒需求都交給團體來滿足。",
        12: "月亮落在玄秘宮，情緒容易深藏在潛意識裡，不容易被自己或他人清楚辨識，可能透過夢境或獨處時才浮現真實感受。要留意長期壓抑情緒可能會以身心症狀的方式反撲，記得找到安全的抒發出口。",
    },
    Mercury: {
        1: "水星在命宮，思考敏捷、反應快，說話直接又快速，給人聰明伶俐的第一印象，也很擅長用言語表達自己。注意別因為講話太快，讓人覺得沒有耐心聽別人說完。",
        2: "水星落在財帛宮，你擅長用腦袋賺錢，適合需要分析、溝通或資訊處理的工作，理財時也習慣先做功課再行動。提醒自己，想太多有時反而錯過行動的時機。",
        3: "水星在兄弟宮（廟旺位置），這是水星最舒服的位置之一，代表天生的好口才、學習能力強，也很享受跟手足或同儕交換想法。要留意別因為話題太多、太快切換，讓深度對話變得表淺。",
        4: "水星落在田宅宮，你習慣在家裡思考或處理資訊，家庭氣氛可能偏向理性溝通、話題不斷。提醒自己，家人相處不只需要邏輯討論，也需要單純的情感陪伴。",
        5: "水星在子女宮，你在戀愛與創作中喜歡用言語調情、透過聰明才智吸引人，也可能透過寫作或教學展現創造力。要注意別把感情關係也當成需要分析、辯論的對象。",
        6: "水星落在奴僕宮，這也是水星擅長的位置，適合需要細膩分析、整理資訊或處理日常事務的工作，做事講求條理。提醒自己，過度分析瑣事有時會讓自己陷入焦慮。",
        7: "水星在夫妻宮，你在關係中很需要能對話、交流想法的伴侶，溝通品質直接影響感情的滿意度。要留意別把每次溝通都變成邏輯辯論，忘了關係也需要情感上的柔軟。",
        8: "水星落在疾厄宮，你擅長深入研究隱藏的議題、心理層面或禁忌話題，思考容易鑽得很深。提醒自己，適時從深層思考中抽離，別讓腦袋一直卡在無法輕易解決的問題上。",
        9: "水星在遷移宮，你對異文化、哲學思想充滿好奇，喜歡透過閱讀、旅行或對話拓展視野。要注意別因為想法太多、太愛辯論，讓自己顯得對他人的信仰不夠尊重。",
        10: "水星落在官祿宮，你適合需要溝通協調、資訊處理或教學能力的職業，邏輯清晰、擅長表達專業意見。提醒自己，向上溝通時多留意語氣，別讓專業感變成咄咄逼人。",
        11: "水星在福德宮，你喜歡跟朋友交流想法、討論理念，社群中常扮演資訊分享者或點子王的角色。要留意別讓太多想法淹沒了真正需要被傾聽的朋友心聲。",
        12: "水星落在玄秘宮，你的思緒容易飄向潛意識、直覺或難以言喻的靈感，也可能有不擅長對外表達內心真正想法的傾向。提醒自己，寫日記或找信任的人聊聊，能幫助釐清腦中模糊的念頭。",
    },
    Venus: {
        1: "金星在命宮，你天生給人溫和有魅力的第一印象，重視和諧的人際互動，外表或氣質上常帶有優雅的特質。要注意別為了維持討喜的形象，而委屈自己真實的想法。",
        2: "金星落在財帛宮（廟旺位置），你對美感和物質享受很有品味，賺錢能力和魅力常互相加分，也容易透過美感相關的事物創造收入。提醒自己，享受生活的同時也要留意消費習慣。",
        3: "金星在兄弟宮，你說話溫和有魅力，很擅長用讓人舒服的方式溝通，跟手足或身邊朋友的關係通常和諧。要留意別為了避免衝突，而一直迴避該說出口的真心話。",
        4: "金星落在田宅宮，你很重視家庭氣氛的和諧與美感，喜歡把家佈置得溫馨舒適，也可能與家人關係親近融洽。提醒自己，真正的和諧有時需要誠實面對問題，而不只是表面平靜。",
        5: "金星在子女宮（廟旺位置），這是金星很舒服的位置，代表戀愛運佳、富有魅力，也在創作與玩樂中特別有美感天賦。要注意別把太多自我價值感建立在「被喜歡」這件事上。",
        6: "金星落在奴僕宮，你希望工作環境和諧美好，也擅長在職場上維持良好人際關係，做事帶點美感或體貼的堅持。提醒自己，別為了討好同事而犧牲自己該有的工作界線。",
        7: "金星在夫妻宮（廟旺位置），這是金星最自在的位置之一，代表你在感情與合作關係中特別懂得經營和諧，渴望被珍視也懂得付出。要留意別為了維持關係表面和平，而壓抑真實需求。",
        8: "金星落在疾厄宮，你在親密關係與深層連結中特別重視情感濃度，容易被強烈的吸引力或激情打動。提醒自己，親密不代表要犧牲界線，健康的親密關係仍需要彼此尊重。",
        9: "金星在遷移宮，你對異國文化、藝術與美學有濃厚興趣，戀愛對象可能來自不同背景，也嚮往透過旅行開拓對美的視野。要注意別把「新鮮感」誤認為真正契合的關係。",
        10: "金星落在官祿宮，你適合與美感、人際協調、藝術相關的職業，工作上容易展現親和力與合作精神。提醒自己，專業場合的和氣待人很好，但該堅持的原則仍要堅持。",
        11: "金星在福德宮，你重視朋友圈裡的情誼與美好氛圍，容易在志同道合的社群中找到歸屬感。要留意別因為太重視被喜歡，而勉強自己迎合團體、失去自己的立場。",
        12: "金星落在玄秘宮，你對愛的體會比較細膩私密，可能傾向默默付出、或透過藝術與靈性活動表達情感。提醒自己，別因害怕受傷而把真心話都藏起來，適度的坦露也是一種親密。",
    },
    Mars: {
        1: "火星在命宮（廟旺位置），行動力十足、個性直接，給人充滿活力、敢衝敢拚的第一印象，遇到挑戰習慣正面迎擊。要注意別讓急躁或衝動，變成不小心傷到身邊的人。",
        2: "火星落在財帛宮，你賺錢的方式積極主動，敢冒險投資或爭取加薪，但也可能因衝動花錢或投資過快而吃虧。提醒自己，財務決定前，先讓行動的衝勁緩一緩。",
        3: "火星在兄弟宮，你說話直接、有話直說，跟手足或同儕之間可能容易起口角，但也代表你敢表達真實想法。要留意用詞別太衝，避免把單純的討論變成爭執。",
        4: "火星落在田宅宮，家中氣氛可能比較有張力，你或家人容易在家裡展現直接、甚至火爆的一面，也可能對居住空間有很強的主導慾。提醒自己，家不是戰場，練習用溫和的方式表達不滿。",
        5: "火星在子女宮，你在戀愛中主動積極、敢愛敢恨，也在創作或競賽中展現強烈的企圖心與行動力。要注意別把追求的熱情變成佔有慾或過度競爭。",
        6: "火星落在奴僕宮，你做事效率高、行動力強，適合需要體力或即時反應的工作，但也容易因求快而忽略細節。提醒自己，工作中的緊繃感如果長期累積，容易反映在健康上。",
        7: "火星在夫妻宮，你在關係中容易展現強烈的存在感，也可能吸引個性鮮明、甚至愛拌嘴的伴侶或對手。要留意伴侶之間的摩擦別演變成長期的權力拉扯。",
        8: "火星落在疾厄宮（廟旺位置之一），你在親密關係與深層議題上敢愛敢恨、情慾強烈，面對危機時反而展現出驚人的韌性與行動力。提醒自己，強烈的慾望需要搭配自我覺察，別讓衝動主導重大決定。",
        9: "火星在遷移宮，你對信念與理想充滿行動力，敢於為自己相信的事情辯護或遠行追尋。要注意別把堅持理念變成對他人信仰的攻擊性態度。",
        10: "火星落在官祿宮，你在事業上企圖心強、敢於競爭與爭取領導位置，行動力是你職涯發展的重要資產。提醒自己，往上爬的過程中，別把同事或下屬都當成競爭對手。",
        11: "火星在福德宮，你在朋友圈或團體中容易扮演行動派、敢衝敢言的角色，也可能為共同理想積極奔走。要留意別因為太急於推動改變，跟團體裡步調不同的人起衝突。",
        12: "火星落在玄秘宮，你的行動力和憤怒常常比較隱晦、不直接表現出來，可能習慣把衝突內化或透過獨處消化情緒。提醒自己，長期壓抑的怒氣需要找到健康的出口，別讓它在不知不覺中傷害自己。",
    },
    Jupiter: {
        1: "木星在命宮，你天生樂觀開朗、對未來充滿信心，給人大方、有格局的第一印象，機會也常主動找上你。要注意別因為過度自信，而承諾了超出自己能力範圍的事。",
        2: "木星落在財帛宮（廟旺位置之一），你在財務上運氣不錯、容易透過擴張或投資獲得成長，天生對「賺錢」抱持樂觀態度。提醒自己，好運不代表可以毫無節制地花費或冒險。",
        3: "木星在兄弟宮，你熱愛學習與交流，說話帶著鼓舞人心的力量，也可能跟手足或同儕之間的關係特別慷慨大方。要留意別把想法講得太滿、給出超出能力的承諾。",
        4: "木星落在田宅宮，你家中氣氛通常寬裕、開放，可能擁有較大的居住空間，或家庭給你帶來豐盛的支持感。提醒自己，家庭的安全感不能只靠物質擴張來堆疊。",
        5: "木星在子女宮，你在戀愛、創作與玩樂中特別大方慷慨，容易吸引正向、慷慨的對象，也對子女或作品抱持樂觀期待。要注意別把「隨性」和「不負責任」混為一談。",
        6: "木星落在奴僕宮，你對工作抱持樂觀態度，容易在職場中獲得成長機會，也很願意在能力範圍內幫助同事。提醒自己，別因為凡事樂觀，而忽略了該注意的健康或細節警訊。",
        7: "木星在夫妻宮，你在關係與合作中容易遇到能拓展視野、帶來成長的對象，對伴侶也慷慨大方。要留意別把伴侶的付出視為理所當然，適度的感謝很重要。",
        8: "木星落在疾厄宮，你面對危機或轉化時反而展現出驚人的樂觀與韌性，也可能在共享資源或投資上運氣不錯。提醒自己，處理深層議題時，樂觀之外也需要務實的規劃。",
        9: "木星在遷移宮（廟旺位置），這是木星最自在的位置，代表你對哲學、信仰、遠行有強烈熱情，容易透過探索世界找到人生意義。要注意別把自己的信念當成唯一真理，強加在他人身上。",
        10: "木星落在官祿宮，你的事業運通常不錯，容易獲得升遷或擴展的機會，格局也比一般人來得大。提醒自己，機會來得容易時，更要謹慎評估、別輕易做出過度樂觀的承諾。",
        11: "木星在福德宮，你的朋友圈廣闊、容易透過人脈獲得機會，也對未來的願景抱持樂觀期待。要留意別把太多希望寄託在別人身上，自己的努力才是根本。",
        12: "木星落在玄秘宮，你對靈性成長、內在探索抱有樂觀信念，獨處或幕後付出反而能帶給你意外的收穫與領悟。提醒自己，內在的成長需要扎實累積，不能只靠盲目樂觀跳過該面對的功課。",
    },
    Saturn: {
        1: "土星在命宮，你給人的第一印象偏向成熟穩重，可能年輕時比較拘謹嚴肅，需要透過歲月累積自信。要提醒自己，別對自己太過嚴苛，適度放鬆也是一種力量。",
        2: "土星落在財帛宮，你對金錢抱持謹慎保守的態度，習慣透過長期努力累積財富，安全感常需要靠實際存款來支撐。提醒自己，過度緊縮容易讓自己活得很有壓力，適度犒賞自己也沒關係。",
        3: "土星在兄弟宮，你可能在年輕時與手足或同儕的溝通上感受到壓力或距離感，說話前習慣先深思熟慮。要留意別因為害怕說錯話而過度壓抑自己的想法。",
        4: "土星落在田宅宮，你的原生家庭可能帶有較多責任與規範，成長過程中較早學會獨立，對家的安全感需要花時間建立。提醒自己，允許自己慢慢學習信任「被照顧」的感覺。",
        5: "土星在子女宮，你在戀愛與自我表現上可能比較謹慎、害怕受傷，需要時間才能放心展現真實的自己。要注意別因為害怕失敗，而不敢投入真正想做的創作或感情。",
        6: "土星落在奴僕宮（廟旺位置之一），你對工作極度負責、紀律嚴謹，容易成為值得信賴的中流砥柱，但也容易過度苛求自己。提醒自己，健康與休息同樣是責任的一部分，別長期忽略。",
        7: "土星在夫妻宮，你在關係中重視承諾與責任，可能較晚遇到穩定的關係，但一旦投入就會非常忠誠。要留意別把伴侶當成需要「管理」的對象，關係也需要彈性。",
        8: "土星落在疾厄宮，你面對深層的心理議題或親密關係時容易築起防線，需要長時間才能真正卸下心防。提醒自己，適度求助或求援不是軟弱，而是給自己修復的機會。",
        9: "土星在遷移宮，你對信念與哲學抱持務實嚴謹的態度，不輕易全盤接受某種信仰，喜歡經過驗證才願意相信。要注意別因為過度謹慎，錯失了拓展視野的機會。",
        10: "土星落在官祿宮（廟旺位置），這是土星最自在的位置，代表你有機會憑藉長期努力在事業上獲得扎實的成就與權威地位。提醒自己，成功需要時間累積，別因一時挫折就否定自己的努力。",
        11: "土星在福德宮，你對友誼與團體抱持謹慎的態度，可能朋友不多但都很深厚長久，對未來的規劃也偏向務實。要留意別因為害怕被拒絕，而不敢主動經營新的人際關係。",
        12: "土星落在玄秘宮，你可能背負著較深層、甚至說不清楚來源的恐懼或責任感，需要透過獨處或內在功課慢慢釋放壓力。提醒自己，允許自己求助、別把所有重擔都一個人扛。",
    },
    Uranus: {
        1: "天王星在命宮，你給人特立獨行、不按牌理出牌的印象，重視自由與獨特性，不喜歡被貼標籤或大眾期待束縛。要注意別為了標新立異，而忽略了身邊人真正的感受。",
        2: "天王星落在財帛宮，你的收入來源或理財方式可能比較不按常規，容易有突如其來的財務變動，也可能對新科技、新趨勢的投資特別有興趣。提醒自己，追求變化的同時也要留一手應急資金。",
        3: "天王星在兄弟宮，你說話風格獨特、思考跳躍，喜歡討論新奇或前衛的話題，跟手足或同儕的互動可能忽冷忽熱。要留意別因為太追求與眾不同，讓溝通變得難以捉摸。",
        4: "天王星落在田宅宮，你的家庭背景或成長過程可能帶有一些不尋常的轉折，長大後也可能偏好不受傳統束縛的居住方式。提醒自己，追求自由的同時，家人也需要一定的穩定感。",
        5: "天王星在子女宮，你的戀愛與創作風格前衛獨特，容易被與眾不同的人吸引，也可能突然對某段感情或興趣失去熱情。要注意別把「求新鮮」當成逃避深入關係的藉口。",
        6: "天王星落在奴僕宮，你在工作方式上喜歡創新、不喜歡一成不變的流程，適合彈性或自由度高的職業環境。提醒自己，突發的改變雖然刺激，但規律的生活習慣仍有助於健康。",
        7: "天王星在夫妻宮，你容易被獨立特別、甚至有點不按牌理出牌的人吸引，關係中也重視彼此的自由空間。要留意別讓「怕被綁住」的心態，變成逃避承諾的藉口。",
        8: "天王星落在疾厄宮，你對禁忌話題、深層心理或另類療癒方式特別有興趣，親密關係中也可能經歷突如其來的轉折。提醒自己，劇烈的變動之後，給自己一些時間重新整合。",
        9: "天王星在遷移宮，你對非傳統的信仰、哲學或跨文化思想特別著迷，容易顛覆自己原本的世界觀。要注意別為了標新立異而全盤否定既有的智慧與傳統。",
        10: "天王星落在官祿宮，你的職涯路徑可能比較不傳統，容易在創新、科技或改革相關領域發光，也可能經歷突然的職涯轉折。提醒自己，突破舊框架時，也要顧及現實的過渡與準備。",
        11: "天王星在福德宮（廟旺位置），這是天王星很自在的位置，代表你在朋友圈與社群中特別重視理念的自由交流，容易吸引志同道合卻風格迥異的朋友。要留意別因為太重視理念，忽略了身邊真實的情感需求。",
        12: "天王星落在玄秘宮，你的內在世界可能藏著許多突發的靈感或直覺，也可能對靈性、潛意識議題抱持前衛的看法。提醒自己，內在的躁動需要找到安全的方式釋放，而不是任由它累積。",
    },
    Neptune: {
        1: "海王星在命宮，你給人夢幻、有同理心的第一印象，容易吸收周遭的情緒氛圍，也可能給人難以捉摸的神秘感。要注意別因為太容易同理別人，而模糊了自己的界線。",
        2: "海王星落在財帛宮，你對金錢的態度可能比較理想化或不切實際，容易因為同情心而慷慨解囊，也可能在財務規劃上感到模糊不清。提醒自己，定期檢視收支，別讓財務狀況在不知不覺中失控。",
        3: "海王星在兄弟宮，你的表達方式偏向詩意、含蓄，跟手足或同儕溝通時容易靠直覺而非邏輯。要留意訊息傳遞中可能出現的誤會，適時把話說清楚。",
        4: "海王星落在田宅宮，你對家的想像可能帶有理想化的色彩，家庭氣氛也可能比較朦朧、界線不明確。提醒自己，理想中的家需要透過實際的溝通與經營才能落地。",
        5: "海王星在子女宮，你在戀愛中容易理想化對方、投入浪漫的幻想，也在創作上展現出豐富的想像力與靈感。要注意別被過度美化的愛情蒙蔽了現實中的警訊。",
        6: "海王星落在奴僕宮，你可能對工作抱持奉獻、甚至有點自我犧牲的態度，也容易因環境氣氛影響身心狀態。提醒自己，設立清楚的工作界線，避免過度消耗自己去成全他人。",
        7: "海王星在夫妻宮，你容易在關係中投射理想化的期待，渴望靈魂伴侶般的連結，但也可能因此忽略對方真實的樣子。要留意分辨浪漫幻想與現實需求之間的差距。",
        8: "海王星落在疾厄宮，你對深層心理、靈性或禁忌議題特別敏感，容易在親密關係中經歷難以言喻的情感糾葛。提醒自己，面對模糊不清的情感議題時，適度求助能幫你看得更清楚。",
        9: "海王星在遷移宮，你對靈性、信仰或超越現實的哲學思想特別有共鳴，容易透過冥想或藝術找到人生方向。要注意別把逃避現實的衝動誤認為心靈上的追尋。",
        10: "海王星落在官祿宮，你的職涯可能與藝術、療癒、靈性或需要高度同理心的領域有緣，但方向感有時會比較模糊、需要摸索。提醒自己，定期回顧目標，避免在理想與現實之間迷失方向。",
        11: "海王星在福德宮，你對朋友圈與社群抱持理想化的期待，渴望為共同的美好願景奉獻。要留意別被團體中魅力型人物的話術輕易說服，保留一點理性判斷。",
        12: "海王星落在玄秘宮（廟旺位置），這是海王星最自在的位置，代表你天生對靈性、夢境與潛意識有極強的連結，直覺敏銳、同理心強大。提醒自己，適度與現實保持連結，別讓自己完全活在內在世界裡。",
    },
    Pluto: {
        1: "冥王星在命宮，你給人強烈、深不可測的印象，天生具有一股蛻變的力量，經歷過的挑戰常讓你變得更強大。要注意別讓「掌控」的需求變成對他人的壓迫感。",
        2: "冥王星落在財帛宮，你對金錢與資源有強烈的掌控慾，可能經歷過財務上的劇烈起伏，也具有從谷底翻身的韌性。提醒自己，適度分享與信任，別把安全感全部押注在掌控金錢上。",
        3: "冥王星在兄弟宮，你說話帶著洞察力與穿透力，跟手足或同儕之間的關係可能牽涉深層的權力角力或秘密。要留意別用言語當作控制或操縱他人的工具。",
        4: "冥王星落在田宅宮，你的家庭背景可能藏有不輕易對外提起的深層議題，成長過程或許經歷過重大的轉化或危機。提醒自己，願意誠實面對家族議題，才能真正完成內在的療癒。",
        5: "冥王星在子女宮，你在戀愛中投入強烈、甚至帶點佔有慾的情感，愛恨分明，也可能透過創作釋放深層的心理能量。要注意別把愛變成控制對方的手段。",
        6: "冥王星落在奴僕宮，你對工作抱持全力以赴、甚至有點強迫性的投入態度，也可能經歷職場上的權力鬥爭。提醒自己，長期高壓的工作模式需要找到釋放與休息的管道。",
        7: "冥王星在夫妻宮，你在關係中容易經歷強烈的權力拉扯或深刻的蛻變，伴侶關係常常不會只停留在表面。要留意別讓「怕被背叛」的恐懼變成控制對方的理由。",
        8: "冥王星落在疾厄宮（廟旺位置），這是冥王星最自在的位置，代表你對生死、禁忌、深層心理議題有極強的洞察力與轉化能力。提醒自己，這股強大的力量若能善用，會是你最深刻的成長資產，而不只是恐懼的來源。",
        9: "冥王星在遷移宮，你對信仰與人生哲學帶著追根究柢的態度，一旦相信某個理念就會非常投入。要注意別把自己的信念強加在不認同的人身上。",
        10: "冥王星落在官祿宮，你在事業上具有強烈的企圖心與掌控慾，容易經歷職涯上重大的轉折或權力更迭，也有能力東山再起。提醒自己，領導不等於控制，適度授權能讓團隊走得更遠。",
        11: "冥王星在福德宮，你對團體與朋友圈的投入很深，可能經歷過友誼中的劇烈變動，也具有影響團體走向的潛在力量。要留意別讓對團體的強烈認同，變成排他或操控的傾向。",
        12: "冥王星落在玄秘宮，你對潛意識、禁忌與生死議題有天生的敏銳度，內在世界可能藏著連自己都還沒完全理解的深層恐懼與力量。提醒自己，透過安全的方式（如諮商、書寫、靈修）逐步探索，別讓深層情緒無預警地爆發。",
    },
};

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
        PLANET_HOUSE_INSIGHTS,
        CITY_PRESETS,
        ASPECT_DEFS,
        computeNatalChart,
        computeAspects,
        norm360
    };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ZODIAC_SIGNS, PLANETS_META, HOUSE_MEANINGS, PLANET_HOUSE_INSIGHTS, CITY_PRESETS, ASPECT_DEFS,
        computeNatalChart, computeAspects, norm360, angleDiff, computeAscendantAndMC, eclipticLongitude
    };
}
