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

// Deck art style — 'classic' (original artwork) or 'ukiyo' (Japanese
// ukiyo-e style artwork), persisted across visits.
let deckStyle = 'classic';
try {
    const savedDeckStyle = localStorage.getItem('tarotDeckStyle');
    if (savedDeckStyle === 'ukiyo' || savedDeckStyle === 'classic') deckStyle = savedDeckStyle;
} catch (e) { /* ignore */ }

function cardImageFolder() {
    return deckStyle === 'ukiyo' ? 'assets/cards-ukiyo' : 'assets/cards';
}

// Re-points every already-rendered card image (front faces + birth card) at
// the currently selected deck style, so switching mid-session updates cards
// that are already on screen instead of only affecting future draws.
function refreshCardImagesForDeckStyle() {
    document.querySelectorAll('img[data-card-id]').forEach(img => {
        const id = img.getAttribute('data-card-id');
        if (!id) return;
        img.src = `${cardImageFolder()}/${id}.jpg`;
        img.style.display = '';
        const fallback = img.nextElementSibling;
        if (fallback && fallback.classList && fallback.classList.contains('svg-fallback')) {
            fallback.style.display = 'none';
        }
    });
}

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
const viewNatalChart = document.getElementById('viewNatalChart');
const natalChartLinkBtn = document.getElementById('natalChartLinkBtn');
const natalChartBackBtn = document.getElementById('natalChartBackBtn');
const natalDateInput = document.getElementById('natalDateInput');
const natalTimeInput = document.getElementById('natalTimeInput');
const natalCitySelect = document.getElementById('natalCitySelect');
const natalManualRow = document.getElementById('natalManualRow');
const natalLatInput = document.getElementById('natalLatInput');
const natalLonInput = document.getElementById('natalLonInput');
const natalUtcSelect = document.getElementById('natalUtcSelect');
const calcNatalChartBtn = document.getElementById('calcNatalChartBtn');
const natalResult = document.getElementById('natalResult');

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
    viewNatalChart.hidden = name !== 'natal';
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

    const imagePath = `${cardImageFolder()}/${card.id}.jpg`;
    birthCardResult.hidden = false;
    birthCardResult.innerHTML = `
        <div class="birthcard-card">
            <img src="${imagePath}" alt="${card.name}" data-card-id="${card.id}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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

// ---------------------------------------------------------------------
// Natal Chart — real astronomical calculation via astrology.js /
// astronomy-engine, rendered as an SVG wheel + a plain-language list.
// ---------------------------------------------------------------------
const NATAL_STORAGE_KEY = 'tarotNatalForm';

function initNatalForm() {
    if (!natalCitySelect || !window.TarotAstrology) return;

    natalCitySelect.innerHTML = '';
    window.TarotAstrology.CITY_PRESETS.forEach((city, i) => {
        const opt = document.createElement('option');
        opt.value = String(i);
        opt.textContent = city.label;
        natalCitySelect.appendChild(opt);
    });
    const manualOpt = document.createElement('option');
    manualOpt.value = 'manual';
    manualOpt.textContent = '其他 / 手動輸入座標';
    natalCitySelect.appendChild(manualOpt);

    const UTC_OFFSETS = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -2, -1, 0,
        1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14];
    natalUtcSelect.innerHTML = '';
    UTC_OFFSETS.forEach(off => {
        const opt = document.createElement('option');
        opt.value = String(off);
        opt.textContent = `UTC${off >= 0 ? '+' : ''}${off}`;
        if (off === 8) opt.selected = true;
        natalUtcSelect.appendChild(opt);
    });

    natalCitySelect.addEventListener('change', () => {
        natalManualRow.hidden = natalCitySelect.value !== 'manual';
    });

    natalDateInput.max = new Date().toISOString().slice(0, 10);

    // Restore last-used inputs, same convenience as the birth-card form.
    try {
        const saved = JSON.parse(localStorage.getItem(NATAL_STORAGE_KEY) || 'null');
        if (saved) {
            if (saved.date) natalDateInput.value = saved.date;
            if (saved.time) natalTimeInput.value = saved.time;
            if (saved.city !== undefined) {
                natalCitySelect.value = saved.city;
                natalManualRow.hidden = saved.city !== 'manual';
            }
            if (saved.lat !== undefined) natalLatInput.value = saved.lat;
            if (saved.lon !== undefined) natalLonInput.value = saved.lon;
            if (saved.utc !== undefined) natalUtcSelect.value = saved.utc;
        }
    } catch (e) { /* ignore */ }
}

// Converts an ecliptic longitude into an on-screen angle (degrees, standard
// math convention: 0°=east/3 o'clock, increasing counter-clockwise), such
// that the Ascendant always sits at 180° (9 o'clock) — the standard way
// natal wheels are drawn.
function natalScreenAngle(elon, ascendant) {
    return window.TarotAstrology.norm360(180 + elon - ascendant);
}

function natalPolarPoint(cx, cy, r, elon, ascendant) {
    const rad = natalScreenAngle(elon, ascendant) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

// Builds an annular wedge (a "ring slice") as a sampled polygon, avoiding
// any need to reason about SVG arc sweep-flag direction.
function natalAnnularWedgePath(cx, cy, rInner, rOuter, elonStart, elonEnd, ascendant) {
    const steps = 10;
    let pts = [];
    for (let i = 0; i <= steps; i++) {
        const e = elonStart + (elonEnd - elonStart) * (i / steps);
        pts.push(natalPolarPoint(cx, cy, rOuter, e, ascendant));
    }
    for (let i = steps; i >= 0; i--) {
        const e = elonStart + (elonEnd - elonStart) * (i / steps);
        pts.push(natalPolarPoint(cx, cy, rInner, e, ascendant));
    }
    return 'M ' + pts.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' L ') + ' Z';
}

// Spreads planets across a few concentric radius "bands" so ones that are
// close together in the zodiac don't render on top of each other.
function natalAssignPlanetBands(planets, ascendant) {
    const bands = [136, 118, 100];
    const minGapDeg = 8;
    const lastAngleInBand = [null, null, null];
    const sorted = [...planets].sort((a, b) => a.elon - b.elon);
    const bandOf = {};
    sorted.forEach(p => {
        const angle = natalScreenAngle(p.elon, ascendant);
        let chosen = 0;
        for (let b = 0; b < bands.length; b++) {
            if (lastAngleInBand[b] === null || Math.abs(((angle - lastAngleInBand[b] + 540) % 360) - 180) >= (180 - minGapDeg)) {
                chosen = b;
                break;
            }
            chosen = b; // fall back to the last band checked if all conflict
        }
        lastAngleInBand[chosen] = angle;
        bandOf[p.body] = bands[chosen];
    });
    return bandOf;
}

const NATAL_ASPECT_COLORS = { soft: '#38bdf8', hard: '#f87171', neutral: 'rgba(223,186,71,0.35)' };

function buildNatalWheelSVG(chart) {
    const cx = 200, cy = 200;
    // Radial layout, outside-in: zodiac wedge ring (165-190) -> degree tick
    // band (155-165) -> house-cusp band (42-155) -> aspect lines (r=120,
    // inside the house band) -> center.
    const outerR = 190, zodiacInnerR = 165, tickOuterR = 165, houseRingOuter = 155, houseInnerR = 42, aspectR = 120;
    const { ZODIAC_SIGNS, computeAspects } = window.TarotAstrology;
    const asc = chart.ascendant;

    // Extra margin around the 0-400 wheel so edge labels (ASC/MC) never get
    // clipped by the SVG canvas, whatever angle they land at.
    let svg = `<svg viewBox="-25 -25 450 450" class="natal-wheel-svg" role="img" aria-label="本命星盤輪圖">`;

    // Solid backing disc so the page's background watermark doesn't show
    // through the middle of the wheel and muddy the reading.
    svg += `<circle cx="${cx}" cy="${cy}" r="${outerR}" fill="#0a0714"/>`;

    // Zodiac ring: 12 wedges, alternating shade so signs are easy to tell apart
    ZODIAC_SIGNS.forEach((sign, i) => {
        const elonStart = i * 30, elonEnd = i * 30 + 30;
        const path = natalAnnularWedgePath(cx, cy, zodiacInnerR, outerR, elonStart, elonEnd, asc);
        const fill = i % 2 === 0 ? 'rgba(223,186,71,0.09)' : 'rgba(223,186,71,0.025)';
        svg += `<path d="${path}" fill="${fill}" stroke="rgba(223,186,71,0.35)" stroke-width="0.6"/>`;
        const mid = natalPolarPoint(cx, cy, (zodiacInnerR + outerR) / 2, elonStart + 15, asc);
        svg += `<text x="${mid.x.toFixed(1)}" y="${mid.y.toFixed(1)}" class="natal-sign-glyph" text-anchor="middle" dominant-baseline="middle">${sign.symbol}</text>`;
    });

    // Degree tick ring just inside the zodiac wedges — longer ticks every
    // 10°, short ticks every 2°, echoing a real ephemeris wheel's rim.
    for (let d = 0; d < 360; d += 2) {
        const isMajor = d % 10 === 0;
        const r1 = tickOuterR;
        const r2 = isMajor ? tickOuterR - 10 : tickOuterR - 5;
        const p1 = natalPolarPoint(cx, cy, r1, d, asc);
        const p2 = natalPolarPoint(cx, cy, r2, d, asc);
        svg += `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="rgba(223,186,71,${isMajor ? 0.55 : 0.25})" stroke-width="${isMajor ? 0.9 : 0.5}"/>`;
    }

    // House cusp lines + house numbers (Equal House: cusp i = Ascendant + i*30)
    for (let i = 0; i < 12; i++) {
        const cuspElon = asc + i * 30;
        const p1 = natalPolarPoint(cx, cy, houseInnerR, cuspElon, asc);
        const p2 = natalPolarPoint(cx, cy, houseRingOuter, cuspElon, asc);
        svg += `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="rgba(223,186,71,0.3)" stroke-width="0.6"/>`;
        const numPos = natalPolarPoint(cx, cy, houseInnerR + 16, cuspElon + 15, asc);
        svg += `<text x="${numPos.x.toFixed(1)}" y="${numPos.y.toFixed(1)}" class="natal-house-num" text-anchor="middle" dominant-baseline="middle">${i + 1}</text>`;
    }

    // ASC / DSC / MC / IC axis lines, drawn thicker
    const ascP1 = natalPolarPoint(cx, cy, houseInnerR, asc, asc);
    const ascP2 = natalPolarPoint(cx, cy, outerR, asc, asc);
    svg += `<line x1="${ascP1.x.toFixed(1)}" y1="${ascP1.y.toFixed(1)}" x2="${ascP2.x.toFixed(1)}" y2="${ascP2.y.toFixed(1)}" stroke="#dfba47" stroke-width="1.4"/>`;
    const dscP2 = natalPolarPoint(cx, cy, outerR, asc + 180, asc);
    svg += `<line x1="${cx}" y1="${cy}" x2="${dscP2.x.toFixed(1)}" y2="${dscP2.y.toFixed(1)}" stroke="rgba(223,186,71,0.5)" stroke-width="0.8"/>`;
    const mcP2 = natalPolarPoint(cx, cy, outerR, chart.midheaven, asc);
    svg += `<line x1="${cx}" y1="${cy}" x2="${mcP2.x.toFixed(1)}" y2="${mcP2.y.toFixed(1)}" stroke="#dfba47" stroke-width="1.4" stroke-dasharray="2 2"/>`;

    const ascLabel = natalPolarPoint(cx, cy, outerR + 10, asc, asc);
    svg += `<text x="${ascLabel.x.toFixed(1)}" y="${ascLabel.y.toFixed(1)}" class="natal-axis-label" text-anchor="middle" dominant-baseline="middle">ASC</text>`;
    const mcLabel = natalPolarPoint(cx, cy, outerR + 10, chart.midheaven, asc);
    svg += `<text x="${mcLabel.x.toFixed(1)}" y="${mcLabel.y.toFixed(1)}" class="natal-axis-label" text-anchor="middle" dominant-baseline="middle">MC</text>`;

    // Inner boundary circle (the "aspect ring" floor)
    svg += `<circle cx="${cx}" cy="${cy}" r="${houseInnerR}" fill="none" stroke="rgba(223,186,71,0.3)" stroke-width="0.6"/>`;

    // Aspect lines — the web of relationships between planets, drawn from
    // each planet's true position (not its band-nudged label position) so
    // the geometry stays astronomically honest even when labels are spread
    // out to avoid overlapping.
    const aspects = computeAspects(chart.planets);
    aspects.forEach(asp => {
        if (asp.tone === 'neutral') return; // conjunctions: bodies already sit together, a line adds no info
        const pa = chart.planets.find(p => p.body === asp.a);
        const pb = chart.planets.find(p => p.body === asp.b);
        if (!pa || !pb) return;
        const pointA = natalPolarPoint(cx, cy, aspectR, pa.elon, asc);
        const pointB = natalPolarPoint(cx, cy, aspectR, pb.elon, asc);
        svg += `<line x1="${pointA.x.toFixed(1)}" y1="${pointA.y.toFixed(1)}" x2="${pointB.x.toFixed(1)}" y2="${pointB.y.toFixed(1)}" stroke="${NATAL_ASPECT_COLORS[asp.tone]}" stroke-width="1" opacity="0.7"/>`;
    });

    // Planets, spread across radius bands to avoid overlap, with a thin
    // leader line back to their true position on the zodiac ring.
    const bandOf = natalAssignPlanetBands(chart.planets, asc);
    chart.planets.forEach(p => {
        const band = bandOf[p.body];
        const tick = natalPolarPoint(cx, cy, zodiacInnerR - 2, p.elon, asc);
        const glyph = natalPolarPoint(cx, cy, band, p.elon, asc);
        svg += `<line x1="${tick.x.toFixed(1)}" y1="${tick.y.toFixed(1)}" x2="${glyph.x.toFixed(1)}" y2="${glyph.y.toFixed(1)}" stroke="rgba(223,186,71,0.35)" stroke-width="0.5"/>`;
        svg += `<circle cx="${glyph.x.toFixed(1)}" cy="${glyph.y.toFixed(1)}" r="10" fill="#0a0714" stroke="${p.retrograde ? '#f87171' : (p.color || '#dfba47')}" stroke-width="1.4"/>`;
        svg += `<text x="${glyph.x.toFixed(1)}" y="${glyph.y.toFixed(1)}" class="natal-planet-glyph" text-anchor="middle" dominant-baseline="middle" fill="${p.color || '#f8fafc'}">${p.symbol}</text>`;
    });

    // Crisp outer edge, drawn last so it sits cleanly on top of everything.
    svg += `<circle cx="${cx}" cy="${cy}" r="${outerR}" fill="none" stroke="#dfba47" stroke-width="1.2"/>`;

    svg += `</svg>`;
    return svg;
}

// Vivid, varied colors cycled across every tile so the grid reads as
// colorful/lively rather than the site's usual muted gold-on-black.
const NATAL_TILE_PALETTE = [
    '#f97316', '#f43f5e', '#eab308', '#22c55e', '#06b6d4', '#3b82f6',
    '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#84cc16', '#0ea5e9',
    '#a855f7', '#ef4444', '#22d3ee', '#fb7185'
];
function natalTileColor(i) {
    return NATAL_TILE_PALETTE[i % NATAL_TILE_PALETTE.length];
}

function renderNatalResult(chart) {
    const { ascendantSign, ascendantDegree, midheavenSign, midheavenDegree } = chart;
    const wheelSvg = buildNatalWheelSVG(chart);
    const { HOUSE_MEANINGS } = window.TarotAstrology;

    // Which houses actually have a planet in them. Only up to 10 of the 12
    // houses can ever hold one of the 10 classical planets, so some houses
    // are always "empty" — that's normal, not a bug, but it needs to be
    // obvious on the tile itself rather than only after opening it.
    const occupantsByHouse = {};
    chart.planets.forEach(p => {
        occupantsByHouse[p.house] = occupantsByHouse[p.house] || [];
        occupantsByHouse[p.house].push(p);
    });

    let tileIndex = 0;
    const nextColor = () => natalTileColor(tileIndex++);
    const tiles = [];

    // Wheel tile — bigger, artwork always visible on the small tile; on
    // hover/tap the spotlight shows a larger copy of the same wheel plus
    // the aspect-color legend, centered on screen.
    tiles.push(`
        <div class="natal-tile natal-tile-wheel" style="--tile-color:${nextColor()}" tabindex="0">
            <div class="natal-tile-face">
                <div class="natal-tile-wheel-svg">${wheelSvg}</div>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">✦ 星盤輪圖</strong>
                <div class="natal-spotlight-wheel-svg">${wheelSvg}</div>
                <span class="natal-legend">
                    <span class="natal-legend-item"><i class="natal-legend-swatch" style="background:#38bdf8"></i>調和相位（六分／三分）</span>
                    <span class="natal-legend-item"><i class="natal-legend-swatch" style="background:#f87171"></i>緊張相位（四分／對分）</span>
                </span>
            </div>
        </div>
    `);

    tiles.push(`
        <div class="natal-tile" style="--tile-color:${nextColor()}" tabindex="0">
            <div class="natal-tile-face">
                <span class="natal-tile-icon">${ascendantSign.symbol}</span>
                <span class="natal-tile-label">上升 ASC</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">上升星座 ASC</strong>
                <p>${ascendantSign.symbol} ${ascendantSign.name} ${ascendantDegree.toFixed(1)}°</p>
                <p>上升星座（Ascendant）是你出生當下、東方地平線正在升起的星座，代表你給別人的第一印象、外在行為模式，以及剛接觸新環境時最直覺的反應方式——很多時候比太陽星座更貼近你日常展現出來的「表面性格」。</p>
                <p>你的上升在${ascendantSign.name}，這股特質會${ascendantSign.trait}。</p>
            </div>
        </div>
    `);

    tiles.push(`
        <div class="natal-tile" style="--tile-color:${nextColor()}" tabindex="0">
            <div class="natal-tile-face">
                <span class="natal-tile-icon">${midheavenSign.symbol}</span>
                <span class="natal-tile-label">天頂 MC</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">天頂 MC</strong>
                <p>${midheavenSign.symbol} ${midheavenSign.name} ${midheavenDegree.toFixed(1)}°</p>
                <p>天頂（Midheaven, MC）是本命盤最高點，象徵你的社會形象、事業方向與想在世界上留下的成就與名聲，也常與人生中扮演權威角色的長輩（例如父母其中一方）有關。</p>
                <p>你的天頂在${midheavenSign.name}，這股特質會${midheavenSign.trait}。</p>
            </div>
        </div>
    `);

    const { PLANET_HOUSE_INSIGHTS } = window.TarotAstrology;
    chart.planets.forEach(p => {
        const combo = (PLANET_HOUSE_INSIGHTS[p.body] || {})[p.house];
        tiles.push(`
            <div class="natal-tile" style="--tile-color:${nextColor()}" tabindex="0">
                <div class="natal-tile-face">
                    <span class="natal-tile-icon">${p.symbol}</span>
                    <span class="natal-tile-label">${p.label}${p.retrograde ? ' R' : ''}</span>
                </div>
                <div class="natal-tile-detail">
                    <strong class="natal-tile-detail-title">${p.symbol} ${p.label}${p.retrograde ? '<span class="natal-retro-badge">R 逆行</span>' : ''}</strong>
                    <p>${p.sign.symbol} ${p.sign.name} ${p.degree.toFixed(1)}°　第 ${p.house} 宮（${p.houseMeaning.name}）</p>
                    <p><strong class="natal-tile-subhead">${p.label}代表：</strong>${p.meaning}</p>
                    <p><strong class="natal-tile-subhead">落在${p.sign.name}：</strong>這股特質會${p.sign.trait}。</p>
                    <p><strong class="natal-tile-subhead">第 ${p.house} 宮（${p.houseMeaning.name}）代表：</strong>${p.houseMeaning.keyword}。${p.houseMeaning.description}</p>
                    ${combo ? `<p><strong class="natal-tile-subhead">${p.label}落在${p.houseMeaning.name}：</strong>${combo}</p>` : ''}
                    ${p.retrograde ? '<p class="natal-tile-retro-note">這顆星目前是逆行狀態，它的能量常會轉向內在，需要多一層反思、重新整理過後才會展現出來，而不是直接向外行動。</p>' : ''}
                </div>
            </div>
        `);
    });

    HOUSE_MEANINGS.forEach(h => {
        const occupants = occupantsByHouse[h.number] || [];
        const hasOccupants = occupants.length > 0;
        // Each occupying planet gets its own combo write-up right here too
        // (not just on the planet's own tile) — so browsing by house also
        // answers "my Pluto is here, so what does that actually mean?"
        // without having to go hunt down the planet's tile separately.
        const occupantDetails = occupants.map(p => {
            const combo = (PLANET_HOUSE_INSIGHTS[p.body] || {})[h.number];
            return `
                <div class="natal-tile-occupant-detail">
                    <strong class="natal-tile-subhead">${p.symbol} ${p.label}${p.retrograde ? '<span class="natal-retro-badge">R 逆行</span>' : ''} 落在這裡：</strong>
                    <span>${combo || (p.meaning + '。')}</span>
                </div>`;
        }).join('');
        tiles.push(`
            <div class="natal-tile${hasOccupants ? '' : ' natal-tile-house-empty'}" style="--tile-color:${nextColor()}" tabindex="0">
                <div class="natal-tile-face">
                    <span class="natal-tile-badge">${h.number}</span>
                    <span class="natal-tile-label">${h.name}</span>
                    ${hasOccupants
                        ? `<span class="natal-tile-face-occupants">${occupants.map(p => p.symbol).join(' ')}</span>`
                        : `<span class="natal-tile-face-empty">無行星</span>`}
                </div>
                <div class="natal-tile-detail">
                    <strong class="natal-tile-detail-title">第${h.number}宮・${h.name}</strong>
                    <p class="natal-tile-keyword">${h.keyword}</p>
                    <p>${h.description}</p>
                    ${hasOccupants
                        ? `<div class="natal-tile-occupants">${occupantDetails}</div>`
                        : `<p class="natal-tile-occupants natal-tile-occupants-empty">這一宮目前沒有你的行星坐落，僅供對照參考——宮頭星座與宮主星仍會影響這個領域怎麼展現。</p>`}
                </div>
            </div>
        `);
    });

    // Whole chart is laid out as one grid of tiles (left-to-right,
    // top-to-bottom) instead of a long scroll — each tile gently "breathes",
    // and hovering/tapping it shows its full detail centered on screen via
    // the shared spotlight overlay (rather than growing in place, which
    // gets clipped near the grid's edges).
    natalResult.hidden = false;
    natalResult.innerHTML = `
        <p class="natal-tile-caption">💫 星盤輪圖、上升、天頂與 10 顆行星都是你獨有的計算結果。十二宮位中，<strong>顏色飽滿、標出行星符號</strong>的代表你的行星真的落在那一宮；<strong>顏色黯淡、標示「無行星」</strong>的宮位目前沒有你的行星坐落，僅供對照參考。</p>
        <div class="natal-tile-grid">${tiles.join('')}</div>
        <div class="natal-spotlight" id="natalSpotlight">
            <div class="natal-spotlight-inner" id="natalSpotlightInner"></div>
        </div>
    `;

    // Hover (desktop) shows the spotlight immediately; mouseenter/mouseleave
    // don't bubble so each tile gets its own listener rather than relying on
    // the delegated click handler below.
    natalResult.querySelectorAll('.natal-tile').forEach(tile => {
        tile.addEventListener('mouseenter', () => showNatalSpotlight(tile));
        tile.addEventListener('mouseleave', () => hideNatalSpotlight());
        tile.addEventListener('focus', () => showNatalSpotlight(tile));
        tile.addEventListener('blur', () => hideNatalSpotlight());
    });
}

// Populates and reveals the centered spotlight card with a given tile's
// detail content (cloned, not moved, so the small tile itself is untouched
// and keeps breathing in place).
function showNatalSpotlight(tile) {
    const spotlight = document.getElementById('natalSpotlight');
    const inner = document.getElementById('natalSpotlightInner');
    if (!spotlight || !inner) return;
    const detailEl = tile.querySelector('.natal-tile-detail');
    if (!detailEl) return;
    inner.innerHTML = detailEl.innerHTML;
    const color = tile.style.getPropertyValue('--tile-color');
    if (color) inner.style.setProperty('--tile-color', color);
    spotlight.classList.add('active');
}
function hideNatalSpotlight() {
    const spotlight = document.getElementById('natalSpotlight');
    if (spotlight) spotlight.classList.remove('active');
}

// Click/tap delegation for the natal tile grid — desktop gets the spotlight
// via hover for free (above), but touch devices have no hover, so tapping a
// tile toggles the same spotlight via JS. Added once since natalResult's
// innerHTML is fully rebuilt on every calculation.
function handleNatalTileToggle(e) {
    const tile = e.target.closest && e.target.closest('.natal-tile');
    if (!tile) return;
    const isActive = tile.classList.toggle('active');
    if (isActive) {
        showNatalSpotlight(tile);
    } else {
        hideNatalSpotlight();
    }
}
if (natalResult) {
    natalResult.addEventListener('click', handleNatalTileToggle);
    natalResult.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const tile = e.target.closest && e.target.closest('.natal-tile');
        if (!tile) return;
        e.preventDefault();
        const isActive = tile.classList.toggle('active');
        if (isActive) {
            showNatalSpotlight(tile);
        } else {
            hideNatalSpotlight();
        }
    });
}

if (natalChartLinkBtn) {
    natalChartLinkBtn.addEventListener('click', () => {
        showView('natal');
    });
}
if (natalChartBackBtn) natalChartBackBtn.addEventListener('click', () => showView('select'));

if (calcNatalChartBtn) {
    calcNatalChartBtn.addEventListener('click', () => {
        const dateVal = natalDateInput.value;
        const timeVal = natalTimeInput.value;
        if (!dateVal || !timeVal) {
            natalResult.hidden = false;
            natalResult.innerHTML = `<p class="birthcard-error">請先填寫完整的出生日期與時間。</p>`;
            return;
        }

        let lat, lon, utcOffset;
        const cityVal = natalCitySelect.value;
        if (cityVal === 'manual') {
            lat = parseFloat(natalLatInput.value);
            lon = parseFloat(natalLonInput.value);
            utcOffset = parseFloat(natalUtcSelect.value);
            if (Number.isNaN(lat) || Number.isNaN(lon) || Number.isNaN(utcOffset)) {
                natalResult.hidden = false;
                natalResult.innerHTML = `<p class="birthcard-error">請輸入完整的緯度、經度與時區。</p>`;
                return;
            }
        } else {
            const city = window.TarotAstrology.CITY_PRESETS[parseInt(cityVal, 10)];
            if (!city) {
                natalResult.hidden = false;
                natalResult.innerHTML = `<p class="birthcard-error">請選擇出生地點。</p>`;
                return;
            }
            lat = city.lat;
            lon = city.lon;
            utcOffset = city.utcOffset;
        }

        try {
            localStorage.setItem(NATAL_STORAGE_KEY, JSON.stringify({
                date: dateVal, time: timeVal, city: cityVal,
                lat: natalLatInput.value, lon: natalLonInput.value, utc: natalUtcSelect.value
            }));
        } catch (e) { /* ignore */ }

        try {
            const chart = window.TarotAstrology.computeNatalChart({
                localDateStr: dateVal, localTimeStr: timeVal,
                utcOffsetHours: utcOffset, lat, lon
            });
            renderNatalResult(chart);
        } catch (e) {
            natalResult.hidden = false;
            natalResult.innerHTML = `<p class="birthcard-error">計算時發生問題，請確認輸入內容後再試一次。</p>`;
        }
    });
}

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
    const imagePath = `${cardImageFolder()}/${cardData.id}.jpg`;

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
                <img src="${imagePath}" alt="${cardData.name}" data-card-id="${cardData.id}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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

// Splits a CJK-friendly string into lines that fit maxWidth, breaking on
// individual characters (Chinese text has no spaces to wrap on) but keeping
// ASCII "words" together where reasonable.
function wrapTextForCanvas(ctx, text, maxWidth) {
    const lines = [];
    let current = '';
    for (const ch of text) {
        const test = current + ch;
        if (current && ctx.measureText(test).width > maxWidth) {
            lines.push(current);
            current = ch;
        } else {
            current = test;
        }
    }
    if (current) lines.push(current);
    return lines;
}

// Draws the whole shareable summary onto a canvas 2D context, starting at
// startY, and returns the final Y position — used both to measure the
// required canvas height (dry run on a scratch canvas) and to do the real
// drawing (on the correctly-sized canvas), so the two never disagree.
function drawShareContent(ctx, width, spreadName, topicLabel, cards) {
    const padX = 44;
    const contentWidth = width - padX * 2;
    let y = 56;

    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#dfba47';
    ctx.font = '600 30px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ 神祕星辰塔羅牌 ✦', width / 2, y);
    y += 34;

    ctx.fillStyle = '#b9a984';
    ctx.font = '15px Montserrat, sans-serif';
    ctx.fillText(`牌陣：${spreadName}　主題：${topicLabel}`, width / 2, y);
    y += 28;

    ctx.strokeStyle = 'rgba(223,186,71,0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padX, y);
    ctx.lineTo(width - padX, y);
    ctx.stroke();
    y += 34;

    ctx.textAlign = 'left';
    cards.forEach((c, i) => {
        const dirText = c.isReversed ? '逆位' : '正位';
        const dirColor = c.isReversed ? '#f87171' : '#4ade80';

        ctx.font = '600 20px Cinzel, serif';
        ctx.fillStyle = '#dfba47';
        const nameText = `${c.slotLabel}｜${c.name}`;
        ctx.fillText(nameText, padX, y);
        const nameWidth = ctx.measureText(nameText).width;

        ctx.font = '13px Montserrat, sans-serif';
        ctx.fillStyle = dirColor;
        ctx.fillText(`〔${dirText}〕`, padX + nameWidth + 12, y);
        y += 24;

        ctx.font = '13px Montserrat, sans-serif';
        ctx.fillStyle = '#8b95a8';
        ctx.fillText(`關鍵字：${c.keywords || ''}`, padX, y);
        y += 22;

        ctx.font = '14px Montserrat, sans-serif';
        ctx.fillStyle = '#e8e8f0';
        const bodyLines = wrapTextForCanvas(ctx, c.interpretation || '', contentWidth);
        bodyLines.forEach(line => {
            ctx.fillText(line, padX, y);
            y += 22;
        });

        y += 10;
        if (i < cards.length - 1) {
            ctx.strokeStyle = 'rgba(223,186,71,0.15)';
            ctx.beginPath();
            ctx.moveTo(padX, y);
            ctx.lineTo(width - padX, y);
            ctx.stroke();
            y += 26;
        }
    });

    y += 18;
    ctx.textAlign = 'center';
    ctx.font = '12px Montserrat, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('神祕星辰塔羅 · Celestial Tarot', width / 2, y);
    y += 30;

    return y;
}

async function buildShareCanvas() {
    if (document.fonts && document.fonts.ready) {
        try { await document.fonts.ready; } catch (e) { /* ignore */ }
    }

    const spreadName = SPREADS[currentSpreadType] ? SPREADS[currentSpreadType].name : '';
    const topicLabel = (TOPICS[currentTopic] || TOPICS.general).label;
    const slots = SPREADS[currentSpreadType].slots;
    const cards = drawnCards.map((c, i) => ({
        slotLabel: slots[i],
        name: c.name,
        isReversed: c.isReversed,
        keywords: c.keywords,
        interpretation: c.isReversed ? c.reversed : c.upright
    }));

    const width = 720;

    // Dry run on a throwaway canvas just to measure the required height —
    // this uses the exact same drawing function, so height and layout can
    // never fall out of sync with each other.
    const scratch = document.createElement('canvas');
    scratch.width = width;
    scratch.height = 10;
    const scratchCtx = scratch.getContext('2d');
    const measuredHeight = drawShareContent(scratchCtx, width, spreadName, topicLabel, cards);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = Math.ceil(measuredHeight) + 20;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0a0714';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(223,186,71,0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);

    drawShareContent(ctx, width, spreadName, topicLabel, cards);

    return canvas;
}

async function shareReading() {
    const shareText = buildShareText();
    let canvas = null;
    try {
        canvas = await buildShareCanvas();
    } catch (e) {
        // drawing failed for some reason — fall back to text-only sharing below
    }

    // Try the native share sheet first (mobile browsers mostly); it can share
    // an image file directly if the browser supports file sharing.
    if (navigator.share) {
        try {
            if (canvas && navigator.canShare) {
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
        if (canvas) {
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

// Deck style toggle — switches between the classic artwork and the
// Japanese ukiyo-e style artwork, updating any cards already on screen.
const deckStyleBtn = document.getElementById('deckStyleBtn');
function refreshDeckStyleToggleUI() {
    if (!deckStyleBtn) return;
    const isUkiyo = deckStyle === 'ukiyo';
    deckStyleBtn.textContent = isUkiyo ? '🎴' : '🃏';
    deckStyleBtn.classList.toggle('ukiyo-active', isUkiyo);
    deckStyleBtn.setAttribute('aria-label', isUkiyo ? '切換為經典牌組' : '切換為浮世繪牌組');
    deckStyleBtn.setAttribute('title', isUkiyo ? '目前：浮世繪風格（點擊切換為經典風格）' : '目前：經典風格（點擊切換為浮世繪風格）');
}
if (deckStyleBtn) {
    refreshDeckStyleToggleUI();
    deckStyleBtn.addEventListener('click', () => {
        deckStyle = deckStyle === 'ukiyo' ? 'classic' : 'ukiyo';
        try { localStorage.setItem('tarotDeckStyle', deckStyle); } catch (e) { /* ignore */ }
        refreshDeckStyleToggleUI();
        refreshCardImagesForDeckStyle();
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

// ---------------------------------------------------------------------
// Background sigil's all-seeing eye — the pupil looks in one of 8
// directions (the 4 cardinal + 4 diagonal) at random, unpredictable
// intervals, never picking the same direction twice in a row.
// ---------------------------------------------------------------------
function initBgEmblemEye() {
    const pupil = document.getElementById('bgEmblemPupil');
    if (!pupil) return;

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return; // stays centered, per the CSS override too

    const reach = 6; // how far the pupil can drift from center, in SVG units
    const directions = [
        { dx: 0, dy: -reach },                                   // up
        { dx: 0, dy: reach },                                    // down
        { dx: -reach, dy: 0 },                                   // left
        { dx: reach, dy: 0 },                                    // right
        { dx: -reach * 0.7, dy: -reach * 0.7 },                  // up-left
        { dx: reach * 0.7, dy: -reach * 0.7 },                   // up-right
        { dx: -reach * 0.7, dy: reach * 0.7 },                   // down-left
        { dx: reach * 0.7, dy: reach * 0.7 },                    // down-right
    ];

    let lastIndex = -1;
    function lookRandomly() {
        let index;
        do {
            index = Math.floor(Math.random() * directions.length);
        } while (index === lastIndex);
        lastIndex = index;

        const dir = directions[index];
        pupil.style.setProperty('--eye-dx', `${dir.dx}px`);
        pupil.style.setProperty('--eye-dy', `${dir.dy}px`);

        // Irregular pause before the next glance — anywhere from ~1.5s to ~5s —
        // so the movement doesn't fall into a predictable rhythm.
        const nextDelay = 1500 + Math.random() * 3500;
        setTimeout(lookRandomly, nextDelay);
    }

    // Give it a beat before the first glance so it doesn't move immediately on load.
    setTimeout(lookRandomly, 1200);
}

// Init on load
window.addEventListener('DOMContentLoaded', () => {
    initSpreads();
    initTopicSelector();
    initNatalForm();
    showView('select');
    initBgEmblemEye();
});
