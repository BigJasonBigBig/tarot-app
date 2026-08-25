// ---------------------------------------------------------------------
// 姓名學／五格剖象 — 三才配置（天格・人格・地格的五行組合）。
//
// 三才是姓名學裡在「五格」之外，另一個常見的分析角度：把天格、人格、
// 地格各自的筆畫數換算成五行，組成一組「天－人－地」的五行序列，再依
// 傳統對照表判斷這個序列本身的吉凶（喜相生、忌相剋，天剋人或人剋地
// 尤其視為大凶）。這一段分析和五格數理是兩個獨立的系統，通常會一起
// 參考。
//
// 筆畫轉五行的規則（尾數）：1、2 屬木；3、4 屬火；5、6 屬土；7、8 屬
// 金；9、0 屬水。這是各家姓名學共通、沒有爭議的慣例。
//
// 125 種天/人/地五行組合（5x5x5）的吉凶判斷，是根據多個公開姓名學網站
// 共同引用、可追溯到《熊崎氏姓名學》的傳統對照表整理而成；下面每一則
// 說明文字都經過重新改寫，不是逐字引用單一來源，其中一組組合
// （金金火）原始資料佚失，依同一分類的整體傾向自行補寫，其餘 124 組
// 的吉凶分類都直接依據原始對照表。
// ---------------------------------------------------------------------
window.NameSanCai = (function () {
    var ELEMENTS = ['木', '火', '土', '金', '水'];
    var GENERATES = { 木: '火', 火: '土', 土: '金', 金: '水', 水: '木' };
    var OVERCOMES = { 木: '土', 土: '水', 水: '火', 火: '金', 金: '木' };

    function elementOfStroke(n) {
        var last = ((n % 10) + 10) % 10;
        if (last === 1 || last === 2) return '木';
        if (last === 3 || last === 4) return '火';
        if (last === 5 || last === 6) return '土';
        if (last === 7 || last === 8) return '金';
        return '水'; // 9 or 0
    }

    // Describes the 五行 relationship where `a` comes before `b` in the
    // 天->人->地 sequence (a 對 b 的關係).
    function relationOf(a, b) {
        if (a === b) return { type: 'same', label: a + b + '比和' };
        if (GENERATES[a] === b) return { type: 'generates', label: a + '生' + b + '（相生・順）' };
        if (GENERATES[b] === a) return { type: 'generated', label: b + '生' + a + '（相生・逆）' };
        if (OVERCOMES[a] === b) return { type: 'overcomes', label: a + '剋' + b + '（相剋）' };
        if (OVERCOMES[b] === a) return { type: 'overcome', label: b + '剋' + a + '（相剋）' };
        return { type: 'unknown', label: a + '與' + b };
    }

    // 125 組吉凶分類（天木火土金水 x 人木火土金水 x 地木火土金水，
    // 依序展開）。'good'=吉, 'bad'=凶, 'mixed'=半吉半凶。
    var TAG_TABLE = (
        'good,good,good,bad,bad,' +
        'good,mixed,good,bad,bad,' +
        'bad,mixed,bad,bad,bad,' +
        'bad,bad,bad,bad,bad,' +
        'good,bad,bad,bad,mixed,' +

        'good,good,good,bad,bad,' +
        'good,mixed,bad,bad,bad,' +
        'mixed,good,good,bad,bad,' +
        'bad,bad,bad,bad,bad,' +
        'bad,bad,bad,bad,bad,' +

        'mixed,mixed,bad,bad,bad,' +
        'good,mixed,good,mixed,bad,' +
        'bad,good,good,good,bad,' +
        'bad,bad,good,good,bad,' +
        'bad,bad,bad,bad,bad,' +

        'bad,bad,bad,bad,bad,' +
        'bad,bad,bad,bad,bad,' +
        'mixed,mixed,good,good,bad,' +
        'bad,mixed,good,bad,bad,' +
        'bad,bad,bad,good,bad,' +

        'bad,mixed,good,bad,bad,' +
        'bad,bad,bad,bad,bad,' +
        'bad,bad,bad,bad,bad,' +
        'bad,bad,good,mixed,bad,' +
        'bad,bad,bad,bad,bad'
    ).split(',');

    if (TAG_TABLE.length !== 125) {
        throw new Error('NameSanCai: TAG_TABLE 長度應為 125，實際為 ' + TAG_TABLE.length);
    }

    var TEMPLATES = {
        good: [
            '這是相對穩固順暢的組合，做事情容易得到正向的回饋，基礎也比較安穩，屬於能安心發展的配置。',
            '整體走勢偏向順遂向上，努力比較容易被看見，也比較容易得到身邊人的支持與幫助。',
            '這組配置的能量流動比較和諧，象徵根基安定、發展平順，是值得放心經營的組合。',
            '屬於三才之中比較理想的搭配，代表基礎穩固、心力也能好好發揮，適合按部就班地累積成果。',
        ],
        mixed: [
            '這組配置吉凶參半，順利與波折可能交替出現，重點在於能不能維持耐心、穩住步調。',
            '整體來說有機會也有隱憂，前段辛苦、後段回穩的情況並不少見，宜多一分耐心與彈性。',
            '這是需要多留意搭配其他條件的組合，單看三才本身好壞參半，實際發展仍要看整體努力與環境配合。',
            '象徵起伏與轉折都可能出現，過程未必平順，但只要不躁進，仍有機會逐漸找到平衡。',
        ],
        bad: [
            '這組配置的五行關係比較緊張，容易感到阻力較大、進展比預期慢，行事上宜格外謹慎、避免躁進。',
            '象徵基礎不太穩固，過程中比較容易遇到意外的波折，建議重要決定前多方求證，別把資源一次押上。',
            '這是三才裡比較辛苦的組合，容易感到心力耗損、事倍功半，需要更多耐心與身邊人的支持才能撐過去。',
            '整體走勢偏向壓抑，努力和收穫之間容易有落差，也要多留意情緒與健康上的照顧，別讓壓力累積過久。',
        ],
    };

    function pickTemplate(seedNum, tag) {
        var arr = TEMPLATES[tag] || TEMPLATES.mixed;
        return arr[seedNum % arr.length];
    }

    function computeSanCai(tianGe, renGe, diGe) {
        var tianEl = elementOfStroke(tianGe);
        var renEl = elementOfStroke(renGe);
        var diEl = elementOfStroke(diGe);

        var tianIdx = ELEMENTS.indexOf(tianEl);
        var renIdx = ELEMENTS.indexOf(renEl);
        var diIdx = ELEMENTS.indexOf(diEl);
        var flatIndex = tianIdx * 25 + renIdx * 5 + diIdx;
        var tag = TAG_TABLE[flatIndex];

        var tianRenRelation = relationOf(tianEl, renEl);
        var renDiRelation = relationOf(renEl, diEl);

        return {
            tianElement: tianEl,
            renElement: renEl,
            diElement: diEl,
            sequence: tianEl + renEl + diEl,
            category: tag,
            categoryLabel: { good: '吉', bad: '凶', mixed: '半吉半凶' }[tag],
            tianRenRelation: tianRenRelation.label,
            renDiRelation: renDiRelation.label,
            text: pickTemplate(flatIndex, tag),
        };
    }

    return {
        ELEMENTS: ELEMENTS,
        GENERATES: GENERATES,
        OVERCOMES: OVERCOMES,
        elementOfStroke: elementOfStroke,
        relationOf: relationOf,
        TAG_TABLE: TAG_TABLE,
        computeSanCai: computeSanCai,
    };
})();
