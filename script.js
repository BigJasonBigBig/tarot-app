// Mystic Tarot Web App - Controller Logic

// Shared card-back illustration is defined in tarot-data.js
const SPREADS = {
    single: {
        name: "每日占卜 (Single Card)",
        slots: ["今日指引"]
    },
    three: {
        name: "三牌占卜 (Past, Present, Future)",
        slots: ["過去 (Past)", "現在 (Present)", "未來 (Future)"]
    },
    relationship: {
        name: "關係牌陣 (Relationship Spread)",
        slots: ["你的狀態 (You)", "對方的狀態 (The Other)", "你們的連結 (The Connection)"]
    },
    love: {
        name: "愛情牌陣 (Love Spread)",
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

let currentSpreadType = 'single';
let drawnCards = [];
let shuffledDeck = [];

// Initialize Web Audio API for atmospheric sound effects
let audioCtx = null;
function playDrawSound() {
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
const actionContainer = document.getElementById('actionContainer');
const resetBtn = document.getElementById('resetBtn');

// Setup Spread Buttons
function initSpreads() {
    spreadSelector.innerHTML = '';
    Object.keys(SPREADS).forEach(key => {
        const btn = document.createElement('button');
        btn.classList.add('spread-btn');
        if (key === currentSpreadType) btn.classList.add('active');
        btn.textContent = SPREADS[key].name;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-pressed', key === currentSpreadType ? 'true' : 'false');
        btn.addEventListener('click', (e) => selectSpread(key, e.currentTarget));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectSpread(key, e.currentTarget);
            }
        });
        spreadSelector.appendChild(btn);
    });
}

function selectSpread(type, targetBtn) {
    if (drawnCards.length > 0 && !confirm("切換牌陣將會重置當前的占卜，確定要切換嗎？")) {
        return;
    }
    currentSpreadType = type;
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.setAttribute('aria-pressed', 'true');
    }
    resetReading();
}

function resetReading() {
    drawnCards = [];
    readingResult.classList.remove('visible');
    actionContainer.style.display = 'none';
    
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
                <div class="tarot-card">
                    <div class="card-face back">
                        <div class="inner-pattern">${CARD_BACK_SVG}</div>
                    </div>
                </div>
            </div>
        `;
        spreadBoard.appendChild(slotContainer);
    });
    
    deckStatus.textContent = `請點擊牌堆抽取第 1 張牌 (${SPREADS[currentSpreadType].name})`;
    const deckEl = document.querySelector('.mystic-deck');
    deckEl.style.pointerEvents = 'auto';
    deckEl.style.opacity = '1';
    deckEl.setAttribute('tabindex', '0');
    deckEl.setAttribute('aria-disabled', 'false');
    
    // Dynamically update static deck cards on reset to use the new beautiful card backs
    const staticDecks = document.querySelectorAll('.deck-card');
    staticDecks.forEach(deck => {
        deck.innerHTML = `<div class="card-back-pattern">${CARD_BACK_SVG}</div>`;
    });
}

function drawCard() {
    const totalSlots = SPREADS[currentSpreadType].slots.length;
    if (drawnCards.length >= totalSlots) return;

    playDrawSound();

    const currentSlotIndex = drawnCards.length;
    const cardData = shuffledDeck.pop();
    const isReversed = Math.random() < 0.3; // 30% chance of being reversed
    
    drawnCards.push({
        ...cardData,
        isReversed
    });

    const slotCardEl = document.querySelector(`#slot-${currentSlotIndex} .tarot-card`);

    // Web-optimized card artwork (compressed copies of the files in /cards).
    // Falls back to the built-in SVG illustration below if the image is missing.
    const imagePath = `assets/cards/${cardData.id}.jpg`;

    // Set card face inside the slot with corner borders
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

    // Apply animation classes
    setTimeout(() => {
        if (isReversed) {
            slotCardEl.classList.add('reversed');
        }
        slotCardEl.classList.add('flipped');
    }, 100);

    // Update instruction
    if (drawnCards.length < totalSlots) {
        deckStatus.textContent = `請點擊牌堆抽取第 ${drawnCards.length + 1} 張牌`;
    } else {
        deckStatus.textContent = "抽牌完成，正在為您解讀命運之書...";
        const deckEl = document.querySelector('.mystic-deck');
        deckEl.style.pointerEvents = 'none';
        deckEl.style.opacity = '0.5';
        deckEl.setAttribute('tabindex', '-1');
        deckEl.setAttribute('aria-disabled', 'true');
        setTimeout(revealInterpretations, 1200);
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

function revealInterpretations() {
    explanationList.innerHTML = '';
    const slots = SPREADS[currentSpreadType].slots;

    drawnCards.forEach((card, index) => {
        const item = document.createElement('div');
        item.classList.add('explanation-item');

        const directionText = card.isReversed ? '逆位 (Reversed)' : '正位 (Upright)';
        const directionClass = card.isReversed ? 'tag-reversed' : 'tag-upright';
        const interpretation = card.isReversed ? card.reversed : card.upright;
        const suitInfo = getSuitInfo(card.id);
        item.style.setProperty('--accent', suitInfo.color);

        item.innerHTML = `
            <div class="explanation-header">
                <span class="explanation-suit ${suitInfo.className}">${suitInfo.label}</span>
                <span class="explanation-card-name">${card.name}</span>
                <span class="explanation-tag ${directionClass}">${directionText}</span>
                <span class="explanation-slot">【${slots[index]}】</span>
            </div>
            <div class="explanation-keywords">關鍵字：${card.keywords}</div>
            <div class="explanation-desc"><strong>牌面意象：</strong>${card.desc}</div>
            <div class="explanation-desc"><strong>命運解讀：</strong>${interpretation}</div>
        `;
        explanationList.appendChild(item);
    });

    readingResult.classList.add('visible');
    actionContainer.style.display = 'flex';
    deckStatus.textContent = "星辰已為您指明道路。";
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

resetBtn.addEventListener('click', resetReading);

// Init on load
window.addEventListener('DOMContentLoaded', () => {
    initSpreads();
    resetReading();
});
