// -----------------------------------------------------------------------
// Runes (盧恩符文 / Elder Futhark) — 24 個古北歐如尼符文的中文解讀內容。
// 符文本身（形狀、名稱、正逆位關鍵字）是可公開查證的傳統知識，這裡的中文
// 解說文字是原創撰寫（非逐字翻譯任何單一來源），研究時交叉參考了多個介紹
// Elder Futhark 24 符文的資料，確認 24 個符文名稱、三個 aett（氏族）分組、
// 以及哪些符文傳統上「不論逆位」（左右對稱、或本身沒有方向性的符文：
// Gebo、Hagalaz、Isa、Jera、Eihwaz、Sowilo、Ingwaz、Dagaz，共 8 個）。
//
// 每個符文除了原本的正／逆位解說之外，另外附上一句「行動提醒」（advice），
// 讓解讀不只是描述現況，也給出更具體、可以實際參考的下一步方向。
// -----------------------------------------------------------------------
(function (root) {
    'use strict';

    const AETT_INFO = {
        freyja: { name: '弗雷亞氏族（創世）', desc: '第一組八個符文，象徵從混沌到秩序的創造，主題圍繞財富、生命力與個人根基。這組符文比較貼近生活中最基本的課題：擁有什麼、能承受多少、以及如何在混亂中站穩腳步。' },
        heimdall: { name: '海姆達爾氏族（轉變）', desc: '第二組八個符文，象徵挑戰與蛻變，主題圍繞自然力量、考驗與成長的必經之路。抽到這組符文通常代表現在正處於某種轉折點，過程可能不輕鬆，但往往是蛻變前必要的磨練。' },
        tyr: { name: '提爾氏族（神性）', desc: '第三組八個符文，象徵朝向更高理想的提升，主題圍繞正義、傳承與人際羈絆。這組符文常和「與他人的關係」以及「更長遠的意義」有關，提醒抽牌者把眼光放得更遠一點。' },
    };

    const RUNES = [
        { id: 'fehu', symbol: 'ᚠ', name: 'Fehu 菲胡', keyword: '財富', aett: 'freyja', neverReversed: false,
            upright: '象徵財富、資源與靠自己努力換來的成果。正位的菲胡通常代表眼前有實質的收穫或機會，也提醒你要珍惜、妥善運用已經到手的東西，而不是把它視為理所當然。這份財富也可能不只限於金錢，也包含人脈、機會或累積下來的能力。',
            reversed: '逆位的菲胡提醒財務上的損失、匱乏感或安全感不足，也可能是把太多力氣花在追逐物質上卻感覺不到滿足。這時適合重新檢視自己真正在意的價值是什麼，別讓恐懼主導了決定。',
            adviceUpright: '把握眼前的資源，做出實際的規劃，而不是任由機會白白流逝。',
            adviceReversed: '先盤點自己真正需要的是什麼，避免因為焦慮而做出衝動的財務決定。' },
        { id: 'uruz', symbol: 'ᚢ', name: 'Uruz 烏魯茲', keyword: '意志與力量', aett: 'freyja', neverReversed: false,
            upright: '象徵原始的生命力、意志力與健康的體魄。正位的烏魯茲通常代表你正處於精力充沛、有能力突破困難的狀態，適合放手去做需要勇氣與耐力的事。這股力量也提醒你，真正的強大來自對自己身心狀態的掌握。',
            reversed: '逆位的烏魯茲提醒體力或意志力上的透支、生病或缺乏動力，也可能是感覺被眼前的處境壓得喘不過氣。這時該優先照顧自己的身心狀態，而不是硬撐著繼續往前衝。',
            adviceUpright: '趁著狀態好的時候，去挑戰一件需要體力或意志力的事情。',
            adviceReversed: '把休息排進行程表裡，身體發出的警訊值得認真看待。' },
        { id: 'thurisaz', symbol: 'ᚦ', name: 'Thurisaz 圖里薩茲', keyword: '巨人之刺', aett: 'freyja', neverReversed: false,
            upright: '象徵防禦、挑戰與需要挺身捍衛立場的時刻。正位的圖里薩茲通常代表你需要設下界線、正面迎接一個衝突或考驗，而不是逃避它。這根刺也提醒你，適度的鋒芒是保護自己的必要手段。',
            reversed: '逆位的圖里薩茲提醒判斷失誤、感覺無力自保，或是防線被打破後的脆弱。這時要留意是不是把自己暴露在不必要的風險裡，也可能需要重新建立起被侵犯的界線。',
            adviceUpright: '遇到需要表態的時刻，別因為想避免衝突而選擇沉默。',
            adviceReversed: '檢視最近是不是有哪條底線被反覆跨越，該重新設立界線了。' },
        { id: 'ansuz', symbol: 'ᚨ', name: 'Ansuz 安蘇茲', keyword: '訊息', aett: 'freyja', neverReversed: false,
            upright: '象徵溝通、靈感與智慧的訊息。正位的安蘇茲通常代表有重要的話該說出口、該聽進去，或是一個能帶來啟發的想法即將出現，適合多留意身邊的訊號。這也是個適合表達真實想法、爭取被理解的時機。',
            reversed: '逆位的安蘇茲提醒溝通上的誤解、被誤導或操弄，也可能是收到混亂、矛盾的訊息。這時該多查證，別急著照單全收，也別急著替自己辯護。',
            adviceUpright: '把心裡想說卻一直沒說出口的話，找個合適的時機講出來。',
            adviceReversed: '重要的訊息先求證來源，別單憑第一時間的印象就下判斷。' },
        { id: 'raidho', symbol: 'ᚱ', name: 'Raidho 萊多', keyword: '旅程', aett: 'freyja', neverReversed: false,
            upright: '象徵旅程、移動與朝目標前進的節奏。正位的萊多通常代表事情正在往前推進，方向是清楚的，適合保持步調、按計劃行動。這段旅程也提醒你，過程本身和終點一樣值得留意與享受。',
            reversed: '逆位的萊多提醒計畫受阻、延遲或方向感的迷失。這時與其硬闖，不如先停下來確認自己是不是走錯了路，調整之後再重新出發也不遲。',
            adviceUpright: '按照原本的計畫穩定前進，現在不是臨時大改方向的好時機。',
            adviceReversed: '暫停一下，重新確認目的地和路線，別在迷路的狀態下硬衝。' },
        { id: 'kenaz', symbol: 'ᚲ', name: 'Kenaz 肯納茲', keyword: '知識之火', aett: 'freyja', neverReversed: false,
            upright: '象徵知識、創造力與如火炬般的洞察力。正位的肯納茲通常代表靈感被點亮，適合學習新事物或用創意解決眼前的問題。這把火也象徵溫暖與照明，提醒你可以把自己的光分享給身邊的人。',
            reversed: '逆位的肯納茲提醒創意枯竭、看不清方向，或是抱著不切實際的幻想。這時該務實一點，重新找回穩定的立足點，而不是一直原地打轉空想。',
            adviceUpright: '把腦中的靈感實際動手記錄或執行下來，別讓它只停留在想像。',
            adviceReversed: '先放下不切實際的幻想，從眼前具體能做的小事開始著手。' },
        { id: 'gebo', symbol: 'ᚷ', name: 'Gebo 給博', keyword: '禮物', aett: 'freyja', neverReversed: true,
            upright: '象徵給予與交換，代表一份對等的關係或合作正在成形。給博是左右對稱的符文，傳統上不論逆位，永遠提醒你：真正美好的給予是雙向的，而不是單方面的犧牲或索求。這也是提醒你檢視關係中付出與獲得是否平衡的好時機。',
            adviceUpright: '檢視一段關係或合作裡的付出和收穫是否平衡，該調整的話就別拖延。' },
        { id: 'wunjo', symbol: 'ᚹ', name: 'Wunjo 溫約', keyword: '喜悅', aett: 'freyja', neverReversed: false,
            upright: '象徵喜悅、和諧與值得慶祝的成果。正位的溫約通常代表一段順遂、心滿意足的時光，人際關係也比較和睦。這份喜悅值得好好珍惜，也適合分享給身邊一起努力過的人。',
            reversed: '逆位的溫約提醒失落、疏離或格格不入的感受，也可能是原本期待的美好落空了。這時別勉強自己假裝開心，先照顧真實的情緒，允許自己有低落的時刻。',
            adviceUpright: '找個方式慶祝這段順遂的時光，也記得感謝一路支持你的人。',
            adviceReversed: '允許自己承認現在不開心，別急著用假裝樂觀來掩蓋真實的感受。' },
        { id: 'hagalaz', symbol: 'ᚺ', name: 'Hagalaz 哈加拉茲', keyword: '冰雹', aett: 'heimdall', neverReversed: true,
            upright: '象徵突如其來的變動、危機或衝擊，就像一場冰雹打亂原本的計畫。哈加拉茲傳統上不論逆位，它提醒你有些破壞是無法避免的自然力量，重點是危機過後如何重新站起來，往往會帶來意想不到的轉機。這種時候與其抗拒變化，不如把心力放在如何適應與重建。',
            adviceUpright: '與其抵抗這場突發的變動，不如把心力放在災後重建與調適上。' },
        { id: 'nauthiz', symbol: 'ᚾ', name: 'Nauthiz 諾提茲', keyword: '需要', aett: 'heimdall', neverReversed: false,
            upright: '象徵匱乏、限制與被迫面對的難處。正位的諾提茲通常代表眼前有一個必須克服的現實考驗，逆境反而會逼出你原本沒發現的韌性。這段限制期也是重新認識自己真正需求的機會。',
            reversed: '逆位的諾提茲提醒過度消耗自己、長期忽略自身需求後的耗竭感。這時該停下來，把「應該」放一邊，先照顧真正的需要，別再用意志力硬撐下去。',
            adviceUpright: '把眼前的限制當成練習韌性的機會，而不是一味抱怨處境。',
            adviceReversed: '停下手邊「應該做」的事，先花時間照顧自己真正「需要」的東西。' },
        { id: 'isa', symbol: 'ᛁ', name: 'Isa 伊薩', keyword: '靜止', aett: 'heimdall', neverReversed: true,
            upright: '象徵靜止、等待與凝結的狀態，就像冰封住了一切動作。伊薩是左右對稱的符文，傳統上不論逆位，它提醒你現在不是急著推進的時候，耐心等待、保存能量，時機到了自然會鬆動。強行推進反而容易在這個階段徒勞無功。',
            adviceUpright: '暫緩推進的腳步，把力氣留到情勢真正鬆動的那一刻。' },
        { id: 'jera', symbol: 'ᛃ', name: 'Jera 耶拉', keyword: '收穫', aett: 'heimdall', neverReversed: true,
            upright: '象徵收穫、循環與一分耕耘一分收穫的自然節奏。耶拉傳統上不論逆位，它提醒你成果需要時間醞釀，急不得，但只要方向正確，付出終究會有回報。這也提醒你留意季節與循環的規律，順勢而為比強求更有效。',
            adviceUpright: '相信長期累積的價值，別因為短期看不到成果就輕易放棄。' },
        { id: 'eihwaz', symbol: 'ᛇ', name: 'Eihwaz 艾瓦茲', keyword: '轉化', aett: 'heimdall', neverReversed: true,
            upright: '象徵韌性、循環與蛻變的過程，就像紫杉樹深根穩固又能屈能伸。艾瓦茲傳統上不論逆位，它提醒你正在經歷一段需要耐心的轉化期，撐過去之後會有全新的樣貌。這段過程可能不舒服，卻是必要的成長痛。',
            adviceUpright: '把現在的不適感當成蛻變的一部分，撐過這段過程會有所收穫。' },
        { id: 'perthro', symbol: 'ᛈ', name: 'Perthro 珀斯羅', keyword: '命運之謎', aett: 'heimdall', neverReversed: false,
            upright: '象徵命運、機運與尚未揭曉的謎團。正位的珀斯羅通常代表一件事的結果還在未定之數，適合對未知保持開放，相信機緣自有安排。這也是提醒你，有些事情本來就不是靠計算就能掌握的。',
            reversed: '逆位的珀斯羅提醒失望、運氣不站在你這邊的無力感，或是對一切感到冷漠疲乏。這時該提醒自己，低潮只是暫時的階段，命運的骰子還沒有停下來。',
            adviceUpright: '對未知的結果保持開放的心態，別急著替還沒發生的事下定論。',
            adviceReversed: '低潮的時候給自己一點耐心，提醒自己風水輪流轉，情勢會再變化。' },
        { id: 'algiz', symbol: 'ᛉ', name: 'Algiz 阿爾吉茲', keyword: '守護', aett: 'heimdall', neverReversed: false,
            upright: '象徵守護、直覺與跟更高力量的連結。正位的阿爾吉茲通常代表你正被保護著，也提醒你要相信自己的直覺判斷。這股守護的力量也提醒你，可以放心地伸出雙臂尋求支援。',
            reversed: '逆位的阿爾吉茲提醒防護出現破口、暗藏的風險，或是感覺孤立無援。這時該多提高警覺，也可以主動尋求身邊人的支持，別獨自承擔所有的風險。',
            adviceUpright: '相信自己的直覺判斷，需要幫助的時候也別害怕開口求援。',
            adviceReversed: '檢查一下最近是不是疏於防範某些風險，該補強的防護就別拖延。' },
        { id: 'sowilo', symbol: 'ᛊ', name: 'Sowilo 索維洛', keyword: '太陽', aett: 'heimdall', neverReversed: true,
            upright: '象徵太陽、成功與生命力全開的狀態。索維洛傳統上不論逆位，它是盧恩符文裡最正面的符號之一，代表勝利、健康與清晰的方向感，值得好好把握這股氣勢。這是個適合展現自信、大方追求目標的時刻。',
            adviceUpright: '趁著這股旺盛的氣勢，勇敢去追求原本猶豫不決的目標。' },
        { id: 'tiwaz', symbol: 'ᛏ', name: 'Tiwaz 提瓦茲', keyword: '正義', aett: 'tyr', neverReversed: false,
            upright: '象徵正義、領導力與願意犧牲小我成就大局的精神。正位的提瓦茲通常代表你正站在對的一方，適合用理性與原則去做決定。這也提醒你，真正的領導力來自於願意承擔責任，而不是追求掌聲。',
            reversed: '逆位的提瓦茲提醒消極被動、缺乏自信或無法堅持立場。這時該提醒自己，不表態有時候也是一種放棄，該站出來的時候別再往後退。',
            adviceUpright: '用理性和原則來做這次的決定，別讓一時的情緒主導判斷。',
            adviceReversed: '練習在小事上先表態，慢慢找回堅持自己立場的信心。' },
        { id: 'berkano', symbol: 'ᛒ', name: 'Berkano 貝卡諾', keyword: '成長', aett: 'tyr', neverReversed: false,
            upright: '象徵成長、滋養與孕育新事物的力量。正位的貝卡諾通常代表一段關係、計畫或自我成長正在穩定茁壯。這股滋養的力量也提醒你，成長需要時間和耐心的灌溉，不能操之過急。',
            reversed: '逆位的貝卡諾提醒漫無目的的成長、為了增加而增加卻感受不到意義。這時該重新確認自己努力的方向是否值得，別讓瞎忙取代了真正的進步。',
            adviceUpright: '持續給正在成長中的關係或計畫一點耐心與灌溉，不用急著看到結果。',
            adviceReversed: '停下來想想現在忙碌的方向，是不是真的符合你想要的樣子。' },
        { id: 'ehwaz', symbol: 'ᛖ', name: 'Ehwaz 埃瓦茲', keyword: '夥伴', aett: 'tyr', neverReversed: false,
            upright: '象徵夥伴關係、穩定的進展與彼此信任的合作。正位的埃瓦茲通常代表你跟某人（或某個團隊）正朝同一個方向前進，配合得很順暢。這樣的默契值得好好珍惜與維護。',
            reversed: '逆位的埃瓦茲提醒關係裡的不信任、步調不一致或停滯不前。這時該坦白溝通，而不是各自悶著頭往不同方向使力，累積更多的誤解。',
            adviceUpright: '好好珍惜目前配合順暢的夥伴關係，適時表達你的信任與感謝。',
            adviceReversed: '找對方坦白聊聊彼此的步調落差，別讓誤會繼續累積下去。' },
        { id: 'mannaz', symbol: 'ᛗ', name: 'Mannaz 曼納茲', keyword: '人性', aett: 'tyr', neverReversed: false,
            upright: '象徵自我認同、群體歸屬與人與人之間的和諧。正位的曼納茲通常代表你清楚自己是誰，也能跟身邊的人建立起健康的連結。這樣的自我認識，也是你與他人建立真誠關係的基礎。',
            reversed: '逆位的曼納茲提醒自我懷疑、與人疏離或找不到歸屬感。這時該給自己一點時間，重新釐清「我是誰」這個問題，而不是急著向外尋求答案。',
            adviceUpright: '善用你對自己的清楚認識，去建立更深一層的人際連結。',
            adviceReversed: '給自己一點獨處的時間，重新梳理「我是誰」這個根本的問題。' },
        { id: 'laguz', symbol: 'ᛚ', name: 'Laguz 拉古茲', keyword: '直覺', aett: 'tyr', neverReversed: false,
            upright: '象徵直覺、流動與潛意識的智慧，就像水一樣能順勢而為。正位的拉古茲通常代表你的直覺很準，值得信任內心的第一反應。這股流動的智慧也提醒你，順著情勢走有時比硬碰硬更有效。',
            reversed: '逆位的拉古茲提醒直覺被壓抑、不敢相信自己的感覺，或是被恐懼卡住。這時該慢下來，重新跟自己的內在對話，別讓理性完全蓋過內心的聲音。',
            adviceUpright: '相信你的第一直覺，順著情勢流動前進，別事事都要硬碰硬。',
            adviceReversed: '找個安靜的時間，重新練習傾聽自己內心真正的聲音。' },
        { id: 'ingwaz', symbol: 'ᛜ', name: 'Ingwaz 印瓦茲', keyword: '潛能', aett: 'tyr', neverReversed: true,
            upright: '象徵蘊藏的潛能、扎根與蓄勢待發的能量，就像種子在土裡默默準備發芽。印瓦茲傳統上不論逆位，它提醒你現在的累積跟沉澱，都是在為長遠的目標做準備，不必急著看到立即的成果。耐心紮根，日後的成長會更加穩固。',
            adviceUpright: '持續為未來默默累積實力，不用急著在這個階段就看到成果。' },
        { id: 'othala', symbol: 'ᛟ', name: 'Othala 歐塞拉', keyword: '傳承', aett: 'tyr', neverReversed: false,
            upright: '象徵家族、傳承與精神上的根基。正位的歐塞拉通常代表你正受惠於過去累積下來的資源或價值觀，也提醒你重視自己的來處。這份根基也是你未來能安心探索世界的重要後盾。',
            reversed: '逆位的歐塞拉提醒代間的糾結、僵化的傳統包袱，或是家族議題帶來的困擾。這時該思考哪些傳承值得延續、哪些該放下，找到屬於自己的平衡。',
            adviceUpright: '花點時間感謝過去累積下來的資源，也想想自己想延續哪些價值。',
            adviceReversed: '誠實面對家族或傳統帶來的壓力，找出哪些包袱是可以放下的。' },
        { id: 'dagaz', symbol: 'ᛞ', name: 'Dagaz 達迦茲', keyword: '黎明', aett: 'tyr', neverReversed: true,
            upright: '象徵黎明、覺醒與突破性的轉機。達迦茲傳統上不論逆位，它是盧恩符文裡代表「新的一天開始」的符號，提醒你一個階段正在圓滿收尾，另一個更清明的階段即將展開。這是充滿希望的訊號，適合為新的開始做好準備。',
            adviceUpright: '為即將到來的新階段做好準備，好好和過去這一章節道別。' },
    ];

    function drawRunes(count) {
        const pool = RUNES.slice();
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
        }
        return pool.slice(0, count).map(rune => {
            const reversed = rune.neverReversed ? false : Math.random() < 0.5;
            return { rune: rune, reversed: reversed };
        });
    }

    const api = {
        RUNES: RUNES,
        AETT_INFO: AETT_INFO,
        drawRunes: drawRunes,
    };

    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    if (typeof root !== 'undefined') root.RunesData = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
