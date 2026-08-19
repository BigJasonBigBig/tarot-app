// ---------------------------------------------------------------------
// Zi Wei Dou Shu (紫微斗數) — chart rendering + interaction.
//
// Depends on: js/ziwei-lunar.js (ZiweiLunar), js/ziwei-placement.js
// (ZiweiPlacement), assets/js/astronomy.browser.min.js (Astronomy) —
// all loaded earlier. Follows the same tile+spotlight interaction pattern
// as js/natal-chart.js (see that file's comments for the rationale), and
// reuses its CSS (.natal-tile / .natal-spotlight) — only the grid layout
// and tile-face content are ziwei-specific.
// ---------------------------------------------------------------------
const ZIWEI_STORAGE_KEY = 'tarotZiweiForm';

// Fixed spatial position of each earthly branch on the traditional 4x4
// border chart (verified against a published description: top row L->R is
// 巳午未申, right column continues 酉戌, bottom row L->R is 寅丑子亥, left
// column (top->bottom) is 辰卯— i.e. the ring runs clockwise in the same
// order as the natural 子丑寅...亥 sequence, starting at 巳 top-left).
// [row, col], 0-indexed, for branch index 0(子)..11(亥).
const ZIWEI_BRANCH_GRID_POS = [
    [3, 2], // 子
    [3, 1], // 丑
    [3, 0], // 寅
    [2, 0], // 卯
    [1, 0], // 辰
    [0, 0], // 巳
    [0, 1], // 午
    [0, 2], // 未
    [0, 3], // 申
    [1, 3], // 酉
    [2, 3], // 戌
    [3, 3], // 亥
];

function initZiweiForm() {
    if (!ziweiDateInput) return;
    ziweiDateInput.max = new Date().toISOString().slice(0, 10);

    try {
        const saved = JSON.parse(localStorage.getItem(ZIWEI_STORAGE_KEY) || 'null');
        if (saved) {
            if (saved.date) ziweiDateInput.value = saved.date;
            if (saved.time) ziweiTimeInput.value = saved.time;
            if (saved.gender) {
                const radio = document.querySelector(`input[name="ziweiGender"][value="${saved.gender}"]`);
                if (radio) radio.checked = true;
            }
        }
    } catch (e) { /* ignore */ }

    document.querySelectorAll('.ziwei-gender-option').forEach(label => {
        const input = label.querySelector('input');
        if (input && input.checked) label.classList.add('checked');
        input.addEventListener('change', () => {
            document.querySelectorAll('.ziwei-gender-option').forEach(l => l.classList.remove('checked'));
            if (input.checked) label.classList.add('checked');
        });
    });
}

// Vivid palette, same approach as the natal chart tiles, cycled by branch
// index so the grid reads as colorful rather than monochrome gold.
const ZIWEI_TILE_PALETTE = [
    '#f97316', '#f43f5e', '#eab308', '#22c55e', '#06b6d4', '#3b82f6',
    '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#84cc16', '#0ea5e9',
];
function ziweiTileColor(branchIndex) {
    return ZIWEI_TILE_PALETTE[branchIndex % ZIWEI_TILE_PALETTE.length];
}

const ZIWEI_SIHUA_LABEL = { lu: '祿', quan: '權', ke: '科', ji: '忌' };

function buildZiweiSihuaBadges(sihuaByBranch, branchIndex) {
    const hits = sihuaByBranch[branchIndex] || [];
    if (!hits.length) return '';
    return hits.map(type =>
        `<span class="ziwei-tile-sihua-badge ziwei-sihua-${type}" title="化${ZIWEI_SIHUA_LABEL[type]}">${ZIWEI_SIHUA_LABEL[type]}</span>`
    ).join('');
}

function renderZiweiResult(chart) {
    const { EARTHLY_BRANCHES, HEAVENLY_STEMS } = window.ZiweiPlacement;
    const { ZIWEI_STAR_MEANINGS, ZIWEI_PALACE_MEANINGS, ZIWEI_AUX_STAR_MEANINGS } = window.ZiweiData || {};

    // Reindex sihua by branch for quick lookup on each tile.
    const sihuaByBranch = {};
    chart.sihua.forEach(s => {
        if (s.branchIndex < 0) return;
        sihuaByBranch[s.branchIndex] = sihuaByBranch[s.branchIndex] || [];
        sihuaByBranch[s.branchIndex].push(s.type);
    });

    const cornerDecorHTML = `
        <div class="corner-decor corner-tl"></div>
        <div class="corner-decor corner-tr"></div>
        <div class="corner-decor corner-bl"></div>
        <div class="corner-decor corner-br"></div>
    `;

    const tiles = chart.twelvePalaces.map(palace => {
        const b = palace.branchIndex;
        const pos = ZIWEI_BRANCH_GRID_POS[b];
        const mainStars = chart.mainStarsByBranch[b] || [];
        const auxStars = chart.auxiliaryStarsByBranch[b] || [];
        const isLife = b === chart.lifePalaceIndex;
        const isBody = b === chart.bodyPalaceIndex;
        const color = ziweiTileColor(b);

        const faceStarsHTML = mainStars.map(s =>
            `<span class="ziwei-tile-star-main">${s}${buildZiweiSihuaBadges(sihuaByBranch, b)}</span>`
        ).join('') + auxStars.map(s => `<span>${s}</span>`).join('');

        const starDetailRows = mainStars.concat(auxStars).map(starName => {
            const meaning = (ZIWEI_STAR_MEANINGS && ZIWEI_STAR_MEANINGS[starName]) || '（解讀內容尚待補充。）';
            const sihuaHit = chart.sihua.find(s => s.star === starName && s.branchIndex === b);
            const sihuaNote = sihuaHit
                ? `<p class="natal-tile-subhead">化${ZIWEI_SIHUA_LABEL[sihuaHit.type]}：${(window.ZiweiData && window.ZiweiData.ZIWEI_SIHUA_MEANINGS && window.ZiweiData.ZIWEI_SIHUA_MEANINGS[sihuaHit.type + '_' + starName]) || '這股能量在這裡被特別放大，值得留意。'}</p>`
                : '';
            return `
                <div class="ziwei-detail-star-row">
                    <span class="ziwei-detail-star-name">${starName}${sihuaHit ? `<span class="ziwei-tile-sihua-badge ziwei-sihua-${sihuaHit.type}">${ZIWEI_SIHUA_LABEL[sihuaHit.type]}</span>` : ''}</span>
                    <p>${meaning}</p>
                    ${sihuaNote}
                </div>
            `;
        }).join('');

        const palaceMeaning = (ZIWEI_PALACE_MEANINGS && ZIWEI_PALACE_MEANINGS[palace.name]) || '';

        return `
            <div class="natal-tile ziwei-tile" style="--tile-color:${color}; grid-column:${pos[1] + 1}; grid-row:${pos[0] + 1};" tabindex="0" data-branch="${b}">
                ${cornerDecorHTML}
                ${isLife ? '<span class="ziwei-tile-life-badge">命宮</span>' : ''}
                ${isBody && !isLife ? '<span class="ziwei-tile-body-badge">身宮</span>' : ''}
                <div class="natal-tile-face">
                    <span class="ziwei-palace-name">${palace.name}</span>
                    <span class="ziwei-palace-branch">${palace.ganzhi}</span>
                    <span class="ziwei-tile-stars">${faceStarsHTML || '<span class="natal-tile-face-empty">空宮</span>'}</span>
                </div>
                <div class="natal-tile-detail">
                    <strong class="natal-tile-detail-title">${palace.name}・${palace.ganzhi}${isLife ? '（命宮）' : ''}${isBody ? '（身宮）' : ''}</strong>
                    ${palaceMeaning ? `<p class="natal-tile-keyword">${palaceMeaning}</p>` : ''}
                    <div class="ziwei-detail-stars">${starDetailRows || '<p class="natal-tile-occupants-empty">這一宮沒有主星或輔星坐落，僅供對照參考。</p>'}</div>
                </div>
            </div>
        `;
    });

    const centerHTML = `
        <div class="ziwei-center">
            <strong class="ziwei-center-title">✦ ${chart.yearGanZhi}年 · ${chart.bureau.bureauName} ✦</strong>
            <span class="ziwei-center-line">農曆 ${chart.lunar.year}年${chart.lunar.isLeapMonth ? '閏' : ''}${chart.lunar.month}月${chart.lunar.day}日</span>
            <span class="ziwei-center-line">命宮：${EARTHLY_BRANCHES[chart.lifePalaceIndex]}宮　身宮：${EARTHLY_BRANCHES[chart.bodyPalaceIndex]}宮</span>
            <span class="ziwei-center-line">命宮納音：${chart.bureau.nayinName}</span>
        </div>
    `;

    ziweiResult.hidden = false;
    ziweiResult.innerHTML = `
        <p class="natal-tile-caption">💫 命盤按照傳統十二宮方位排列，中央是你的命主基本資料。<strong>金色「命宮」標籤</strong>是你的本命所在，<strong>金框「身宮」標籤</strong>是你後天行為與努力的方向。方塊右上角的彩色圓點是「四化」記號（祿/權/科/忌）。點擊任一方塊可放大查看完整解讀，點右上角關閉或點方塊外側可收合。</p>
        <div class="ziwei-grid">
            ${tiles.join('')}
            ${centerHTML}
        </div>
        <div class="ziwei-sihua-legend">
            <span class="ziwei-sihua-legend-item"><i class="natal-legend-swatch" style="background:#4ade80;width:10px;height:10px;border-radius:50%;"></i>化祿：機會、順遂</span>
            <span class="ziwei-sihua-legend-item"><i class="natal-legend-swatch" style="background:#38bdf8;width:10px;height:10px;border-radius:50%;"></i>化權：權力、主導</span>
            <span class="ziwei-sihua-legend-item"><i class="natal-legend-swatch" style="background:#facc15;width:10px;height:10px;border-radius:50%;"></i>化科：名聲、貴人</span>
            <span class="ziwei-sihua-legend-item"><i class="natal-legend-swatch" style="background:#f87171;width:10px;height:10px;border-radius:50%;"></i>化忌：阻礙、需留意</span>
        </div>
        <div class="natal-spotlight" id="ziweiSpotlight">
            <div class="natal-spotlight-panel" id="ziweiSpotlightPanel">
                <button class="natal-spotlight-close" type="button" aria-label="關閉">✕</button>
                <div class="natal-spotlight-inner" id="ziweiSpotlightInner"></div>
            </div>
        </div>
    `;
}

function openZiweiTile(tile) {
    const spotlight = document.getElementById('ziweiSpotlight');
    const panel = document.getElementById('ziweiSpotlightPanel');
    const inner = document.getElementById('ziweiSpotlightInner');
    if (!spotlight || !panel || !inner) return;
    const detailEl = tile.querySelector('.natal-tile-detail');
    if (!detailEl) return;

    const prevActive = document.querySelector('.ziwei-tile.active');
    if (prevActive && prevActive !== tile) prevActive.classList.remove('active');

    inner.innerHTML = detailEl.innerHTML;
    inner.scrollTop = 0;
    const color = tile.style.getPropertyValue('--tile-color');
    if (color) panel.style.setProperty('--tile-color', color);
    tile.classList.add('active');
    spotlight.classList.add('active');
}

function closeZiweiSpotlight() {
    const spotlight = document.getElementById('ziweiSpotlight');
    if (spotlight) spotlight.classList.remove('active');
    const activeTile = document.querySelector('.ziwei-tile.active');
    if (activeTile) activeTile.classList.remove('active');
}

function handleZiweiTileToggle(e) {
    if (e.target.closest && e.target.closest('.natal-spotlight-close')) {
        closeZiweiSpotlight();
        return;
    }
    if (e.target.id === 'ziweiSpotlight') {
        closeZiweiSpotlight();
        return;
    }
    const tile = e.target.closest && e.target.closest('.ziwei-tile');
    if (!tile) return;
    if (tile.classList.contains('active')) {
        closeZiweiSpotlight();
    } else {
        openZiweiTile(tile);
    }
}

if (ziweiResult) {
    ziweiResult.addEventListener('click', handleZiweiTileToggle);
    ziweiResult.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeZiweiSpotlight();
            return;
        }
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const tile = e.target.closest && e.target.closest('.ziwei-tile');
        if (!tile) return;
        e.preventDefault();
        if (tile.classList.contains('active')) {
            closeZiweiSpotlight();
        } else {
            openZiweiTile(tile);
        }
    });
}

if (ziweiChartBackBtn) ziweiChartBackBtn.addEventListener('click', () => showView('mode'));

if (calcZiweiChartBtn) {
    calcZiweiChartBtn.addEventListener('click', () => {
        const dateVal = ziweiDateInput.value;
        const timeVal = ziweiTimeInput.value;
        const genderInput = document.querySelector('input[name="ziweiGender"]:checked');
        if (!dateVal || !timeVal || !genderInput) {
            ziweiResult.hidden = false;
            ziweiResult.innerHTML = `<p class="birthcard-error">請先填寫完整的出生日期、時間與性別。</p>`;
            return;
        }

        try {
            localStorage.setItem(ZIWEI_STORAGE_KEY, JSON.stringify({
                date: dateVal, time: timeVal, gender: genderInput.value,
            }));
        } catch (e) { /* ignore */ }

        const [y, m, d] = dateVal.split('-').map(Number);
        const [hh] = timeVal.split(':').map(Number);

        try {
            const chart = window.ZiweiPlacement.computeChart(window.Astronomy, window.ZiweiLunar, {
                year: y, month: m, day: d, hour: hh,
            });
            chart.gender = genderInput.value;
            renderZiweiResult(chart);
        } catch (e) {
            ziweiResult.hidden = false;
            ziweiResult.innerHTML = `<p class="birthcard-error">計算時發生問題，請確認輸入內容後再試一次。</p>`;
        }
    });
}
