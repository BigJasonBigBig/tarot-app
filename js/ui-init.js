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
        applyDeckStyle(deckStyle === 'ukiyo' ? 'classic' : 'ukiyo');
    });
}

// Deck-style choice modal — asked at the start of every visit, before
// anything else is usable. Picking a style applies it immediately (see
// applyDeckStyle) and dismisses the modal; the corner toggle button above
// remains available afterward for switching mid-session.
const deckStyleModal = document.getElementById('deckStyleModal');
if (deckStyleModal) {
    deckStyleModal.querySelectorAll('.deck-style-option').forEach(btn => {
        btn.classList.toggle('selected', btn.getAttribute('data-style') === deckStyle);
        btn.addEventListener('click', () => {
            applyDeckStyle(btn.getAttribute('data-style'));
            deckStyleModal.classList.add('dismissed');
        });
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
if (historyBackBtn) historyBackBtn.addEventListener('click', () => showView('mode'));
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
    initZiweiForm();
    initBaziForm();
    initNameNumForm();
    showView('mode');
    initBgEmblemEye();
});
