// ---------------------------------------------------------------------
// Share / save the finished reading
// ---------------------------------------------------------------------
function buildShareText() {
    const spreadName = SPREADS[currentSpreadType] ? SPREADS[currentSpreadType].name : '';
    const topicLabel = (TOPICS[currentTopic] || TOPICS.general).label;
    const lines = drawnCards.map((c, i) => {
        const slotName = SPREADS[currentSpreadType].slots[i];
        const dir = c.isReversed ? '逆位' : '正位';
        return `${slotName}：${c.name}（${dir}）`;
    });
    return `✦ 神祕星辰塔羅牌 ✦\n牌陣：${spreadName}　主題：${topicLabel}\n${lines.join('\n')}\n\n來自 神祕星辰塔羅 Celestial Tarot`;
}

// Splits a CJK-friendly string into lines that fit maxWidth, breaking on
// individual characters (Chinese text has no spaces to wrap on) but keeping
// ASCII "words" together where reasonable.
function wrapTextForCanvas(ctx, text, maxWidth) {
    const lines = [];
    let current = '';
    for (const ch of text) {
        const test = current + ch;
        if (current && ctx.measureText(test).width > maxWidth) {
            lines.push(current);
            current = ch;
        } else {
            current = test;
        }
    }
    if (current) lines.push(current);
    return lines;
}

// Draws the whole shareable summary onto a canvas 2D context, starting at
// startY, and returns the final Y position — used both to measure the
// required canvas height (dry run on a scratch canvas) and to do the real
// drawing (on the correctly-sized canvas), so the two never disagree.
function drawShareContent(ctx, width, spreadName, topicLabel, cards) {
    const padX = 44;
    const contentWidth = width - padX * 2;
    let y = 56;

    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#dfba47';
    ctx.font = '600 30px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ 神祕星辰塔羅牌 ✦', width / 2, y);
    y += 34;

    ctx.fillStyle = '#b9a984';
    ctx.font = '15px Montserrat, sans-serif';
    ctx.fillText(`牌陣：${spreadName}　主題：${topicLabel}`, width / 2, y);
    y += 28;

    ctx.strokeStyle = 'rgba(223,186,71,0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padX, y);
    ctx.lineTo(width - padX, y);
    ctx.stroke();
    y += 34;

    ctx.textAlign = 'left';
    cards.forEach((c, i) => {
        const dirText = c.isReversed ? '逆位' : '正位';
        const dirColor = c.isReversed ? '#f87171' : '#4ade80';

        ctx.font = '600 20px Cinzel, serif';
        ctx.fillStyle = '#dfba47';
        const nameText = `${c.slotLabel}｜${c.name}`;
        ctx.fillText(nameText, padX, y);
        const nameWidth = ctx.measureText(nameText).width;

        ctx.font = '13px Montserrat, sans-serif';
        ctx.fillStyle = dirColor;
        ctx.fillText(`〔${dirText}〕`, padX + nameWidth + 12, y);
        y += 24;

        ctx.font = '13px Montserrat, sans-serif';
        ctx.fillStyle = '#8b95a8';
        ctx.fillText(`關鍵字：${c.keywords || ''}`, padX, y);
        y += 22;

        ctx.font = '14px Montserrat, sans-serif';
        ctx.fillStyle = '#e8e8f0';
        const bodyLines = wrapTextForCanvas(ctx, c.interpretation || '', contentWidth);
        bodyLines.forEach(line => {
            ctx.fillText(line, padX, y);
            y += 22;
        });

        y += 10;
        if (i < cards.length - 1) {
            ctx.strokeStyle = 'rgba(223,186,71,0.15)';
            ctx.beginPath();
            ctx.moveTo(padX, y);
            ctx.lineTo(width - padX, y);
            ctx.stroke();
            y += 26;
        }
    });

    y += 18;
    ctx.textAlign = 'center';
    ctx.font = '12px Montserrat, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('神祕星辰塔羅 · Celestial Tarot', width / 2, y);
    y += 30;

    return y;
}

async function buildShareCanvas() {
    if (document.fonts && document.fonts.ready) {
        try { await document.fonts.ready; } catch (e) { /* ignore */ }
    }

    const spreadName = SPREADS[currentSpreadType] ? SPREADS[currentSpreadType].name : '';
    const topicLabel = (TOPICS[currentTopic] || TOPICS.general).label;
    const slots = SPREADS[currentSpreadType].slots;
    const cards = drawnCards.map((c, i) => ({
        slotLabel: slots[i],
        name: c.name,
        isReversed: c.isReversed,
        keywords: c.keywords,
        interpretation: c.isReversed ? c.reversed : c.upright
    }));

    const width = 720;

    // Dry run on a throwaway canvas just to measure the required height —
    // this uses the exact same drawing function, so height and layout can
    // never fall out of sync with each other.
    const scratch = document.createElement('canvas');
    scratch.width = width;
    scratch.height = 10;
    const scratchCtx = scratch.getContext('2d');
    const measuredHeight = drawShareContent(scratchCtx, width, spreadName, topicLabel, cards);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = Math.ceil(measuredHeight) + 20;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0a0714';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(223,186,71,0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);

    drawShareContent(ctx, width, spreadName, topicLabel, cards);

    return canvas;
}

async function shareReading() {
    const shareText = buildShareText();
    let canvas = null;
    try {
        canvas = await buildShareCanvas();
    } catch (e) {
        // drawing failed for some reason — fall back to text-only sharing below
    }

    // Try the native share sheet first (mobile browsers mostly); it can share
    // an image file directly if the browser supports file sharing.
    if (navigator.share) {
        try {
            if (canvas && navigator.canShare) {
                const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
                const file = new File([blob], 'tarot-reading.png', { type: 'image/png' });
                if (navigator.canShare({ files: [file] })) {
                    await navigator.share({ files: [file], title: '我的塔羅占卜結果', text: shareText });
                    return;
                }
            }
            await navigator.share({ title: '我的塔羅占卜結果', text: shareText });
            return;
        } catch (e) {
            // user cancelled the share sheet, or an image step failed — fall through to the download/copy path below
        }
    }

    // Fallback for desktop / unsupported browsers: download a PNG image of the
    // result, and also copy the text summary to the clipboard.
    try {
        if (canvas) {
            const link = document.createElement('a');
            link.download = 'tarot-reading.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    } catch (e) { /* image export not available, text copy below still runs */ }

    try {
        await navigator.clipboard.writeText(shareText);
        const original = shareResultBtn.textContent;
        shareResultBtn.textContent = '已複製文字 + 下載圖片 ✓';
        setTimeout(() => { shareResultBtn.textContent = original; }, 2200);
    } catch (e) { /* clipboard not available; the image download above is still useful */ }
}

// Add event listener to the central card deck
document.querySelector('.mystic-deck').addEventListener('click', () => {
    if (drawnCards.length < SPREADS[currentSpreadType].slots.length) {
        drawCard();
    }
});

document.querySelector('.mystic-deck').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (drawnCards.length < SPREADS[currentSpreadType].slots.length) {
            drawCard();
        }
    }
});
