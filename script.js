// Mystic Tarot Web App - Controller Logic

// Shared card-back illustration is defined in tarot-data.js
const SPREADS = {
    single: {
        name: "每日占卜 (Single Card)",
        tagline: "快速的單張指引",
        description: "只抽一張牌，用來回應「今天/現在整體要注意什麼」這種單一、籠統的問題。不需要複雜的背景資訊，最適合每天花 30 秒問候一下自己的直覺。",
        slots: ["今日指引"]
    },
    three: {
        name: "三牌占卜 (Past, Present, Future)",
        tagline: "看懂一件事的來龍去脈",
        description: "抽三張牌，分別代表「過去、現在、未來」，適合想了解一件事情是怎麼走到現在、接下來又會如何發展，例如一段關係、一個計畫或一個持續困擾你的狀況。",
        slots: ["過去 (Past)", "現在 (Present)", "未來 (Future)"]
    },
    relationship: {
        name: "關係牌陣 (Relationship Spread)",
        tagline: "看懂你和某個人之間",
        description: "抽三張牌，分別代表「你的狀態、對方的狀態、你們之間的連結」。不限定愛情，朋友、家人、同事之間的關係都適用，適合想搞懂彼此互動狀態的時候使用。",
        slots: ["你的狀態 (You)", "對方的狀態 (The Other)", "你們的連結 (The Connection)"]
    },
    love: {
        name: "愛情牌陣 (Love Spread)",
        tagline: "深入拆解感情狀態",
        description: "抽六張牌，更細地拆解感情狀態：你的感受、對方的感受、關係現況、遇到的挑戰、給你的建議，以及可能的未來走向，適合認真想搞懂一段感情的人使用。",
        slots: [
            "你的感受 (Your Feelings)",
            "對方的感受 (Their Feelings)",
            "關係現況 (Current Dynamic)",
            "挑戰與課題 (Challenges)",
            "指引建議 (Guidance)",
            "未來走向 (Potential Outcome)"
        ]
    },
    career: {
        name: "事業牌陣 (Career Spread)",
        tagline: "拆解工作與職涯難題",
        description: "抽五張牌，拆解工作或事業問題：目前處境、面臨的阻礙、你的優勢資源、行動建議，以及可能的結果，適合用來問工作、轉職、創業之類的問題。",
        slots: [
            "目前處境 (Current Situation)",
            "面臨阻礙 (Obstacles)",
            "優勢資源 (Strengths & Resources)",
            "行動建議 (Recommended Action)",
            "可能結果 (Likely Outcome)"
        ]
    },
    celtic: {
        name: "凱爾特十字牌陣 (Celtic Cross)",
        tagline: "最完整、最經典的深度解讀",
        description: "抽十張牌，是塔羅最經典、最完整的牌陣，涵蓋現況、挑戰、潛意識、過去、目標、近期未來、自身態度、外在環境、希望與恐懼、最終結果。適合針對一件重要的事情做全面、深入的解讀。",
        layoutClass: "layout-celtic",
        slots: [
            "現況 (Present)",
            "橫向挑戰 (Challenge)",
            "潛意識基礎 (Subconscious)",
            "過去 (Recent Past)",
            "意識目標 (Conscious Goal)",
            "近期未來 (Near Future)",
            "自身態度 (Your Attitude)",
            "外在環境 (External Influences)",
            "希望與恐懼 (Hopes & Fears)",
            "最終結果 (Final Outcome)"
        ]
    }
};

// Topics the seeker can pick before drawing, used to give each card a
// question-specific interpretation on top of its base upright/reversed meaning.
const TOPICS = {
    love: { label: "愛情 / 感情", short: "感情", icon: "♥" },
    career: { label: "事業 / 工作", short: "事業", icon: "✦" },
    wealth: { label: "財運 / 金錢", short: "財運", icon: "◆" },
    health: { label: "健康 / 身心", short: "健康", icon: "✚" },
    relationships: { label: "人際 / 社交", short: "人際關係", icon: "◎" },
    general: { label: "綜合 / 其他", short: "整體人生", icon: "★" }
};

let currentTopic = 'general';

// Topic-specific guidance banks. Each card deterministically picks one line per
// topic/direction (based on its id) and combines it with its own keyword, so
// every card x topic combination reads as a tailored, detailed interpretation.
const TOPIC_ADVICE = {
    love: {
        upright: [
            "這是敞開心房、讓感情自然流動的好時機，不要因為害怕受傷而築起高牆。",
            "你與對方之間的溝通正處於順暢的頻率上，適合坦白說出心裡真正的感受。",
            "單身的你，桃花能量正在增強，保持開放的心態，緣分可能就在不經意間出現。",
            "這段關係值得你投入更多真誠與耐心，對方感受得到你的用心。",
            "相信自己在感情中的直覺，此刻的選擇多半是出於愛而非恐懼。",
            "適合主動跨出一步，無論是表白、和解或是更進一步的承諾。",
            "這張牌鼓勵你先學會愛自己，你才有能力給出更成熟穩定的愛。",
            "過去感情裡的陰影正在被療癒，你已經準備好迎接更健康的關係。"
        ],
        reversed: [
            "感情裡可能存在你一直迴避的問題，逃避只會讓裂痕越來越深，該正視了。",
            "你或對方可能正在用沉默或冷戰代替溝通，請試著先放下防備。",
            "這段關係目前的付出可能不太對等，留意自己是否一直在單方面遷就。",
            "感情中的不安全感可能來自過去的傷痛，而不是眼前這個人真正做錯了什麼。",
            "現在不是做重大感情決定的最佳時機，先給自己一些沉澱的空間。",
            "你可能對這段關係抱有不切實際的幻想，試著看清對方真實的樣子。",
            "舊情復燃或糾纏不清的關係，可能會消耗你比想像中更多的心力。",
            "學會拒絕不健康的相處模式，離開有時候比留下更需要勇氣。"
        ]
    },
    career: {
        upright: [
            "你目前的努力正在被看見，繼續保持專業與穩定的表現，機會會主動找上你。",
            "適合主動爭取你想要的專案、升遷或新機會，你的能力已經準備好了。",
            "團隊合作會是這段時間的關鍵，懂得借力使力比單打獨鬥更有效率。",
            "這是學習新技能、拓展專業領域的好時機，投資自己絕對值得。",
            "你的創意與想法在這個階段特別有價值，勇敢在會議或提案中表達出來。",
            "工作上的耐心會有回報，眼前看似緩慢的進展，其實正在累積實力。",
            "適合建立長期的職涯規劃，而不只是應付眼前的任務。",
            "你與同事或主管之間的信任正在建立，這會是未來合作的重要基礎。"
        ],
        reversed: [
            "目前的工作狀態可能讓你感到停滯或疲乏，是時候誠實檢視這是否還適合你。",
            "職場上的溝通可能出現誤解，先確認清楚再行動，避免不必要的衝突。",
            "過度追求完美或攬下太多責任，可能讓你正在燃燒殆盡，請適度放手。",
            "這不是貿然離職或做重大職涯決定的時機，先觀察局勢再行動。",
            "留意職場中表面合作、私下較勁的狀況，保護好自己的成果。",
            "你可能正在用忙碌掩蓋對這份工作真正的不滿足，值得誠實面對。",
            "團隊裡可能出現方向不一致的狀況，適合找機會坦誠溝通、對齊目標。",
            "眼前的挫折不代表能力不足，很可能只是時機或資源尚未到位。"
        ]
    },
    wealth: {
        upright: [
            "財務上正迎來穩定成長的能量，適合做長期規劃而非短期投機。",
            "一個實質的收入機會或投資機會可能正在靠近，保持敏銳但不躁進。",
            "你目前的理財習慣正走在正確的方向上，持續下去會看到成果。",
            "這是檢視資源、開源節流的好時機，小小的調整就能帶來明顯改善。",
            "適合尋求專業意見來優化你的財務規劃，讓資源運用得更有效率。",
            "過去的努力正在轉化為實質的回報，你值得享受這份豐盛。",
            "分享與投資自己一樣重要，適度的付出反而會為你帶來更多流動。",
            "你對金錢的態度正在變得更成熟務實，這會是長期財富累積的基礎。"
        ],
        reversed: [
            "這段時間不適合衝動消費或高風險投資，先穩住現金流再說。",
            "留意帳單、合約或財務細節，粗心可能會造成不必要的損失。",
            "財務上的焦慮可能來自對未來的不確定感，先盤點現況會比一直擔心更有幫助。",
            "收入可能暫時受阻或延遲，這是提醒你建立緩衝資金的時候。",
            "借貸或替他人擔保財務責任這件事，現在需要格外謹慎評估。",
            "過度的物質欲望可能讓你忽略了真正重要的財務目標，重新排序優先順序。",
            "財務上的困境往往是暫時的，不要因此對自己的能力失去信心。",
            "適合誠實面對財務上一直逃避處理的問題，越早處理越輕鬆。"
        ]
    },
    health: {
        upright: [
            "身心正處於逐漸恢復平衡的階段，持續你目前正在做的健康習慣。",
            "適合開始一項新的運動或養生計畫，你的身體會給你正向的回饋。",
            "情緒上的穩定正在幫助你的身體狀態變得更好，繼續照顧好內心。",
            "這是傾聽身體訊號、適度休息的好時機，不需要過度勉強自己。",
            "你的能量正在回升，適合逐步恢復活動量，但仍要留意循序漸進。",
            "尋求適合的支持，無論是朋友、專業協助或運動夥伴，都會加速你的恢復。",
            "身心靈的連結在這段時間特別重要，靜心或伸展會帶來明顯幫助。",
            "過去累積的疲憊正在被釋放，給自己多一點耐心等待狀態調整。"
        ],
        reversed: [
            "身體可能正在發出被你忽略的警訊，該安排時間好好檢查與休息了。",
            "長期壓力可能已經累積成身體上的負擔，學習真正放鬆比忍耐更重要。",
            "這段時間不適合過度透支體力，勉強自己只會拖長恢復的時間。",
            "情緒上的壓抑可能正在影響你的睡眠或消化，值得找到健康的抒發方式。",
            "避免用不健康的方式（暴飲暴食、熬夜、逃避）來應對壓力。",
            "對自己的身體多一點耐心，恢復需要時間，不要因為緩慢而灰心。",
            "適合重新檢視生活作息，混亂的節奏可能是不適的根源之一。",
            "尋求專業協助並不代表軟弱，是對自己負責任的表現。"
        ]
    },
    relationships: {
        upright: [
            "你與身邊人的關係正處於良好的互動狀態，適合主動維繫珍貴的情誼。",
            "誠懇的溝通會為你帶來意想不到的支持，別害怕先開口。",
            "適合修復一段久未聯繫的關係，對方可能也在等待你的訊息。",
            "你在人群中的存在感正在增強，這是拓展人脈、結交新朋友的好時機。",
            "給予他人真誠的關心，會讓你收穫更深厚的信任與連結。",
            "這段時間適合設立健康的界線，好的關係需要雙方都感到舒服。",
            "你身邊值得信賴的人，此刻可能正是你最需要的支持力量。",
            "團體或家庭中的和諧正在建立，耐心會帶來更緊密的凝聚力。"
        ],
        reversed: [
            "人際互動中可能出現誤會或冷淡，先別急著下結論，給彼此一些空間。",
            "留意自己是否在一段關係中過度付出卻得不到對等的回應。",
            "某些關係可能已經走到需要重新評估是否還要繼續投入的階段。",
            "表面的社交可能正在消耗你，把心力留給真正重要的人。",
            "你可能正在迴避一段需要誠實對話的關係，拖延只會讓誤解加深。",
            "適合檢視自己在人際互動中是否過度討好，忽略了自己的需求。",
            "孤立感可能只是暫時的，主動伸出手，會比等待對方先開口更有幫助。",
            "家庭或團體內部的緊張關係，需要有人先願意放下立場、傾聽對方。"
        ]
    },
    general: {
        upright: [
            "整體而言，你正走在正確的方向上，保持信心繼續前進。",
            "生命正在為你打開一扇新的門，保持開放的心態去迎接改變。",
            "你目前擁有的資源與能力，已經足夠應付眼前的挑戰。",
            "這是內外在都逐漸趨於平衡與和諧的階段，好好享受這份穩定。",
            "相信自己過去累積的努力，成果正在慢慢浮現。",
            "適合為自己設立新的目標，你現在的狀態很適合展開行動。",
            "生活中的小小巧合或直覺，這段時間特別值得留意與信任。",
            "你正在成長為更成熟、更了解自己的人，這條路值得繼續走下去。"
        ],
        reversed: [
            "生活中可能有些停滯或反覆的狀況，這是提醒你放慢腳步、重新檢視的時候。",
            "你可能正在對抗一些其實可以放下的執念，試著鬆開緊握的手。",
            "這段時間適合向內探索，答案可能不在外界，而在你自己心裡。",
            "混亂或不確定感只是暫時的過渡期，不代表你正在走錯方向。",
            "留意是否因為害怕改變而讓自己停留在不再適合的處境裡。",
            "適合誠實面對一直逃避的課題，越早正視，越早能真正放下。",
            "你可能對自己太過嚴苛，允許自己有休息與不完美的空間。",
            "眼前的挑戰其實是在幫助你看清楚，什麼才是真正重要的事。"
        ]
    }
};

function hashToIndex(str, len) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash % len;
}

// Builds a topic-specific interpretation paragraph for a given card, weaving
// the card's own leading keyword together with a deterministically-picked
// topic/direction guidance line so every card + topic pairing feels tailored.
function buildTopicInsight(card, topicKey, isReversed) {
    const topic = TOPICS[topicKey] || TOPICS.general;
    const bank = (TOPIC_ADVICE[topicKey] || TOPIC_ADVICE.general)[isReversed ? 'reversed' : 'upright'];
    const advice = bank[hashToIndex(card.id + topicKey + (isReversed ? 'r' : 'u'), bank.length)];
    const anchorKeyword = (card.keywords || '').split('、')[0] || card.name;
    const directionWord = isReversed ? '逆位' : '正位';
    return `如果你這次想問的是「${topic.short}」，${card.name}${directionWord}裡「${anchorKeyword}」這股能量特別值得留意：${advice}`;
}

let currentSpreadType = 'single';
let drawnCards = [];
let shuffledDeck = [];

// Focus prompts shown one at a time on the meditation overlay before each reading
const MEDITATION_TOPICS = [
    "感情 · 關係",
    "事業 · 工作",
    "財運 · 金錢",
    "健康 · 身心",
    "人際 · 溝通",
    "抉擇 · 方向",
    "內心的疑惑"
];
const MEDITATION_INTERVAL_MS = 2200;

let meditationInterval = null;
let meditationTimeout = null;

// Shows the mist overlay and cycles through focus prompts, then calls onComplete.
// Clicking anywhere on the overlay skips straight to onComplete.
function startMeditation(onComplete) {
    const overlay = document.getElementById('meditationOverlay');
    const topicEl = document.getElementById('meditationTopic');
    if (!overlay || !topicEl) {
        onComplete();
        return;
    }

    let index = 0;
    const showNextTopic = () => {
        topicEl.classList.remove('show');
        void topicEl.offsetWidth; // force reflow so the animation restarts every time
        topicEl.textContent = MEDITATION_TOPICS[index % MEDITATION_TOPICS.length];
        topicEl.classList.add('show');
        index++;
    };

    const finish = () => {
        clearInterval(meditationInterval);
        clearTimeout(meditationTimeout);
        meditationInterval = null;
        meditationTimeout = null;
        overlay.removeEventListener('click', finish);
        overlay.classList.remove('visible');
        setTimeout(onComplete, 600); // let the fade-out transition finish first
    };

    overlay.classList.add('visible');
    showNextTopic();
    meditationInterval = setInterval(showNextTopic, MEDITATION_INTERVAL_MS);
    meditationTimeout = setTimeout(finish, MEDITATION_TOPICS.length * MEDITATION_INTERVAL_MS + 400);
    overlay.addEventListener('click', finish);
}

// Initialize Web Audio API for atmospheric sound effects
let audioCtx = null;
let soundMuted = false;
try { soundMuted = localStorage.getItem('tarotSoundMuted') === '1'; } catch (e) { /* ignore */ }

function playDrawSound() {
    if (soundMuted) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(261.63, audioCtx.currentTime); // Middle C
        osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.55); // G5
        
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + 0.55);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.55);
    } catch (e) {
        console.log("Audio not supported or blocked by browser policies.");
    }
}

// Elements
const spreadSelector = document.getElementById('spreadSelector');
const spreadBoard = document.getElementById('spreadBoard');
const deckStatus = document.getElementById('deckStatus');
const readingResult = document.getElementById('readingResult');
const explanationList = document.getElementById('explanationList');
const revealHint = document.getElementById('revealHint');
const actionContainer = document.getElementById('actionContainer');
const resetBtn = document.getElementById('resetBtn');

const viewSelect = document.getElementById('viewSelect');
const viewIntro = document.getElementById('viewIntro');
const viewReading = document.getElementById('viewReading');
const viewKnowledge = document.getElementById('viewKnowledge');
const viewBirthcard = document.getElementById('viewBirthcard');
const viewHistory = document.getElementById('viewHistory');
const introTitle = document.getElementById('introTitle');
const introDesc = document.getElementById('introDesc');
const introBackBtn = document.getElementById('introBackBtn');
const topicSelector = document.getElementById('topicSelector');
const startReadingBtn = document.getElementById('startReadingBtn');
const backToSelectBtn = document.getElementById('backToSelectBtn');
const knowledgeLinkBtn = document.getElementById('knowledgeLinkBtn');
const knowledgeBackBtn = document.getElementById('knowledgeBackBtn');
const birthCardLinkBtn = document.getElementById('birthCardLinkBtn');
const birthCardBackBtn = document.getElementById('birthCardBackBtn');
const birthDateInput = document.getElementById('birthDateInput');
const calcBirthCardBtn = document.getElementById('calcBirthCardBtn');
const birthCardResult = document.getElementById('birthCardResult');
const historyLinkBtn = document.getElementById('historyLinkBtn');
const historyBackBtn = document.getElementById('historyBackBtn');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const shareResultBtn = document.getElementById('shareResultBtn');

// Switches between the top-level screens: choose spread -> spread intro &
// topic picker -> the actual reading (deck, board, results) -> knowledge page
// -> birthday card calculator.
function showView(name) {
    viewSelect.hidden = name !== 'select';
    viewIntro.hidden = name !== 'intro';
    viewReading.hidden = name !== 'reading';
    viewKnowledge.hidden = name !== 'knowledge';
    viewBirthcard.hidden = name !== 'birthcard';
    viewHistory.hidden = name !== 'history';
    if (name !== 'reading') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Setup Spread Buttons (landing screen)
function initSpreads() {
    spreadSelector.innerHTML = '';
    Object.keys(SPREADS).forEach(key => {
        const spread = SPREADS[key];
        const btn = document.createElement('button');
        btn.classList.add('spread-btn');
        btn.innerHTML = `<span class="spread-btn-name">${spread.name}</span><span class="spread-btn-tagline">${spread.tagline || ''}</span>`;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('role', 'button');
        btn.addEventListener('click', (e) => openSpreadIntro(key, e.currentTarget));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openSpreadIntro(key, e.currentTarget);
            }
        });
        spreadSelector.appendChild(btn);
    });
}

// Setup Topic Buttons (intro screen) — built once, reused for every spread
function initTopicSelector() {
    topicSelector.innerHTML = '';
    Object.keys(TOPICS).forEach(key => {
        const topic = TOPICS[key];
        const btn = document.createElement('button');
        btn.classList.add('topic-btn');
        btn.type = 'button';
        if (key === currentTopic) btn.classList.add('active');
        btn.innerHTML = `<span class="topic-btn-icon">${topic.icon}</span><span>${topic.label}</span>`;
        btn.setAttribute('aria-pressed', key === currentTopic ? 'true' : 'false');
        btn.addEventListener('click', () => {
            currentTopic = key;
            document.querySelectorAll('.topic-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        });
        topicSelector.appendChild(btn);
    });
}

// Shows the spread-intro screen: name, description, and the topic picker.
function openSpreadIntro(type, targetBtn) {
    currentSpreadType = type;
    document.querySelectorAll('.spread-btn').forEach(btn => btn.classList.remove('active'));
    if (targetBtn) targetBtn.classList.add('active');

    const spread = SPREADS[type];
    introTitle.textContent = spread.name;
    introDesc.textContent = spread.description || '';
    showView('intro');
}

introBackBtn.addEventListener('click', () => showView('select'));

startReadingBtn.addEventListener('click', () => {
    showView('reading');
    resetReading();
});

backToSelectBtn.addEventListener('click', () => {
    drawnCards = [];
    readingResult.classList.remove('visible');
    actionContainer.style.display = 'none';
    revealHint.style.display = 'none';
    showView('select');
});

knowledgeLinkBtn.addEventListener('click', () => showView('knowledge'));
knowledgeBackBtn.addEventListener('click', () => showView('select'));

// ---------------------------------------------------------------------------
// Birthday Card: a numerology-style "life/soul card" calculator. Sums every
// digit of the seeker's birth date, reduces it down to 0-21, and maps that
// number onto one of the 22 Major Arcana cards, in their traditional order.
// ---------------------------------------------------------------------------
const MAJOR_ARCANA_ORDER = [
    'fool', 'magician', 'priestess', 'empress', 'emperor', 'hierophant',
    'lovers', 'chariot', 'strength', 'hermit', 'wheel', 'justice',
    'hangedman', 'death', 'temperance', 'devil', 'tower', 'star',
    'moon', 'sun', 'judgement', 'world'
];

function digitSum(value) {
    return String(value).split('').filter(ch => /[0-9]/.test(ch)).reduce((sum, d) => sum + Number(d), 0);
}

// dateStr is expected in the "YYYY-MM-DD" format that <input type="date"> gives us.
function calcBirthCardIndex(dateStr) {
    let n = digitSum(dateStr.replace(/-/g, ''));
    while (n > 21) {
        n = digitSum(n);
    }
    return n;
}

birthDateInput.max = new Date().toISOString().slice(0, 10);

// Remember the seeker's birth date across visits so they don't have to
// re-type it every time they check their soul card.
try {
    const savedBirthDate = localStorage.getItem('tarotBirthDate');
    if (savedBirthDate) birthDateInput.value = savedBirthDate;
} catch (e) { /* localStorage unavailable, ignore */ }

birthCardLinkBtn.addEventListener('click', () => {
    birthCardResult.hidden = true;
    birthCardResult.innerHTML = '';
    showView('birthcard');
});
birthCardBackBtn.addEventListener('click', () => showView('select'));

calcBirthCardBtn.addEventListener('click', () => {
    const val = birthDateInput.value;
    if (!val) {
        birthCardResult.hidden = false;
        birthCardResult.innerHTML = `<p class="birthcard-error">請先選擇你的出生年月日。</p>`;
        return;
    }

    try { localStorage.setItem('tarotBirthDate', val); } catch (e) { /* ignore */ }

    const index = calcBirthCardIndex(val);
    const cardId = MAJOR_ARCANA_ORDER[index] || MAJOR_ARCANA_ORDER[0];
    const card = (window.TAROT_CARDS || []).find(c => c.id === cardId);
    if (!card) {
        birthCardResult.hidden = false;
        birthCardResult.innerHTML = `<p class="birthcard-error">計算時發生問題，請稍後再試一次。</p>`;
        return;
    }

    const imagePath = `assets/cards/${card.id}.jpg`;
    birthCardResult.hidden = false;
    birthCardResult.innerHTML = `
        <div class="birthcard-card">
            <img src="${imagePath}" alt="${card.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="svg-fallback" style="display: none; width: 100%; height: 100%;">${card.svg}</div>
        </div>
        <div class="birthcard-info">
            <h3>${card.name}</h3>
            <p class="birthcard-keywords">關鍵字：${card.keywords}</p>
            <p>${card.upright}</p>
            <p class="explanation-extra-item"><strong>對應能量：</strong>${card.astro || ''}</p>
            <p class="explanation-extra-item"><strong>數字意涵：</strong>${card.numerology || ''}</p>
        </div>
    `;
});

function resetReading() {
    drawnCards = [];
    readingResult.classList.remove('visible');
    actionContainer.style.display = 'none';
    revealHint.style.display = 'none';
    if (shareResultBtn) shareResultBtn.hidden = true;

    // Re-shuffle a clean deck from global window.TAROT_CARDS
    const tarotSource = window.TAROT_CARDS || [];
    shuffledDeck = [...tarotSource];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    // Build the visual slots on the board
    const spreadDef = SPREADS[currentSpreadType];
    const slots = spreadDef.slots;
    spreadBoard.innerHTML = '';
    spreadBoard.className = 'spread-board' + (spreadDef.layoutClass ? ` ${spreadDef.layoutClass}` : '') + ` slots-${slots.length}`;
    slots.forEach((slotName, index) => {
        const slotContainer = document.createElement('div');
        slotContainer.classList.add('slot-container');
        slotContainer.innerHTML = `
            <div class="slot-title">${slotName}</div>
            <div class="tarot-card-container" id="slot-${index}">
                <div class="tarot-card-placeholder"></div>
            </div>
        `;
        spreadBoard.appendChild(slotContainer);
    });

    // Dynamically update static deck cards on reset to use the new beautiful card backs
    const staticDecks = document.querySelectorAll('.deck-card');
    staticDecks.forEach(deck => {
        deck.innerHTML = `<img src="assets/card-back.jpg" alt="牌背" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="card-back-pattern" style="display: none;">${CARD_BACK_SVG}</div>`;
    });

    // Keep the deck disabled and show the meditation overlay first, so the
    // seeker silently focuses their question before any card can be drawn.
    const deckEl = document.querySelector('.mystic-deck');
    deckEl.style.pointerEvents = 'none';
    deckEl.style.opacity = '0.5';
    deckEl.setAttribute('tabindex', '-1');
    deckEl.setAttribute('aria-disabled', 'true');
    deckStatus.textContent = '請靜心默想...';

    startMeditation(() => {
        deckStatus.textContent = `請點擊牌堆抽取第 1 張牌 (${SPREADS[currentSpreadType].name})`;
        deckEl.style.pointerEvents = 'auto';
        deckEl.style.opacity = '1';
        deckEl.setAttribute('tabindex', '0');
        deckEl.setAttribute('aria-disabled', 'false');
    });
}

// Deals one card face-down into the next empty slot. The card's front face
// is built and inserted into the DOM right away (so it's ready to go), but
// it stays hidden behind the card back — nothing flips open here. Only once
// every slot is filled does the seeker get to open each card individually.
function drawCard() {
    const totalSlots = SPREADS[currentSpreadType].slots.length;
    if (drawnCards.length >= totalSlots) return;

    playDrawSound();

    const currentSlotIndex = drawnCards.length;
    const cardData = shuffledDeck.pop();
    const isReversed = Math.random() < 0.3; // 30% chance of being reversed

    drawnCards.push({
        ...cardData,
        isReversed,
        revealed: false
    });

    // The slot starts out as an empty placeholder — replace it with an actual
    // face-down card (back showing) only now that a card has really landed here.
    const slotContainerEl = document.getElementById(`slot-${currentSlotIndex}`);
    slotContainerEl.innerHTML = `
        <div class="tarot-card">
            <div class="card-face back">
                <img src="assets/card-back.jpg" alt="牌背" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="inner-pattern" style="display: none;">${CARD_BACK_SVG}</div>
            </div>
        </div>
    `;
    const slotCardEl = slotContainerEl.querySelector('.tarot-card');

    // Web-optimized card artwork (compressed copies of the files in /cards).
    // Falls back to the built-in SVG illustration below if the image is missing.
    const imagePath = `assets/cards/${cardData.id}.jpg`;

    // Set card face inside the slot with corner borders (still face-down for now)
    slotCardEl.innerHTML += `
        <div class="card-face front">
            <!-- Ornate Corners -->
            <div class="corner-decor corner-tl"></div>
            <div class="corner-decor corner-tr"></div>
            <div class="corner-decor corner-bl"></div>
            <div class="corner-decor corner-br"></div>

            <div class="card-header">${cardData.number}</div>
            <div class="card-illustration" style="padding: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                <img src="${imagePath}" alt="${cardData.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="svg-fallback" style="display: none; width: 100%; height: 100%;">
                    ${cardData.svg}
                </div>
            </div>
            <div class="card-footer">${cardData.name}</div>
        </div>
    `;

    // Update instruction
    if (drawnCards.length < totalSlots) {
        deckStatus.textContent = `請點擊牌堆抽取第 ${drawnCards.length + 1} 張牌`;
    } else {
        deckStatus.textContent = "所有的牌已經就位。請依序點擊每一張牌，翻開屬於你的命運訊息。";
        const deckEl = document.querySelector('.mystic-deck');
        deckEl.style.pointerEvents = 'none';
        deckEl.style.opacity = '0.5';
        deckEl.setAttribute('tabindex', '-1');
        deckEl.setAttribute('aria-disabled', 'true');
        enterRevealPhase();
    }
}

// Called once the whole spread has been dealt face-down. Makes every slot
// clickable/keyboard-focusable so the seeker can open cards one at a time,
// and shows the result panel (with the back/reset options) right away so
// there's always a way out, even before any card has been opened.
function enterRevealPhase() {
    explanationList.innerHTML = '';
    revealHint.style.display = 'block';
    readingResult.classList.add('visible');
    actionContainer.style.display = 'flex';

    const totalSlots = SPREADS[currentSpreadType].slots.length;
    for (let i = 0; i < totalSlots; i++) {
        const container = document.getElementById(`slot-${i}`);
        if (!container) continue;
        container.classList.add('unrevealed');
        container.setAttribute('tabindex', '0');
        container.setAttribute('role', 'button');
        container.setAttribute('aria-label', '點擊翻開這張牌');
        container.addEventListener('click', () => revealSingleCard(i));
        container.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                revealSingleCard(i);
            }
        });
    }
}

// Flips open one specific card (if it hasn't been opened yet) and appends
// its detailed explanation to the results list below.
function revealSingleCard(slotIndex) {
    const card = drawnCards[slotIndex];
    if (!card || card.revealed) return;
    card.revealed = true;

    playDrawSound();

    const container = document.getElementById(`slot-${slotIndex}`);
    const cardEl = container.querySelector('.tarot-card');
    container.classList.remove('unrevealed');
    container.classList.add('revealed');
    if (card.isReversed) {
        cardEl.classList.add('reversed');
    }
    cardEl.classList.add('flipped');

    explanationList.appendChild(buildCardExplanation(card, slotIndex));

    const allRevealed = drawnCards.every(c => c.revealed);
    if (allRevealed) {
        revealHint.style.display = 'none';
        appendCombinationsIfAny();
        deckStatus.textContent = "星辰已為您指明道路。";
        saveReadingToHistory();
        if (shareResultBtn) shareResultBtn.hidden = false;
    } else {
        const remaining = drawnCards.filter(c => !c.revealed).length;
        deckStatus.textContent = `還有 ${remaining} 張牌尚未翻開，點擊查看更多解讀。`;
    }
}

const SUIT_INFO = {
    wands: { label: '權杖 · 火', className: 'suit-wands', color: '#e2833e' },
    cups: { label: '聖杯 · 水', className: 'suit-cups', color: '#38bdf8' },
    swords: { label: '寶劍 · 風', className: 'suit-swords', color: '#cbd5e1' },
    pentacles: { label: '錢幣 · 土', className: 'suit-pentacles', color: '#34d399' }
};
const MAJOR_SUIT_INFO = { label: '大阿爾克那', className: 'suit-major', color: '#dfba47' };

function getSuitInfo(cardId) {
    const prefix = cardId.split('_')[0];
    return SUIT_INFO[prefix] || MAJOR_SUIT_INFO;
}

// Scans all drawn cards for any "signature" pairings defined in
// CARD_COMBINATIONS (see tarot-data.js), returning every match found.
function findCombinations(cards) {
    const found = [];
    const seen = new Set();
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            const key = [cards[i].id, cards[j].id].sort().join('|');
            if (typeof CARD_COMBINATIONS !== 'undefined' && CARD_COMBINATIONS[key] && !seen.has(key)) {
                seen.add(key);
                found.push({ names: [cards[i].name, cards[j].name], text: CARD_COMBINATIONS[key] });
            }
        }
    }
    return found;
}

// Builds the detailed explanation block for a single card (called as each
// card gets opened, rather than all at once).
function buildCardExplanation(card, index) {
    const slots = SPREADS[currentSpreadType].slots;
    const item = document.createElement('div');
    item.classList.add('explanation-item');

    const directionText = card.isReversed ? '逆位 (Reversed)' : '正位 (Upright)';
    const directionClass = card.isReversed ? 'tag-reversed' : 'tag-upright';
    const interpretation = card.isReversed ? card.reversed : card.upright;
    const suitInfo = getSuitInfo(card.id);
    const topicInsight = buildTopicInsight(card, currentTopic, card.isReversed);
    const topicLabel = (TOPICS[currentTopic] || TOPICS.general).label;
    const yn = card.yesNo ? (card.isReversed ? card.yesNo.reversed : card.yesNo.upright) : null;
    const ynBadge = yn ? `<span class="yesno-badge yesno-${yn.answer}">${YES_NO_LABEL[yn.answer]}</span>` : '';
    item.style.setProperty('--accent', suitInfo.color);

    item.innerHTML = `
        <div class="explanation-header">
            <span class="explanation-suit ${suitInfo.className}">${suitInfo.label}</span>
            <span class="explanation-card-name">${card.name}</span>
            <span class="explanation-tag ${directionClass}">${directionText}</span>
            <span class="explanation-slot">【${slots[index]}】</span>
            ${ynBadge}
        </div>
        <div class="explanation-keywords">關鍵字：${card.keywords}</div>
        <div class="explanation-desc"><strong>牌面意象：</strong>${card.desc}</div>
        <div class="explanation-desc"><strong>命運解讀：</strong>${interpretation}</div>
        <div class="explanation-topic">
            <span class="explanation-topic-label">${topicLabel} 專屬解讀</span>
            <p>${topicInsight}</p>
        </div>
        <div class="explanation-extra">
            <div class="explanation-extra-item"><strong>對應能量：</strong>${card.astro || ''}</div>
            <div class="explanation-extra-item"><strong>數字意涵：</strong>${card.numerology || ''}</div>
            ${yn ? `<div class="explanation-extra-item"><strong>是非指引補充：</strong>${yn.note}</div>` : ''}
        </div>
    `;
    return item;
}

// Once every card in the spread has been opened, check for any signature
// card-combination readings and append them as a closing summary.
function appendCombinationsIfAny() {
    const combos = findCombinations(drawnCards);
    if (combos.length > 0) {
        const comboBox = document.createElement('div');
        comboBox.classList.add('combo-box');
        comboBox.innerHTML = `
            <h3 class="combo-box-title">✦ 牌組特殊組合解讀 ✦</h3>
            ${combos.map(c => `
                <div class="combo-item">
                    <span class="combo-pair">${c.names[0]} × ${c.names[1]}</span>
                    <p>${c.text}</p>
                </div>
            `).join('')}
        `;
        explanationList.appendChild(comboBox);
    }
}

// ---------------------------------------------------------------------
// Reading History — saved locally (localStorage only, never leaves the
// browser). Each finished reading is stored as a compact record; full
// interpretation text is re-derived on demand from tarot-data.js rather
// than duplicated in storage.
// ---------------------------------------------------------------------
const HISTORY_KEY = 'tarotHistory';
const MAX_HISTORY_ENTRIES = 20;

function loadHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveReadingToHistory() {
    if (!drawnCards.length || !drawnCards.every(c => c.revealed)) return;
    const record = {
        id: Date.now(),
        dateLabel: new Date().toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
        spreadType: currentSpreadType,
        spreadName: SPREADS[currentSpreadType] ? SPREADS[currentSpreadType].name : currentSpreadType,
        topicKey: currentTopic,
        topicLabel: (TOPICS[currentTopic] || TOPICS.general).label,
        cards: drawnCards.map(c => ({ id: c.id, isReversed: !!c.isReversed }))
    };
    const history = loadHistory();
    history.unshift(record);
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY_ENTRIES)));
    } catch (e) { /* storage full or unavailable, silently skip */ }
}

// Renders one history record's full card-by-card explanation, reusing
// buildCardExplanation by briefly pointing the global spread/topic state
// at this record's values (synchronous, no risk of interleaving).
function renderHistoryDetail(record) {
    const wrap = document.createElement('div');
    wrap.classList.add('history-entry-detail');

    const prevSpreadType = currentSpreadType;
    const prevTopic = currentTopic;
    currentSpreadType = SPREADS[record.spreadType] ? record.spreadType : prevSpreadType;
    currentTopic = TOPICS[record.topicKey] ? record.topicKey : 'general';

    const source = window.TAROT_CARDS || [];
    record.cards.forEach((stored, index) => {
        const base = source.find(c => c.id === stored.id);
        if (!base) return;
        const cardForExplanation = { ...base, isReversed: stored.isReversed, revealed: true };
        wrap.appendChild(buildCardExplanation(cardForExplanation, index));
    });

    const combos = findCombinations(record.cards.map(stored => {
        const base = source.find(c => c.id === stored.id) || {};
        return { ...base, id: stored.id };
    }));
    if (combos.length > 0) {
        const comboBox = document.createElement('div');
        comboBox.classList.add('combo-box');
        comboBox.innerHTML = `
            <h3 class="combo-box-title">✦ 牌組特殊組合解讀 ✦</h3>
            ${combos.map(c => `
                <div class="combo-item">
                    <span class="combo-pair">${c.names[0]} × ${c.names[1]}</span>
                    <p>${c.text}</p>
                </div>
            `).join('')}
        `;
        wrap.appendChild(comboBox);
    }

    currentSpreadType = prevSpreadType;
    currentTopic = prevTopic;
    return wrap;
}

function renderHistoryList() {
    if (!historyList) return;
    const history = loadHistory();
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = `<p class="history-empty">尚無占卜紀錄，完成一次占卜後會自動保存在這裡。</p>`;
        return;
    }

    const source = window.TAROT_CARDS || [];
    history.forEach(record => {
        const entry = document.createElement('div');
        entry.classList.add('history-entry');

        const names = record.cards.map(stored => {
            const base = source.find(c => c.id === stored.id);
            const name = base ? base.name : stored.id;
            return stored.isReversed ? `${name}（逆）` : name;
        }).join('、');

        const header = document.createElement('button');
        header.type = 'button';
        header.classList.add('history-entry-header');
        header.innerHTML = `
            <span class="history-entry-date">${record.dateLabel}</span>
            <span class="history-chip">${record.spreadName}</span>
            <span class="history-chip">${record.topicLabel}</span>
            <span class="history-card-names">${names}</span>
        `;

        let detailEl = null;
        header.addEventListener('click', () => {
            if (detailEl) {
                detailEl.remove();
                detailEl = null;
                return;
            }
            detailEl = renderHistoryDetail(record);
            entry.appendChild(detailEl);
        });

        entry.appendChild(header);
        historyList.appendChild(entry);
    });
}

// ---------------------------------------------------------------------
// Share / save the finished reading
// ---------------------------------------------------------------------
function buildShareText() {
    const spreadName = SPREADS[currentSpreadType] ? SPREADS[currentSpreadType].name : '';
    const topicLabel = (TOPICS[currentTopic] || TOPICS.general).label;
    const lines = drawnCards.map((c, i) => {
        const slotName = SPREADS[currentSpreadType].slots[i];
        const dir = c.isReversed ? '逆位' : '正位';
        return `${slotName}：${c.name}（${dir}）`;
    });
    return `✦ 神祕星辰塔羅牌 ✦\n牌陣：${spreadName}　主題：${topicLabel}\n${lines.join('\n')}\n\n來自 神祕星辰塔羅 Celestial Tarot`;
}

async function shareReading() {
    const shareText = buildShareText();

    // Try the native share sheet first (mobile browsers mostly); it can share
    // an image file directly if the browser supports file sharing.
    if (navigator.share) {
        try {
            if (typeof html2canvas === 'function' && navigator.canShare) {
                const canvas = await html2canvas(readingResult, { backgroundColor: '#030206', scale: 2 });
                const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
                const file = new File([blob], 'tarot-reading.png', { type: 'image/png' });
                if (navigator.canShare({ files: [file] })) {
                    await navigator.share({ files: [file], title: '我的塔羅占卜結果', text: shareText });
                    return;
                }
            }
            await navigator.share({ title: '我的塔羅占卜結果', text: shareText });
            return;
        } catch (e) {
            // user cancelled the share sheet, or an image step failed — fall through to the download/copy path below
        }
    }

    // Fallback for desktop / unsupported browsers: download a PNG image of the
    // result, and also copy the text summary to the clipboard.
    try {
        if (typeof html2canvas === 'function') {
            const canvas = await html2canvas(readingResult, { backgroundColor: '#030206', scale: 2 });
            const link = document.createElement('a');
            link.download = 'tarot-reading.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    } catch (e) { /* image export not available, text copy below still runs */ }

    try {
        await navigator.clipboard.writeText(shareText);
        const original = shareResultBtn.textContent;
        shareResultBtn.textContent = '已複製文字 + 下載圖片 ✓';
        setTimeout(() => { shareResultBtn.textContent = original; }, 2200);
    } catch (e) { /* clipboard not available; the image download above is still useful */ }
}

// Add event listener to the central card deck
document.querySelector('.mystic-deck').addEventListener('click', () => {
    if (drawnCards.length < SPREADS[currentSpreadType].slots.length) {
        drawCard();
    }
});

document.querySelector('.mystic-deck').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (drawnCards.length < SPREADS[currentSpreadType].slots.length) {
            drawCard();
        }
    }
});

// Sound on/off toggle — persisted across visits
const soundToggleBtn = document.getElementById('soundToggleBtn');
function refreshSoundToggleUI() {
    if (!soundToggleBtn) return;
    soundToggleBtn.textContent = soundMuted ? '🔇' : '🔈';
    soundToggleBtn.classList.toggle('muted', soundMuted);
    soundToggleBtn.setAttribute('aria-pressed', soundMuted ? 'true' : 'false');
    soundToggleBtn.setAttribute('aria-label', soundMuted ? '開啟音效' : '關閉音效');
}
if (soundToggleBtn) {
    refreshSoundToggleUI();
    soundToggleBtn.addEventListener('click', () => {
        soundMuted = !soundMuted;
        try { localStorage.setItem('tarotSoundMuted', soundMuted ? '1' : '0'); } catch (e) { /* ignore */ }
        refreshSoundToggleUI();
    });
}

resetBtn.addEventListener('click', resetReading);

// Reading history view
if (historyLinkBtn) {
    historyLinkBtn.addEventListener('click', () => {
        renderHistoryList();
        showView('history');
    });
}
if (historyBackBtn) historyBackBtn.addEventListener('click', () => showView('select'));
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        try { localStorage.removeItem(HISTORY_KEY); } catch (e) { /* ignore */ }
        renderHistoryList();
    });
}

// Share / save result button
if (shareResultBtn) {
    shareResultBtn.addEventListener('click', () => {
        shareReading();
    });
}

// Init on load
window.addEventListener('DOMContentLoaded', () => {
    initSpreads();
    initTopicSelector();
    showView('select');
});
