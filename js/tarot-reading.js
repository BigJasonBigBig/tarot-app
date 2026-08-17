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

    // Build the visual slots on the board. This board isn't shown yet — while
    // drawing, the seeker sees the scatter tray instead (no need to scroll to
    // find the next empty slot); the board only fades in, already fully laid
    // out in its meaningful positions, once every card has been drawn.
    const spreadDef = SPREADS[currentSpreadType];
    const slots = spreadDef.slots;
    spreadBoard.innerHTML = '';
    spreadBoard.className = 'spread-board' + (spreadDef.layoutClass ? ` ${spreadDef.layoutClass}` : '') + ` slots-${slots.length}`;
    spreadBoard.hidden = true;
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

    const scatterTray = document.getElementById('drawScatterTray');
    if (scatterTray) {
        scatterTray.innerHTML = '';
        scatterTray.hidden = false;
    }

    // Dynamically update static deck cards on reset to use the new beautiful card backs
    const staticDecks = document.querySelectorAll('.deck-card');
    staticDecks.forEach(deck => {
        deck.innerHTML = `<img src="${cardBackPath()}" alt="牌背" data-card-back style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="card-back-pattern" style="display: none;">${CARD_BACK_SVG}</div>`;
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
                <img src="${cardBackPath()}" alt="牌背" data-card-back style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
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

    // Drop a small face-down card into the scatter tray at a random tilt —
    // purely a drawing-ceremony visual (the real slot above already has the
    // actual card, in its real meaningful position, ready for later).
    const scatterTray = document.getElementById('drawScatterTray');
    if (scatterTray) {
        const scatterEl = document.createElement('div');
        scatterEl.className = 'scatter-card';
        const scatterRot = (Math.random() * 32 - 16).toFixed(1); // -16deg..+16deg
        scatterEl.style.setProperty('--scatter-rot', `${scatterRot}deg`);
        scatterEl.innerHTML = `<img src="${cardBackPath()}" alt="牌背" data-card-back onerror="this.style.display='none';">`;
        scatterTray.appendChild(scatterEl);
    }

    // Update instruction
    const deckEl = document.querySelector('.mystic-deck');
    if (drawnCards.length < totalSlots) {
        const remaining = totalSlots - drawnCards.length;
        deckStatus.textContent = `請點擊牌堆抽取第 ${drawnCards.length + 1} 張牌・還要抽 ${remaining} 張`;
    } else {
        deckStatus.textContent = "所有的牌已經就位，正在排列牌陣...";
        deckEl.style.pointerEvents = 'none';
        deckEl.style.opacity = '0.5';
        deckEl.setAttribute('tabindex', '-1');
        deckEl.setAttribute('aria-disabled', 'true');

        // Brief pause so the last scattered card is visible for a beat, then
        // swap the scatter tray out for the real spread board — every card
        // is already sitting in its correct, meaningful position.
        setTimeout(() => {
            if (scatterTray) scatterTray.hidden = true;
            spreadBoard.hidden = false;
            spreadBoard.classList.add('settling');
            deckStatus.textContent = "所有的牌已經就位。請依序點擊每一張牌，翻開屬於你的命運訊息。";
            enterRevealPhase();
        }, 650);
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

