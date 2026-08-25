// ---------------------------------------------------------------------
// BaZi (八字/四柱推命) — chart rendering + interaction.
//
// Depends on: js/bazi-calendar.js (BaziCalendar), js/bazi-placement.js
// (BaziPlacement), js/data-bazi-content.js (BaziData),
// assets/js/astronomy.browser.min.js (Astronomy) — all loaded earlier.
// Follows the same tile+spotlight interaction pattern as js/natal-chart.js
// and js/ziwei-chart.js, reusing their shared CSS (.natal-tile /
// .natal-spotlight etc. from css/04-birthcard-natal1.css) — only the
// pillar-card / 大運流年-timeline layout is bazi-specific (see
// css/11-bazi-chart.css).
// ---------------------------------------------------------------------
const BAZI_STORAGE_KEY = 'tarotBaziForm';
const BAZI_PILLAR_KEYS = ['year', 'month', 'day', 'hour'];
const BAZI_PILLAR_LABELS = { year: '年柱', month: '月柱', day: '日柱', hour: '時柱' };
const BAZI_PILLAR_PALETTE = { year: '#f97316', month: '#3b82f6', day: '#eab308', hour: '#22c55e' };
const BAZI_DAYUN_PALETTE = [
    '#f97316', '#f43f5e', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
];

function initBaziForm() {
    if (!baziDateInput) return;
    baziDateInput.max = new Date().toISOString().slice(0, 10);

    try {
        const saved = JSON.parse(localStorage.getItem(BAZI_STORAGE_KEY) || 'null');
        if (saved) {
            if (saved.date) baziDateInput.value = saved.date;
            if (saved.time) baziTimeInput.value = saved.time;
            if (saved.gender) {
                const radio = document.querySelector(`input[name="baziGender"][value="${saved.gender}"]`);
                if (radio) radio.checked = true;
            }
        }
    } catch (e) { /* ignore */ }

    document.querySelectorAll('.bazi-gender-option').forEach(label => {
        const input = label.querySelector('input');
        if (input && input.checked) label.classList.add('checked');
        input.addEventListener('change', () => {
            document.querySelectorAll('.bazi-gender-option').forEach(l => l.classList.remove('checked'));
            if (input.checked) label.classList.add('checked');
        });
    });
}

function buildBaziHiddenStemRows(hiddenStems) {
    return hiddenStems.map(hs => {
        const meaning = (window.BaziData && window.BaziData.TEN_GOD_MEANINGS[hs.tenGod]) || '';
        return `
            <div class="bazi-detail-hidden-row">
                <span class="bazi-detail-hidden-stem">${hs.stem}${hs.isPrimary ? '<span class="bazi-primary-tag">本氣</span>' : ''}<span class="bazi-detail-hidden-tengod">${hs.tenGod}</span></span>
                <p>${meaning}</p>
            </div>
        `;
    }).join('');
}

function buildBaziPillarTile(key, fourPillars, tenGodsData) {
    const pillar = fourPillars[key];
    const tg = tenGodsData[key];
    const isDay = key === 'day';
    const color = BAZI_PILLAR_PALETTE[key];
    const stemBadge = isDay ? '日主' : tg.stemTenGod;
    const stemMeaning = isDay
        ? '日主是整個八字的核心參照點，其餘七個字都是拿來跟日主比較五行生剋、判斷十神的基準，不對自己論十神。'
        : ((window.BaziData && window.BaziData.TEN_GOD_MEANINGS[tg.stemTenGod]) || '');

    const hiddenChipsHTML = tg.hiddenStems.map(hs =>
        `<span class="bazi-tile-hidden-chip${hs.isPrimary ? ' is-primary' : ''}">${hs.stem}</span>`
    ).join('');

    return `
        <div class="natal-tile bazi-tile" style="--tile-color:${color};" tabindex="0" data-pillar="${key}">
            <span class="bazi-tile-badge">${stemBadge}</span>
            <div class="natal-tile-face">
                <span class="bazi-pillar-label">${BAZI_PILLAR_LABELS[key]}</span>
                <span class="bazi-pillar-ganzhi">${pillar.ganzhi}</span>
                <span class="bazi-tile-hidden-chips">${hiddenChipsHTML}</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">${BAZI_PILLAR_LABELS[key]}・${pillar.ganzhi}${isDay ? '（日主）' : ''}</strong>
                <p class="natal-tile-keyword">天干 ${pillar.stem}${isDay ? '' : `（${tg.stemTenGod}）`}：${stemMeaning}</p>
                <div class="bazi-detail-hidden-stems">
                    <p class="bazi-detail-subhead">地支「${pillar.branch}」藏干：</p>
                    ${buildBaziHiddenStemRows(tg.hiddenStems)}
                </div>
            </div>
        </div>
    `;
}

function buildBaziDaYunTile(dy, index, dayMasterStemIndex, birthYear) {
    const color = BAZI_DAYUN_PALETTE[index % BAZI_DAYUN_PALETTE.length];
    const stemGod = window.BaziPlacement.tenGod(dayMasterStemIndex, dy.stemIndex);
    const stemMeaning = (window.BaziData && window.BaziData.TEN_GOD_MEANINGS[stemGod]) || '';

    const startYear = birthYear + Math.floor(dy.startAge);
    const liuNianRows = [];
    for (let a = 0; a < 10; a++) {
        const y = startYear + a;
        const ln = window.BaziPlacement.liuNianPillar(y);
        const lnGod = window.BaziPlacement.tenGod(dayMasterStemIndex, ln.stemIndex);
        liuNianRows.push(`
            <div class="bazi-detail-liunian-row">
                <span class="bazi-detail-liunian-year">${y}年（約${Math.floor(dy.startAge) + a}歲）</span>
                <span class="bazi-detail-liunian-ganzhi">${ln.ganzhi}</span>
                <span class="bazi-detail-liunian-tengod">${lnGod}</span>
            </div>
        `);
    }

    return `
        <div class="natal-tile bazi-dayun-tile" style="--tile-color:${color};" tabindex="0" data-dayun-index="${index}">
            <div class="natal-tile-face">
                <span class="bazi-dayun-age">${Math.floor(dy.startAge)}〜${Math.floor(dy.endAge)}歲</span>
                <span class="bazi-dayun-ganzhi">${dy.ganzhi}</span>
                <span class="bazi-dayun-tengod">${stemGod}</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">大運 ${dy.ganzhi}（約 ${Math.floor(dy.startAge)}〜${Math.floor(dy.endAge)}歲）</strong>
                <p class="natal-tile-keyword">天干 ${dy.stem}（${stemGod}）：${stemMeaning}</p>
                <p class="bazi-detail-subhead">${(window.BaziData && window.BaziData.LIUNIAN_INTRO) || ''}</p>
                <div class="bazi-detail-liunian-list">${liuNianRows.join('')}</div>
            </div>
        </div>
    `;
}

const BAZI_PILLAR_SHORT_LABELS = { year: '年', month: '月', day: '日', hour: '時' };

function buildBaziShenShaHTML(shenSha) {
    if (!shenSha || !window.BaziData) return '';
    const labels = window.BaziData.SHEN_SHA_LABELS;
    const meanings = window.BaziData.SHEN_SHA_MEANINGS;
    const rows = Object.keys(labels).map(key => {
        const pillars = shenSha[key] || [];
        if (!pillars.length) return '';
        const pillarBadges = pillars.map(p => `<span class="bazi-shensha-pillar">${BAZI_PILLAR_SHORT_LABELS[p]}柱</span>`).join('');
        return `
            <div class="bazi-shensha-row">
                <span class="bazi-shensha-name">${labels[key]}${pillarBadges}</span>
                <p class="bazi-shensha-text">${meanings[key]}</p>
            </div>
        `;
    }).join('');

    if (!rows) {
        return `
            <div class="bazi-shensha-section">
                <h3 class="bazi-section-title">神煞</h3>
                <p class="bazi-section-intro">這次排出的命盤沒有出現本站收錄的這幾種神煞（桃花／驛馬／華蓋／將星／天乙貴人／文昌貴人），命盤上沒有不代表運勢不好，神煞只是傳統上額外的補充參考，並非決定吉凶的主要依據。</p>
            </div>
        `;
    }

    return `
        <div class="bazi-shensha-section">
            <h3 class="bazi-section-title">神煞</h3>
            <p class="bazi-section-intro">神煞是傳統上疊加在十神、格局之外的補充判斷，下面列出這張命盤裡出現的幾種常見神煞、出現在哪一柱，以及大致的含義，可以當作額外的參考角度。</p>
            <div class="bazi-shensha-list">${rows}</div>
        </div>
    `;
}

function renderBaziResult(data) {
    const { fourPillars, tenGods, strength, geju, qiyun, daYun, birthYear } = data;
    const dayMasterStemIndex = fourPillars.day.stemIndex;

    const pillarsHTML = BAZI_PILLAR_KEYS.map(key => buildBaziPillarTile(key, fourPillars, tenGods)).join('');
    const dayunHTML = daYun.map((dy, i) => buildBaziDaYunTile(dy, i, dayMasterStemIndex, birthYear)).join('');

    const strengthMeaning = (window.BaziData && window.BaziData.STRENGTH_MEANINGS[strength.verdict]) || '';
    const seasonText = (window.BaziData && window.BaziData.SEASONALLY_SUPPORTED_TEXT[String(strength.isSeasonallySupported)]) || '';
    const patternMeaning = (window.BaziData && window.BaziData.PATTERN_MEANINGS[geju.patternName]) || '';
    const dayunIntro = (window.BaziData && window.BaziData.DAYUN_INTRO) || '';
    const elementName = window.BaziPlacement.ELEMENT_NAMES[window.BaziPlacement.stemElement(dayMasterStemIndex)];
    const shenSha = window.BaziPlacement.computeShenSha(fourPillars);
    const shenShaHTML = buildBaziShenShaHTML(shenSha);

    baziResult.hidden = false;
    baziResult.innerHTML = `
        <p class="natal-tile-caption">💫 四柱由左到右是年柱／月柱／日柱／時柱，日柱天干（日主）是整張命盤的核心參照點。點擊任一柱可以放大看天干十神與地支藏干的完整解讀，下方的大運方塊點開則能看到那十年裡每一年的流年。</p>
        <div class="bazi-pillars">${pillarsHTML}</div>

        <div class="bazi-summary">
            <div class="bazi-summary-item"><strong>日主</strong>${fourPillars.day.stem}（${elementName}）</div>
            <div class="bazi-summary-item"><strong>五行強弱</strong>${strength.verdict}（支持力 ${Math.round(strength.supportRatio * 100)}%）</div>
            <div class="bazi-summary-item"><strong>格局</strong>${geju.patternName}</div>
            <div class="bazi-summary-item"><strong>起運</strong>約 ${qiyun.ageYears.toFixed(1)} 歲・${qiyun.forward ? '順排' : '逆排'}</div>
        </div>
        <div class="bazi-summary-detail">
            <p><strong>五行強弱：</strong>${strengthMeaning}${seasonText}</p>
            <p><strong>${geju.patternName}：</strong>${patternMeaning}</p>
        </div>

        ${shenShaHTML}

        <div class="bazi-dayun-section">
            <h3 class="bazi-section-title">大運與流年</h3>
            <p class="bazi-section-intro">${dayunIntro}</p>
            <div class="bazi-dayun-row">${dayunHTML}</div>
        </div>

        <div class="natal-spotlight" id="baziSpotlight">
            <div class="natal-spotlight-panel" id="baziSpotlightPanel">
                <button class="natal-spotlight-close" type="button" aria-label="關閉">✕</button>
                <div class="natal-spotlight-inner" id="baziSpotlightInner"></div>
            </div>
        </div>
    `;
}

function openBaziTile(tile) {
    const spotlight = document.getElementById('baziSpotlight');
    const panel = document.getElementById('baziSpotlightPanel');
    const inner = document.getElementById('baziSpotlightInner');
    if (!spotlight || !panel || !inner) return;
    const detailEl = tile.querySelector('.natal-tile-detail');
    if (!detailEl) return;

    const prevActive = document.querySelector('.bazi-tile.active, .bazi-dayun-tile.active');
    if (prevActive && prevActive !== tile) prevActive.classList.remove('active');

    inner.innerHTML = detailEl.innerHTML;
    inner.scrollTop = 0;
    const color = tile.style.getPropertyValue('--tile-color');
    if (color) panel.style.setProperty('--tile-color', color);
    tile.classList.add('active');
    spotlight.classList.add('active');
}

function closeBaziSpotlight() {
    const spotlight = document.getElementById('baziSpotlight');
    if (spotlight) spotlight.classList.remove('active');
    const activeTile = document.querySelector('.bazi-tile.active, .bazi-dayun-tile.active');
    if (activeTile) activeTile.classList.remove('active');
}

function handleBaziTileToggle(e) {
    if (e.target.closest && e.target.closest('.natal-spotlight-close')) {
        closeBaziSpotlight();
        return;
    }
    if (e.target.id === 'baziSpotlight') {
        closeBaziSpotlight();
        return;
    }
    const tile = e.target.closest && e.target.closest('.bazi-tile, .bazi-dayun-tile');
    if (!tile) return;
    if (tile.classList.contains('active')) {
        closeBaziSpotlight();
    } else {
        openBaziTile(tile);
    }
}

if (baziResult) {
    baziResult.addEventListener('click', handleBaziTileToggle);
    baziResult.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBaziSpotlight();
            return;
        }
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const tile = e.target.closest && e.target.closest('.bazi-tile, .bazi-dayun-tile');
        if (!tile) return;
        e.preventDefault();
        if (tile.classList.contains('active')) {
            closeBaziSpotlight();
        } else {
            openBaziTile(tile);
        }
    });
}

if (baziChartBackBtn) baziChartBackBtn.addEventListener('click', () => showView('mode'));

if (calcBaziChartBtn) {
    calcBaziChartBtn.addEventListener('click', () => {
        const dateVal = baziDateInput.value;
        const timeVal = baziTimeInput.value;
        const genderInput = document.querySelector('input[name="baziGender"]:checked');
        if (!dateVal || !timeVal || !genderInput) {
            baziResult.hidden = false;
            baziResult.innerHTML = `<p class="birthcard-error">請先填寫完整的出生日期、時間與性別。</p>`;
            return;
        }

        try {
            localStorage.setItem(BAZI_STORAGE_KEY, JSON.stringify({
                date: dateVal, time: timeVal, gender: genderInput.value,
            }));
        } catch (e) { /* ignore */ }

        const [y, m, d] = dateVal.split('-').map(Number);
        const [hh, mm] = timeVal.split(':').map(Number);
        const isMale = genderInput.value === 'male';

        try {
            const birth = { year: y, month: m, day: d, hour: hh, minute: mm || 0 };
            const fourPillars = window.BaziCalendar.computeFourPillars(window.Astronomy, birth);
            const tenGods = window.BaziPlacement.computeTenGods(fourPillars);
            const strength = window.BaziPlacement.computeDayMasterStrength(fourPillars);
            const geju = window.BaziPlacement.computeGeJu(fourPillars);
            const qiyun = window.BaziCalendar.computeQiyun(window.Astronomy, fourPillars, isMale);
            const daYun = window.BaziPlacement.computeDaYunPillars(fourPillars.month, qiyun, 8);

            renderBaziResult({ fourPillars, tenGods, strength, geju, qiyun, daYun, birthYear: y, isMale });
        } catch (e) {
            baziResult.hidden = false;
            baziResult.innerHTML = `<p class="birthcard-error">計算時發生問題，請確認輸入內容後再試一次。</p>`;
        }
    });
}
