// Elements
const spreadSelector = document.getElementById('spreadSelector');
const spreadBoard = document.getElementById('spreadBoard');
const deckStatus = document.getElementById('deckStatus');
const readingResult = document.getElementById('readingResult');
const explanationList = document.getElementById('explanationList');
const revealHint = document.getElementById('revealHint');
const actionContainer = document.getElementById('actionContainer');
const resetBtn = document.getElementById('resetBtn');

const viewModeSelect = document.getElementById('viewModeSelect');
const modeSelectTarotBtn = document.getElementById('modeSelectTarotBtn');
const modeSelectNatalBtn = document.getElementById('modeSelectNatalBtn');
const modeSelectZiweiBtn = document.getElementById('modeSelectZiweiBtn');
const selectBackToModeBtn = document.getElementById('selectBackToModeBtn');
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
const viewZiwei = document.getElementById('viewZiwei');
const ziweiChartBackBtn = document.getElementById('ziweiChartBackBtn');
const ziweiDateInput = document.getElementById('ziweiDateInput');
const ziweiTimeInput = document.getElementById('ziweiTimeInput');
const calcZiweiChartBtn = document.getElementById('calcZiweiChartBtn');
const ziweiResult = document.getElementById('ziweiResult');

// Switches between the top-level screens: choose spread -> spread intro &
// topic picker -> the actual reading (deck, board, results) -> knowledge page
// -> birthday card calculator.
function showView(name) {
    viewModeSelect.hidden = name !== 'mode';
    viewSelect.hidden = name !== 'select';
    viewIntro.hidden = name !== 'intro';
    viewReading.hidden = name !== 'reading';
    viewKnowledge.hidden = name !== 'knowledge';
    viewBirthcard.hidden = name !== 'birthcard';
    viewHistory.hidden = name !== 'history';
    viewNatalChart.hidden = name !== 'natal';
    viewZiwei.hidden = name !== 'ziwei';
    // Lets the site background swap to the natal-chart-specific starry-sky
    // artwork (see body.view-natal-active .universe-bg in style.css) while
    // every other screen keeps the regular tarot-table backdrop.
    document.body.classList.toggle('view-natal-active', name === 'natal');
    if (name !== 'reading') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Mode-select screen (the true landing page): choose between a tarot
// reading or the natal chart tool, as two equally formal top-level options.
if (modeSelectTarotBtn) modeSelectTarotBtn.addEventListener('click', () => showView('select'));
if (modeSelectNatalBtn) modeSelectNatalBtn.addEventListener('click', () => showView('natal'));
if (modeSelectZiweiBtn) modeSelectZiweiBtn.addEventListener('click', () => showView('ziwei'));
if (selectBackToModeBtn) selectBackToModeBtn.addEventListener('click', () => showView('mode'));

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
knowledgeBackBtn.addEventListener('click', () => showView('mode'));

