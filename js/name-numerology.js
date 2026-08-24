// ---------------------------------------------------------------------
// 姓名學／五格剖象 — 計算 + 畫面渲染。
//
// Depends on: js/data-name-strokes.js (NameStrokes), js/data-name-numbers.js
// (NameNumbers). Uses the tile+spotlight interaction pattern shared with
// ziwei/bazi (see .natal-tile / .natal-spotlight in style.css), but with an
// independent set of form/input classes (.namenum-*) so this feature's
// event wiring never cross-contaminates other features' radio/checkbox
// handling.
// ---------------------------------------------------------------------
function charsOf(str) {
    return Array.from(String(str || '').trim()).filter(function (ch) {
        return /\S/.test(ch);
    });
}

// Splits surname/given-name strings into character arrays and reports
// which characters aren't in the built-in dictionary (so the UI can ask
// for a manual stroke count for just those characters).
function analyzeNameChars(surname, given, manualStrokes) {
    var surnameChars = charsOf(surname);
    var givenChars = charsOf(given);
    var allChars = surnameChars.concat(givenChars);
    var missing = [];
    var strokes = {};
    allChars.forEach(function (ch) {
        if (manualStrokes && Object.prototype.hasOwnProperty.call(manualStrokes, ch)) {
            strokes[ch] = manualStrokes[ch];
            return;
        }
        var v = window.NameStrokes.getStroke(ch);
        if (v === null) {
            if (missing.indexOf(ch) === -1) missing.push(ch);
        } else {
            strokes[ch] = v;
        }
    });
    return { surnameChars: surnameChars, givenChars: givenChars, strokes: strokes, missing: missing };
}

function sumStrokes(chars, strokes) {
    return chars.reduce(function (sum, ch) { return sum + strokes[ch]; }, 0);
}

// Implements the verified 五格 formulas (see accompanying research notes):
//   天格：單姓 = 姓氏筆畫+1；複姓 = 全部姓氏字筆畫加總
//   人格：姓氏最後一字 + 名字第一字
//   地格：單名 = 名字筆畫+1；雙名以上 = 全部名字字筆畫加總
//   總格：全部真實字數加總（不做虛擬補位）
//   外格：(姓氏去掉最後一字) + (名字去掉第一字) 的加總，兩邊若為空各補1
function computeWuGe(surnameChars, givenChars, strokes) {
    var s = surnameChars, g = givenChars;
    var tianGe = s.length <= 1 ? strokes[s[0]] + 1 : sumStrokes(s, strokes);
    var renGe = strokes[s[s.length - 1]] + strokes[g[0]];
    var diGe = g.length <= 1 ? strokes[g[0]] + 1 : sumStrokes(g, strokes);
    var zongGe = sumStrokes(s.concat(g), strokes);

    var outerSurnamePart = s.slice(0, -1);
    var outerGivenPart = g.slice(1);
    var outerSum = sumStrokes(outerSurnamePart, strokes) + sumStrokes(outerGivenPart, strokes);
    var padding = (outerSurnamePart.length === 0 ? 1 : 0) + (outerGivenPart.length === 0 ? 1 : 0);
    var waiGe = outerSum + padding;

    return { tianGe: tianGe, renGe: renGe, diGe: diGe, waiGe: waiGe, zongGe: zongGe };
}

var NAMENUM_STORAGE_KEY = 'tarotNameNumForm';
var namenumManualStrokes = {};

function initNameNumForm() {
    try {
        var raw = localStorage.getItem(NAMENUM_STORAGE_KEY);
        if (!raw) return;
        var saved = JSON.parse(raw);
        if (saved && typeof saved.surname === 'string' && namenumSurnameInput) namenumSurnameInput.value = saved.surname;
        if (saved && typeof saved.given === 'string' && namenumGivenInput) namenumGivenInput.value = saved.given;
    } catch (e) { /* ignore malformed storage */ }
}

function saveNameNumForm() {
    try {
        localStorage.setItem(NAMENUM_STORAGE_KEY, JSON.stringify({
            surname: namenumSurnameInput ? namenumSurnameInput.value : '',
            given: namenumGivenInput ? namenumGivenInput.value : '',
        }));
    } catch (e) { /* ignore quota errors */ }
}

var NAMENUM_GRID_LABELS = {
    tianGe: '天格',
    renGe: '人格',
    diGe: '地格',
    waiGe: '外格',
    zongGe: '總格',
};
var NAMENUM_GRID_SUB = {
    tianGe: '祖蔭・長輩緣',
    renGe: '主運・自身性格',
    diGe: '前運・少年至中年',
    waiGe: '副運・人際外緣',
    zongGe: '後運・中年以後總合',
};
var NAMENUM_GRID_PALETTE = {
    tianGe: '#7c9cff',
    renGe: '#dfba47',
    diGe: '#5fd1a5',
    waiGe: '#e08fd0',
    zongGe: '#ef8a6b',
};
var NAMENUM_CAT_CLASS = { good: 'is-good', bad: 'is-bad', mixed: 'is-mixed' };

function buildNameNumTile(key, wuGe) {
    var value = wuGe[key];
    var info = window.NameNumbers.lookup(value);
    var color = NAMENUM_GRID_PALETTE[key];
    var catClass = NAMENUM_CAT_CLASS[info.category] || '';
    return (
        '<button type="button" class="namenum-tile ' + catClass + '" style="--tile-color:' + color + '" data-grid="' + key + '" tabindex="0">' +
            '<span class="namenum-tile-label">' + NAMENUM_GRID_LABELS[key] + '</span>' +
            '<span class="namenum-tile-value">' + value + '</span>' +
            '<span class="namenum-tile-cat">' + info.categoryLabel + '</span>' +
            '<div class="namenum-tile-detail">' +
                '<h4>' + NAMENUM_GRID_LABELS[key] + '（' + NAMENUM_GRID_SUB[key] + '）</h4>' +
                '<p class="namenum-detail-number">數理 ' + value + (info.normalized !== value ? '（換算：' + info.normalized + '）' : '') + '　<span class="namenum-detail-cat ' + catClass + '">' + info.categoryLabel + '</span></p>' +
                '<p class="namenum-detail-name">「' + info.name + '」</p>' +
                '<p class="namenum-detail-text">' + info.text + '</p>' +
            '</div>' +
        '</button>'
    );
}

function openNameNumTile(tileEl) {
    var detail = tileEl.querySelector('.namenum-tile-detail');
    if (!detail) return;
    var spotlightInner = document.getElementById('namenumSpotlightInner');
    var spotlight = document.getElementById('namenumSpotlight');
    if (!spotlightInner || !spotlight) return;
    spotlightInner.innerHTML = detail.innerHTML;
    document.querySelectorAll('.namenum-tile').forEach(function (t) { t.classList.remove('active'); });
    tileEl.classList.add('active');
    spotlight.classList.add('active');
}

function closeNameNumSpotlight() {
    var spotlight = document.getElementById('namenumSpotlight');
    if (spotlight) spotlight.classList.remove('active');
    document.querySelectorAll('.namenum-tile').forEach(function (t) { t.classList.remove('active'); });
}

function renderNameNumResult(surnameChars, givenChars, strokes, wuGe) {
    var charsRow = surnameChars.concat(givenChars).map(function (ch) {
        return '<span class="namenum-char-chip">' + ch + '<small>' + strokes[ch] + '畫</small></span>';
    }).join('');

    var renGeInfo = window.NameNumbers.lookup(wuGe.renGe);
    var summary = '💫 「' + surnameChars.join('') + givenChars.join('') + '」的人格數理為 ' + wuGe.renGe + '（' + renGeInfo.name + '），屬於「' + renGeInfo.categoryLabel + '」。人格代表一個人的主運與性格核心，點下方任一格子可以看該格的完整解說。';

    namenumResult.hidden = false;
    namenumResult.innerHTML =
        '<p class="namenum-char-row">' + charsRow + '</p>' +
        '<p class="natal-tile-caption">' + summary + '</p>' +
        '<div class="namenum-grid" id="namenumGrid">' +
            buildNameNumTile('tianGe', wuGe) +
            buildNameNumTile('renGe', wuGe) +
            buildNameNumTile('diGe', wuGe) +
            buildNameNumTile('waiGe', wuGe) +
            buildNameNumTile('zongGe', wuGe) +
        '</div>' +
        '<div class="namenum-spotlight" id="namenumSpotlight">' +
            '<div class="namenum-spotlight-inner" id="namenumSpotlightInner"></div>' +
            '<button type="button" class="namenum-spotlight-close" id="namenumSpotlightClose" aria-label="關閉">✕</button>' +
        '</div>' +
        '<p class="namenum-disclaimer">五格筆畫採「康熙字典」筆畫計算慣例（部首簡化字會還原，例如 氵、忄、艹 等），與日常書寫筆畫可能不同；81數理與五格分析源自民間流傳的姓名學（五格剖象法），僅供參考娛樂，並非科學或心理學上的定論。</p>';

    wireNameNumTiles();
}

function wireNameNumTiles() {
    document.querySelectorAll('.namenum-tile').forEach(function (tile) {
        tile.addEventListener('click', function () { openNameNumTile(tile); });
        tile.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openNameNumTile(tile); }
        });
    });
    var spotlight = document.getElementById('namenumSpotlight');
    var closeBtn = document.getElementById('namenumSpotlightClose');
    if (spotlight) {
        spotlight.addEventListener('click', function (e) {
            if (e.target === spotlight) closeNameNumSpotlight();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeNameNumSpotlight);
}

function renderNameNumMissingChars(missing) {
    var fieldsHTML = missing.map(function (ch) {
        return (
            '<label class="namenum-manual-field">' +
                '<span>「' + ch + '」的康熙筆畫</span>' +
                '<input type="number" min="1" max="64" class="namenum-manual-input" data-char="' + ch + '" placeholder="例如 12">' +
            '</label>'
        );
    }).join('');

    namenumResult.hidden = false;
    namenumResult.innerHTML =
        '<p class="birthcard-error">字典裡找不到以下字的筆畫資料，麻煩查詢康熙字典後手動輸入（僅需輸入數字）：</p>' +
        '<div class="namenum-manual-fields">' + fieldsHTML + '</div>' +
        '<button class="action-btn" id="namenumManualSubmitBtn" type="button">帶入筆畫並重新計算</button>';

    var submitBtn = document.getElementById('namenumManualSubmitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            var inputs = document.querySelectorAll('.namenum-manual-input');
            var ok = true;
            inputs.forEach(function (inp) {
                var v = parseInt(inp.value, 10);
                if (!v || v < 1) { ok = false; return; }
                namenumManualStrokes[inp.getAttribute('data-char')] = v;
            });
            if (!ok) {
                alert('請為每個字輸入有效的筆畫數（大於 0 的數字）。');
                return;
            }
            runNameNumCalculation();
        });
    }
}

function runNameNumCalculation() {
    var surname = namenumSurnameInput ? namenumSurnameInput.value : '';
    var given = namenumGivenInput ? namenumGivenInput.value : '';

    if (!charsOf(surname).length || !charsOf(given).length) {
        namenumResult.hidden = false;
        namenumResult.innerHTML = '<p class="birthcard-error">請輸入姓氏與名字（中文字）。</p>';
        return;
    }

    saveNameNumForm();

    var analysis = analyzeNameChars(surname, given, namenumManualStrokes);
    if (analysis.missing.length > 0) {
        renderNameNumMissingChars(analysis.missing);
        return;
    }

    var wuGe = computeWuGe(analysis.surnameChars, analysis.givenChars, analysis.strokes);
    renderNameNumResult(analysis.surnameChars, analysis.givenChars, analysis.strokes, wuGe);
}

if (typeof namenumChartBackBtn !== 'undefined' && namenumChartBackBtn) {
    namenumChartBackBtn.addEventListener('click', function () { showView('mode'); });
}
if (typeof calcNameNumBtn !== 'undefined' && calcNameNumBtn) {
    calcNameNumBtn.addEventListener('click', function () {
        namenumManualStrokes = {};
        runNameNumCalculation();
    });
}
