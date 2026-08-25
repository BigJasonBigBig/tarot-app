// ---------------------------------------------------------------------
// I Ching (易經六爻卜卦) — cast + render.
//
// Depends on: js/data-yijing-content.js (YijingData). Unlike the other
// chart-style features (ziwei/bazi/runes), this one doesn't use the
// tile+spotlight pattern — a single cast produces at most two hexagrams
// (本卦 + optional 之卦), which is little enough content to just show
// inline in full, without a click-to-expand step.
// ---------------------------------------------------------------------
function buildYijingLinesHTML(lines, showReadings) {
    // Render top line (line 6) first, down to the bottom line (line 1),
    // matching how hexagrams are traditionally drawn. When showReadings is
    // true (本卦 only — see buildYijingCardHTML), each line row is clickable
    // and expands to show its 逐爻解讀 (see js/data-yijing-content.js's
    // lineReading()).
    return lines.slice().reverse().map(function (line) {
        const changingMark = line.changing ? '<span class="yijing-line-changing-dot" title="變爻"></span>' : '';
        const shapeHTML = line.type === 'yang'
            ? '<span class="yijing-line yijing-line-yang"></span>'
            : '<span class="yijing-line yijing-line-yin"><span class="yijing-line-yin-seg"></span><span class="yijing-line-yin-seg"></span></span>';
        if (!showReadings || !line.reading) {
            return `<div class="yijing-line-row${line.changing ? ' is-changing' : ''}">${shapeHTML}${changingMark}<span class="yijing-line-label">${line.label}</span></div>`;
        }
        return `
            <div class="yijing-line-row yijing-line-row-clickable${line.changing ? ' is-changing' : ''}" data-line-position="${line.position}" tabindex="0" role="button" aria-expanded="false">
                ${shapeHTML}${changingMark}<span class="yijing-line-label">${line.positionLabel}</span>
            </div>
            <div class="yijing-line-detail" id="yijingLineDetail${line.position}" hidden>
                <p>${line.reading}</p>
            </div>
        `;
    }).join('');
}

function buildYijingCardHTML(hexagram, lines, titlePrefix, showReadings) {
    const adviceHTML = hexagram.advice ? `<p class="yijing-hexagram-advice">💡 ${hexagram.advice}</p>` : '';
    const hintHTML = showReadings ? '<p class="yijing-lines-hint">點擊每一爻可以看逐爻解讀</p>' : '';
    return `
        <div class="yijing-hexagram-card">
            <div class="yijing-lines">${buildYijingLinesHTML(lines, showReadings)}</div>
            ${hintHTML}
            <div class="yijing-hexagram-info">
                <span class="yijing-hexagram-badge">${titlePrefix}</span>
                <span class="yijing-hexagram-unicode">${hexagram.unicode}</span>
                <strong class="yijing-hexagram-name">${hexagram.name}</strong>
                <span class="yijing-hexagram-trigrams">上${hexagram.upper.name}（${hexagram.upper.element}）・下${hexagram.lower.name}（${hexagram.lower.element}）</span>
                <p class="yijing-hexagram-judgment">${hexagram.judgment}</p>
                ${adviceHTML}
            </div>
        </div>
    `;
}

// For the 之卦 card, the changing-line dots stay in place (they mark WHERE
// change happened) but every line's yin/yang shape reflects the resulting
// (post-change) hexagram, not the original.
function transformedLines(castResult) {
    return castResult.lines.map(function (line) {
        if (!line.changing) return line;
        return {
            value: line.value,
            type: line.type === 'yang' ? 'yin' : 'yang',
            changing: true,
            label: line.label,
        };
    });
}

function handleYijingLineToggle(e) {
    const row = e.target.closest && e.target.closest('.yijing-line-row-clickable');
    if (!row) return;
    const pos = row.getAttribute('data-line-position');
    const detail = document.getElementById('yijingLineDetail' + pos);
    if (!detail) return;
    const isOpen = !detail.hidden;
    detail.hidden = isOpen;
    row.setAttribute('aria-expanded', String(!isOpen));
}

function renderYijingResult(castResult) {
    const primaryHTML = buildYijingCardHTML(castResult.primary, castResult.lines, '本卦', true);
    let transformedHTML = '';
    let summaryText;

    if (castResult.changingCount > 0) {
        transformedHTML = `
            <span class="yijing-arrow">→</span>
            ${buildYijingCardHTML(castResult.transformed, transformedLines(castResult), '之卦', false)}
        `;
        summaryText = `這次總共擲出 ${castResult.changingCount} 個變爻（老陽／老陰，圖上有標記的線），代表「${castResult.primary.name}」正在轉變為「${castResult.transformed.name}」。可以把本卦當作目前的處境，之卦當作事情接下來可能發展的方向，本卦每一爻也都可以點開查看逐爻解讀。`;
    } else {
        summaryText = `這次沒有擲出變爻（六爻都是少陽或少陰），代表局勢相對穩定，直接以「${castResult.primary.name}」的卦辭來解讀就可以了，也可以點開每一爻查看逐爻解讀。`;
    }

    yijingResult.hidden = false;
    yijingResult.innerHTML = `
        <p class="natal-tile-caption">💫 ${summaryText}</p>
        <div class="yijing-result-row">${primaryHTML}${transformedHTML}</div>
        <button class="action-btn action-btn-secondary" id="yijingRecastBtn" type="button">重新擲一次</button>
    `;

    const recastBtn = document.getElementById('yijingRecastBtn');
    if (recastBtn) {
        recastBtn.addEventListener('click', () => {
            renderYijingResult(window.YijingData.castHexagram());
        });
    }
}

if (yijingResult) {
    yijingResult.addEventListener('click', handleYijingLineToggle);
    yijingResult.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const row = e.target.closest && e.target.closest('.yijing-line-row-clickable');
        if (!row) return;
        e.preventDefault();
        handleYijingLineToggle(e);
    });
}

if (yijingChartBackBtn) yijingChartBackBtn.addEventListener('click', () => showView('mode'));

if (castYijingBtn) {
    castYijingBtn.addEventListener('click', () => {
        try {
            renderYijingResult(window.YijingData.castHexagram());
        } catch (e) {
            yijingResult.hidden = false;
            yijingResult.innerHTML = `<p class="birthcard-error">起卦時發生問題，請再試一次。</p>`;
        }
    });
}
