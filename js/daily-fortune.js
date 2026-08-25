// ---------------------------------------------------------------------
// 每日運勢 — 表單 + 計算 + 畫面渲染。
//
// Depends on: js/data-daily-fortune-content.js (DailyFortuneData). Reuses
// the tile+spotlight interaction pattern (independent .dailyfortune-*
// class names, same as namenum/bazi/ziwei).
// ---------------------------------------------------------------------
var DAILYFORTUNE_STORAGE_KEY = 'tarotDailyFortuneForm';

function todayDateStr() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
}

function initDailyFortuneForm() {
    try {
        var raw = localStorage.getItem(DAILYFORTUNE_STORAGE_KEY);
        if (!raw) return;
        var saved = JSON.parse(raw);
        if (saved && typeof saved.birthDate === 'string' && dailyFortuneBirthInput) {
            dailyFortuneBirthInput.value = saved.birthDate;
        }
    } catch (e) { /* ignore malformed storage */ }
}

function saveDailyFortuneForm() {
    try {
        localStorage.setItem(DAILYFORTUNE_STORAGE_KEY, JSON.stringify({
            birthDate: dailyFortuneBirthInput ? dailyFortuneBirthInput.value : '',
        }));
    } catch (e) { /* ignore quota errors */ }
}

var DAILYFORTUNE_PALETTE = {
    love: '#e08fd0',
    career: '#7c9cff',
    wealth: '#dfba47',
    health: '#5fd1a5',
    social: '#ef8a6b',
};

function starString(n) {
    return '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n);
}

function buildDailyFortuneTile(cat) {
    var color = DAILYFORTUNE_PALETTE[cat.key];
    return (
        '<button type="button" class="dailyfortune-tile" style="--tile-color:' + color + '" data-cat="' + cat.key + '" tabindex="0">' +
            '<span class="dailyfortune-tile-icon">' + cat.icon + '</span>' +
            '<span class="dailyfortune-tile-label">' + cat.label + '</span>' +
            '<span class="dailyfortune-tile-stars">' + starString(cat.stars) + '</span>' +
            '<div class="dailyfortune-tile-detail">' +
                '<h4>' + cat.icon + ' ' + cat.label + '</h4>' +
                '<p class="dailyfortune-detail-stars">' + starString(cat.stars) + '（' + cat.stars + ' / 5）</p>' +
                '<p class="dailyfortune-detail-text">' + cat.text + '</p>' +
                '<p class="dailyfortune-detail-tip">💡 小建議：' + cat.tip + '</p>' +
            '</div>' +
        '</button>'
    );
}

function openDailyFortuneTile(tileEl) {
    var detail = tileEl.querySelector('.dailyfortune-tile-detail');
    if (!detail) return;
    var spotlightInner = document.getElementById('dailyFortuneSpotlightInner');
    var spotlight = document.getElementById('dailyFortuneSpotlight');
    if (!spotlightInner || !spotlight) return;
    spotlightInner.innerHTML = detail.innerHTML;
    document.querySelectorAll('.dailyfortune-tile').forEach(function (t) { t.classList.remove('active'); });
    tileEl.classList.add('active');
    spotlight.classList.add('active');
}

function closeDailyFortuneSpotlight() {
    var spotlight = document.getElementById('dailyFortuneSpotlight');
    if (spotlight) spotlight.classList.remove('active');
    document.querySelectorAll('.dailyfortune-tile').forEach(function (t) { t.classList.remove('active'); });
}

function renderDailyFortuneResult(result, dateStr) {
    var tilesHTML = result.categories.map(buildDailyFortuneTile).join('');

    dailyFortuneResult.hidden = false;
    dailyFortuneResult.innerHTML =
        '<p class="dailyfortune-date">📅 ' + dateStr + ' 的每日運勢</p>' +
        '<p class="dailyfortune-overall-stars">' + starString(result.overallStars) + '</p>' +
        '<p class="dailyfortune-keyword">✨ 今日關鍵字：' + result.overallKeyword + '</p>' +
        '<p class="natal-tile-caption">' + result.overallText + '</p>' +
        '<div class="dailyfortune-grid" id="dailyFortuneGrid">' + tilesHTML + '</div>' +
        '<div class="dailyfortune-spotlight" id="dailyFortuneSpotlight">' +
            '<div class="dailyfortune-spotlight-inner" id="dailyFortuneSpotlightInner"></div>' +
            '<button type="button" class="dailyfortune-spotlight-close" id="dailyFortuneSpotlightClose" aria-label="關閉">✕</button>' +
        '</div>' +
        '<div class="dailyfortune-lucky-strip">' +
            '<span class="dailyfortune-lucky-item">🎨 幸運色：' + result.luckyColor + '</span>' +
            '<span class="dailyfortune-lucky-item">🔢 幸運數字：' + result.luckyNumber + '</span>' +
            '<span class="dailyfortune-lucky-item">🧭 幸運方位：' + result.luckyDirection + '</span>' +
        '</div>' +
        '<div class="dailyfortune-tips">' +
            '<p class="dailyfortune-tip-do">✅ 今日宜：' + result.doItem + '</p>' +
            '<p class="dailyfortune-tip-dont">🚫 今日忌：' + result.dontItem + '</p>' +
        '</div>' +
        '<p class="dailyfortune-disclaimer">每日運勢是依「出生日期＋查詢日期」產生的固定結果，同一天內重新查詢會是一樣的內容，隔天才會換一批；純粹娛樂用途，不是任何科學或命理上的定論。</p>';

    wireDailyFortuneTiles();
}

function wireDailyFortuneTiles() {
    document.querySelectorAll('.dailyfortune-tile').forEach(function (tile) {
        tile.addEventListener('click', function () { openDailyFortuneTile(tile); });
        tile.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDailyFortuneTile(tile); }
        });
    });
    var spotlight = document.getElementById('dailyFortuneSpotlight');
    var closeBtn = document.getElementById('dailyFortuneSpotlightClose');
    if (spotlight) {
        spotlight.addEventListener('click', function (e) {
            if (e.target === spotlight) closeDailyFortuneSpotlight();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeDailyFortuneSpotlight);
}

function runDailyFortuneCalculation() {
    var birthDate = dailyFortuneBirthInput ? dailyFortuneBirthInput.value : '';
    if (!birthDate) {
        dailyFortuneResult.hidden = false;
        dailyFortuneResult.innerHTML = '<p class="birthcard-error">請先輸入你的出生日期。</p>';
        return;
    }
    saveDailyFortuneForm();
    var dateStr = todayDateStr();
    var result = window.DailyFortuneData.computeDailyFortune(birthDate, dateStr);
    renderDailyFortuneResult(result, dateStr);
}

if (typeof dailyFortuneBackBtn !== 'undefined' && dailyFortuneBackBtn) {
    dailyFortuneBackBtn.addEventListener('click', function () { showView('mode'); });
}
if (typeof calcDailyFortuneBtn !== 'undefined' && calcDailyFortuneBtn) {
    calcDailyFortuneBtn.addEventListener('click', runDailyFortuneCalculation);
}
