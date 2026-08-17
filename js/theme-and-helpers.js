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
// Apply immediately (before the rest of the DOM/JS finishes setting up) so
// a returning visitor's chosen theme is already in effect the instant the
// page paints, rather than flashing the classic colors first.
document.body.classList.toggle('theme-ukiyo', deckStyle === 'ukiyo');

function cardImageFolder() {
    return deckStyle === 'ukiyo' ? 'assets/cards-ukiyo' : 'assets/cards';
}

function cardBackPath() {
    return deckStyle === 'ukiyo' ? 'assets/card-back-ukiyo.jpg' : 'assets/card-back.jpg';
}

function coverArtPath() {
    return deckStyle === 'ukiyo' ? 'assets/cover-ukiyo.jpg' : 'assets/cover.jpg';
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
    document.querySelectorAll('img[data-card-back]').forEach(img => {
        img.src = cardBackPath();
        img.style.display = '';
    });
    const coverImg = document.getElementById('coverArtImg');
    if (coverImg) coverImg.src = coverArtPath();
}

// One entry point for switching deck style everywhere it matters: the
// stored preference, the toggle button's icon/label, every rendered card
// image/back/cover already on screen, and — for the Japanese style — the
// site's overall color theme (see body.theme-ukiyo in style.css).
function applyDeckStyle(style) {
    deckStyle = (style === 'ukiyo') ? 'ukiyo' : 'classic';
    try { localStorage.setItem('tarotDeckStyle', deckStyle); } catch (e) { /* ignore */ }
    document.body.classList.toggle('theme-ukiyo', deckStyle === 'ukiyo');
    refreshDeckStyleToggleUI();
    refreshCardImagesForDeckStyle();
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

