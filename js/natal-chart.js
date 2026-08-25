// ---------------------------------------------------------------------
// Natal Chart — real astronomical calculation via astrology.js /
// astronomy-engine, rendered as an SVG wheel + a plain-language list.
// ---------------------------------------------------------------------
const NATAL_STORAGE_KEY = 'tarotNatalForm';

function initNatalForm() {
    if (!natalCitySelect || !window.TarotAstrology) return;

    natalCitySelect.innerHTML = '';
    window.TarotAstrology.CITY_PRESETS.forEach((city, i) => {
        const opt = document.createElement('option');
        opt.value = String(i);
        opt.textContent = city.label;
        natalCitySelect.appendChild(opt);
    });
    const manualOpt = document.createElement('option');
    manualOpt.value = 'manual';
    manualOpt.textContent = '其他 / 手動輸入座標';
    natalCitySelect.appendChild(manualOpt);

    const UTC_OFFSETS = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -2, -1, 0,
        1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14];
    natalUtcSelect.innerHTML = '';
    UTC_OFFSETS.forEach(off => {
        const opt = document.createElement('option');
        opt.value = String(off);
        opt.textContent = `UTC${off >= 0 ? '+' : ''}${off}`;
        if (off === 8) opt.selected = true;
        natalUtcSelect.appendChild(opt);
    });

    natalCitySelect.addEventListener('change', () => {
        natalManualRow.hidden = natalCitySelect.value !== 'manual';
    });

    natalDateInput.max = new Date().toISOString().slice(0, 10);

    // Restore last-used inputs, same convenience as the birth-card form.
    try {
        const saved = JSON.parse(localStorage.getItem(NATAL_STORAGE_KEY) || 'null');
        if (saved) {
            if (saved.date) natalDateInput.value = saved.date;
            if (saved.time) natalTimeInput.value = saved.time;
            if (saved.city !== undefined) {
                natalCitySelect.value = saved.city;
                natalManualRow.hidden = saved.city !== 'manual';
            }
            if (saved.lat !== undefined) natalLatInput.value = saved.lat;
            if (saved.lon !== undefined) natalLonInput.value = saved.lon;
            if (saved.utc !== undefined) natalUtcSelect.value = saved.utc;
        }
    } catch (e) { /* ignore */ }
}

// Converts an ecliptic longitude into an on-screen angle (degrees, standard
// math convention: 0°=east/3 o'clock, increasing counter-clockwise), such
// that the Ascendant always sits at 180° (9 o'clock) — the standard way
// natal wheels are drawn.
function natalScreenAngle(elon, ascendant) {
    return window.TarotAstrology.norm360(180 + elon - ascendant);
}

function natalPolarPoint(cx, cy, r, elon, ascendant) {
    const rad = natalScreenAngle(elon, ascendant) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

// Builds an annular wedge (a "ring slice") as a sampled polygon, avoiding
// any need to reason about SVG arc sweep-flag direction.
function natalAnnularWedgePath(cx, cy, rInner, rOuter, elonStart, elonEnd, ascendant) {
    const steps = 10;
    let pts = [];
    for (let i = 0; i <= steps; i++) {
        const e = elonStart + (elonEnd - elonStart) * (i / steps);
        pts.push(natalPolarPoint(cx, cy, rOuter, e, ascendant));
    }
    for (let i = steps; i >= 0; i--) {
        const e = elonStart + (elonEnd - elonStart) * (i / steps);
        pts.push(natalPolarPoint(cx, cy, rInner, e, ascendant));
    }
    return 'M ' + pts.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' L ') + ' Z';
}

// Spreads planets across a few concentric radius "bands" so ones that are
// close together in the zodiac don't render on top of each other.
function natalAssignPlanetBands(planets, ascendant) {
    const bands = [136, 118, 100];
    const minGapDeg = 8;
    const lastAngleInBand = [null, null, null];
    const sorted = [...planets].sort((a, b) => a.elon - b.elon);
    const bandOf = {};
    sorted.forEach(p => {
        const angle = natalScreenAngle(p.elon, ascendant);
        let chosen = 0;
        for (let b = 0; b < bands.length; b++) {
            if (lastAngleInBand[b] === null || Math.abs(((angle - lastAngleInBand[b] + 540) % 360) - 180) >= (180 - minGapDeg)) {
                chosen = b;
                break;
            }
            chosen = b; // fall back to the last band checked if all conflict
        }
        lastAngleInBand[chosen] = angle;
        bandOf[p.body] = bands[chosen];
    });
    return bandOf;
}

const NATAL_ASPECT_COLORS = { soft: '#38bdf8', hard: '#f87171', neutral: 'rgba(223,186,71,0.35)' };

function buildNatalWheelSVG(chart) {
    const cx = 200, cy = 200;
    // Radial layout, outside-in: zodiac wedge ring (165-190) -> degree tick
    // band (155-165) -> house-cusp band (42-155) -> aspect lines (r=120,
    // inside the house band) -> center.
    const outerR = 190, zodiacInnerR = 165, tickOuterR = 165, houseRingOuter = 155, houseInnerR = 42, aspectR = 120;
    const { ZODIAC_SIGNS, computeAspects } = window.TarotAstrology;
    const asc = chart.ascendant;

    // Extra margin around the 0-400 wheel so edge labels (ASC/MC) never get
    // clipped by the SVG canvas, whatever angle they land at.
    let svg = `<svg viewBox="-25 -25 450 450" class="natal-wheel-svg" role="img" aria-label="本命星盤輪圖">`;

    // Solid backing disc so the page's background watermark doesn't show
    // through the middle of the wheel and muddy the reading.
    svg += `<circle cx="${cx}" cy="${cy}" r="${outerR}" fill="#0a0714"/>`;

    // Zodiac ring: 12 wedges, alternating shade so signs are easy to tell apart
    ZODIAC_SIGNS.forEach((sign, i) => {
        const elonStart = i * 30, elonEnd = i * 30 + 30;
        const path = natalAnnularWedgePath(cx, cy, zodiacInnerR, outerR, elonStart, elonEnd, asc);
        const fill = i % 2 === 0 ? 'rgba(223,186,71,0.09)' : 'rgba(223,186,71,0.025)';
        svg += `<path d="${path}" fill="${fill}" stroke="rgba(223,186,71,0.35)" stroke-width="0.6"/>`;
        const mid = natalPolarPoint(cx, cy, (zodiacInnerR + outerR) / 2, elonStart + 15, asc);
        svg += `<text x="${mid.x.toFixed(1)}" y="${mid.y.toFixed(1)}" class="natal-sign-glyph" text-anchor="middle" dominant-baseline="middle">${sign.symbol}</text>`;
    });

    // Degree tick ring just inside the zodiac wedges — longer ticks every
    // 10°, short ticks every 2°, echoing a real ephemeris wheel's rim.
    for (let d = 0; d < 360; d += 2) {
        const isMajor = d % 10 === 0;
        const r1 = tickOuterR;
        const r2 = isMajor ? tickOuterR - 10 : tickOuterR - 5;
        const p1 = natalPolarPoint(cx, cy, r1, d, asc);
        const p2 = natalPolarPoint(cx, cy, r2, d, asc);
        svg += `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="rgba(223,186,71,${isMajor ? 0.55 : 0.25})" stroke-width="${isMajor ? 0.9 : 0.5}"/>`;
    }

    // House cusp lines + house numbers (Equal House: cusp i = Ascendant + i*30)
    for (let i = 0; i < 12; i++) {
        const cuspElon = asc + i * 30;
        const p1 = natalPolarPoint(cx, cy, houseInnerR, cuspElon, asc);
        const p2 = natalPolarPoint(cx, cy, houseRingOuter, cuspElon, asc);
        svg += `<line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="rgba(223,186,71,0.3)" stroke-width="0.6"/>`;
        const numPos = natalPolarPoint(cx, cy, houseInnerR + 16, cuspElon + 15, asc);
        svg += `<text x="${numPos.x.toFixed(1)}" y="${numPos.y.toFixed(1)}" class="natal-house-num" text-anchor="middle" dominant-baseline="middle">${i + 1}</text>`;
    }

    // ASC / DSC / MC / IC axis lines, drawn thicker
    const ascP1 = natalPolarPoint(cx, cy, houseInnerR, asc, asc);
    const ascP2 = natalPolarPoint(cx, cy, outerR, asc, asc);
    svg += `<line x1="${ascP1.x.toFixed(1)}" y1="${ascP1.y.toFixed(1)}" x2="${ascP2.x.toFixed(1)}" y2="${ascP2.y.toFixed(1)}" stroke="#dfba47" stroke-width="1.4"/>`;
    const dscP2 = natalPolarPoint(cx, cy, outerR, asc + 180, asc);
    svg += `<line x1="${cx}" y1="${cy}" x2="${dscP2.x.toFixed(1)}" y2="${dscP2.y.toFixed(1)}" stroke="rgba(223,186,71,0.5)" stroke-width="0.8"/>`;
    const mcP2 = natalPolarPoint(cx, cy, outerR, chart.midheaven, asc);
    svg += `<line x1="${cx}" y1="${cy}" x2="${mcP2.x.toFixed(1)}" y2="${mcP2.y.toFixed(1)}" stroke="#dfba47" stroke-width="1.4" stroke-dasharray="2 2"/>`;

    const ascLabel = natalPolarPoint(cx, cy, outerR + 10, asc, asc);
    svg += `<text x="${ascLabel.x.toFixed(1)}" y="${ascLabel.y.toFixed(1)}" class="natal-axis-label" text-anchor="middle" dominant-baseline="middle">ASC</text>`;
    const mcLabel = natalPolarPoint(cx, cy, outerR + 10, chart.midheaven, asc);
    svg += `<text x="${mcLabel.x.toFixed(1)}" y="${mcLabel.y.toFixed(1)}" class="natal-axis-label" text-anchor="middle" dominant-baseline="middle">MC</text>`;

    // Inner boundary circle (the "aspect ring" floor)
    svg += `<circle cx="${cx}" cy="${cy}" r="${houseInnerR}" fill="none" stroke="rgba(223,186,71,0.3)" stroke-width="0.6"/>`;

    // Aspect lines — the web of relationships between planets, drawn from
    // each planet's true position (not its band-nudged label position) so
    // the geometry stays astronomically honest even when labels are spread
    // out to avoid overlapping.
    const aspects = computeAspects(chart.planets);
    aspects.forEach(asp => {
        if (asp.tone === 'neutral') return; // conjunctions: bodies already sit together, a line adds no info
        const pa = chart.planets.find(p => p.body === asp.a);
        const pb = chart.planets.find(p => p.body === asp.b);
        if (!pa || !pb) return;
        const pointA = natalPolarPoint(cx, cy, aspectR, pa.elon, asc);
        const pointB = natalPolarPoint(cx, cy, aspectR, pb.elon, asc);
        svg += `<line x1="${pointA.x.toFixed(1)}" y1="${pointA.y.toFixed(1)}" x2="${pointB.x.toFixed(1)}" y2="${pointB.y.toFixed(1)}" stroke="${NATAL_ASPECT_COLORS[asp.tone]}" stroke-width="1" opacity="0.7"/>`;
    });

    // Planets, spread across radius bands to avoid overlap, with a thin
    // leader line back to their true position on the zodiac ring.
    const bandOf = natalAssignPlanetBands(chart.planets, asc);
    chart.planets.forEach(p => {
        const band = bandOf[p.body];
        const tick = natalPolarPoint(cx, cy, zodiacInnerR - 2, p.elon, asc);
        const glyph = natalPolarPoint(cx, cy, band, p.elon, asc);
        svg += `<line x1="${tick.x.toFixed(1)}" y1="${tick.y.toFixed(1)}" x2="${glyph.x.toFixed(1)}" y2="${glyph.y.toFixed(1)}" stroke="rgba(223,186,71,0.35)" stroke-width="0.5"/>`;
        svg += `<circle cx="${glyph.x.toFixed(1)}" cy="${glyph.y.toFixed(1)}" r="10" fill="#0a0714" stroke="${p.retrograde ? '#f87171' : (p.color || '#dfba47')}" stroke-width="1.4"/>`;
        svg += `<text x="${glyph.x.toFixed(1)}" y="${glyph.y.toFixed(1)}" class="natal-planet-glyph" text-anchor="middle" dominant-baseline="middle" fill="${p.color || '#f8fafc'}">${p.symbol}</text>`;
    });

    // Crisp outer edge, drawn last so it sits cleanly on top of everything.
    svg += `<circle cx="${cx}" cy="${cy}" r="${outerR}" fill="none" stroke="#dfba47" stroke-width="1.2"/>`;

    svg += `</svg>`;
    return svg;
}

// Vivid, varied colors cycled across every tile so the grid reads as
// colorful/lively rather than the site's usual muted gold-on-black.
const NATAL_TILE_PALETTE = [
    '#f97316', '#f43f5e', '#eab308', '#22c55e', '#06b6d4', '#3b82f6',
    '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#84cc16', '#0ea5e9',
    '#a855f7', '#ef4444', '#22d3ee', '#fb7185'
];
function natalTileColor(i) {
    return NATAL_TILE_PALETTE[i % NATAL_TILE_PALETTE.length];
}

// 相位解讀 list — see astrology.js's aspectInterpretation() for the
// composition logic (aspect-type meaning + the two planets' keywords).
// Sorted tightest-orb-first since a tighter orb is traditionally
// considered a stronger, more clearly-felt aspect.
function buildAspectListHTML(chart) {
    const { computeAspects, aspectInterpretation, PLANETS_META } = window.TarotAstrology;
    const aspects = computeAspects(chart.planets).slice().sort((a, b) => a.orb - b.orb);
    if (!aspects.length) {
        return '<p class="natal-aspect-empty">這張命盤沒有偵測到符合容許度的主要相位。</p>';
    }
    const metaByBody = {};
    PLANETS_META.forEach(m => { metaByBody[m.body] = m; });
    return aspects.map(asp => {
        const aMeta = metaByBody[asp.a], bMeta = metaByBody[asp.b];
        const text = aspectInterpretation(asp.a, asp.b, asp.aspect);
        return `
            <div class="natal-aspect-row natal-aspect-tone-${asp.tone}">
                <span class="natal-aspect-pair">${aMeta.symbol} ${aMeta.label} ${asp.label} ${bMeta.symbol} ${bMeta.label}</span>
                <p class="natal-aspect-text">${text}</p>
            </div>
        `;
    }).join('');
}

function renderNatalResult(chart) {
    const { ascendantSign, ascendantDegree, midheavenSign, midheavenDegree } = chart;
    const wheelSvg = buildNatalWheelSVG(chart);
    const { HOUSE_MEANINGS } = window.TarotAstrology;

    // Which houses actually have a planet in them. Only up to 10 of the 12
    // houses can ever hold one of the 10 classical planets, so some houses
    // are always "empty" — that's normal, not a bug, but it needs to be
    // obvious on the tile itself rather than only after opening it.
    const occupantsByHouse = {};
    chart.planets.forEach(p => {
        occupantsByHouse[p.house] = occupantsByHouse[p.house] || [];
        occupantsByHouse[p.house].push(p);
    });

    let tileIndex = 0;
    const nextColor = () => natalTileColor(tileIndex++);
    const tiles = [];

    // Small ornate corner brackets — same decorative language as the (also
    // now-styled) tarot card corners — dropped into every tile so the frame
    // reads as carved/gallery-framed instead of a plain flat rounded box.
    const cornerDecorHTML = `
        <div class="corner-decor corner-tl"></div>
        <div class="corner-decor corner-tr"></div>
        <div class="corner-decor corner-bl"></div>
        <div class="corner-decor corner-br"></div>
    `;

    // Wheel tile — bigger, artwork always visible on the small tile; on
    // hover/tap the spotlight shows a larger copy of the same wheel plus
    // the aspect-color legend, centered on screen.
    tiles.push(`
        <div class="natal-tile natal-tile-wheel" style="--tile-color:${nextColor()}" tabindex="0">
            ${cornerDecorHTML}
            <div class="natal-tile-face">
                <div class="natal-tile-wheel-svg">${wheelSvg}</div>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">✦ 星盤輪圖</strong>
                <div class="natal-spotlight-wheel-svg">${wheelSvg}</div>
                <span class="natal-legend">
                    <span class="natal-legend-item"><i class="natal-legend-swatch" style="background:#38bdf8"></i>調和相位（六分／三分）</span>
                    <span class="natal-legend-item"><i class="natal-legend-swatch" style="background:#f87171"></i>緊張相位（四分／對分）</span>
                </span>
                <div class="natal-aspect-section">
                    <p class="natal-aspect-section-title">相位解讀</p>
                    <p class="natal-aspect-section-intro">相位是行星之間的角度關係，代表兩股能量會用什麼方式互相影響。以下依角度誤差（容許度）由小到大排序，容許度越小代表這組相位的作用通常越明顯。</p>
                    ${buildAspectListHTML(chart)}
                </div>
            </div>
        </div>
    `);

    tiles.push(`
        <div class="natal-tile" style="--tile-color:${nextColor()}" tabindex="0">
            ${cornerDecorHTML}
            <div class="natal-tile-face">
                <span class="natal-tile-icon">${ascendantSign.symbol}</span>
                <span class="natal-tile-label">上升 ASC</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">上升星座 ASC</strong>
                <p>${ascendantSign.symbol} ${ascendantSign.name} ${ascendantDegree.toFixed(1)}°</p>
                <p>上升星座（Ascendant）是你出生當下、東方地平線正在升起的星座，代表你給別人的第一印象、外在行為模式，以及剛接觸新環境時最直覺的反應方式——很多時候比太陽星座更貼近你日常展現出來的「表面性格」。</p>
                <p>你的上升在${ascendantSign.name}，這股特質會${ascendantSign.trait}。</p>
            </div>
        </div>
    `);

    tiles.push(`
        <div class="natal-tile" style="--tile-color:${nextColor()}" tabindex="0">
            ${cornerDecorHTML}
            <div class="natal-tile-face">
                <span class="natal-tile-icon">${midheavenSign.symbol}</span>
                <span class="natal-tile-label">天頂 MC</span>
            </div>
            <div class="natal-tile-detail">
                <strong class="natal-tile-detail-title">天頂 MC</strong>
                <p>${midheavenSign.symbol} ${midheavenSign.name} ${midheavenDegree.toFixed(1)}°</p>
                <p>天頂（Midheaven, MC）是本命盤最高點，象徵你的社會形象、事業方向與想在世界上留下的成就與名聲，也常與人生中扮演權威角色的長輩（例如父母其中一方）有關。</p>
                <p>你的天頂在${midheavenSign.name}，這股特質會${midheavenSign.trait}。</p>
            </div>
        </div>
    `);

    const { PLANET_HOUSE_INSIGHTS } = window.TarotAstrology;
    chart.planets.forEach(p => {
        const combo = (PLANET_HOUSE_INSIGHTS[p.body] || {})[p.house];
        tiles.push(`
            <div class="natal-tile" style="--tile-color:${nextColor()}" tabindex="0">
                ${cornerDecorHTML}
                <div class="natal-tile-face">
                    <span class="natal-tile-icon">${p.symbol}</span>
                    <span class="natal-tile-label">${p.label}${p.retrograde ? ' R' : ''}</span>
                </div>
                <div class="natal-tile-detail">
                    <strong class="natal-tile-detail-title">${p.symbol} ${p.label}${p.retrograde ? '<span class="natal-retro-badge">R 逆行</span>' : ''}</strong>
                    <p>${p.sign.symbol} ${p.sign.name} ${p.degree.toFixed(1)}°　第 ${p.house} 宮（${p.houseMeaning.name}）</p>
                    <p><strong class="natal-tile-subhead">${p.label}代表：</strong>${p.meaning}</p>
                    <p><strong class="natal-tile-subhead">落在${p.sign.name}：</strong>這股特質會${p.sign.trait}。</p>
                    <p><strong class="natal-tile-subhead">第 ${p.house} 宮（${p.houseMeaning.name}）代表：</strong>${p.houseMeaning.keyword}。${p.houseMeaning.description}</p>
                    ${combo ? `<p><strong class="natal-tile-subhead">${p.label}落在${p.houseMeaning.name}：</strong>${combo}</p>` : ''}
                    ${p.retrograde ? '<p class="natal-tile-retro-note">這顆星目前是逆行狀態，它的能量常會轉向內在，需要多一層反思、重新整理過後才會展現出來，而不是直接向外行動。</p>' : ''}
                </div>
            </div>
        `);
    });

    HOUSE_MEANINGS.forEach(h => {
        const occupants = occupantsByHouse[h.number] || [];
        const hasOccupants = occupants.length > 0;
        // Each occupying planet gets its own combo write-up right here too
        // (not just on the planet's own tile) — so browsing by house also
        // answers "my Pluto is here, so what does that actually mean?"
        // without having to go hunt down the planet's tile separately.
        const occupantDetails = occupants.map(p => {
            const combo = (PLANET_HOUSE_INSIGHTS[p.body] || {})[h.number];
            return `
                <div class="natal-tile-occupant-detail">
                    <strong class="natal-tile-subhead">${p.symbol} ${p.label}${p.retrograde ? '<span class="natal-retro-badge">R 逆行</span>' : ''} 落在這裡：</strong>
                    <span>${combo || (p.meaning + '。')}</span>
                </div>`;
        }).join('');
        tiles.push(`
            <div class="natal-tile${hasOccupants ? '' : ' natal-tile-house-empty'}" style="--tile-color:${nextColor()}" tabindex="0">
                ${cornerDecorHTML}
                <div class="natal-tile-face">
                    <span class="natal-tile-badge">${h.number}</span>
                    <span class="natal-tile-label">${h.name}</span>
                    ${hasOccupants
                        ? `<span class="natal-tile-face-occupants">${occupants.map(p => p.symbol).join(' ')}</span>`
                        : `<span class="natal-tile-face-empty">無行星</span>`}
                </div>
                <div class="natal-tile-detail">
                    <strong class="natal-tile-detail-title">第${h.number}宮・${h.name}</strong>
                    <p class="natal-tile-keyword">${h.keyword}</p>
                    <p>${h.description}</p>
                    ${hasOccupants
                        ? `<div class="natal-tile-occupants">${occupantDetails}</div>`
                        : `<p class="natal-tile-occupants natal-tile-occupants-empty">這一宮目前沒有你的行星坐落，僅供對照參考——宮頭星座與宮主星仍會影響這個領域怎麼展現。</p>`}
                </div>
            </div>
        `);
    });

    // Whole chart is laid out as one grid of tiles (left-to-right,
    // top-to-bottom) instead of a long scroll — each tile gently "breathes",
    // and clicking/tapping it shows its full detail centered on screen via
    // the shared spotlight overlay (rather than growing in place, which
    // gets clipped near the grid's edges). Click-only (not hover) so seekers
    // can move the mouse around to read long entries without it vanishing.
    natalResult.hidden = false;
    natalResult.innerHTML = `
        <p class="natal-tile-caption">💫 星盤輪圖、上升、天頂與 10 顆行星都是你獨有的計算結果。十二宮位中，<strong>顏色飽滿、標出行星符號</strong>的代表你的行星真的落在那一宮；<strong>顏色黯淡、標示「無行星」</strong>的宮位目前沒有你的行星坐落，僅供對照參考。點擊任一方塊可放大查看，點右上角關閉或點方塊外側可收合。</p>
        <div class="natal-tile-grid">${tiles.join('')}</div>
        <div class="natal-spotlight" id="natalSpotlight">
            <div class="natal-spotlight-panel" id="natalSpotlightPanel">
                <button class="natal-spotlight-close" type="button" aria-label="關閉">✕</button>
                <div class="natal-spotlight-inner" id="natalSpotlightInner"></div>
            </div>
        </div>
    `;
}

// Populates and reveals the centered spotlight card with a given tile's
// detail content (cloned, not moved, so the small tile itself is untouched
// and keeps breathing in place). Marks the tile itself as "active" so the
// caller can tell which tile (if any) is currently open.
function openNatalTile(tile) {
    const spotlight = document.getElementById('natalSpotlight');
    const panel = document.getElementById('natalSpotlightPanel');
    const inner = document.getElementById('natalSpotlightInner');
    if (!spotlight || !panel || !inner) return;
    const detailEl = tile.querySelector('.natal-tile-detail');
    if (!detailEl) return;

    const prevActive = document.querySelector('.natal-tile.active');
    if (prevActive && prevActive !== tile) prevActive.classList.remove('active');

    inner.innerHTML = detailEl.innerHTML;
    inner.scrollTop = 0;
    const color = tile.style.getPropertyValue('--tile-color');
    if (color) panel.style.setProperty('--tile-color', color);
    tile.classList.add('active');
    spotlight.classList.add('active');

    // The wheel is the one tile worth seeing big — its spotlight expands to
    // fill nearly the whole screen instead of the compact card used for
    // every other (mostly text) tile.
    spotlight.classList.toggle('wheel-mode', tile.classList.contains('natal-tile-wheel'));
}

function closeNatalSpotlight() {
    const spotlight = document.getElementById('natalSpotlight');
    if (spotlight) spotlight.classList.remove('active');
    const activeTile = document.querySelector('.natal-tile.active');
    if (activeTile) activeTile.classList.remove('active');
}

// Click/tap delegation for the natal tile grid: clicking a tile opens the
// spotlight, clicking it again (or the close button, or the dimmed area
// outside the card) closes it. Added once since natalResult's innerHTML is
// fully rebuilt on every calculation.
function handleNatalTileToggle(e) {
    if (e.target.closest && e.target.closest('.natal-spotlight-close')) {
        closeNatalSpotlight();
        return;
    }
    // Clicked the dimmed backdrop itself (not the card inside it) -> close.
    if (e.target.id === 'natalSpotlight') {
        closeNatalSpotlight();
        return;
    }
    const tile = e.target.closest && e.target.closest('.natal-tile');
    if (!tile) return;
    if (tile.classList.contains('active')) {
        closeNatalSpotlight();
    } else {
        openNatalTile(tile);
    }
}
if (natalResult) {
    natalResult.addEventListener('click', handleNatalTileToggle);
    natalResult.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNatalSpotlight();
            return;
        }
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const tile = e.target.closest && e.target.closest('.natal-tile');
        if (!tile) return;
        e.preventDefault();
        if (tile.classList.contains('active')) {
            closeNatalSpotlight();
        } else {
            openNatalTile(tile);
        }
    });
}

if (natalChartLinkBtn) {
    natalChartLinkBtn.addEventListener('click', () => {
        showView('natal');
    });
}
if (natalChartBackBtn) natalChartBackBtn.addEventListener('click', () => showView('mode'));

if (calcNatalChartBtn) {
    calcNatalChartBtn.addEventListener('click', () => {
        const dateVal = natalDateInput.value;
        const timeVal = natalTimeInput.value;
        if (!dateVal || !timeVal) {
            natalResult.hidden = false;
            natalResult.innerHTML = `<p class="birthcard-error">請先填寫完整的出生日期與時間。</p>`;
            return;
        }

        let lat, lon, utcOffset;
        const cityVal = natalCitySelect.value;
        if (cityVal === 'manual') {
            lat = parseFloat(natalLatInput.value);
            lon = parseFloat(natalLonInput.value);
            utcOffset = parseFloat(natalUtcSelect.value);
            if (Number.isNaN(lat) || Number.isNaN(lon) || Number.isNaN(utcOffset)) {
                natalResult.hidden = false;
                natalResult.innerHTML = `<p class="birthcard-error">請輸入完整的緯度、經度與時區。</p>`;
                return;
            }
        } else {
            const city = window.TarotAstrology.CITY_PRESETS[parseInt(cityVal, 10)];
            if (!city) {
                natalResult.hidden = false;
                natalResult.innerHTML = `<p class="birthcard-error">請選擇出生地點。</p>`;
                return;
            }
            lat = city.lat;
            lon = city.lon;
            utcOffset = city.utcOffset;
        }

        try {
            localStorage.setItem(NATAL_STORAGE_KEY, JSON.stringify({
                date: dateVal, time: timeVal, city: cityVal,
                lat: natalLatInput.value, lon: natalLonInput.value, utc: natalUtcSelect.value
            }));
        } catch (e) { /* ignore */ }

        try {
            const chart = window.TarotAstrology.computeNatalChart({
                localDateStr: dateVal, localTimeStr: timeVal,
                utcOffsetHours: utcOffset, lat, lon
            });
            renderNatalResult(chart);
        } catch (e) {
            natalResult.hidden = false;
            natalResult.innerHTML = `<p class="birthcard-error">計算時發生問題，請確認輸入內容後再試一次。</p>`;
        }
    });
}

