// ---------------------------------------------------------------------
// Runes (盧恩符文) — draw + render + interaction.
//
// Depends on: js/data-runes-content.js (RunesData). Follows the same
// tile+spotlight interaction pattern as js/ziwei-chart.js and
// js/bazi-chart.js, reusing their shared CSS (.natal-tile /
// .natal-spotlight etc. from css/04-birthcard-natal1.css) — only the
// draw-choice buttons and rune-glyph tile face are new (see
// css/12-runes.css).
// ---------------------------------------------------------------------
const RUNES_POSITION_LABELS_SINGLE = ['今日符文'];
const RUNES_POSITION_LABELS_THREE = ['過去', '現在', '未來'];
const RUNES_TILE_PALETTE = ['#f97316', '#3b82f6', '#8b5cf6'];

function buildRuneTile(draw, index, positionLabel) {
    const rune = draw.rune;
    const orientationLabel = draw.reversed ? '逆位' : '正位';
    const meaning = draw.reversed ? rune.reversed : rune.upright;
    const color = RUNES_TILE_PALETTE[index % RUNES_TILE_PALETTE.length];
    const aett = (window.RunesData && window.RunesData.AETT_INFO[rune.aett]) || null;

    return `
        <div class="natal-tile runes-tile${draw.reversed ? ' is-reversed' : ''}" style="--tile-color:${color};" tabindex="0" data-rune-id="${rune.id}">
            <span class="runes-tile-orientation">${orientationLabel}</span>
            <div class="natal-tile-face">
                <span class="runes-tile-position">${positionLabel}</span>
                <span class="runes-tile-glyph">${rune.symbol}</span>
                <span class="runes-tile-name">${rune.name}</span>
                <span class="runes-tile-keyword">${rune.keyword}</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">${rune.name}・${orientationLabel}${positionLabel ? `（${positionLabel}）` : ''}</strong>
                <p class="natal-tile-keyword">${meaning}</p>
                ${aett ? `<p class="runes-detail-aett"><strong>${aett.name}：</strong>${aett.desc}</p>` : ''}
            </div>
        </div>
    `;
}

function renderRunesResult(draws, mode) {
    const labels = mode === 'three' ? RUNES_POSITION_LABELS_THREE : RUNES_POSITION_LABELS_SINGLE;
    const tilesHTML = draws.map((d, i) => buildRuneTile(d, i, labels[i] || '')).join('');
    const caption = mode === 'three'
        ? '💫 三重視角牌陣：由左到右分別代表過去的影響、現在的處境、以及事情可能的走向。點擊任一枚符文可以放大看完整解讀。'
        : '💫 單一符文適合用來當作今天的一句直覺提醒。點擊符文可以放大看完整解讀。';

    runesResult.hidden = false;
    runesResult.innerHTML = `
        <p class="natal-tile-caption">${caption}</p>
        <div class="runes-result-row runes-result-row-${mode}">${tilesHTML}</div>
        <button class="action-btn action-btn-secondary" id="runesRedrawBtn" type="button">重新抽一次</button>
        <div class="natal-spotlight" id="runesSpotlight">
            <div class="natal-spotlight-panel" id="runesSpotlightPanel">
                <button class="natal-spotlight-close" type="button" aria-label="關閉">✕</button>
                <div class="natal-spotlight-inner" id="runesSpotlightInner"></div>
            </div>
        </div>
    `;

    const redrawBtn = document.getElementById('runesRedrawBtn');
    if (redrawBtn) {
        redrawBtn.addEventListener('click', () => {
            drawAndRenderRunes(mode);
        });
    }
}

function drawAndRenderRunes(mode) {
    const count = mode === 'three' ? 3 : 1;
    const draws = window.RunesData.drawRunes(count);
    renderRunesResult(draws, mode);
}

function openRuneTile(tile) {
    const spotlight = document.getElementById('runesSpotlight');
    const panel = document.getElementById('runesSpotlightPanel');
    const inner = document.getElementById('runesSpotlightInner');
    if (!spotlight || !panel || !inner) return;
    const detailEl = tile.querySelector('.natal-tile-detail');
    if (!detailEl) return;

    const prevActive = document.querySelector('.runes-tile.active');
    if (prevActive && prevActive !== tile) prevActive.classList.remove('active');

    inner.innerHTML = detailEl.innerHTML;
    inner.scrollTop = 0;
    const color = tile.style.getPropertyValue('--tile-color');
    if (color) panel.style.setProperty('--tile-color', color);
    tile.classList.add('active');
    spotlight.classList.add('active');
}

function closeRunesSpotlight() {
    const spotlight = document.getElementById('runesSpotlight');
    if (spotlight) spotlight.classList.remove('active');
    const activeTile = document.querySelector('.runes-tile.active');
    if (activeTile) activeTile.classList.remove('active');
}

function handleRunesTileToggle(e) {
    if (e.target.closest && e.target.closest('.natal-spotlight-close')) {
        closeRunesSpotlight();
        return;
    }
    if (e.target.id === 'runesSpotlight') {
        closeRunesSpotlight();
        return;
    }
    const tile = e.target.closest && e.target.closest('.runes-tile');
    if (!tile) return;
    if (tile.classList.contains('active')) {
        closeRunesSpotlight();
    } else {
        openRuneTile(tile);
    }
}

if (runesResult) {
    runesResult.addEventListener('click', handleRunesTileToggle);
    runesResult.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRunesSpotlight();
            return;
        }
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const tile = e.target.closest && e.target.closest('.runes-tile');
        if (!tile) return;
        e.preventDefault();
        if (tile.classList.contains('active')) {
            closeRunesSpotlight();
        } else {
            openRuneTile(tile);
        }
    });
}

if (runesChartBackBtn) runesChartBackBtn.addEventListener('click', () => showView('mode'));

if (drawRuneSingleBtn) drawRuneSingleBtn.addEventListener('click', () => drawAndRenderRunes('single'));
if (drawRuneThreeBtn) drawRuneThreeBtn.addEventListener('click', () => drawAndRenderRunes('three'));
