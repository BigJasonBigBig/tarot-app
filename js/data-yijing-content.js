// -----------------------------------------------------------------------
// I Ching (易經六爻卜卦) — 64 hexagrams data + 三錢法 (three-coin method)
// casting logic.
//
// Data provenance (cross-checked against zh.wikipedia.org/易經 六十四卦 and
// its embedded 伏羲先天六十四卦方圖 8x8 grid — every one of the 64 (上卦,
// 下卦) combinations in the grid was individually cross-referenced against
// the standard King Wen 1-64 name list and found internally consistent):
//   - The 8 trigrams' bottom-to-top binary values (乾111 兌110 離101 震100
//     巽011 坎010 艮001 坤000) come from the 說卦傳 family associations
//     (乾父坤母, 震坎艮=男 by which line is yang, 巽離兌=女 by which line is
//     yin) — a standard, uncontested mapping.
//   - The 三錢法 coin-casting rule (three coins summed as 2=陰/3=陽 per
//     coin; 9=老陽changing, 8=少陰stable, 7=少陽stable, 6=老陰changing) was
//     verified against a detailed worked example on eee-learning.com's
//     three-coin-casting article (including the explicit probability
//     breakdown 老陽/老陰各1/8、少陰/少陽各3/8, which this implementation's
//     natural 3-independent-coin-flip model reproduces exactly).
//   - Unicode hexagram glyphs (U+4DC0-U+4DFF) taken directly from the
//     "周易六十四卦" numbered list on the same Wikipedia page.
// The per-hexagram judgment text below is original, hand-written summary
// interpretation (not a verbatim translation of the classical 卦辭),
// mirroring the depth used for js/data-ziwei-content.js and
// js/data-bazi-content.js. Per-line (384 爻辭) texts are intentionally out
// of scope for this first version — see the in-app disclaimer.
// -----------------------------------------------------------------------
(function (root) {
    'use strict';

    // Bottom-to-top binary string, e.g. 乾 = '111' (all yang).
    const TRIGRAMS = {
        qian: { name: '乾', element: '天', symbol: '☰', bits: '111' },
        dui: { name: '兌', element: '澤', symbol: '☱', bits: '110' },
        li: { name: '離', element: '火', symbol: '☲', bits: '101' },
        zhen: { name: '震', element: '雷', symbol: '☳', bits: '100' },
        xun: { name: '巽', element: '風', symbol: '☴', bits: '011' },
        kan: { name: '坎', element: '水', symbol: '☵', bits: '010' },
        gen: { name: '艮', element: '山', symbol: '☶', bits: '001' },
        kun: { name: '坤', element: '地', symbol: '☷', bits: '000' },
    };

    // { number, name, upper, lower (trigram ids), unicode, judgment }
    // upper = 上卦 (lines 4-6, top three), lower = 下卦 (lines 1-3, bottom three).
    const HEXAGRAMS_RAW = [
        [1, '乾為天', 'qian', 'qian', '䷀', '純陽剛健，代表創造力全開、領導力十足的時刻，適合主動出擊、勇敢開創，但也要留意「亢龍有悔」——太過強勢、不知進退反而會招來麻煩。'],
        [2, '坤為地', 'kun', 'kun', '䷁', '純陰柔順，代表包容、承載與配合的力量，適合以柔軟的態度成就大事，厚德載物，先跟隨、後主導，急躁冒進反而不利。'],
        [3, '水雷屯', 'kan', 'zhen', '䷂', '象徵萬事起頭難，新局面剛開始時的混亂與艱辛。這時最需要的是耐心紮根、尋求可靠的夥伴協助，不宜躁進，穩住基礎比求快更重要。'],
        [4, '山水蒙', 'gen', 'kan', '䷃', '象徵蒙昧未開、還在學習摸索的階段。適合放下身段虛心求教，也提醒帶領者要有耐心啟蒙他人，操之過急或心存輕慢都得不到好結果。'],
        [5, '水天需', 'kan', 'qian', '䷄', '象徵等待時機成熟。前方雖有險阻，但只要保持誠信、耐心等待，不躁進強求，時機到了自然水到渠成，急著渡險反而容易受挫。'],
        [6, '天水訟', 'qian', 'kan', '䷅', '象徵爭執、訴訟與意見對立。提醒與其把力氣花在爭對錯上，不如及早謀求和解，把爭端鬧到底通常兩敗俱傷，見好就收才是上策。'],
        [7, '地水師', 'kun', 'kan', '䷆', '象徵統率眾人、動用資源打一場硬仗。需要紀律嚴明、師出有名的領導者，行動前要有清楚的名分與章法，才能凝聚眾人之力而不至於潰散。'],
        [8, '水地比', 'kan', 'kun', '䷇', '象徵親近依附、彼此扶持合作。這是建立團隊向心力、找到值得信賴的夥伴的好時機，但也提醒選擇同伴要及早、要真誠，猶豫觀望反而容易錯失良機。'],
        [9, '風天小畜', 'xun', 'qian', '䷈', '象徵力量還小、只能暫時蓄積、小有斬獲的階段。大局尚未成熟，適合先做準備、累積實力，硬要強求突破反而容易受阻，耐心蓄勢待發即可。'],
        [10, '天澤履', 'qian', 'dui', '䷉', '象徵如履薄冰、步步為營。前方雖有風險，但只要謹慎行事、待人謙和有禮，即使處境危險也能安然通過，輕率冒進則容易踩到地雷。'],
        [11, '地天泰', 'kun', 'qian', '䷊', '象徵天地交泰、上下溝通順暢的大好局面，是這六十四卦裡數一數二亨通的卦。適合放手推動計畫、廣納人才，但也要記得盛極可能轉衰，順境中仍要保持警覺。'],
        [12, '天地否', 'qian', 'kun', '䷋', '象徵上下不通、閉塞停滯的逆境，跟泰卦正好相反。這時候硬拼容易徒勞無功，適合韜光養晦、堅守原則靜待轉機，否極才能泰來。'],
        [13, '天火同人', 'qian', 'li', '䷌', '象徵與人和睦相處、志同道合共謀大事。適合廣結善緣、坦誠合作，但要留意是不是真的出於公心，若只是拉幫結派、排除異己，反而會失去同人卦的本意。'],
        [14, '火天大有', 'li', 'qian', '䷍', '象徵大有收穫、光明盛大的局面，是相當吉祥的一卦。提醒擁有豐盛資源時要謙遜、樂於分享，並持續保有正直的原則，才能讓好運持續下去。'],
        [15, '地山謙', 'kun', 'gen', '䷎', '象徵謙虛退讓、有德卻不自滿。六十四卦裡少數幾乎全吉的卦，提醒即使有能力、有成就，也要保持謙遜低調，謙虛的人到哪裡都能站穩腳步。'],
        [16, '雷地豫', 'zhen', 'kun', '䷏', '象徵喜悅、順勢而為、提前做好準備。適合把握眾人士氣高昂的時機推動計畫，但也提醒不要耽溺在安逸享樂裡，忘了居安思危。'],
        [17, '澤雷隨', 'dui', 'zhen', '䷐', '象徵順應時勢、隨和而不固執己見。適合放下身段配合大局、跟隨值得信任的人或潮流，但要有自己的原則，一味盲從也不是隨卦真正的智慧。'],
        [18, '山風蠱', 'gen', 'xun', '䷑', '象徵積弊已久、需要整頓革新的局面。過去累積的問題到了必須正視處理的時候，提醒與其逃避，不如趁早著手整頓，撥亂反正之後才能重新上路。'],
        [19, '地澤臨', 'kun', 'dui', '䷒', '象徵居高臨下、以身作則督導他人，也代表氣勢正在增長的階段。適合積極任事、擴大格局，但居上位者更要以德服人，而不是仗勢壓人。'],
        [20, '風地觀', 'xun', 'kun', '䷓', '象徵靜觀、省思與樹立榜樣。這時候適合退一步觀察局勢、反省自身，而不是急著行動；領導者的一言一行，本身就是給眾人看的示範。'],
        [21, '火雷噬嗑', 'li', 'zhen', '䷔', '象徵排除障礙、明快處理爭端或不公，就像用力咬斷卡在牙齒間的硬物。適合果斷面對問題、該賞罰分明時就別心軟，拖泥帶水只會讓障礙持續卡在那裡。'],
        [22, '山火賁', 'gen', 'li', '䷕', '象徵文飾、修飾外在使內在更清楚地被看見。適合把該表現的地方適度修飾包裝，但要記得裝飾終究是為了襯托本質，過度虛華反而本末倒置。'],
        [23, '山地剝', 'gen', 'kun', '䷖', '象徵剝落、衰退、局勢正在一點一點被侵蝕。這是相當不利的處境，提醒此時應該收斂、退守、保存實力，不宜再擴張冒進，等剝盡而後自有復生的一天。'],
        [24, '地雷復', 'kun', 'zhen', '䷗', '象徵一陽來復、否極泰來的轉機，就像冬至過後陽氣開始回升。適合把握這個重新出發的契機，修正過去的偏差，一步步穩健地恢復元氣。'],
        [25, '天雷无妄', 'qian', 'zhen', '䷘', '象徵不妄為、順應自然而不強求。提醒行事要出於真誠正直，不要投機取巧或心懷妄念，只要方向正當、腳踏實地，自然能趨吉避凶。'],
        [26, '山天大畜', 'gen', 'qian', '䷙', '象徵大力蓄積能量與資源，厚積才能薄發。適合沉潛充實自己、累積實力與人脈，眼前或許還不能立刻行動，但這段蓄勢的過程會為將來的大展身手打好基礎。'],
        [27, '山雷頤', 'gen', 'zhen', '䷚', '象徵頤養、飲食與言語的節制，也代表如何滋養自己與他人。提醒要慎選滋養身心的來源，也要謹言慎行，不當的言語跟飲食一樣，都可能反過來傷害自己。'],
        [28, '澤風大過', 'dui', 'xun', '䷛', '象徵非常時期，承擔超乎尋常的重責大任，就像棟樑被壓得微微彎曲。提醒在壓力極大的處境下要格外謹慎，尋求支援、避免蠻幹，才能撐過這段不尋常的考驗。'],
        [29, '坎為水', 'kan', 'kan', '䷜', '象徵重重險阻、接踵而來的困難，是六十四卦裡最考驗心志的卦之一。提醒身處險境時要保持誠信與冷靜，像水一樣遇到障礙就繞道而行，才能一步步渡過難關。'],
        [30, '離為火', 'li', 'li', '䷝', '象徵光明、依附與清晰的洞察力，就像火焰必須依附燃料才能持續燃燒。適合發揮自己的才華與熱情，但也提醒光明背後仍需要依靠與節制，過於燥烈反而容易燒盡自身。'],
        [31, '澤山咸', 'dui', 'gen', '䷞', '象徵感應、心意相通，常用來描述戀愛或初次相遇的悸動。適合以真誠、開放的心去感受對方，這一卦提醒的是感應要出於真心，而不是刻意算計。'],
        [32, '雷風恆', 'zhen', 'xun', '䷟', '象徵恆久、持之以恆的穩定關係或志向。適合用長遠的眼光經營一段關係或一項志業，提醒真正的恆久之道在於能夠隨局勢調整做法，而不是死守一成不變的形式。'],
        [33, '天山遯', 'qian', 'gen', '䷠', '象徵及時退避、明哲保身。當局勢對自己越來越不利時，提醒與其硬撐，不如懂得適時抽身、保存實力，退是為了將來更好的進，而不是消極逃避。'],
        [34, '雷天大壯', 'zhen', 'qian', '䷡', '象徵氣勢強盛、力量正旺的階段。提醒即使實力雄厚，也要用在正道上，並保持節制，一味逞強、不知收斂，反而容易因為衝過頭而受傷。'],
        [35, '火地晉', 'li', 'kun', '䷢', '象徵晉升、光明穩步上升，就像太陽從地平線升起。這是相當順遂的上升期，適合展現才華、爭取被看見的機會，但仍要保持謙和，才能讓晉升之路走得長久。'],
        [36, '地火明夷', 'kun', 'li', '䷣', '象徵光明受到壓抑、處境晦暗不利，需要韜光養晦。提醒在不利的環境下，與其正面硬碰，不如暫時收斂鋒芒、保護好自己，等待更適合展現才能的時機。'],
        [37, '風火家人', 'xun', 'li', '䷤', '象徵治家之道、家庭與內部團隊的經營。提醒家和萬事興，每個人各安其位、彼此關懷體諒，內部關係穩固了，才有餘力去面對外部的挑戰。'],
        [38, '火澤睽', 'li', 'dui', '䷥', '象徵乖離、意見分歧、彼此看法不同的處境。提醒即使立場不同，也不必急著撕破臉，求同存異、在小事上多一點包容，反而更容易找到共識的空間。'],
        [39, '水山蹇', 'kan', 'gen', '䷦', '象徵艱難險阻、寸步難行的處境。提醒與其硬闖，不如先停下來檢視自己的處境，尋求值得信賴的人協助，繞道而行、耐心突破才是渡過難關的方式。'],
        [40, '雷水解', 'zhen', 'kan', '䷧', '象徵解除困境、危機正在化解。適合把握這個鬆綁的時機，該放下的恩怨或包袱就趁勢放下，動作明快一點，別讓已經緩解的局勢又拖出新的變數。'],
        [41, '山澤損', 'gen', 'dui', '䷨', '象徵減損、犧牲眼前的一部分利益換取長遠的好處。提醒有得必有失，適度節制自己的欲望、把資源用在真正重要的地方，看似損失，其實是在為將來的獲益鋪路。'],
        [42, '風雷益', 'xun', 'zhen', '䷩', '象徵增益、把上位者的資源用來嘉惠他人，反而讓整體更加興旺。這是相當有利的時機，適合積極投入、廣結善緣，慷慨付出往往會帶來更大的回報。'],
        [43, '澤天夬', 'dui', 'qian', '䷪', '象徵果斷決裂、下定決心排除障礙。提醒該斷則斷，但也要注意方式方法，光明正大地處理問題，而不是用陰謀手段，才能真正把隱患徹底清除。'],
        [44, '天風姤', 'qian', 'xun', '䷫', '象徵不期而遇、突如其來的相遇或誘惑。提醒面對意外出現的機會或誘惑要多一分警覺，不是所有的相遇都值得深交，看清本質再決定要不要靠近。'],
        [45, '澤地萃', 'dui', 'kun', '䷬', '象徵聚集、眾人齊心會合。適合把握人心凝聚的時機推動大事，但也提醒人多的地方容易生變，聚合之後要有妥善的組織與規矩，才能讓這股力量長久發揮。'],
        [46, '地風升', 'kun', 'xun', '䷭', '象徵穩步上升、循序漸進的成長。提醒像樹木生長一樣按部就班地累積實力，不求一步登天，扎實的基礎才能撐起長遠而穩健的上升。'],
        [47, '澤水困', 'dui', 'kan', '䷮', '象徵困頓、資源匱乏、處境艱難。提醒即使身陷困境，也要守住內心的原則與信念，話多無益，此時更需要沉住氣、蓄積實力，等待轉機到來。'],
        [48, '水風井', 'kan', 'xun', '䷯', '象徵水井、源源不絕卻也容易被忽略的資源與價值。提醒要像水井一樣持續提供養分、造福他人，也提醒維護好自己核心的能力與資源，不要讓它荒廢。'],
        [49, '澤火革', 'dui', 'li', '䷰', '象徵變革、除舊布新。提醒改革是必要的，但要選對時機、名正言順地推動，操之過急或缺乏共識的變革，反而容易引發更大的動盪。'],
        [50, '火風鼎', 'li', 'xun', '䷱', '象徵鼎新、穩重承擔重責大任，就像鼎一樣三足穩立、烹煮養人。適合在變革之後建立新的秩序，重視团隊裡每個人的位置與貢獻，才能讓新局穩固下來。'],
        [51, '震為雷', 'zhen', 'zhen', '䷲', '象徵震動、突如其來的驚嚇或警惕。提醒面對突發的驚嚇不要慌亂，冷靜下來重新站穩腳步，往往能把危機轉化為提高警覺、避免更大災禍的契機。'],
        [52, '艮為山', 'gen', 'gen', '䷳', '象徵止、靜止自守、適可而止的智慧。提醒該停下來的時候就停下來，不要什麼都想插手，安於自己該站的位置，內心才能真正安定。'],
        [53, '風山漸', 'xun', 'gen', '䷴', '象徵循序漸進、一步一步穩健地發展，常用來比喻感情或事業穩紮穩打的進展。提醒欲速則不達，按部就班、順著自然的節奏前進，才能走得長遠又穩固。'],
        [54, '雷澤歸妹', 'zhen', 'dui', '䷵', '象徵名分尚未完全確立的結合，常用來比喻倉促或名不正言不順的關係。提醒在關係或合作還沒有清楚定位之前貿然行動要格外小心，先把該說清楚的角色與期待談好，再往前走。'],
        [55, '雷火豐', 'zhen', 'li', '䷶', '象徵豐盛、聲勢與成就都達到高峰。提醒盛極容易轉衰，在最風光的時候更要保持清醒、居安思危，才能延續這份豐盛而不至於樂極生悲。'],
        [56, '火山旅', 'li', 'gen', '䷷', '象徵羈旅在外、身處陌生或不穩定的環境。提醒在外地或不熟悉的處境裡要謙和謹慎、廣結善緣，不要仗勢張揚，才能在漂泊中站穩腳步。'],
        [57, '巽為風', 'xun', 'xun', '䷸', '象徵謙遜、順從而能無孔不入地滲透與影響他人。提醒以柔軟、低調的方式反覆推行自己的想法，往往比強硬的手段更能真正改變人心。'],
        [58, '兌為澤', 'dui', 'dui', '䷹', '象徵喜悅、和悅待人。提醒真正的喜悅來自真誠交流，而不是討好逢迎，用誠懇、開朗的態度與人相處，喜悅自然能夠長久而不流於表面。'],
        [59, '風水渙', 'xun', 'kan', '䷺', '象徵渙散、原本凝聚的力量正在分散開來。提醒此時需要有人出來凝聚人心、化解隔閡，及早採取行動重新整合，才能避免局勢繼續渙散下去。'],
        [60, '水澤節', 'kan', 'dui', '䷻', '象徵節制、有分寸地約束自己。提醒凡事適可而止，該節省的節省、該堅持的原則就堅持，但也別把節制做過了頭變成僵化的束縛，過猶不及都不是節卦的本意。'],
        [61, '風澤中孚', 'xun', 'dui', '䷼', '象徵誠信、內心真誠而能感動他人。提醒真誠是最有力量的溝通方式，只要出於至誠，即使面對艱難的處境或難以說服的人，也能漸漸打動對方。'],
        [62, '雷山小過', 'zhen', 'gen', '䷽', '象徵小幅度地超越常規，在小事上稍微變通一下無妨，但不宜妄想成就大事。提醒此時適合謹慎行事、姿態放低，把握小處的分寸，不要好高騖遠。'],
        [63, '水火既濟', 'kan', 'li', '䷾', '象徵大功告成、事情圓滿完成的狀態。提醒盛極必衰是自然的道理，事情辦成之後更要保持警惕，持續維護得來不易的成果，才不會功虧一簣。'],
        [64, '火水未濟', 'li', 'kan', '䷿', '象徵尚未完成、還在通往成功路上的階段。雖然還沒到終點，但只要方向正確、持續謹慎努力，未濟正是蘊藏著無限可能的開始，不必因為還沒成功而氣餒。'],
    ];

    const HEXAGRAMS = HEXAGRAMS_RAW.map(function (row) {
        const upper = TRIGRAMS[row[2]];
        const lower = TRIGRAMS[row[3]];
        return {
            number: row[0],
            name: row[1],
            upperId: row[2],
            lowerId: row[3],
            upper: upper,
            lower: lower,
            binary: lower.bits + upper.bits, // index 0 = line1(bottom) ... index5 = line6(top)
            unicode: row[4],
            judgment: row[5],
        };
    });

    const HEXAGRAM_BY_BINARY = {};
    HEXAGRAMS.forEach(function (h) { HEXAGRAM_BY_BINARY[h.binary] = h; });

    function hexagramByBinary(binary) {
        const h = HEXAGRAM_BY_BINARY[binary];
        if (!h) throw new Error('hexagramByBinary: no hexagram for binary ' + binary);
        return h;
    }

    // 三錢法 (three-coin method): each line is cast by flipping 3 fair coins
    // independently. Heads(正)=3 points, tails(反)=2 points, summed:
    //   3 heads -> 9 老陽 (yang, changing)
    //   2 heads -> 8 少陰 (yin, stable)
    //   1 head  -> 7 少陽 (yang, stable)
    //   0 heads -> 6 老陰 (yin, changing)
    // This naturally reproduces the traditional probability distribution
    // (老陽/老陰 each 1/8, 少陽/少陰 each 3/8) since it's just counting heads
    // across 3 independent fair coins (binomial: P(3)=1/8, P(2)=3/8, P(1)=3/8, P(0)=1/8).
    function castLine() {
        let heads = 0;
        for (let i = 0; i < 3; i++) { if (Math.random() < 0.5) heads++; }
        if (heads === 3) return { value: 9, type: 'yang', changing: true, label: '老陽' };
        if (heads === 2) return { value: 8, type: 'yin', changing: false, label: '少陰' };
        if (heads === 1) return { value: 7, type: 'yang', changing: false, label: '少陽' };
        return { value: 6, type: 'yin', changing: true, label: '老陰' };
    }

    // Casts a full hexagram: 6 lines, bottom (line 1) first. Returns the
    // primary (本卦) hexagram, the changing line count/positions, and the
    // resulting (之卦/變卦) hexagram if any lines are changing (null
    // otherwise). Per-line 爻辭 text is out of scope for this version (see
    // js/data-yijing-content.js file header) — interpretation is based on
    // the 本卦 and (if applicable) 之卦 judgment texts only.
    function castHexagram() {
        const lines = [];
        for (let i = 0; i < 6; i++) lines.push(castLine());

        const primaryBinary = lines.map(function (l) { return l.type === 'yang' ? '1' : '0'; }).join('');
        const primary = hexagramByBinary(primaryBinary);

        const changingCount = lines.filter(function (l) { return l.changing; }).length;
        let transformed = null;
        if (changingCount > 0) {
            const transformedBinary = lines.map(function (l) {
                if (!l.changing) return l.type === 'yang' ? '1' : '0';
                return l.type === 'yang' ? '0' : '1'; // changing lines flip
            }).join('');
            transformed = hexagramByBinary(transformedBinary);
        }

        return {
            lines: lines, // index 0 = line1 (bottom) ... index5 = line6 (top)
            primary: primary,
            changingCount: changingCount,
            transformed: transformed,
        };
    }

    const api = {
        TRIGRAMS: TRIGRAMS,
        HEXAGRAMS: HEXAGRAMS,
        hexagramByBinary: hexagramByBinary,
        castLine: castLine,
        castHexagram: castHexagram,
    };

    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    if (typeof root !== 'undefined') root.YijingData = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
