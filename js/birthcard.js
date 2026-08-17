// ---------------------------------------------------------------------------
// Birthday Card: a numerology-style "life/soul card" calculator. Sums every
// digit of the seeker's birth date, reduces it down to 0-21, and maps that
// number onto one of the 22 Major Arcana cards, in their traditional order.
// ---------------------------------------------------------------------------
const MAJOR_ARCANA_ORDER = [
    'fool', 'magician', 'priestess', 'empress', 'emperor', 'hierophant',
    'lovers', 'chariot', 'strength', 'hermit', 'wheel', 'justice',
    'hangedman', 'death', 'temperance', 'devil', 'tower', 'star',
    'moon', 'sun', 'judgement', 'world'
];

function digitSum(value) {
    return String(value).split('').filter(ch => /[0-9]/.test(ch)).reduce((sum, d) => sum + Number(d), 0);
}

// dateStr is expected in the "YYYY-MM-DD" format that <input type="date"> gives us.
function calcBirthCardIndex(dateStr) {
    let n = digitSum(dateStr.replace(/-/g, ''));
    while (n > 21) {
        n = digitSum(n);
    }
    return n;
}

birthDateInput.max = new Date().toISOString().slice(0, 10);

// Remember the seeker's birth date across visits so they don't have to
// re-type it every time they check their soul card.
try {
    const savedBirthDate = localStorage.getItem('tarotBirthDate');
    if (savedBirthDate) birthDateInput.value = savedBirthDate;
} catch (e) { /* localStorage unavailable, ignore */ }

birthCardLinkBtn.addEventListener('click', () => {
    birthCardResult.hidden = true;
    birthCardResult.innerHTML = '';
    showView('birthcard');
});
birthCardBackBtn.addEventListener('click', () => showView('mode'));

calcBirthCardBtn.addEventListener('click', () => {
    const val = birthDateInput.value;
    if (!val) {
        birthCardResult.hidden = false;
        birthCardResult.innerHTML = `<p class="birthcard-error">請先選擇你的出生年月日。</p>`;
        return;
    }

    try { localStorage.setItem('tarotBirthDate', val); } catch (e) { /* ignore */ }

    const index = calcBirthCardIndex(val);
    const cardId = MAJOR_ARCANA_ORDER[index] || MAJOR_ARCANA_ORDER[0];
    const card = (window.TAROT_CARDS || []).find(c => c.id === cardId);
    if (!card) {
        birthCardResult.hidden = false;
        birthCardResult.innerHTML = `<p class="birthcard-error">計算時發生問題，請稍後再試一次。</p>`;
        return;
    }

    const imagePath = `${cardImageFolder()}/${card.id}.jpg`;
    birthCardResult.hidden = false;
    birthCardResult.innerHTML = `
        <div class="birthcard-card">
            <img src="${imagePath}" alt="${card.name}" data-card-id="${card.id}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="svg-fallback" style="display: none; width: 100%; height: 100%;">${card.svg}</div>
        </div>
        <div class="birthcard-info">
            <h3>${card.name}</h3>
            <p class="birthcard-keywords">關鍵字：${card.keywords}</p>
            <p>${card.upright}</p>
            <p class="explanation-extra-item"><strong>對應能量：</strong>${card.astro || ''}</p>
            <p class="explanation-extra-item"><strong>數字意涵：</strong>${card.numerology || ''}</p>
        </div>
    `;
});

