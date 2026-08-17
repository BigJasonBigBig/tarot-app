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

