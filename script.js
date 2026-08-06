const CARD_BACK_SVG = `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Starry constellations in background -->
    <circle cx="15" cy="20" r="0.8" fill="#dfba47" opacity="0.6"/>
    <circle cx="85" cy="25" r="0.8" fill="#dfba47" opacity="0.6"/>
    <circle cx="20" cy="130" r="0.8" fill="#dfba47" opacity="0.6"/>
    <circle cx="80" cy="125" r="0.8" fill="#dfba47" opacity="0.6"/>
    <circle cx="50" cy="75" r="42" stroke="#dfba47" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
    <circle cx="50" cy="75" r="34" stroke="#dfba47" stroke-width="0.5" opacity="0.3"/>
    
    <!-- Ornate Double Frame Inside -->
    <rect x="6" y="6" width="88" height="138" rx="8" stroke="#dfba47" stroke-width="1.2" opacity="0.8"/>
    <rect x="9" y="9" width="82" height="132" rx="6" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
    
    <!-- Moon Phases (Vertical symmetry) -->
    <!-- Full Moon (Center) -->
    <circle cx="50" cy="75" r="9" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.15"/>
    <polygon points="50,71 52,75 56,75 53,77 54,81 50,79 46,81 47,77 44,75 48,75" fill="#dfba47"/>
    
    <!-- Gibbous Moons -->
    <path d="M50 48 C 56 48, 56 38, 50 38 C 46 38, 47 43, 47 43 C 47 43, 46 48, 50 48 Z" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.1"/>
    <path d="M50 102 C 56 102, 56 112, 50 112 C 46 112, 47 107, 47 107 C 47 107, 46 102, 50 102 Z" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.1"/>
    
    <!-- Crescent Moons -->
    <path d="M50 24 C 53 24, 53 18, 50 18 C 48 18, 48.5 21, 48.5 21 C 48.5 21, 48 24, 50 24" stroke="#dfba47" stroke-width="1"/>
    <path d="M50 126 C 53 126, 53 132, 50 132 C 48 132, 48.5 129, 48.5 129 C 48.5 129, 48 126, 50 126" stroke="#dfba47" stroke-width="1"/>

    <!-- Corner Starbursts -->
    <!-- Top-Left -->
    <line x1="14" y1="14" x2="20" y2="20" stroke="#dfba47" stroke-width="0.8"/>
    <line x1="20" y1="14" x2="14" y2="20" stroke="#dfba47" stroke-width="0.8"/>
    <!-- Top-Right -->
    <line x1="86" y1="14" x2="80" y2="20" stroke="#dfba47" stroke-width="0.8"/>
    <line x1="80" y1="14" x2="86" y2="20" stroke="#dfba47" stroke-width="0.8"/>
    <!-- Bottom-Left -->
    <line x1="14" y1="136" x2="20" y2="130" stroke="#dfba47" stroke-width="0.8"/>
    <line x1="20" y1="136" x2="14" y2="130" stroke="#dfba47" stroke-width="0.8"/>
    <!-- Bottom-Right -->
    <line x1="86" y1="136" x2="80" y2="130" stroke="#dfba47" stroke-width="0.8"/>
    <line x1="80" y1="136" x2="86" y2="130" stroke="#dfba47" stroke-width="0.8"/>
</svg>`;

const TAROT_CARDS = [
    {
        id: "fool",
        name: "愚者 (The Fool)",
        number: "0",
        keywords: "冒險、全新起點、自發性、純真、信仰",
        upright: "愚者正位預示著一個充滿無限潛力的新旅程。此時正是放下恐懼、大膽躍進的時刻。相信宇宙，保持純真與好奇心，未知的世界正等待著你去探索。",
        reversed: "愚者逆位提醒你可能面臨莽狂與不負責任的抉擇。你是否因為過於急躁而忽略了潛在的危險？抑或是害怕跨出舒適圈而停滯不前？請深思熟慮後再行動。",
        desc: "一個站在懸崖邊的年輕人，望著天空，身旁有一隻忠誠的白狗。他攜帶著全部家當，象徵著無拘無束、對未知未來的無限憧憬。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Starry Background -->
            <circle cx="20" cy="30" r="1" fill="#dfba47" opacity="0.6"/>
            <circle cx="80" cy="40" r="1" fill="#dfba47" opacity="0.6"/>
            <circle cx="75" cy="15" r="1.5" fill="#dfba47" opacity="0.8"/>
            <circle cx="15" cy="90" r="0.8" fill="#dfba47" opacity="0.5"/>
            <!-- Ornate Sacred Circle -->
            <circle cx="50" cy="75" r="38" stroke="#dfba47" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
            <circle cx="50" cy="75" r="32" stroke="#dfba47" stroke-width="0.5" opacity="0.3"/>
            <!-- Cliff Line -->
            <path d="M10 130 L35 120 L45 125 L55 110 L60 140" stroke="#dfba47" stroke-width="1.5" stroke-linecap="round"/>
            <!-- The Sun in Corner -->
            <path d="M90 10 C80 10, 80 20, 90 20" stroke="#dfba47" stroke-width="1"/>
            <path d="M82 10 L76 7 M85 18 L80 22 M90 25 L90 30" stroke="#dfba47" stroke-width="1"/>
            <!-- The Traveler (Geometric Symbol) -->
            <line x1="45" y1="50" x2="45" y2="95" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="45" cy="45" r="5" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Traveler's Stick & Bundle -->
            <line x1="30" y1="65" x2="65" y2="45" stroke="#dfba47" stroke-width="1.2"/>
            <path d="M60 42 C64 35, 68 45, 60 48 Z" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.1"/>
            <!-- Dog symbol -->
            <path d="M22 118 C25 112, 30 112, 32 118" stroke="#dfba47" stroke-width="1" fill="none"/>
            <circle cx="28" cy="113" r="1.5" fill="#dfba47"/>
            <!-- Decorative Border -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "magician",
        name: "魔術師 (The Magician)",
        number: "I",
        keywords: "創造力、意志力、專注、實踐力、資源豐富",
        upright: "魔術師正位代表你已擁有實現夢想所需的一切資源與能力。專注你的意志，善用身邊的工具與知識，你將能把想法轉化為現實，創造奇蹟。",
        reversed: "魔術師逆位意味著能量的阻塞或資源的濫用。你可能正處於空有計畫卻缺乏行動力的狀態，或是有人在用甜言蜜語欺騙你。請重新審視你的真實動機。",
        desc: "魔術師一隻手指天，一隻手指地，桌上擺放著聖杯、寶劍、權杖與星幣，象徵掌握了四大元素的奧秘。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Infinity Symbol (Lemniscate) -->
            <path d="M35 32 C27 32, 27 18, 35 18 C43 18, 43 32, 50 32 C57 32, 57 18, 65 18 C73 18, 73 32, 65 32 C57 32, 57 18, 50 18 C43 18, 43 32, 35 32 Z" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Magician Figure (Symbolic) -->
            <line x1="50" y1="42" x2="50" y2="90" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="50" cy="42" r="6" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Upward wand -->
            <line x1="38" y1="65" x2="38" y2="40" stroke="#dfba47" stroke-width="1.2"/>
            <circle cx="38" cy="38" r="2" fill="#dfba47"/>
            <!-- Downward hand pointer -->
            <line x1="62" y1="65" x2="62" y2="85" stroke="#dfba47" stroke-width="1.2"/>
            <polygon points="62,88 60,83 64,83" fill="#dfba47"/>
            <!-- Alchemist Table & Tools -->
            <line x1="20" y1="110" x2="80" y2="110" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Cup -->
            <path d="M28 100 H38 L36 108 H30 Z" stroke="#dfba47" stroke-width="1"/>
            <!-- Sword -->
            <line x1="45" y1="98" x2="55" y2="108" stroke="#dfba47" stroke-width="1"/>
            <!-- Pentacle -->
            <circle cx="68" cy="103" r="5" stroke="#dfba47" stroke-width="1"/>
            <polygon points="68,99 71,105 65,101 71,101 65,105" fill="#dfba47" scale="0.5"/>
            <!-- Frame border -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "priestess",
        name: "女祭司 (The High Priestess)",
        number: "II",
        keywords: "直覺、潛意識、智慧、神祕、內心平靜",
        upright: "女祭司正位召喚你傾聽內在的聲音。現在不是採取外在行動的時刻，而是應該靜下心來，信任你的直覺與夢境。有些祕密將在寂靜中為你揭曉。",
        reversed: "女祭司逆位代表你忽略了直覺的警訊，或者過度沉溺於表面的理性分析。你可能感到心浮氣躁，無法直面靈魂深處的真實渴望。請給自己一些獨處的時間。",
        desc: "女祭司靜坐在神殿的黑白兩柱之間，手持神祕卷軸，身後是無盡的海洋與一輪新月。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Pillars -->
            <rect x="18" y="25" width="10" height="100" fill="none" stroke="#dfba47" stroke-width="1.5"/>
            <text x="20" y="80" fill="#dfba47" font-family="Cinzel" font-size="8" font-weight="bold">B</text>
            
            <rect x="72" y="25" width="10" height="100" fill="#dfba47"/>
            <text x="75" y="80" fill="#070513" font-family="Cinzel" font-size="8" font-weight="bold">J</text>
            <!-- High Priestess Seat & Crown -->
            <circle cx="50" cy="55" r="16" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Triple Moon Crown -->
            <circle cx="50" cy="30" r="6" stroke="#dfba47" stroke-width="1.2"/>
            <path d="M41 30 C 41 24, 47 24, 47 30 C 47 36, 41 36, 41 30" stroke="#dfba47" stroke-width="1"/>
            <path d="M59 30 C 59 24, 53 24, 53 30 C 53 36, 59 36, 59 30" stroke="#dfba47" stroke-width="1"/>
            <!-- Scroll in hand -->
            <rect x="40" y="80" width="20" height="10" rx="2" stroke="#dfba47" stroke-width="1" fill="#070513"/>
            <text x="43" y="88" fill="#dfba47" font-size="6" font-family="Cinzel">TORA</text>
            <!-- Water under seat -->
            <path d="M10 120 C 30 115, 70 115, 90 120 M10 127 C 30 122, 70 122, 90 127" stroke="#dfba47" stroke-width="0.8" opacity="0.6"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "empress",
        name: "皇后 (The Empress)",
        number: "III",
        keywords: "豐盛、母愛、自然、創造力、感官享受",
        upright: "皇后正位象徵著豐饒、孕育與無條件的愛。你的生活正迎來一個充滿創造力與美感的時期。親近大自然，擁抱感官的愉悅，這也是計畫發芽成長的絕佳時機。",
        reversed: "皇后逆位暗示創造力受阻，或是過度保護、掌控他人而導致關係緊張。你可能忽視了自身的滋養，感到精疲力竭。學會放手，讓生命自然流淌。",
        desc: "美麗的皇后坐在舒適的寶座上，身處結滿果實的森林中，頭戴十二顆星星的皇冠，手持象徵主權的金球。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Corona of 12 Stars (Simplified arc) -->
            <path d="M25 40 C 25 20, 75 20, 75 40" stroke="#dfba47" stroke-width="1" stroke-dasharray="2 4"/>
            <circle cx="50" cy="18" r="2.5" fill="#dfba47"/>
            <circle cx="36" cy="23" r="2" fill="#dfba47"/>
            <circle cx="64" cy="23" r="2" fill="#dfba47"/>
            <circle cx="26" cy="33" r="1.5" fill="#dfba47"/>
            <circle cx="74" cy="33" r="1.5" fill="#dfba47"/>
            <!-- Scepter of Gold -->
            <line x1="35" y1="85" x2="65" y2="55" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="65" cy="55" r="4.5" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.2"/>
            <!-- Shield with Venus Symbol -->
            <circle cx="50" cy="100" r="16" stroke="#dfba47" stroke-width="1.5"/>
            <path d="M50 116 V128 M44 122 H56" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Wheat ears (Botanical patterns) -->
            <path d="M20 120 Q22 90 28 80 M80 120 Q78 90 72 80" stroke="#dfba47" stroke-width="1" opacity="0.6"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "emperor",
        name: "皇帝 (The Emperor)",
        number: "IV",
        keywords: "權力、秩序、穩定、保護、領導力",
        upright: "皇帝正位代表堅強的意志力、組織能力與穩定的基石。現在是建立秩序、劃定界線並採取理性主導的時刻。你的領導才能與責任感將帶領你走向成功。",
        reversed: "皇帝逆位警告你可能過於專制、固執或掌控欲過強。相反地，它也可能代表缺乏自律與混亂無序的狀態。試著在力量與寬容之間尋求平衡。",
        desc: "嚴肅的皇帝坐在飾有牡羊頭的石椅上，身穿盔甲，手持代表權威的十字權杖，背景是堅硬荒涼的紅褐色山脈。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Stone Throne with Aries Heads -->
            <rect x="22" y="45" width="56" height="85" rx="2" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Aries Horns on Throne -->
            <path d="M22 55 Q 16 50 20 45 Q 24 40 22 50 M78 55 Q 84 50 80 45 Q 76 40 78 50" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Emperor Symbol (Ankh Scepter) -->
            <line x1="62" y1="50" x2="62" y2="85" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="62" cy="46" r="4" stroke="#dfba47" stroke-width="1.2"/>
            <line x1="58" y1="54" x2="66" y2="54" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Imperial Crown -->
            <path d="M40 38 L50 25 L60 38 Z" stroke="#dfba47" stroke-width="1.5" fill="#dfba47" fill-opacity="0.1"/>
            <circle cx="50" cy="23" r="2.5" fill="#dfba47"/>
            <!-- Shield or Orb -->
            <circle cx="38" cy="75" r="8" stroke="#dfba47" stroke-width="1"/>
            <path d="M38 67 V83 M30 75 H46" stroke="#dfba47" stroke-width="0.8"/>
            <!-- Mountains Background -->
            <path d="M10 130 L30 110 L55 125 L75 105 L90 130" stroke="#dfba47" stroke-width="1" opacity="0.4"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "hierophant",
        name: "教皇 (The Hierophant)",
        number: "V",
        keywords: "傳統、精神引導、體制、學習、信仰",
        upright: "教皇正位代表尋求更高層次的知識或精神引導。此時適合依循傳統方法、參與群體儀式或尋求導師的指引。保持謙遜的學習態度，體會秩序之美。",
        reversed: "教皇逆位意味著打破常規、反叛體制與尋求個人的獨特道路。你可能不再盲從權威，開始質疑舊有的價值觀。走一條屬於你自己的靈性之路吧。",
        desc: "教皇身穿華麗法衣，右手做出祝福手勢，左手持三層十字架，面前有兩位跪拜的信徒，腳下交叉著兩把神聖鑰匙。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Papal Cross (Triple Cross) -->
            <line x1="50" y1="20" x2="50" y2="105" stroke="#dfba47" stroke-width="1.8"/>
            <line x1="32" y1="35" x2="68" y2="35" stroke="#dfba47" stroke-width="1.8"/>
            <line x1="36" y1="45" x2="64" y2="45" stroke="#dfba47" stroke-width="1.5"/>
            <line x1="40" y1="55" x2="60" y2="55" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Crossed Keys of Saint Peter -->
            <line x1="38" y1="122" x2="62" y2="102" stroke="#dfba47" stroke-width="1.5"/>
            <line x1="62" y1="122" x2="38" y2="102" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="36" cy="124" r="3" stroke="#dfba47" stroke-width="1"/>
            <circle cx="64" cy="124" r="3" stroke="#dfba47" stroke-width="1"/>
            <!-- Pillars -->
            <line x1="20" y1="40" x2="20" y2="100" stroke="#dfba47" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
            <line x1="80" y1="40" x2="80" y2="100" stroke="#dfba47" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
            <!-- Sacred Geometry Halo -->
            <circle cx="50" cy="50" r="22" stroke="#dfba47" stroke-width="0.8" opacity="0.4"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "lovers",
        name: "戀人 (The Lovers)",
        number: "VI",
        keywords: "愛、和諧、關係、選擇、價值契合",
        upright: "戀人正位代表深刻的和諧、吸引力與心靈契合。這不僅指浪漫的愛情，也代表面臨需要依隨內心信念做出的重要抉擇。團結與理解是此時的力量泉源。",
        reversed: "戀人逆位暗示關係中的不和諧、溝通不良或價值觀的衝突。你可能正處於抉擇的十字路口，感到矛盾與自我懷疑。請重新建立內在的對齊與自愛。",
        desc: "一對男女站在美麗的伊甸園中，上方有大天使拉斐爾展開雙翼進行祝福，背景是一輪溫暖的烈日。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Large Sun in background -->
            <circle cx="50" cy="70" r="36" stroke="#dfba47" stroke-width="0.8" opacity="0.3"/>
            <path d="M50 34 V12 M14 70 H4 M50 106 V128 M86 70 H96" stroke="#dfba47" stroke-width="0.8" opacity="0.3"/>
            <!-- Heart Symbol with Angel Wings -->
            <path d="M50 52 C50 52, 45 42, 35 42 C25 42, 20 52, 35 70 L50 85 L65 70 C80 52, 75 42, 65 42 C55 42, 50 52, 50 52 Z" stroke="#dfba47" stroke-width="1.8"/>
            <!-- Angel Wings (Geometric rays) -->
            <path d="M25 50 Q10 40 5 60 Q20 60 30 55" stroke="#dfba47" stroke-width="1"/>
            <path d="M75 50 Q90 40 95 60 Q80 60 70 55" stroke="#dfba47" stroke-width="1"/>
            <!-- Two Trees (Tree of Life & Knowledge) -->
            <path d="M18 120 V88 M18 95 L12 90 M18 102 L24 96" stroke="#dfba47" stroke-width="1.2"/>
            <path d="M82 120 V88 M82 95 L76 90 M82 102 L88 96" stroke="#dfba47" stroke-width="1.2"/>
            <circle cx="18" cy="84" r="4" stroke="#dfba47"/>
            <circle cx="82" cy="84" r="4" stroke="#dfba47" fill="#dfba47" fill-opacity="0.2"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "chariot",
        name: "戰車 (The Chariot)",
        number: "VII",
        keywords: "意志力、勝利、控制力、前進、克服困難",
        upright: "戰車正位是成功的強烈信號。藉由堅強的意志力、自律與明確的方向感，你將能克服一切障礙，取得最終的勝利。專注於目標，堅定不移地前進吧。",
        reversed: "戰車逆位提醒你可能失去了前進的方向，或是過於強勢暴躁導致失控。你是否正在迎頭撞向無法解決的障礙？此時應當停下腳步，重新調整控制力。",
        desc: "一位戰士站在雙輪戰車上，拉車的是一黑一白兩隻人面獅身獸，朝著不同的方向，考驗著戰士的掌控力。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Chariot Body -->
            <rect x="30" y="70" width="40" height="35" rx="1" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Shield with Winged Orb on Chariot -->
            <circle cx="50" cy="88" r="6" stroke="#dfba47" stroke-width="1"/>
            <path d="M40 88 H60" stroke="#dfba47" stroke-width="1"/>
            <!-- Wheels -->
            <circle cx="22" cy="95" r="12" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="78" cy="95" r="12" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Canopy with Stars -->
            <path d="M26 35 L50 20 L74 35" stroke="#dfba47" stroke-width="1.5"/>
            <line x1="30" y1="70" x2="30" y2="35" stroke="#dfba47" stroke-width="1"/>
            <line x1="70" y1="70" x2="70" y2="35" stroke="#dfba47" stroke-width="1"/>
            <!-- Sphynxes (Geometric Symbols) -->
            <!-- White Sphynx (Left) -->
            <polygon points="12,125 24,110 28,125" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Black Sphynx (Right) -->
            <polygon points="88,125 76,110 72,125" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.3"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "strength",
        name: "力量 (Strength)",
        number: "VIII",
        keywords: "勇氣、耐心、內在力量、溫柔掌控、同理心",
        upright: "力量正位代表溫柔而堅韌的內在力量。真正的力量並非來自暴力或強權，而是來自同理心、耐心與冷靜。相信自己，你能夠用愛與包容馴服生命中的猛獸。",
        reversed: "力量逆位可能代表自我懷疑、恐懼或情緒失控。你可能感到軟弱無力，或是試圖用粗暴的手段壓制問題。請給自己多一點溫柔與耐心，重建內在的信心。",
        desc: "一位溫柔的女性頭戴花冠，上方懸掛著無限大符號，她神情安詳地用雙手撫摸著一隻兇猛的獅子。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Lemniscate (Infinity) -->
            <path d="M35 30 C27 30, 27 18, 35 18 C43 18, 43 30, 50 30 C57 30, 57 18, 65 18 C73 18, 73 30, 65 30 C57 30, 57 18, 50 18 C43 18, 43 30, 35 30 Z" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Lion Head (Ornate Line Art) -->
            <circle cx="50" cy="78" r="22" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Mane Rays -->
            <path d="M50 50 L50 56 M28 78 H34 M72 78 H66 M50 106 L50 100" stroke="#dfba47" stroke-width="1"/>
            <path d="M34 62 L39 66 M66 62 L61 66 M34 94 L39 90 M66 94 L61 90" stroke="#dfba47" stroke-width="1"/>
            <!-- Lion Face details -->
            <path d="M42 75 C45 78, 55 78, 58 75" stroke="#dfba47" stroke-width="1.2"/>
            <polygon points="50,82 46,78 54,78" fill="#dfba47"/>
            <path d="M46 88 Q50 93 54 88" stroke="#dfba47" stroke-width="1"/>
            <!-- Floral Garland -->
            <path d="M24 78 C24 50, 76 50, 76 78" stroke="#dfba47" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6"/>
            <circle cx="50" cy="54" r="2" fill="#dfba47"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "hermit",
        name: "隱士 (The Hermit)",
        number: "IX",
        keywords: "尋求真理、內省、孤獨、指引、內在智慧",
        upright: "隱士正位引導你進行一場靈魂的內省之旅。暫時遠離塵囂的紛擾，向內尋找答案。你本身就擁有智慧的明燈，只需在寂靜中，答案自然會浮現。",
        reversed: "隱士逆位警告你可能陷入了孤立與逃避的極端，或是拒絕面對現實的真相。孤獨不該成為與世隔絕的藉口，適時地重新與世界連結，分享你的智慧吧。",
        desc: "一位老者站在黑暗的山頂，身披灰色斗篷，一隻手提著裝有六角星的提燈照亮前路，另一隻手拄著長杖。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Mountain Peak -->
            <path d="M15 135 L48 105 L85 135" stroke="#dfba47" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Staff -->
            <line x1="38" y1="35" x2="28" y2="135" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Star Lantern -->
            <line x1="68" y1="50" x2="68" y2="70" stroke="#dfba47" stroke-width="1"/>
            <rect x="61" y="70" width="14" height="20" rx="2" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <!-- Six Pointed Star inside Lantern -->
            <polygon points="68,74 72,82 64,82" stroke="#dfba47" stroke-width="0.8"/>
            <polygon points="68,84 72,76 64,76" stroke="#dfba47" stroke-width="0.8"/>
            <!-- The Hooded Cloak (Symbolic Arc) -->
            <path d="M52 35 C52 35, 45 42, 45 62 C45 82, 52 92, 52 112" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Small guide stars -->
            <circle cx="80" cy="25" r="1.5" fill="#dfba47"/>
            <circle cx="85" cy="40" r="0.8" fill="#dfba47"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "wheel",
        name: "命運之輪 (Wheel of Fortune)",
        number: "X",
        keywords: "好運、契機、生命週期、重大轉變、宿命",
        upright: "命運之輪正位代表積極的轉變與嶄新的循環。好運即將降臨，事情正往有利的方向發展。順應生命的節奏，把握突如其來的機遇，命運正為你開啟大門。",
        reversed: "命運之輪逆位代表不可抗拒的變動與短暫的挫折。你可能感到生活失控，或是試圖抵抗自然的改變。記住，輪盤不停旋轉，低谷過後便是重回巔峰的開始。",
        desc: "巨大的輪盤懸浮在空中，四周圍繞著神祕的帶翼生物，輪盤上刻有煉金術符號，象徵著宇宙永恆的流轉。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Concentric Wheels of Destiny -->
            <circle cx="50" cy="75" r="32" stroke="#dfba47" stroke-width="1.8"/>
            <circle cx="50" cy="75" r="24" stroke="#dfba47" stroke-width="1" stroke-dasharray="2 2"/>
            <circle cx="50" cy="75" r="16" stroke="#dfba47" stroke-width="1"/>
            <circle cx="50" cy="75" r="5" fill="#dfba47"/>
            <!-- Spoke Lines -->
            <line x1="50" y1="43" x2="50" y2="107" stroke="#dfba47" stroke-width="1"/>
            <line x1="18" y1="75" x2="82" y2="75" stroke="#dfba47" stroke-width="1"/>
            <line x1="27" y1="52" x2="73" y2="98" stroke="#dfba47" stroke-width="0.8"/>
            <line x1="27" y1="98" x2="73" y2="52" stroke="#dfba47" stroke-width="0.8"/>
            <!-- Four Corner Winged Beings symbols (Small shapes) -->
            <circle cx="18" cy="22" r="4" stroke="#dfba47" stroke-width="0.8"/>
            <circle cx="82" cy="22" r="4" stroke="#dfba47" stroke-width="0.8"/>
            <circle cx="18" cy="128" r="4" stroke="#dfba47" stroke-width="0.8"/>
            <circle cx="82" cy="128" r="4" stroke="#dfba47" stroke-width="0.8"/>
            <!-- Small wings -->
            <path d="M14 22 Q8 18 10 26 M86 22 Q92 18 90 26" stroke="#dfba47" stroke-width="0.8"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "justice",
        name: "正義 (Justice)",
        number: "XI",
        keywords: "公正、因果、真相、責任、平衡",
        upright: "正義正位代表公平、誠實與因果法則。你的決定與行為將會帶來相應的結果。坦然面對真相，承擔你的責任，在理性與客觀中做出最公正的裁決。",
        reversed: "正義逆位代表不公、偏見或拒絕承擔因果責任。你可能感到被不公正地對待，或是試圖逃避自己行為的後果。請直面現實，修復失衡的狀況。",
        desc: "正義女神端坐於石椅上，右手高舉天平，左手緊握寶劍，代表理性的裁決與不偏不倚的法理。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Justice Sword -->
            <line x1="50" y1="25" x2="50" y2="105" stroke="#dfba47" stroke-width="2"/>
            <line x1="42" y1="95" x2="58" y2="95" stroke="#dfba47" stroke-width="2"/>
            <circle cx="50" cy="109" r="2.5" fill="#dfba47"/>
            <!-- Scales Balance Bar -->
            <line x1="20" y1="42" x2="80" y2="42" stroke="#dfba47" stroke-width="1.8"/>
            <!-- Left Pan -->
            <line x1="20" y1="42" x2="12" y2="65" stroke="#dfba47" stroke-width="1"/>
            <line x1="20" y1="42" x2="28" y2="65" stroke="#dfba47" stroke-width="1"/>
            <path d="M10 65 Q 20 72 30 65 Z" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.15"/>
            <!-- Right Pan -->
            <line x1="80" y1="42" x2="72" y2="65" stroke="#dfba47" stroke-width="1"/>
            <line x1="80" y1="42" x2="88" y2="65" stroke="#dfba47" stroke-width="1"/>
            <path d="M70 65 Q 80 72 90 65 Z" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.15"/>
            <!-- Temple Pillars in bg -->
            <line x1="12" y1="20" x2="12" y2="130" stroke="#dfba47" stroke-width="0.8" opacity="0.3"/>
            <line x1="88" y1="20" x2="88" y2="130" stroke="#dfba47" stroke-width="0.8" opacity="0.3"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "hangedman",
        name: "倒吊人 (The Hanged Man)",
        number: "XII",
        keywords: "犧牲、新視角、放手、等待、智慧的停頓",
        upright: "倒吊人正位象徵著自願的暫停與視角的轉換。當事情停滯不前時，試著倒過來看世界，你將獲得意想不到的啟示。有時，放手與等待才是最強大的行動。",
        reversed: "倒吊人逆位暗示無謂的犧牲或徒勞的掙扎。你可能正固執地對抗無法改變的現狀，或是為了迎合他人而委曲求全。是時候打破僵局，重新出發了。",
        desc: "一個人倒吊在十字形活木上，雙手反綁，右腿勾住木頭，他的頭部散發著神聖的光芒，神情安詳平靜。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- The Tau Cross (Gallows) -->
            <rect x="46" y="15" width="8" height="115" rx="1" stroke="#dfba47" stroke-width="1.5" fill="#070513"/>
            <line x1="15" y1="22" x2="85" y2="22" stroke="#dfba47" stroke-width="2"/>
            <!-- Hanger lines (legs forming a 4) -->
            <path d="M38 52 L50 35 L50 75 Z" stroke="#dfba47" stroke-width="1.8" fill="#dfba47" fill-opacity="0.1"/>
            <line x1="50" y1="75" x2="50" y2="105" stroke="#dfba47" stroke-width="1.8"/>
            <!-- Halo of illumination at bottom (where the head is) -->
            <circle cx="50" cy="115" r="14" stroke="#dfba47" stroke-width="0.8" stroke-dasharray="2 2"/>
            <circle cx="50" cy="115" r="8" stroke="#dfba47" stroke-width="1"/>
            <circle cx="50" cy="115" r="2" fill="#dfba47"/>
            <!-- Rope -->
            <line x1="50" y1="22" x2="50" y2="35" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "death",
        name: "死亡 (Death)",
        number: "XIII",
        keywords: "結束、轉變、新生、捨棄、過渡期",
        upright: "死亡牌正位絕非肉體死亡的預兆，而是象徵著一個生命階段的必然終結與重生的契機。勇敢地捨棄那些不再適合你的舊事物，唯有落葉歸根，新芽才能茁壯。",
        reversed: "死亡牌逆位代表對改變的抗拒與對過去的執著。你可能正痛苦地緊抓著已經腐朽的關係或工作不放。越抗拒轉變，痛苦就越深，請學會釋懷與釋放。",
        desc: "死神身穿黑色盔甲，騎著白馬緩緩前行，手持繪有白薔薇的黑色旗幟，背景是象徵新生命希望的晨曦太陽。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Grim Reaper Scythe -->
            <line x1="25" y1="130" x2="70" y2="35" stroke="#dfba47" stroke-width="2"/>
            <path d="M70 35 C60 15, 25 15, 15 25 C30 25, 55 30, 70 35 Z" stroke="#dfba47" stroke-width="1.5" fill="#dfba47" fill-opacity="0.2"/>
            <!-- Stylized Skull -->
            <rect x="40" y="60" width="20" height="20" rx="4" stroke="#dfba47" stroke-width="1.8" fill="#070513"/>
            <rect x="45" y="78" width="10" height="6" rx="1" stroke="#dfba47" stroke-width="1.5" fill="#070513"/>
            <!-- Skull Eyes -->
            <circle cx="46" cy="68" r="3.5" fill="#dfba47"/>
            <circle cx="54" cy="68" r="3.5" fill="#dfba47"/>
            <!-- Rising Sun in background (New Dawn) -->
            <circle cx="85" cy="115" r="18" stroke="#dfba47" stroke-width="0.8" stroke-dasharray="2 2"/>
            <path d="M85 92 L85 86 M65 110 L59 108 M72 97 L67 92" stroke="#dfba47" stroke-width="0.8"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "temperance",
        name: "節制 (Temperance)",
        number: "XIV",
        keywords: "平衡、融和、耐心、煉金術、健康自律",
        upright: "節制正位代表身心靈的和諧與情緒的平靜。此時適合將看似對立的元素融合在一起，尋求中庸之道。保持耐心，通過自律與自我療癒，生命將流淌出最美的旋律。",
        reversed: "節制逆位暗示失衡、衝突與過度放縱。你可能正處於能量耗竭的邊緣，或是生活各層面出現了不協調。請重新檢視你的生活作息，尋回內在的和諧心靈。",
        desc: "一位長有羽翼的天使雙腳分別踏在水中與陸地上，雙手各持一個水杯，水在兩杯之間奇蹟般地流動傾倒。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Angel wings in BG -->
            <path d="M12 40 Q 25 20, 50 48 Q 75 20, 88 40 Q 60 70, 50 90 Q 40 70, 12 40 Z" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.08"/>
            <!-- Two Cups (Pouring Water) -->
            <path d="M28 42 H40 L38 52 H30 Z" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <path d="M60 72 H72 L70 82 H62 Z" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <!-- Water Flow Arc -->
            <path d="M34 52 C34 75, 66 50, 66 72" stroke="#dfba47" stroke-width="1.5" stroke-dasharray="2 1"/>
            <path d="M36 54 C36 77, 68 52, 68 74" stroke="#dfba47" stroke-width="0.8" opacity="0.6"/>
            <!-- Triangle inside Square on Chest -->
            <rect x="42" y="86" width="16" height="16" stroke="#dfba47" stroke-width="1"/>
            <polygon points="50,88 45,98 55,98" stroke="#dfba47" stroke-width="1"/>
            <!-- Pool of Water -->
            <path d="M20 130 C40 125, 60 125, 80 130" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "devil",
        name: "惡魔 (The Devil)",
        number: "XV",
        keywords: "束懷、執著、物質主義、成癮、陰暗面",
        upright: "惡魔正位揭示了你心中的恐懼、執念或不健康的依附關係。你是否正被物欲、不良習慣或一段有害的感情所束縛？請記住，鎖鏈其實很寬鬆，隨時可以掙脫。",
        reversed: "惡魔逆位代表覺醒的開端。你開始意識到自我設限的牢籠，並決心擺脫束縛、重獲自由。這是一個告別成癮、打破枷鎖，走向心靈獨立的偉大時刻。",
        desc: "巨大的惡魔半人半獸，頭頂畫有倒五角星，一對男女被鎖鏈拴在惡魔的石台上，但鎖鏈其實能輕易拿下。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Inverse Pentagram -->
            <polygon points="50,15 57,36 38,23 62,23 43,36" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Devil Horns & Head -->
            <path d="M32 45 L42 55 L58 55 L68 45" stroke="#dfba47" stroke-width="1.5"/>
            <circle cx="50" cy="65" r="14" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Glowing Eyes -->
            <circle cx="45" cy="62" r="2" fill="#dfba47"/>
            <circle cx="55" cy="62" r="2" fill="#dfba47"/>
            <!-- Chains & Shackles -->
            <path d="M35 110 C42 100, 58 100, 65 110" stroke="#dfba47" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="30" y="110" width="10" height="15" rx="2" stroke="#dfba47" stroke-width="1"/>
            <rect x="60" y="110" width="10" height="15" rx="2" stroke="#dfba47" stroke-width="1"/>
            <!-- Fire Flame Symbol -->
            <path d="M50 88 C46 80, 54 80, 50 78 C52 82, 48 84, 50 88 Z" fill="#dfba47"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "tower",
        name: "高塔 (The Tower)",
        number: "XVI",
        keywords: "驟變、崩解、啟示、混亂、重塑",
        upright: "高塔正位象徵著突如其來的劇變與舊有結構的崩解。雖然這種變化伴隨著震驚與混亂，但它摧毀的是建立在虛假謊言之上的空中樓閣。接受這場洗禮，準備重塑更真實的自己。",
        reversed: "高塔逆位暗示著危機的延緩或無力的抗拒。你可能明知有些事物已經搖搖欲墜，卻仍極力避免改變。請不要害怕廢墟，崩潰有時是為了迎來最徹底的覺醒。",
        desc: "一座聳立在高山頂端的宏偉高塔，被金色的雷霆擊中，塔頂的皇冠被掀翻，兩個人影正從空中墜落。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- The Tower (Cracked) -->
            <path d="M35 130 L40 40 H60 L65 130" stroke="#dfba47" stroke-width="2"/>
            <!-- Cracks -->
            <path d="M42 50 L48 65 L44 80 L52 95 L46 115" stroke="#dfba47" stroke-width="1" opacity="0.85"/>
            <!-- Lightning Bolt striking top -->
            <path d="M80 10 L54 35 L62 38 L32 65" stroke="#dfba47" stroke-width="2.2" fill="none"/>
            <!-- Crown falling off -->
            <path d="M36 32 L40 20 L50 24 L60 20 L64 32 Z" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <!-- Sparks/Yods -->
            <circle cx="28" cy="55" r="1.5" fill="#dfba47"/>
            <circle cx="72" cy="70" r="1.5" fill="#dfba47"/>
            <circle cx="32" cy="90" r="1.5" fill="#dfba47"/>
            <circle cx="68" cy="45" r="1" fill="#dfba47"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "star",
        name: "星星 (The Star)",
        number: "XVII",
        keywords: "希望、信念、療癒、靈感、寧靜",
        upright: "星星正位是一劑溫柔的強心針。在經歷風雨過後，平靜與希望重新降臨。宇宙正在療癒你的創傷，請保持信念，大膽追求你的夢想，繁星將指引你前行。",
        reversed: "星星逆位代表信心動搖、失望或靈感枯竭。你可能感到前路茫茫，失去了對未來的熱情與期待。此時請將注意力收回，好好呵護疲憊的心靈，重建安全感。",
        desc: "一位赤裸的女子跪在水邊，雙手各持一個水壺，將源源不絕的生命之水傾倒在陸地與池塘中，上方閃耀著巨大的八角金星。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Large Octagram Star -->
            <polygon points="50,15 54,32 70,32 57,42 62,58 50,48 38,58 43,42 30,32 46,32" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Surrounding Stars -->
            <circle cx="22" cy="22" r="2.5" fill="#dfba47" opacity="0.7"/>
            <circle cx="78" cy="22" r="2.5" fill="#dfba47" opacity="0.7"/>
            <circle cx="20" cy="55" r="2" fill="#dfba47" opacity="0.7"/>
            <circle cx="80" cy="55" r="2" fill="#dfba47" opacity="0.7"/>
            <!-- Water Jugs and pouring lines -->
            <circle cx="34" cy="98" r="4" stroke="#dfba47" stroke-width="1.2"/>
            <path d="M34 94 C28 85, 20 110, 20 120" stroke="#dfba47" stroke-width="1" stroke-dasharray="2 1"/>
            
            <circle cx="66" cy="98" r="4" stroke="#dfba47" stroke-width="1.2"/>
            <path d="M66 94 C72 85, 80 110, 80 120" stroke="#dfba47" stroke-width="1" stroke-dasharray="2 1"/>
            <!-- Ripple waves -->
            <ellipse cx="50" cy="125" rx="30" ry="8" stroke="#dfba47" stroke-width="1" opacity="0.6"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "moon",
        name: "月亮 (The Moon)",
        number: "XVIII",
        keywords: "不安、幻覺、恐懼、直覺、迷茫",
        upright: "月亮正位代表未知帶來的焦慮、迷茫與不安。事情的真相可能被迷霧籠罩，容易產生幻覺或誤解。此時請信任你的直覺，慢慢摸索前行，警惕隱藏的欺騙。",
        reversed: "月亮逆位象徵著迷霧即將散去，真相浮出水面。你心中的恐懼與不安正在減少，誤會得以澄清。這是一個重獲清晰視野、告別焦慮情緒的好兆頭。",
        desc: "兩座高塔矗立在地平線上，一隻狗與一隻狼對著夜空中的滿月狂吠，一隻龍蝦正從象徵潛意識的水池中爬出。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Full Moon + Crescent Combined -->
            <circle cx="50" cy="50" r="24" stroke="#dfba47" stroke-width="1.5"/>
            <path d="M50 26 C 63 26, 63 74, 50 74 C 38 74, 38 62, 38 50 C 38 38, 38 26, 50 26 Z" fill="#dfba47" fill-opacity="0.25" stroke="#dfba47" stroke-width="1"/>
            <!-- Twin Towers -->
            <rect x="12" y="70" width="10" height="60" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <rect x="78" y="70" width="10" height="60" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <!-- Paths & Pools -->
            <path d="M22 130 Q50 100 78 130" stroke="#dfba47" stroke-width="1.5" stroke-dasharray="2 2"/>
            <!-- Crawling Crayfish shape -->
            <ellipse cx="50" cy="115" rx="4" ry="8" stroke="#dfba47" stroke-width="1" fill="#dfba47" fill-opacity="0.1"/>
            <path d="M46 115 C44 110, 42 120, 46 122 M54 115 C56 110, 58 120, 54 122" stroke="#dfba47" stroke-width="0.8"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "sun",
        name: "太陽 (The Sun)",
        number: "XIX",
        keywords: "成功、喜悅、光明、活力、自信",
        upright: "太陽正位是塔羅牌中極其幸運的牌。它代表活力、成功、喜悅與全然的自信。你的前路一片光明，所有陰霾都已被驅散。盡情展現自我，分享你的溫暖與熱情吧。",
        reversed: "太陽逆位代表短暫的烏雲籠罩，或是過度自信引發的自負。你可能感到有些疲憊，或者遭遇了小挫折。但請放心，太陽的光芒只是被暫時遮擋，溫暖很快就會回來。",
        desc: "一個快樂的赤裸孩童騎在白馬上，背景是巨大燦爛的太陽與盛開的向日葵，洋溢著蓬勃的生命力。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Detailed Sunburst -->
            <circle cx="50" cy="65" r="20" stroke="#dfba47" stroke-width="2" fill="#dfba47" fill-opacity="0.1"/>
            <!-- Sunrays -->
            <path d="M50 35 L50 20 M50 95 L50 110 M20 65 H35 M80 65 H95 M28 43 L18 33 M72 87 L82 97 M28 87 L18 97 M72 43 L82 33" stroke="#dfba47" stroke-width="1.5"/>
            <!-- Curved Rays -->
            <path d="M38 48 Q32 38 42 35 M62 48 Q68 38 58 35 M38 82 Q32 92 42 95 M62 82 Q68 92 58 95" stroke="#dfba47" stroke-width="1"/>
            <!-- Sunflower stems / grid below -->
            <line x1="15" y1="125" x2="85" y2="125" stroke="#dfba47" stroke-width="1.8"/>
            <circle cx="30" cy="125" r="4" stroke="#dfba47" fill="#dfba47" fill-opacity="0.3"/>
            <circle cx="50" cy="125" r="4" stroke="#dfba47" fill="#dfba47" fill-opacity="0.3"/>
            <circle cx="70" cy="125" r="4" stroke="#dfba47" fill="#dfba47" fill-opacity="0.3"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "judgement",
        name: "審判 (Judgement)",
        number: "XX",
        keywords: "覺醒、召喚、赦免、重大決定、重生",
        upright: "審判正位預示著一個重大的覺醒時刻。你聽到了內心深處的呼喚，是時候對過去的經歷做出總結，並跨入全新的生活階段了。信任你的直覺，勇敢做出改變人生的重大抉擇。",
        reversed: "審判逆位暗示你正拒絕內心的召喚，或是因自我懷疑而遲遲不敢做出決定。你可能正沉溺於對過去錯誤的自責中。請放下面子與恐懼，給予自己寬恕與重生的機會。",
        desc: "大天使西結在雲端吹響金色的小喇叭，下方無數男女老幼從棺木中站起，雙手合十，迎接神聖的洗禮與新生。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Trumpet with Banner -->
            <line x1="50" y1="15" x2="50" y2="70" stroke="#dfba47" stroke-width="2"/>
            <polygon points="50,70 42,95 58,95" stroke="#dfba47" stroke-width="1.5" fill="#dfba47" fill-opacity="0.1"/>
            <!-- Banner flag (Cross) -->
            <rect x="50" y="30" width="22" height="18" stroke="#dfba47" stroke-width="1" fill="#070513"/>
            <line x1="61" y1="30" x2="61" y2="48" stroke="#dfba47" stroke-width="1"/>
            <line x1="50" y1="39" x2="72" y2="39" stroke="#dfba47" stroke-width="1"/>
            <!-- Cloud arc -->
            <path d="M15 45 C 30 35, 70 35, 85 45" stroke="#dfba47" stroke-width="1.5" stroke-dasharray="3 3"/>
            <!-- People rising from coffins below -->
            <path d="M22 130 V115 H34 V130 M66 130 V115 H78 V130" stroke="#dfba47" stroke-width="1.2" fill="#070513"/>
            <circle cx="28" cy="108" r="3" fill="#dfba47"/>
            <circle cx="72" cy="108" r="3" fill="#dfba47"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    },
    {
        id: "world",
        name: "世界 (The World)",
        number: "XXI",
        keywords: "圓滿、成就、整合、旅行、圓滿結束",
        upright: "世界牌正位象徵著一段旅程的圓滿結束與成功。你已經達成了階段性的目標，內心感到無比的和諧與充實。這個世界正在為你喝采，準備迎接更廣闊的新舞台吧。",
        reversed: "世界牌逆位代表事情接近完成，但仍差臨門一腳，或是你對圓滿感到抗拒。你可能感到有些遺憾或未竟之志。請總結經驗，堅持下去，成功就在不遠處。",
        desc: "一位女性在綠色的桂冠花環中優雅起舞，雙手各持一根權杖，花環外圍環繞著象徵宇宙四元素的四聖獸。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Mandorla (Oval Wreath) -->
            <ellipse cx="50" cy="75" rx="30" ry="46" stroke="#dfba47" stroke-width="1.8" stroke-dasharray="6 2"/>
            <ellipse cx="50" cy="75" rx="34" ry="50" stroke="#dfba47" stroke-width="0.8" opacity="0.5"/>
            <!-- Dancer Silhouette Symbol -->
            <line x1="50" y1="45" x2="50" y2="105" stroke="#dfba47" stroke-width="1.8"/>
            <circle cx="50" cy="40" r="5" stroke="#dfba47" stroke-width="1.5" fill="#dfba47" fill-opacity="0.2"/>
            <!-- Crossed Legs (Triangle) -->
            <path d="M50 78 L38 90 H62 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.1"/>
            <!-- Twin Wands in hands -->
            <line x1="36" y1="52" x2="42" y2="68" stroke="#dfba47" stroke-width="1.2"/>
            <line x1="64" y1="52" x2="58" y2="68" stroke="#dfba47" stroke-width="1.2"/>
            <!-- Four Corner Symbols -->
            <!-- Angel (Top Left) -->
            <circle cx="16" cy="22" r="3" stroke="#dfba47" stroke-width="1"/>
            <!-- Eagle (Top Right) -->
            <polygon points="84,18 88,26 80,24" stroke="#dfba47" stroke-width="1"/>
            <!-- Bull (Bottom Left) -->
            <rect x="12" y="122" width="6" height="6" rx="1" stroke="#dfba47" stroke-width="1"/>
            <!-- Lion (Bottom Right) -->
            <circle cx="84" cy="125" r="3" stroke="#dfba47" stroke-width="1"/>
            <!-- Outer Frame -->
            <rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/>
        </svg>`
    }
];

const MINOR_ARCANA = [
    {
        id: "wands_1",
        name: "權杖一 (Ace of Wands)",
        number: "Ace",
        keywords: "靈感、新起點、創造衝動、潛能",
        upright: "權杖一正位如同一把從雲端伸出、剛萌芽的手杖，象徵全新靈感與創造力量的湧現。你心中燃起了熱情的火花，此刻正是把握契機、大膽展開新計畫的時候，宇宙已為你送上行動的第一份能量。",
        reversed: "權杖一逆位代表靈感受阻、計畫延宕，或是熱情來得快去得也快。你可能猶豫不決，遲遲無法將想法付諸行動，也可能錯失了眼前稍縱即逝的機會。請重新檢視自己的動機，找回最初的火苗。",
        desc: "一隻手從雲霧中伸出，緊握著一根冒出嫩葉的權杖，象徵著源源不絕的創造生命力。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28.0" cy="29.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="78.0" cy="31.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="25.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="137.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="50.0" y1="64.0" x2="50.0" y2="80.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 66.5 Q50.0 60.5 53.5 66.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 77.5 Q50.0 83.5 53.5 77.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 69.2 Q44.0 71.2 47.8 73.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 70.8 Q56.0 72.8 52.2 74.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_2",
        name: "權杖二 (Two of Wands)",
        number: "2",
        keywords: "規劃、抉擇、掌握全局、遠見",
        upright: "權杖二正位描繪著一位手持地球儀、俯瞰遠方的旅人，象徵你正站在規劃未來的十字路口。你已擁有初步的成果，現在是時候放眼更遠大的目標，做出深思熟慮的決定。",
        reversed: "權杖二逆位暗示對未知的恐懼讓你裹足不前，或是缺乏長遠規劃導致原地打轉。你可能安於現狀而不敢跨出舒適圈。請鼓起勇氣，為自己的未來繪製藍圖。",
        desc: "城牆上的人物一手持權杖一手持地球儀，眺望著遠方尚未探索的疆域。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="41.0" cy="28.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="71.0" cy="22.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="22.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="136.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="50.0" y1="27.0" x2="50.0" y2="43.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 29.5 Q50.0 23.5 53.5 29.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 40.5 Q50.0 46.5 53.5 40.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 32.2 Q44.0 34.2 47.8 36.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 33.8 Q56.0 35.8 52.2 37.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="104.0" x2="50.0" y2="120.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 106.5 Q50.0 100.5 53.5 106.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 117.5 Q50.0 123.5 53.5 117.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 109.2 Q44.0 111.2 47.8 113.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 110.8 Q56.0 112.8 52.2 114.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_3",
        name: "權杖三 (Three of Wands)",
        number: "3",
        keywords: "拓展、遠見、等待收成、合作契機",
        upright: "權杖三正位象徵著初步的努力已見成效，船隻正從遠方駛回，帶來機會與豐收的訊息。此時適合放遠眼光，將格局擴展到更廣闊的天地，耐心等待成果逐漸浮現。",
        reversed: "權杖三逆位提醒你計畫可能遭遇延誤，或是缺乏遠見導致合作破裂。你或許過於樂觀而忽略了潛在的風險。請重新評估局勢，調整你的策略與期待。",
        desc: "一位商人站在懸崖邊，望著海面上三艘遠航的船隻，靜候貿易與機會歸來。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="54.0" cy="27.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="33.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="19.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="135.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="50.0" y1="20.0" x2="50.0" y2="36.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 22.5 Q50.0 16.5 53.5 22.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 33.5 Q50.0 39.5 53.5 33.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 25.2 Q44.0 27.2 47.8 29.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 26.8 Q56.0 28.8 52.2 30.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="64.0" x2="50.0" y2="80.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 66.5 Q50.0 60.5 53.5 66.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 77.5 Q50.0 83.5 53.5 77.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 69.2 Q44.0 71.2 47.8 73.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 70.8 Q56.0 72.8 52.2 74.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="110.0" x2="50.0" y2="126.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 112.5 Q50.0 106.5 53.5 112.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 123.5 Q50.0 129.5 53.5 123.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 115.2 Q44.0 117.2 47.8 119.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 116.8 Q56.0 118.8 52.2 120.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_4",
        name: "權杖四 (Four of Wands)",
        number: "4",
        keywords: "慶祝、和諧、歸屬、里程碑",
        upright: "權杖四正位是喜悅與慶典的象徵，代表你即將達成一個重要的里程碑，家庭或團體將因此團聚歡慶。穩固的基礎已經建立，享受這份得來不易的和諧與歸屬感吧。",
        reversed: "權杖四逆位代表家庭或團體內部出現不和諧，或是慶祝的時刻被迫延後。你可能正經歷一段過渡期，感到根基不穩。請耐心修復關係，重新找回安定。",
        desc: "花環裝飾的四根權杖立於前景，遠方眾人正手舞足蹈地慶祝豐收。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="67.0" cy="26.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="77.0" cy="24.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="26.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="134.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="32.0" y1="30.0" x2="32.0" y2="46.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 32.5 Q32.0 26.5 35.5 32.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 43.5 Q32.0 49.5 35.5 43.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 35.2 Q26.0 37.2 29.8 39.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 36.8 Q38.0 38.8 34.2 40.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="30.0" x2="68.0" y2="46.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 32.5 Q68.0 26.5 71.5 32.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 43.5 Q68.0 49.5 71.5 43.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 35.2 Q62.0 37.2 65.8 39.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 36.8 Q74.0 38.8 70.2 40.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="104.0" x2="32.0" y2="120.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 106.5 Q32.0 100.5 35.5 106.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 117.5 Q32.0 123.5 35.5 117.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 109.2 Q26.0 111.2 29.8 113.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 110.8 Q38.0 112.8 34.2 114.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="104.0" x2="68.0" y2="120.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 106.5 Q68.0 100.5 71.5 106.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 117.5 Q68.0 123.5 71.5 117.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 109.2 Q62.0 111.2 65.8 113.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 110.8 Q74.0 112.8 70.2 114.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_5",
        name: "權杖五 (Five of Wands)",
        number: "5",
        keywords: "競爭、衝突、意見不合、挑戰",
        upright: "權杖五正位描繪著多人揮舞權杖、看似混戰的場景，象徵著良性競爭與意見交鋒。這是磨練實力、在挑戰中證明自己的時刻，衝突未必是壞事，反而能激發成長。",
        reversed: "權杖五逆位代表無謂的紛爭或內部衝突已經失控，甚至演變成惡性競爭。你可能感到身心俱疲。請學習化解衝突，尋求真正雙贏的解決之道。",
        desc: "五個人各自揮舞著權杖，姿態雜亂卻充滿活力，象徵競技場上的較勁。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="80.0" cy="25.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="70.0" cy="35.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="23.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="133.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="32.0" y1="27.0" x2="32.0" y2="43.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 29.5 Q32.0 23.5 35.5 29.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 40.5 Q32.0 46.5 35.5 40.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 32.2 Q26.0 34.2 29.8 36.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 33.8 Q38.0 35.8 34.2 37.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="27.0" x2="68.0" y2="43.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 29.5 Q68.0 23.5 71.5 29.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 40.5 Q68.0 46.5 71.5 40.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 32.2 Q62.0 34.2 65.8 36.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 33.8 Q74.0 35.8 70.2 37.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="66.0" x2="50.0" y2="82.0" stroke="#dfba47" stroke-width="1.60"/><path d="M46.5 68.5 Q50.0 62.5 53.5 68.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M46.5 79.5 Q50.0 85.5 53.5 79.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M47.8 71.2 Q44.0 73.2 47.8 75.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M52.2 72.8 Q56.0 74.8 52.2 76.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="107.0" x2="32.0" y2="123.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 109.5 Q32.0 103.5 35.5 109.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 120.5 Q32.0 126.5 35.5 120.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 112.2 Q26.0 114.2 29.8 116.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 113.8 Q38.0 115.8 34.2 117.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="107.0" x2="68.0" y2="123.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 109.5 Q68.0 103.5 71.5 109.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 120.5 Q68.0 126.5 71.5 120.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 112.2 Q62.0 114.2 65.8 116.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 113.8 Q74.0 115.8 70.2 117.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_6",
        name: "權杖六 (Six of Wands)",
        number: "6",
        keywords: "勝利、認可、凱旋、自信",
        upright: "權杖六正位是凱旋歸來的畫面，騎士戴著桂冠、接受群眾歡呼，象徵你的努力終於獲得肯定與勝利。抬頭挺胸接受這份榮耀，你值得被看見。",
        reversed: "權杖六逆位暗示遲來的肯定、驕傲自滿，或是勝利感被他人搶走的失落。你可能付出許多卻未被看見。請調整心態，真正的價值無需他人認證。",
        desc: "頭戴桂冠的騎士騎著白馬凱旋而歸，隨從高舉權杖夾道歡迎。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23.0" cy="24.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="26.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="20.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="132.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="32.0" y1="20.0" x2="32.0" y2="36.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 22.5 Q32.0 16.5 35.5 22.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 33.5 Q32.0 39.5 35.5 33.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 25.2 Q26.0 27.2 29.8 29.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 26.8 Q38.0 28.8 34.2 30.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="20.0" x2="68.0" y2="36.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 22.5 Q68.0 16.5 71.5 22.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 33.5 Q68.0 39.5 71.5 33.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 25.2 Q62.0 27.2 65.8 29.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 26.8 Q74.0 28.8 70.2 30.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="66.0" x2="32.0" y2="82.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 68.5 Q32.0 62.5 35.5 68.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 79.5 Q32.0 85.5 35.5 79.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 71.2 Q26.0 73.2 29.8 75.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 72.8 Q38.0 74.8 34.2 76.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="66.0" x2="68.0" y2="82.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 68.5 Q68.0 62.5 71.5 68.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 79.5 Q68.0 85.5 71.5 79.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 71.2 Q62.0 73.2 65.8 75.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 72.8 Q74.0 74.8 70.2 76.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="112.0" x2="32.0" y2="128.0" stroke="#dfba47" stroke-width="1.60"/><path d="M28.5 114.5 Q32.0 108.5 35.5 114.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M28.5 125.5 Q32.0 131.5 35.5 125.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M29.8 117.2 Q26.0 119.2 29.8 121.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M34.2 118.8 Q38.0 120.8 34.2 122.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="112.0" x2="68.0" y2="128.0" stroke="#dfba47" stroke-width="1.60"/><path d="M64.5 114.5 Q68.0 108.5 71.5 114.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M64.5 125.5 Q68.0 131.5 71.5 125.5" stroke="#dfba47" stroke-width="1.00" fill="none"/><path d="M65.8 117.2 Q62.0 119.2 65.8 121.2" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/><path d="M70.2 118.8 Q74.0 120.8 70.2 122.8" stroke="#dfba47" stroke-width="0.70" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_7",
        name: "權杖七 (Seven of Wands)",
        number: "7",
        keywords: "堅持、防禦、捍衛立場、勇氣",
        upright: "權杖七正位代表你正站在制高點上，勇敢捍衛自己的立場與成果。即使面對來自四面八方的挑戰，只要堅守原則、保持信念，你就能穩住陣腳、擊退對手。",
        reversed: "權杖七逆位代表你感到寡不敵眊、逐漸失去防線，或是對自己的立場產生動搖。長期的壓力讓你身心俱疲。請重新評估戰場，必要時適度退讓。",
        desc: "一人站在高處，手持權杖抵擋著下方六根伸來的權杖，姿態堅定不移。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36.0" cy="23.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="76.0" cy="37.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="27.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="131.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="32.0" y1="17.4" x2="32.0" y2="30.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 19.5 Q32.0 14.6 34.9 19.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 28.5 Q32.0 33.4 34.9 28.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 21.7 Q27.1 23.3 30.2 25.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 23.0 Q36.9 24.7 33.8 26.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="17.4" x2="68.0" y2="30.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 19.5 Q68.0 14.6 70.9 19.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 28.5 Q68.0 33.4 70.9 28.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 21.7 Q63.1 23.3 66.2 25.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 23.0 Q72.9 24.7 69.8 26.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="41.4" x2="50.0" y2="54.6" stroke="#dfba47" stroke-width="1.31"/><path d="M47.1 43.5 Q50.0 38.6 52.9 43.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M47.1 52.5 Q50.0 57.4 52.9 52.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M48.2 45.7 Q45.1 47.3 48.2 49.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M51.8 47.0 Q54.9 48.7 51.8 50.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="67.4" x2="32.0" y2="80.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 69.5 Q32.0 64.6 34.9 69.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 78.5 Q32.0 83.4 34.9 78.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 71.7 Q27.1 73.3 30.2 75.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 73.0 Q36.9 74.7 33.8 76.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="67.4" x2="68.0" y2="80.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 69.5 Q68.0 64.6 70.9 69.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 78.5 Q68.0 83.4 70.9 78.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 71.7 Q63.1 73.3 66.2 75.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 73.0 Q72.9 74.7 69.8 76.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="111.4" x2="32.0" y2="124.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 113.5 Q32.0 108.6 34.9 113.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 122.5 Q32.0 127.4 34.9 122.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 115.7 Q27.1 117.3 30.2 119.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 117.0 Q36.9 118.7 33.8 120.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="111.4" x2="68.0" y2="124.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 113.5 Q68.0 108.6 70.9 113.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 122.5 Q68.0 127.4 70.9 122.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 115.7 Q63.1 117.3 66.2 119.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 117.0 Q72.9 118.7 69.8 120.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_8",
        name: "權杖八 (Eight of Wands)",
        number: "8",
        keywords: "迅速、行動、消息傳來、無阻力",
        upright: "權杖八正位象徵著事情正在加速推進，如同飛箭般迅速抵達目的地。障礙已經清除，這是行動、旅行與訊息傳遞的絕佳時機，把握這股順風而行的能量。",
        reversed: "權杖八逆位代表計畫延誤、溝通受阻，或是事情發展得過於倉促而失控。你可能感到挫折與不耐煩。請放慢腳步，理清頭緒後再繼續前進。",
        desc: "八根權杖在晴朗的天空中齊飛，越過原野朝著同一個方向疾行。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="49.0" cy="22.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="69.0" cy="28.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="24.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="130.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="32.0" y1="15.4" x2="32.0" y2="28.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 17.5 Q32.0 12.6 34.9 17.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 26.5 Q32.0 31.4 34.9 26.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 19.7 Q27.1 21.3 30.2 23.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 21.0 Q36.9 22.7 33.8 24.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="15.4" x2="68.0" y2="28.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 17.5 Q68.0 12.6 70.9 17.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 26.5 Q68.0 31.4 70.9 26.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 19.7 Q63.1 21.3 66.2 23.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 21.0 Q72.9 22.7 69.8 24.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="45.4" x2="32.0" y2="58.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 47.5 Q32.0 42.6 34.9 47.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 56.5 Q32.0 61.4 34.9 56.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 49.7 Q27.1 51.3 30.2 53.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 51.0 Q36.9 52.7 33.8 54.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="45.4" x2="68.0" y2="58.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 47.5 Q68.0 42.6 70.9 47.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 56.5 Q68.0 61.4 70.9 56.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 49.7 Q63.1 51.3 66.2 53.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 51.0 Q72.9 52.7 69.8 54.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="89.4" x2="32.0" y2="102.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 91.5 Q32.0 86.6 34.9 91.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 100.5 Q32.0 105.4 34.9 100.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 93.7 Q27.1 95.3 30.2 97.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 95.0 Q36.9 96.7 33.8 98.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="89.4" x2="68.0" y2="102.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 91.5 Q68.0 86.6 70.9 91.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 100.5 Q68.0 105.4 70.9 100.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 93.7 Q63.1 95.3 66.2 97.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 95.0 Q72.9 96.7 69.8 98.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="32.0" y1="119.4" x2="32.0" y2="132.6" stroke="#dfba47" stroke-width="1.31"/><path d="M29.1 121.5 Q32.0 116.6 34.9 121.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M29.1 130.5 Q32.0 135.4 34.9 130.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M30.2 123.7 Q27.1 125.3 30.2 127.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M33.8 125.0 Q36.9 126.7 33.8 128.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="68.0" y1="119.4" x2="68.0" y2="132.6" stroke="#dfba47" stroke-width="1.31"/><path d="M65.1 121.5 Q68.0 116.6 70.9 121.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M65.1 130.5 Q68.0 135.4 70.9 130.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M66.2 123.7 Q63.1 125.3 66.2 127.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M69.8 125.0 Q72.9 126.7 69.8 128.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_9",
        name: "權杖九 (Nine of Wands)",
        number: "9",
        keywords: "堅韌、戒備、最後衝刺、經驗",
        upright: "權杖九正位描繪著一位帶傷卻仍堅守崗位的戰士，象徵你已歷經風霜，累積了豐富的經驗與韌性。即使疲憊，勝利也近在咫尺，再撐一下就能守住成果。",
        reversed: "權杖九逆位代表過度防備、身心耗竭，或是因為過去的傷痛而築起高牆拒絕他人。你可能感到孤立無援。請放下戒心，適時尋求他人的支持。",
        desc: "頭綁繃帶的戰士倚著權杖警戒四方，身後排列著八根權杖如同柵欄。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="62.0" cy="21.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="39.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="21.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="129.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="30.0" y1="15.4" x2="30.0" y2="28.6" stroke="#dfba47" stroke-width="1.31"/><path d="M27.1 17.5 Q30.0 12.6 32.9 17.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M27.1 26.5 Q30.0 31.4 32.9 26.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M28.2 19.7 Q25.1 21.3 28.2 23.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M31.8 21.0 Q34.9 22.7 31.8 24.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="15.4" x2="50.0" y2="28.6" stroke="#dfba47" stroke-width="1.31"/><path d="M47.1 17.5 Q50.0 12.6 52.9 17.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M47.1 26.5 Q50.0 31.4 52.9 26.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M48.2 19.7 Q45.1 21.3 48.2 23.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M51.8 21.0 Q54.9 22.7 51.8 24.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="70.0" y1="15.4" x2="70.0" y2="28.6" stroke="#dfba47" stroke-width="1.31"/><path d="M67.1 17.5 Q70.0 12.6 72.9 17.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M67.1 26.5 Q70.0 31.4 72.9 26.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M68.2 19.7 Q65.1 21.3 68.2 23.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M71.8 21.0 Q74.9 22.7 71.8 24.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="30.0" y1="67.4" x2="30.0" y2="80.6" stroke="#dfba47" stroke-width="1.31"/><path d="M27.1 69.5 Q30.0 64.6 32.9 69.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M27.1 78.5 Q30.0 83.4 32.9 78.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M28.2 71.7 Q25.1 73.3 28.2 75.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M31.8 73.0 Q34.9 74.7 31.8 76.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="67.4" x2="50.0" y2="80.6" stroke="#dfba47" stroke-width="1.31"/><path d="M47.1 69.5 Q50.0 64.6 52.9 69.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M47.1 78.5 Q50.0 83.4 52.9 78.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M48.2 71.7 Q45.1 73.3 48.2 75.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M51.8 73.0 Q54.9 74.7 51.8 76.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="70.0" y1="67.4" x2="70.0" y2="80.6" stroke="#dfba47" stroke-width="1.31"/><path d="M67.1 69.5 Q70.0 64.6 72.9 69.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M67.1 78.5 Q70.0 83.4 72.9 78.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M68.2 71.7 Q65.1 73.3 68.2 75.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M71.8 73.0 Q74.9 74.7 71.8 76.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="30.0" y1="119.4" x2="30.0" y2="132.6" stroke="#dfba47" stroke-width="1.31"/><path d="M27.1 121.5 Q30.0 116.6 32.9 121.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M27.1 130.5 Q30.0 135.4 32.9 130.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M28.2 123.7 Q25.1 125.3 28.2 127.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M31.8 125.0 Q34.9 126.7 31.8 128.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="119.4" x2="50.0" y2="132.6" stroke="#dfba47" stroke-width="1.31"/><path d="M47.1 121.5 Q50.0 116.6 52.9 121.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M47.1 130.5 Q50.0 135.4 52.9 130.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M48.2 123.7 Q45.1 125.3 48.2 127.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M51.8 125.0 Q54.9 126.7 51.8 128.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><g><line x1="70.0" y1="119.4" x2="70.0" y2="132.6" stroke="#dfba47" stroke-width="1.31"/><path d="M67.1 121.5 Q70.0 116.6 72.9 121.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M67.1 130.5 Q70.0 135.4 72.9 130.5" stroke="#dfba47" stroke-width="0.82" fill="none"/><path d="M68.2 123.7 Q65.1 125.3 68.2 127.0" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/><path d="M71.8 125.0 Q74.9 126.7 71.8 128.3" stroke="#dfba47" stroke-width="0.57" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_10",
        name: "權杖十 (Ten of Wands)",
        number: "10",
        keywords: "重擔、責任、壓力、超負荷",
        upright: "權杖十正位象徵著你一肩扛起沉重的責任，即使步履蹣跚仍咬牙前行。雖然目標近在眼前，但過度承擔可能讓你身心俱疲，是時候思考如何分擔重量。",
        reversed: "權杖十逆位代表你終於願意放下不屬於自己的責任，學會授權與求助，或是長期壓抑後迎來的徹底崩潰。請正視自己的極限，別再獨自硬撐。",
        desc: "一人彎腰背負著十根權杖艱難前行，遠方的家園近在眼前卻顯得遙不可及。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="75.0" cy="20.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="75.0" cy="30.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="18.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="128.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><line x1="35.0" y1="12.2" x2="35.0" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><path d="M32.5 14.0 Q35.0 9.7 37.5 14.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M32.5 22.0 Q35.0 26.3 37.5 22.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M33.4 16.0 Q30.7 17.4 33.4 18.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M36.6 17.1 Q39.3 18.6 36.6 20.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="65.0" y1="12.2" x2="65.0" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><path d="M62.5 14.0 Q65.0 9.7 67.5 14.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M62.5 22.0 Q65.0 26.3 67.5 22.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M63.4 16.0 Q60.7 17.4 63.4 18.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M66.6 17.1 Q69.3 18.6 66.6 20.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="35.0" y1="38.2" x2="35.0" y2="49.8" stroke="#dfba47" stroke-width="1.15"/><path d="M32.5 40.0 Q35.0 35.7 37.5 40.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M32.5 48.0 Q35.0 52.3 37.5 48.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M33.4 42.0 Q30.7 43.4 33.4 44.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M36.6 43.1 Q39.3 44.6 36.6 46.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="65.0" y1="38.2" x2="65.0" y2="49.8" stroke="#dfba47" stroke-width="1.15"/><path d="M62.5 40.0 Q65.0 35.7 67.5 40.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M62.5 48.0 Q65.0 52.3 67.5 48.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M63.4 42.0 Q60.7 43.4 63.4 44.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M66.6 43.1 Q69.3 44.6 66.6 46.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="64.2" x2="50.0" y2="75.8" stroke="#dfba47" stroke-width="1.15"/><path d="M47.5 66.0 Q50.0 61.7 52.5 66.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M47.5 74.0 Q50.0 78.3 52.5 74.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M48.4 68.0 Q45.7 69.4 48.4 70.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M51.6 69.1 Q54.3 70.6 51.6 72.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="35.0" y1="90.2" x2="35.0" y2="101.8" stroke="#dfba47" stroke-width="1.15"/><path d="M32.5 92.0 Q35.0 87.7 37.5 92.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M32.5 100.0 Q35.0 104.3 37.5 100.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M33.4 94.0 Q30.7 95.4 33.4 96.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M36.6 95.1 Q39.3 96.6 36.6 98.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="65.0" y1="90.2" x2="65.0" y2="101.8" stroke="#dfba47" stroke-width="1.15"/><path d="M62.5 92.0 Q65.0 87.7 67.5 92.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M62.5 100.0 Q65.0 104.3 67.5 100.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M63.4 94.0 Q60.7 95.4 63.4 96.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M66.6 95.1 Q69.3 96.6 66.6 98.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="35.0" y1="116.2" x2="35.0" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><path d="M32.5 118.0 Q35.0 113.7 37.5 118.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M32.5 126.0 Q35.0 130.3 37.5 126.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M33.4 120.0 Q30.7 121.4 33.4 122.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M36.6 121.1 Q39.3 122.6 36.6 124.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="65.0" y1="116.2" x2="65.0" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><path d="M62.5 118.0 Q65.0 113.7 67.5 118.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M62.5 126.0 Q65.0 130.3 67.5 126.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M63.4 120.0 Q60.7 121.4 63.4 122.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M66.6 121.1 Q69.3 122.6 66.6 124.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><g><line x1="50.0" y1="129.2" x2="50.0" y2="140.8" stroke="#dfba47" stroke-width="1.15"/><path d="M47.5 131.0 Q50.0 126.7 52.5 131.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M47.5 139.0 Q50.0 143.3 52.5 139.0" stroke="#dfba47" stroke-width="0.72" fill="none"/><path d="M48.4 133.0 Q45.7 134.4 48.4 135.9" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/><path d="M51.6 134.1 Q54.3 135.6 51.6 137.0" stroke="#dfba47" stroke-width="0.50" fill="none" opacity="0.8"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_page",
        name: "權杖侍者 (Page of Wands)",
        number: "侍",
        keywords: "學習、好奇心、新消息、初學者能量",
        upright: "權杖侍者正位象徵著青春洋溢的好奇心與求知慾，如同一位剛踏上熱情、行動、創造與事業旅程的學生。你可能即將收到與熱情、行動、創造與事業相關的新消息，或是萌生出躍躍欲試的新想法，請保持開放與熱忱的心態去探索。",
        reversed: "權杖侍者逆位代表三分鐘熱度、消息延誤，或是因為缺乏經驗而顯得不夠成熟。你可能想法不切實際，或是遲遲無法將學習化為行動。請放慢腳步，紮實地累積基礎。",
        desc: "一位年輕的侍者站在開闊的原野上，好奇地端詳著手中的權杖，眼神充滿探索的渴望。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.0" cy="19.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="68.0" cy="21.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="25.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="137.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M43 37 Q50 31 57 37" stroke="#dfba47" stroke-width="1" fill="none" opacity="0.8"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="41.2" x2="70.0" y2="54.8" stroke="#dfba47" stroke-width="1.36"/><path d="M67.0 43.3 Q70.0 38.2 73.0 43.3" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M67.0 52.7 Q70.0 57.8 73.0 52.7" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M68.1 45.6 Q64.9 47.3 68.1 49.0" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/><path d="M71.9 47.0 Q75.1 48.7 71.9 50.4" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_knight",
        name: "權杖騎士 (Knight of Wands)",
        number: "騎",
        keywords: "行動、追尋目標、熱切衝勁、冒險",
        upright: "權杖騎士正位象徵著全力以赴、勇往直前的行動力，騎著駿馬奔馳於熱情、行動、創造與事業的道路上。此刻的你充滿幹勁，願意為了追求目標而全力衝刺，請善用這股熱情，但也別忘了掌握方向。",
        reversed: "權杖騎士逆位代表衝動魯莽、有勇無謀，或是三心二意導致行動半途而廢。你可能因為操之過急而忽略了潛在的風險。請在熱情與理性之間找到平衡。",
        desc: "騎士策馬疾馳，手持權杖衝向遠方，斗篷在風中翻飛，姿態英勇果決。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31.0" cy="18.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="32.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="22.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="136.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="92" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M44 36 L40 24 Q50 30 46 40" stroke="#dfba47" stroke-width="1.1" fill="#dfba47" fill-opacity="0.12"/><path d="M56 38 Q66 34 62 22" stroke="#dfba47" stroke-width="1" fill="none"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="41.2" x2="70.0" y2="54.8" stroke="#dfba47" stroke-width="1.36"/><path d="M67.0 43.3 Q70.0 38.2 73.0 43.3" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M67.0 52.7 Q70.0 57.8 73.0 52.7" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M68.1 45.6 Q64.9 47.3 68.1 49.0" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/><path d="M71.9 47.0 Q75.1 48.7 71.9 50.4" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M22 128 L34 104 L50 100 L66 106 L78 128" stroke="#dfba47" stroke-width="1.5" fill="none"/><path d="M50 100 L50 92" stroke="#dfba47" stroke-width="1.4"/><polygon points="30,104 26,96 34,98" fill="#dfba47" opacity="0.7"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_queen",
        name: "權杖皇后 (Queen of Wands)",
        number: "皇",
        keywords: "成熟、內化力量、直覺智慧、包容",
        upright: "權杖皇后正位象徵著你已經將熱情、行動、創造與事業的能量內化為成熟穩定的智慧，如同一位端坐王座、從容自信的女性。你善於運用直覺與同理心來處理相關的課題，散發著沉穩而溫暖的力量。",
        reversed: "權杖皇后逆位代表情緒化、過度敏感，或是原本擅長的能力此刻顯得力不從心。你可能因為內在的不安而顯得患得患失。請重新找回屬於你的沉穩與自信。",
        desc: "一位優雅的女王端坐王座之上，手中輕握著權杖，神情從容睿智，散發溫暖的氣場。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="44.0" cy="17.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="74.0" cy="23.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="19.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="135.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M41 36 Q50 27 59 36" stroke="#dfba47" stroke-width="1.3" fill="none"/><circle cx="50" cy="28" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="41.2" x2="70.0" y2="54.8" stroke="#dfba47" stroke-width="1.36"/><path d="M67.0 43.3 Q70.0 38.2 73.0 43.3" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M67.0 52.7 Q70.0 57.8 73.0 52.7" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M68.1 45.6 Q64.9 47.3 68.1 49.0" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/><path d="M71.9 47.0 Q75.1 48.7 71.9 50.4" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "wands_king",
        name: "權杖國王 (King of Wands)",
        number: "國",
        keywords: "權威、掌控全局、成熟領導、實踐智慧",
        upright: "權杖國王正位象徵著你已經完全掌握熱情、行動、創造與事業的能量，能夠像一位睿智的君主般統馭全局。你的決策成熟穩健，具備領導者的高度與遠見，足以承擔起更大的責任。",
        reversed: "權杖國王逆位代表濫用權力、專制獨裁，或是對相關領域的掌控力正在減弱。你可能顯得固執己見或缺乏彈性。請重新檢視自己運用權威的方式是否恰當。",
        desc: "君王威嚴地端坐寶座之上，手持象徵權杖力量的權杖，目光堅定地俯視著自己的疆土。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="57.0" cy="16.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="67.0" cy="34.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="26.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="134.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M14 18 Q20 8 26 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><path d="M74 18 Q80 8 86 18" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M40 35 L44 26 L50 33 L56 26 L60 35 Z" stroke="#dfba47" stroke-width="1.3" fill="#dfba47" fill-opacity="0.15"/><circle cx="50" cy="25" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="41.2" x2="70.0" y2="54.8" stroke="#dfba47" stroke-width="1.36"/><path d="M67.0 43.3 Q70.0 38.2 73.0 43.3" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M67.0 52.7 Q70.0 57.8 73.0 52.7" stroke="#dfba47" stroke-width="0.85" fill="none"/><path d="M68.1 45.6 Q64.9 47.3 68.1 49.0" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/><path d="M71.9 47.0 Q75.1 48.7 71.9 50.4" stroke="#dfba47" stroke-width="0.59" fill="none" opacity="0.8"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_1",
        name: "聖杯一 (Ace of Cups)",
        number: "Ace",
        keywords: "新戀情、情感豐盈、直覺覺醒、慈悲",
        upright: "聖杯一正位如同一只滿溢甘露的聖杯，象徵情感的豐盛與心靈的覺醒。無論是新戀情、友誼或是與自己內在的和解，愛與慈悲的能量此刻正源源不絕地湧入你的生命。",
        reversed: "聖杯一逆位代表情感的封閉、失落或是內心的空虛感。你可能正壓抑著真實的感受，或是在一段關係中感到不被滿足。請允許自己重新向愛敞開心房。",
        desc: "一隻神聖之手托著滿溢清水的聖杯，鴿子銜著聖餅飛入杯中，象徵恩典的降臨。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.0" cy="15.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="25.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="23.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="133.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M43.5 67.0 H56.5 L54.3 78.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 67.0 Q50.0 63.5 56.5 67.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="78.0" x2="50.0" y2="82.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="82.0" x2="54.2" y2="82.0" stroke="#dfba47" stroke-width="1.30"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_2",
        name: "聖杯二 (Two of Cups)",
        number: "2",
        keywords: "結合、吸引力、夥伴關係、心靈相通",
        upright: "聖杯二正位描繪兩人相互舉杯交換的畫面，象徵深刻的情感連結與心靈契合。無論是愛情、友情或合作夥伴關係，此刻雙方正建立起互相理解與尊重的美好連結。",
        reversed: "聖杯二逆位代表關係中出現失衡、誤解或漸行漸遠。溝通不良讓彼此的心逐漸疏離。請放下自我防衛，坦誠地表達你真實的感受。",
        desc: "一對男女面對面交換聖杯，上方漂浮著雙蛇纏繞的雙翼獅頭，象徵和諧的結合。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="83.0" cy="29.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="73.0" cy="36.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="20.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="132.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M43.5 30.0 H56.5 L54.3 41.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 30.0 Q50.0 26.5 56.5 30.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="41.0" x2="50.0" y2="45.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="45.0" x2="54.2" y2="45.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M43.5 107.0 H56.5 L54.3 118.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 107.0 Q50.0 103.5 56.5 107.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="118.0" x2="50.0" y2="122.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="122.0" x2="54.2" y2="122.0" stroke="#dfba47" stroke-width="1.30"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_3",
        name: "聖杯三 (Three of Cups)",
        number: "3",
        keywords: "友誼、慶祝、群體歸屬、喜悅分享",
        upright: "聖杯三正位是三位女子舉杯共舞慶祝的畫面，象徵友誼、團聚與共享喜悅的時刻。生活中值得慶祝的好消息正在到來，好好珍惜與親友共度的美好時光。",
        reversed: "聖杯三逆位代表過度放縱、流言蜚語，或是團體中出現排擠與孤立。你可能因為社交過度而感到疲憊。請適度收斂，回歸真正重要的情感連結。",
        desc: "三位女子在豐收的果園中舉杯相慶，裙擺飛揚，洋溢著歡快的氣息。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26.0" cy="28.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="66.0" cy="27.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="27.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="131.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M43.5 23.0 H56.5 L54.3 34.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 23.0 Q50.0 19.5 56.5 23.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="34.0" x2="50.0" y2="38.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="38.0" x2="54.2" y2="38.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M43.5 67.0 H56.5 L54.3 78.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 67.0 Q50.0 63.5 56.5 67.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="78.0" x2="50.0" y2="82.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="82.0" x2="54.2" y2="82.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M43.5 113.0 H56.5 L54.3 124.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 113.0 Q50.0 109.5 56.5 113.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="124.0" x2="50.0" y2="128.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="128.0" x2="54.2" y2="128.0" stroke="#dfba47" stroke-width="1.30"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_4",
        name: "聖杯四 (Four of Cups)",
        number: "4",
        keywords: "冷漠、沉思、錯失良機、重新評估",
        upright: "聖杯四正位描繪一人坐在樹下，對眼前遞來的聖杯視而不見，象徵情感上的麻木與不滿足感。你可能沉浸在自己的世界裡，忽略了近在眼前的機會，是時候重新張開雙眼了。",
        reversed: "聖杯四逆位代表你終於從冷漠中甦醒，開始重新珍惜身邊擁有的一切，或是接受新的可能性。厭倦感正逐漸消退，請主動伸手接住遞來的機會。",
        desc: "一位年輕人抱胸坐在樹下沉思，對雲中伸出的第四只聖杯毫無反應。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="39.0" cy="27.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="79.0" cy="38.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="24.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="130.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M25.5 33.0 H38.5 L36.3 44.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 33.0 Q32.0 29.5 38.5 33.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="44.0" x2="32.0" y2="48.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="48.0" x2="36.2" y2="48.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 33.0 H74.5 L72.3 44.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 33.0 Q68.0 29.5 74.5 33.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="44.0" x2="68.0" y2="48.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="48.0" x2="72.2" y2="48.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M25.5 107.0 H38.5 L36.3 118.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 107.0 Q32.0 103.5 38.5 107.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="118.0" x2="32.0" y2="122.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="122.0" x2="36.2" y2="122.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 107.0 H74.5 L72.3 118.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 107.0 Q68.0 103.5 74.5 107.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="118.0" x2="68.0" y2="122.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="122.0" x2="72.2" y2="122.0" stroke="#dfba47" stroke-width="1.30"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_5",
        name: "聖杯五 (Five of Cups)",
        number: "5",
        keywords: "失落、悔恨、悲傷、聚焦負面",
        upright: "聖杯五正位描繪三只倒下的聖杯與兩只仍然直立的聖杯，象徵你正沉浸在失落與悔恨之中，卻忽略了身後仍然擁有的美好。允許自己悲傷，但也別忘了回頭看看還剩下什麼。",
        reversed: "聖杯五逆位代表你終於願意放下過去的傷痛，開始接受現實並重新出發。走出悲傷的陰影後，內心將重獲平靜與希望。",
        desc: "披著黑色斗篷的人望著三只灑落的聖杯，卻沒注意到身後兩只依然完好的聖杯。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="52.0" cy="26.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="72.0" cy="29.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="21.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="129.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M25.5 30.0 H38.5 L36.3 41.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 30.0 Q32.0 26.5 38.5 30.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="41.0" x2="32.0" y2="45.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="45.0" x2="36.2" y2="45.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 30.0 H74.5 L72.3 41.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 30.0 Q68.0 26.5 74.5 30.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="41.0" x2="68.0" y2="45.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="45.0" x2="72.2" y2="45.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M43.5 69.0 H56.5 L54.3 80.0 H45.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M43.5 69.0 Q50.0 65.5 56.5 69.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="50.0" y1="80.0" x2="50.0" y2="84.0" stroke="#dfba47" stroke-width="1.00"/><line x1="45.8" y1="84.0" x2="54.2" y2="84.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M25.5 110.0 H38.5 L36.3 121.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 110.0 Q32.0 106.5 38.5 110.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="121.0" x2="32.0" y2="125.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="125.0" x2="36.2" y2="125.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 110.0 H74.5 L72.3 121.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 110.0 Q68.0 106.5 74.5 110.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="121.0" x2="68.0" y2="125.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="125.0" x2="72.2" y2="125.0" stroke="#dfba47" stroke-width="1.30"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_6",
        name: "聖杯六 (Six of Cups)",
        number: "6",
        keywords: "懷舊、童年回憶、純真、故人重逢",
        upright: "聖杯六正位喚起純真美好的回憶，可能是童年往事或久別重逢的故人。這張牌邀請你重新連結內在的純真本質，從過去的美好中汲取溫暖的力量。",
        reversed: "聖杯六逆位代表過度沉溺於過去、拒絕成長，或是對現況抱持不切實際的懷舊幻想。是時候放下對往日的執著，勇敢活在當下。",
        desc: "庭院中，一個孩子將盛滿鮮花的聖杯遞給另一個孩子，畫面純真而溫馨。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="65.0" cy="25.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="20.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="18.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="128.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M25.5 23.0 H38.5 L36.3 34.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 23.0 Q32.0 19.5 38.5 23.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="34.0" x2="32.0" y2="38.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="38.0" x2="36.2" y2="38.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 23.0 H74.5 L72.3 34.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 23.0 Q68.0 19.5 74.5 23.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="34.0" x2="68.0" y2="38.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="38.0" x2="72.2" y2="38.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M25.5 69.0 H38.5 L36.3 80.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 69.0 Q32.0 65.5 38.5 69.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="80.0" x2="32.0" y2="84.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="84.0" x2="36.2" y2="84.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 69.0 H74.5 L72.3 80.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 69.0 Q68.0 65.5 74.5 69.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="80.0" x2="68.0" y2="84.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="84.0" x2="72.2" y2="84.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M25.5 115.0 H38.5 L36.3 126.0 H27.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M25.5 115.0 Q32.0 111.5 38.5 115.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="32.0" y1="126.0" x2="32.0" y2="130.0" stroke="#dfba47" stroke-width="1.00"/><line x1="27.8" y1="130.0" x2="36.2" y2="130.0" stroke="#dfba47" stroke-width="1.30"/></g><g><path d="M61.5 115.0 H74.5 L72.3 126.0 H63.7 Z" stroke="#dfba47" stroke-width="1.00" fill="#dfba47" fill-opacity="0.12"/><path d="M61.5 115.0 Q68.0 111.5 74.5 115.0" stroke="#dfba47" stroke-width="0.90" fill="none"/><line x1="68.0" y1="126.0" x2="68.0" y2="130.0" stroke="#dfba47" stroke-width="1.00"/><line x1="63.8" y1="130.0" x2="72.2" y2="130.0" stroke="#dfba47" stroke-width="1.30"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_7",
        name: "聖杯七 (Seven of Cups)",
        number: "7",
        keywords: "幻想、選擇過多、白日夢、迷惘",
        upright: "聖杯七正位描繪雲端浮現七只裝滿各種幻象的聖杯，象徵你正面臨眾多誘人卻虛幻的選項。請分辨哪些是真正踏實的目標，哪些只是海市蜃樓般的幻想。",
        reversed: "聖杯七逆位代表迷霧終於散去，你開始看清現實，並做出明確的抉擇。長期的猶豫不決正逐漸被清晰的行動力取代。",
        desc: "一人望著雲中浮現的七只聖杯，杯中分別裝著珠寶、蛇怪、城堡等奇幻景象。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="78.0" cy="24.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="78.0" cy="31.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="25.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="137.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M26.7 19.9 H37.3 L35.5 28.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 19.9 Q32.0 17.0 37.3 19.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="28.9" x2="32.0" y2="32.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="32.2" x2="35.4" y2="32.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 19.9 H73.3 L71.5 28.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 19.9 Q68.0 17.0 73.3 19.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="28.9" x2="68.0" y2="32.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="32.2" x2="71.4" y2="32.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M44.7 43.9 H55.3 L53.5 52.9 H46.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M44.7 43.9 Q50.0 41.0 55.3 43.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="50.0" y1="52.9" x2="50.0" y2="56.2" stroke="#dfba47" stroke-width="0.82"/><line x1="46.6" y1="56.2" x2="53.4" y2="56.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M26.7 69.9 H37.3 L35.5 78.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 69.9 Q32.0 67.0 37.3 69.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="78.9" x2="32.0" y2="82.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="82.2" x2="35.4" y2="82.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 69.9 H73.3 L71.5 78.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 69.9 Q68.0 67.0 73.3 69.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="78.9" x2="68.0" y2="82.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="82.2" x2="71.4" y2="82.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M26.7 113.9 H37.3 L35.5 122.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 113.9 Q32.0 111.0 37.3 113.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="122.9" x2="32.0" y2="126.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="126.2" x2="35.4" y2="126.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 113.9 H73.3 L71.5 122.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 113.9 Q68.0 111.0 73.3 113.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="122.9" x2="68.0" y2="126.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="126.2" x2="71.4" y2="126.2" stroke="#dfba47" stroke-width="1.07"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_8",
        name: "聖杯八 (Eight of Cups)",
        number: "8",
        keywords: "離開、追尋更深意義、放下、轉身",
        upright: "聖杯八正位描繪一人拋下堆疊的聖杯、獨自踏上旅程，象徵即使表面圓滿，你仍選擇追尋內心深處更深層的意義。有些事物即使得來不易，也該勇敢放手。",
        reversed: "聖杯八逆位代表對改變的恐懼讓你停滯不前，或是漫無目的地逃避現實。你可能害怕未知而選擇原地打轉，請重新找回前進的方向。",
        desc: "月光下，一人拄著手杖轉身離去，身後留下八只堆疊整齊的聖杯。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21.0" cy="23.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="71.0" cy="22.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="22.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="136.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M26.7 17.9 H37.3 L35.5 26.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 17.9 Q32.0 15.0 37.3 17.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="26.9" x2="32.0" y2="30.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="30.2" x2="35.4" y2="30.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 17.9 H73.3 L71.5 26.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 17.9 Q68.0 15.0 73.3 17.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="26.9" x2="68.0" y2="30.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="30.2" x2="71.4" y2="30.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M26.7 47.9 H37.3 L35.5 56.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 47.9 Q32.0 45.0 37.3 47.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="56.9" x2="32.0" y2="60.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="60.2" x2="35.4" y2="60.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 47.9 H73.3 L71.5 56.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 47.9 Q68.0 45.0 73.3 47.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="56.9" x2="68.0" y2="60.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="60.2" x2="71.4" y2="60.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M26.7 91.9 H37.3 L35.5 100.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 91.9 Q32.0 89.0 37.3 91.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="100.9" x2="32.0" y2="104.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="104.2" x2="35.4" y2="104.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 91.9 H73.3 L71.5 100.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 91.9 Q68.0 89.0 73.3 91.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="100.9" x2="68.0" y2="104.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="104.2" x2="71.4" y2="104.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M26.7 121.9 H37.3 L35.5 130.9 H28.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M26.7 121.9 Q32.0 119.0 37.3 121.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="32.0" y1="130.9" x2="32.0" y2="134.2" stroke="#dfba47" stroke-width="0.82"/><line x1="28.6" y1="134.2" x2="35.4" y2="134.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M62.7 121.9 H73.3 L71.5 130.9 H64.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M62.7 121.9 Q68.0 119.0 73.3 121.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="68.0" y1="130.9" x2="68.0" y2="134.2" stroke="#dfba47" stroke-width="0.82"/><line x1="64.6" y1="134.2" x2="71.4" y2="134.2" stroke="#dfba47" stroke-width="1.07"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_9",
        name: "聖杯九 (Nine of Cups)",
        number: "9",
        keywords: "滿足、如願以償、感恩、心想事成",
        upright: "聖杯九正位又被稱為「許願牌」，象徵你的努力終於得到回報，內心感到無比滿足與富足。盡情享受這份心想事成的喜悅，並對生命中的美好心懷感恩。",
        reversed: "聖杯九逆位代表表面的滿足掩蓋不了內心的空虛，或是過度沉溺於物質享樂。真正的幸福無法單靠外在成就填補，請向內尋找真實的滿足感。",
        desc: "一位滿足的商人環抱雙臂坐在椅子上，身後整齊排列著九只金色聖杯。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.0" cy="22.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="33.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="19.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="135.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M24.7 17.9 H35.3 L33.5 26.9 H26.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M24.7 17.9 Q30.0 15.0 35.3 17.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="30.0" y1="26.9" x2="30.0" y2="30.2" stroke="#dfba47" stroke-width="0.82"/><line x1="26.6" y1="30.2" x2="33.4" y2="30.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M44.7 17.9 H55.3 L53.5 26.9 H46.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M44.7 17.9 Q50.0 15.0 55.3 17.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="50.0" y1="26.9" x2="50.0" y2="30.2" stroke="#dfba47" stroke-width="0.82"/><line x1="46.6" y1="30.2" x2="53.4" y2="30.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M64.7 17.9 H75.3 L73.5 26.9 H66.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M64.7 17.9 Q70.0 15.0 75.3 17.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="70.0" y1="26.9" x2="70.0" y2="30.2" stroke="#dfba47" stroke-width="0.82"/><line x1="66.6" y1="30.2" x2="73.4" y2="30.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M24.7 69.9 H35.3 L33.5 78.9 H26.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M24.7 69.9 Q30.0 67.0 35.3 69.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="30.0" y1="78.9" x2="30.0" y2="82.2" stroke="#dfba47" stroke-width="0.82"/><line x1="26.6" y1="82.2" x2="33.4" y2="82.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M44.7 69.9 H55.3 L53.5 78.9 H46.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M44.7 69.9 Q50.0 67.0 55.3 69.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="50.0" y1="78.9" x2="50.0" y2="82.2" stroke="#dfba47" stroke-width="0.82"/><line x1="46.6" y1="82.2" x2="53.4" y2="82.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M64.7 69.9 H75.3 L73.5 78.9 H66.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M64.7 69.9 Q70.0 67.0 75.3 69.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="70.0" y1="78.9" x2="70.0" y2="82.2" stroke="#dfba47" stroke-width="0.82"/><line x1="66.6" y1="82.2" x2="73.4" y2="82.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M24.7 121.9 H35.3 L33.5 130.9 H26.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M24.7 121.9 Q30.0 119.0 35.3 121.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="30.0" y1="130.9" x2="30.0" y2="134.2" stroke="#dfba47" stroke-width="0.82"/><line x1="26.6" y1="134.2" x2="33.4" y2="134.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M44.7 121.9 H55.3 L53.5 130.9 H46.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M44.7 121.9 Q50.0 119.0 55.3 121.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="50.0" y1="130.9" x2="50.0" y2="134.2" stroke="#dfba47" stroke-width="0.82"/><line x1="46.6" y1="134.2" x2="53.4" y2="134.2" stroke="#dfba47" stroke-width="1.07"/></g><g><path d="M64.7 121.9 H75.3 L73.5 130.9 H66.5 Z" stroke="#dfba47" stroke-width="0.82" fill="#dfba47" fill-opacity="0.12"/><path d="M64.7 121.9 Q70.0 119.0 75.3 121.9" stroke="#dfba47" stroke-width="0.74" fill="none"/><line x1="70.0" y1="130.9" x2="70.0" y2="134.2" stroke="#dfba47" stroke-width="0.82"/><line x1="66.6" y1="134.2" x2="73.4" y2="134.2" stroke="#dfba47" stroke-width="1.07"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_10",
        name: "聖杯十 (Ten of Cups)",
        number: "10",
        keywords: "圓滿、家庭和諧、情感歸宿、幸福",
        upright: "聖杯十正位描繪彩虹下闔家歡樂的畫面，象徵情感層面最圓滿的境界。家庭和諧、關係穩固、內心充滿幸福感，這是聖杯家族旅程的美好終點。",
        reversed: "聖杯十逆位代表家庭失和、價值觀衝突，或是外表看似幸福卻暗藏裂痕。你可能對理想的家庭生活感到失望。請正視問題，修復真正重要的情感連結。",
        desc: "彩虹高掛天際，十只聖杯排列其中，一對夫妻與孩童在草地上歡欣起舞。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="47.0" cy="21.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="77.0" cy="24.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="26.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="134.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><g><path d="M30.3 14.4 H39.7 L38.1 22.3 H31.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M30.3 14.4 Q35.0 11.9 39.7 14.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="35.0" y1="22.3" x2="35.0" y2="25.2" stroke="#dfba47" stroke-width="0.72"/><line x1="32.0" y1="25.2" x2="38.0" y2="25.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M60.3 14.4 H69.7 L68.1 22.3 H61.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M60.3 14.4 Q65.0 11.9 69.7 14.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="65.0" y1="22.3" x2="65.0" y2="25.2" stroke="#dfba47" stroke-width="0.72"/><line x1="62.0" y1="25.2" x2="68.0" y2="25.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M30.3 40.4 H39.7 L38.1 48.3 H31.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M30.3 40.4 Q35.0 37.9 39.7 40.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="35.0" y1="48.3" x2="35.0" y2="51.2" stroke="#dfba47" stroke-width="0.72"/><line x1="32.0" y1="51.2" x2="38.0" y2="51.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M60.3 40.4 H69.7 L68.1 48.3 H61.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M60.3 40.4 Q65.0 37.9 69.7 40.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="65.0" y1="48.3" x2="65.0" y2="51.2" stroke="#dfba47" stroke-width="0.72"/><line x1="62.0" y1="51.2" x2="68.0" y2="51.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M45.3 66.4 H54.7 L53.1 74.3 H46.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M45.3 66.4 Q50.0 63.9 54.7 66.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="50.0" y1="74.3" x2="50.0" y2="77.2" stroke="#dfba47" stroke-width="0.72"/><line x1="47.0" y1="77.2" x2="53.0" y2="77.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M30.3 92.4 H39.7 L38.1 100.3 H31.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M30.3 92.4 Q35.0 89.9 39.7 92.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="35.0" y1="100.3" x2="35.0" y2="103.2" stroke="#dfba47" stroke-width="0.72"/><line x1="32.0" y1="103.2" x2="38.0" y2="103.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M60.3 92.4 H69.7 L68.1 100.3 H61.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M60.3 92.4 Q65.0 89.9 69.7 92.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="65.0" y1="100.3" x2="65.0" y2="103.2" stroke="#dfba47" stroke-width="0.72"/><line x1="62.0" y1="103.2" x2="68.0" y2="103.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M30.3 118.4 H39.7 L38.1 126.3 H31.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M30.3 118.4 Q35.0 115.9 39.7 118.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="35.0" y1="126.3" x2="35.0" y2="129.2" stroke="#dfba47" stroke-width="0.72"/><line x1="32.0" y1="129.2" x2="38.0" y2="129.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M60.3 118.4 H69.7 L68.1 126.3 H61.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M60.3 118.4 Q65.0 115.9 69.7 118.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="65.0" y1="126.3" x2="65.0" y2="129.2" stroke="#dfba47" stroke-width="0.72"/><line x1="62.0" y1="129.2" x2="68.0" y2="129.2" stroke="#dfba47" stroke-width="0.94"/></g><g><path d="M45.3 131.4 H54.7 L53.1 139.3 H46.9 Z" stroke="#dfba47" stroke-width="0.72" fill="#dfba47" fill-opacity="0.12"/><path d="M45.3 131.4 Q50.0 128.9 54.7 131.4" stroke="#dfba47" stroke-width="0.65" fill="none"/><line x1="50.0" y1="139.3" x2="50.0" y2="142.2" stroke="#dfba47" stroke-width="0.72"/><line x1="47.0" y1="142.2" x2="53.0" y2="142.2" stroke="#dfba47" stroke-width="0.94"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_page",
        name: "聖杯侍者 (Page of Cups)",
        number: "侍",
        keywords: "學習、好奇心、新消息、初學者能量",
        upright: "聖杯侍者正位象徵著青春洋溢的好奇心與求知慾，如同一位剛踏上情感、關係、直覺與心靈旅程的學生。你可能即將收到與情感、關係、直覺與心靈相關的新消息，或是萌生出躍躍欲試的新想法，請保持開放與熱忱的心態去探索。",
        reversed: "聖杯侍者逆位代表三分鐘熱度、消息延誤，或是因為缺乏經驗而顯得不夠成熟。你可能想法不切實際，或是遲遲無法將學習化為行動。請放慢腳步，紮實地累積基礎。",
        desc: "一位年輕的侍者站在開闊的原野上，好奇地端詳著手中的聖杯，眼神充滿探索的渴望。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60.0" cy="20.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="70.0" cy="35.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="23.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="133.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M43 37 Q50 31 57 37" stroke="#dfba47" stroke-width="1" fill="none" opacity="0.8"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><path d="M64.5 43.8 H75.5 L73.7 53.1 H66.3 Z" stroke="#dfba47" stroke-width="0.85" fill="#dfba47" fill-opacity="0.12"/><path d="M64.5 43.8 Q70.0 40.8 75.5 43.8" stroke="#dfba47" stroke-width="0.77" fill="none"/><line x1="70.0" y1="53.1" x2="70.0" y2="56.5" stroke="#dfba47" stroke-width="0.85"/><line x1="66.4" y1="56.5" x2="73.6" y2="56.5" stroke="#dfba47" stroke-width="1.10"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_knight",
        name: "聖杯騎士 (Knight of Cups)",
        number: "騎",
        keywords: "行動、追尋目標、熱切衝勁、冒險",
        upright: "聖杯騎士正位象徵著全力以赴、勇往直前的行動力，騎著駿馬奔馳於情感、關係、直覺與心靈的道路上。此刻的你充滿幹勁，願意為了追求目標而全力衝刺，請善用這股熱情，但也別忘了掌握方向。",
        reversed: "聖杯騎士逆位代表衝動魯莽、有勇無謀，或是三心二意導致行動半途而廢。你可能因為操之過急而忽略了潛在的風險。請在熱情與理性之間找到平衡。",
        desc: "騎士策馬疾馳，手持聖杯衝向遠方，斗篷在風中翻飛，姿態英勇果決。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="73.0" cy="19.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="26.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="20.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="132.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="92" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M44 36 L40 24 Q50 30 46 40" stroke="#dfba47" stroke-width="1.1" fill="#dfba47" fill-opacity="0.12"/><path d="M56 38 Q66 34 62 22" stroke="#dfba47" stroke-width="1" fill="none"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><path d="M64.5 43.8 H75.5 L73.7 53.1 H66.3 Z" stroke="#dfba47" stroke-width="0.85" fill="#dfba47" fill-opacity="0.12"/><path d="M64.5 43.8 Q70.0 40.8 75.5 43.8" stroke="#dfba47" stroke-width="0.77" fill="none"/><line x1="70.0" y1="53.1" x2="70.0" y2="56.5" stroke="#dfba47" stroke-width="0.85"/><line x1="66.4" y1="56.5" x2="73.6" y2="56.5" stroke="#dfba47" stroke-width="1.10"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M22 128 L34 104 L50 100 L66 106 L78 128" stroke="#dfba47" stroke-width="1.5" fill="none"/><path d="M50 100 L50 92" stroke="#dfba47" stroke-width="1.4"/><polygon points="30,104 26,96 34,98" fill="#dfba47" opacity="0.7"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_queen",
        name: "聖杯皇后 (Queen of Cups)",
        number: "皇",
        keywords: "成熟、內化力量、直覺智慧、包容",
        upright: "聖杯皇后正位象徵著你已經將情感、關係、直覺與心靈的能量內化為成熟穩定的智慧，如同一位端坐王座、從容自信的女性。你善於運用直覺與同理心來處理相關的課題，散發著沉穩而溫暖的力量。",
        reversed: "聖杯皇后逆位代表情緒化、過度敏感，或是原本擅長的能力此刻顯得力不從心。你可能因為內在的不安而顯得患得患失。請重新找回屬於你的沉穩與自信。",
        desc: "一位優雅的女王端坐王座之上，手中輕握著聖杯，神情從容睿智，散發溫暖的氣場。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.0" cy="18.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="76.0" cy="37.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="27.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="131.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M41 36 Q50 27 59 36" stroke="#dfba47" stroke-width="1.3" fill="none"/><circle cx="50" cy="28" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><path d="M64.5 43.8 H75.5 L73.7 53.1 H66.3 Z" stroke="#dfba47" stroke-width="0.85" fill="#dfba47" fill-opacity="0.12"/><path d="M64.5 43.8 Q70.0 40.8 75.5 43.8" stroke="#dfba47" stroke-width="0.77" fill="none"/><line x1="70.0" y1="53.1" x2="70.0" y2="56.5" stroke="#dfba47" stroke-width="0.85"/><line x1="66.4" y1="56.5" x2="73.6" y2="56.5" stroke="#dfba47" stroke-width="1.10"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "cups_king",
        name: "聖杯國王 (King of Cups)",
        number: "國",
        keywords: "權威、掌控全局、成熟領導、實踐智慧",
        upright: "聖杯國王正位象徵著你已經完全掌握情感、關係、直覺與心靈的能量，能夠像一位睿智的君主般統馭全局。你的決策成熟穩健，具備領導者的高度與遠見，足以承擔起更大的責任。",
        reversed: "聖杯國王逆位代表濫用權力、專制獨裁，或是對相關領域的掌控力正在減弱。你可能顯得固執己見或缺乏彈性。請重新檢視自己運用權威的方式是否恰當。",
        desc: "君王威嚴地端坐寶座之上，手持象徵聖杯力量的權杖，目光堅定地俯視著自己的疆土。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="29.0" cy="17.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="69.0" cy="28.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="24.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="130.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M10 132 Q30 126 50 132 Q70 138 90 132" stroke="#dfba47" stroke-width="0.8" opacity="0.35" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M40 35 L44 26 L50 33 L56 26 L60 35 Z" stroke="#dfba47" stroke-width="1.3" fill="#dfba47" fill-opacity="0.15"/><circle cx="50" cy="25" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><path d="M64.5 43.8 H75.5 L73.7 53.1 H66.3 Z" stroke="#dfba47" stroke-width="0.85" fill="#dfba47" fill-opacity="0.12"/><path d="M64.5 43.8 Q70.0 40.8 75.5 43.8" stroke="#dfba47" stroke-width="0.77" fill="none"/><line x1="70.0" y1="53.1" x2="70.0" y2="56.5" stroke="#dfba47" stroke-width="0.85"/><line x1="66.4" y1="56.5" x2="73.6" y2="56.5" stroke="#dfba47" stroke-width="1.10"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_1",
        name: "寶劍一 (Ace of Swords)",
        number: "Ace",
        keywords: "突破、清晰思路、真相、決斷力",
        upright: "寶劍一正位象徵著一把直指雲霄的利劍，帶來前所未有的清晰思路與真相。這是突破迷霧、看清事實真相的時刻，運用理智的力量做出果斷的決定。",
        reversed: "寶劍一逆位代表思緒混亂、決策失誤，或是被扭曲的訊息誤導。你可能陷入了自我懷疑的漩渦。請冷靜下來，重新釐清真正的重點。",
        desc: "一隻手從雲端伸出，緊握著一把插著皇冠與橄欖枝的利劍，直指天際。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="42.0" cy="16.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="39.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="21.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="129.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="50.0" y1="62.5" x2="50.0" y2="78.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,60.3 47.6,65.1 52.4,65.1" fill="#dfba47"/><line x1="45.4" y1="74.2" x2="54.6" y2="74.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="80.4" r="1.40" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_2",
        name: "寶劍二 (Two of Swords)",
        number: "2",
        keywords: "僵局、猶豫不決、逃避現實、平衡假象",
        upright: "寶劍二正位描繪一位蒙眼女子雙手交叉持劍而坐，象徵你正逃避一個艱難的抉擇，陷入表面平靜實則緊繃的僵局。是時候摘下眼罩，正視問題的核心了。",
        reversed: "寶劍二逆位代表長期迴避後迎來的資訊超載與混亂，或是隱藏的真相終於浮出水面。逃避不再是選項，請勇敢做出決定。",
        desc: "蒙眼的女子坐在海邊石椅上，雙手交叉持著兩把長劍，背後海面波濤暗湧。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="55.0" cy="15.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="75.0" cy="30.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="18.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="128.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="50.0" y1="25.5" x2="50.0" y2="41.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,23.3 47.6,28.1 52.4,28.1" fill="#dfba47"/><line x1="45.4" y1="37.2" x2="54.6" y2="37.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="43.4" r="1.40" fill="#dfba47"/></g><g><line x1="50.0" y1="102.5" x2="50.0" y2="118.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,100.3 47.6,105.1 52.4,105.1" fill="#dfba47"/><line x1="45.4" y1="114.2" x2="54.6" y2="114.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="120.4" r="1.40" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_3",
        name: "寶劍三 (Three of Swords)",
        number: "3",
        keywords: "心碎、悲傷、背叛、痛苦的真相",
        upright: "寶劍三正位描繪一顆被三把利劍刺穿的心，象徵情感上的傷痛與心碎。無論是背叛、分離或殘酷的真相，這份痛楚雖然難以承受，卻也是療癒的必經之路。",
        reversed: "寶劍三逆位代表你正從傷痛中逐漸康復，學會原諒與釋懷，或是選擇壓抑痛苦而非正視它。請給自己時間，讓傷口真正癒合。",
        desc: "烏雲密布的天空下，一顆鮮紅的心臟被三把利劍狠狠刺穿，雨水如淚水般落下。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="68.0" cy="29.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="68.0" cy="21.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="25.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="137.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="50.0" y1="18.5" x2="50.0" y2="34.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,16.3 47.6,21.1 52.4,21.1" fill="#dfba47"/><line x1="45.4" y1="30.2" x2="54.6" y2="30.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="36.4" r="1.40" fill="#dfba47"/></g><g><line x1="50.0" y1="62.5" x2="50.0" y2="78.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,60.3 47.6,65.1 52.4,65.1" fill="#dfba47"/><line x1="45.4" y1="74.2" x2="54.6" y2="74.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="80.4" r="1.40" fill="#dfba47"/></g><g><line x1="50.0" y1="108.5" x2="50.0" y2="124.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,106.3 47.6,111.1 52.4,111.1" fill="#dfba47"/><line x1="45.4" y1="120.2" x2="54.6" y2="120.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="126.4" r="1.40" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_4",
        name: "寶劍四 (Four of Swords)",
        number: "4",
        keywords: "休息、靜養、沉澱、暫時退場",
        upright: "寶劍四正位描繪一位騎士雕像般靜臥休養，象徵此刻需要的是停下腳步、讓身心徹底休息。暫時退出紛擾的戰場，沉澱思緒，才能為下一步累積能量。",
        reversed: "寶劍四逆位代表你被迫中斷休息、身心俱疲卻無法真正放鬆，或是長期停滯後終於準備重新出發。請留意自己是否過度透支了體力與心力。",
        desc: "騎士的石雕臥像靜靜躺在教堂裡，一把劍安放身側，彩繪玻璃透出寧靜的光。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="81.0" cy="28.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="32.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="22.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="136.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="32.0" y1="28.5" x2="32.0" y2="44.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,26.3 29.6,31.1 34.4,31.1" fill="#dfba47"/><line x1="27.4" y1="40.2" x2="36.6" y2="40.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="46.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="28.5" x2="68.0" y2="44.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,26.3 65.6,31.1 70.4,31.1" fill="#dfba47"/><line x1="63.4" y1="40.2" x2="72.6" y2="40.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="46.4" r="1.40" fill="#dfba47"/></g><g><line x1="32.0" y1="102.5" x2="32.0" y2="118.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,100.3 29.6,105.1 34.4,105.1" fill="#dfba47"/><line x1="27.4" y1="114.2" x2="36.6" y2="114.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="120.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="102.5" x2="68.0" y2="118.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,100.3 65.6,105.1 70.4,105.1" fill="#dfba47"/><line x1="63.4" y1="114.2" x2="72.6" y2="114.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="120.4" r="1.40" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_5",
        name: "寶劍五 (Five of Swords)",
        number: "5",
        keywords: "衝突、爭執、慘勝、自私的勝利",
        upright: "寶劍五正位描繪贏家帶著複雜神情收劍離場，象徵即使贏得了爭執，也可能付出關係破裂的代價。這是提醒你反思「贏了面子卻輸了裡子」是否值得。",
        reversed: "寶劍五逆位代表你選擇放下無謂的紛爭、尋求和解，或是長期積累的怨恨終於爆發。請思考什麼才是真正值得堅持的事。",
        desc: "一人抱著三把劍冷笑離去，遠方兩人垂頭喪氣地走開，天空風雲變色。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24.0" cy="27.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="74.0" cy="23.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="19.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="135.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="32.0" y1="25.5" x2="32.0" y2="41.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,23.3 29.6,28.1 34.4,28.1" fill="#dfba47"/><line x1="27.4" y1="37.2" x2="36.6" y2="37.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="43.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="25.5" x2="68.0" y2="41.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,23.3 65.6,28.1 70.4,28.1" fill="#dfba47"/><line x1="63.4" y1="37.2" x2="72.6" y2="37.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="43.4" r="1.40" fill="#dfba47"/></g><g><line x1="50.0" y1="64.5" x2="50.0" y2="80.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="50.0,62.3 47.6,67.1 52.4,67.1" fill="#dfba47"/><line x1="45.4" y1="76.2" x2="54.6" y2="76.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="50.0" cy="82.4" r="1.40" fill="#dfba47"/></g><g><line x1="32.0" y1="105.5" x2="32.0" y2="121.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,103.3 29.6,108.1 34.4,108.1" fill="#dfba47"/><line x1="27.4" y1="117.2" x2="36.6" y2="117.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="123.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="105.5" x2="68.0" y2="121.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,103.3 65.6,108.1 70.4,108.1" fill="#dfba47"/><line x1="63.4" y1="117.2" x2="72.6" y2="117.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="123.4" r="1.40" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_6",
        name: "寶劍六 (Six of Swords)",
        number: "6",
        keywords: "過渡、放下包袱、邁向平靜、遠行",
        upright: "寶劍六正位描繪一葉扁舟載著人們駛向平靜的彼岸，象徵你正帶著過去的傷痛與經驗，緩緩航向更平穩的未來。這是一段必要的過渡期，終點會是風平浪靜。",
        reversed: "寶劍六逆位代表你抗拒改變、不願離開令自己痛苦的處境，或是舊傷未癒便被迫再次啟程。請正視尚未解決的課題，才能真正前行。",
        desc: "船夫撐篙載著一位女子與孩子渡河，船上插著六把劍，前方水面漸趨平靜。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.0" cy="26.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="67.0" cy="34.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="26.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="134.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="32.0" y1="18.5" x2="32.0" y2="34.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,16.3 29.6,21.1 34.4,21.1" fill="#dfba47"/><line x1="27.4" y1="30.2" x2="36.6" y2="30.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="36.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="18.5" x2="68.0" y2="34.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,16.3 65.6,21.1 70.4,21.1" fill="#dfba47"/><line x1="63.4" y1="30.2" x2="72.6" y2="30.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="36.4" r="1.40" fill="#dfba47"/></g><g><line x1="32.0" y1="64.5" x2="32.0" y2="80.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,62.3 29.6,67.1 34.4,67.1" fill="#dfba47"/><line x1="27.4" y1="76.2" x2="36.6" y2="76.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="82.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="64.5" x2="68.0" y2="80.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,62.3 65.6,67.1 70.4,67.1" fill="#dfba47"/><line x1="63.4" y1="76.2" x2="72.6" y2="76.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="82.4" r="1.40" fill="#dfba47"/></g><g><line x1="32.0" y1="110.5" x2="32.0" y2="126.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="32.0,108.3 29.6,113.1 34.4,113.1" fill="#dfba47"/><line x1="27.4" y1="122.2" x2="36.6" y2="122.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="32.0" cy="128.4" r="1.40" fill="#dfba47"/></g><g><line x1="68.0" y1="110.5" x2="68.0" y2="126.2" stroke="#dfba47" stroke-width="1.70"/><polygon points="68.0,108.3 65.6,113.1 70.4,113.1" fill="#dfba47"/><line x1="63.4" y1="122.2" x2="72.6" y2="122.2" stroke="#dfba47" stroke-width="1.40"/><circle cx="68.0" cy="128.4" r="1.40" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_7",
        name: "寶劍七 (Seven of Swords)",
        number: "7",
        keywords: "欺瞞、策略行動、單獨行事、僥倖",
        upright: "寶劍七正位描繪一人偷偷抱走劍匣中的劍，象徵運用策略、甚至有些投機取巧的手段來達成目的。請留意這種方式是否經得起檢視，別讓小聰明變成大代價。",
        reversed: "寶劍七逆位代表謊言終將被拆穿、隱瞞的計謀曝光，或是你決定坦誠面對而非繼續欺瞞。誠實雖然困難，卻是唯一長久的路。",
        desc: "一人鬼鬼祟祟地抱著五把劍離開軍營帳篷，回頭張望，留下兩把劍未取。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50.0" cy="25.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="25.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="23.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="133.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="32.0" y1="16.2" x2="32.0" y2="29.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,14.4 30.0,18.3 34.0,18.3" fill="#dfba47"/><line x1="28.2" y1="25.8" x2="35.8" y2="25.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="30.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="16.2" x2="68.0" y2="29.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,14.4 66.0,18.3 70.0,18.3" fill="#dfba47"/><line x1="64.2" y1="25.8" x2="71.8" y2="25.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="30.9" r="1.15" fill="#dfba47"/></g><g><line x1="50.0" y1="40.2" x2="50.0" y2="53.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="50.0,38.4 48.0,42.3 52.0,42.3" fill="#dfba47"/><line x1="46.2" y1="49.8" x2="53.8" y2="49.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="50.0" cy="54.9" r="1.15" fill="#dfba47"/></g><g><line x1="32.0" y1="66.2" x2="32.0" y2="79.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,64.4 30.0,68.3 34.0,68.3" fill="#dfba47"/><line x1="28.2" y1="75.8" x2="35.8" y2="75.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="80.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="66.2" x2="68.0" y2="79.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,64.4 66.0,68.3 70.0,68.3" fill="#dfba47"/><line x1="64.2" y1="75.8" x2="71.8" y2="75.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="80.9" r="1.15" fill="#dfba47"/></g><g><line x1="32.0" y1="110.2" x2="32.0" y2="123.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,108.4 30.0,112.3 34.0,112.3" fill="#dfba47"/><line x1="28.2" y1="119.8" x2="35.8" y2="119.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="124.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="110.2" x2="68.0" y2="123.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,108.4 66.0,112.3 70.0,112.3" fill="#dfba47"/><line x1="64.2" y1="119.8" x2="71.8" y2="119.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="124.9" r="1.15" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_8",
        name: "寶劍八 (Eight of Swords)",
        number: "8",
        keywords: "受困、自我設限、無力感、待援",
        upright: "寶劍八正位描繪被劍陣圍繞、卻蒙眼綁手的女子，象徵你感到進退兩難、被自己的恐懼與信念所困。其實束縛並非無法掙脫，答案就在你觸手可及之處。",
        reversed: "寶劍八逆位代表你終於看清自己並非真的無路可走，開始為自己爭取自由，走出受害者心態的枷鎖，重新奪回主導權。",
        desc: "一位女子被綁著雙手、蒙著雙眼，站立在八把插入地面的劍陣之中，看似無處可逃。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="63.0" cy="24.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="73.0" cy="36.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="20.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="132.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="32.0" y1="14.2" x2="32.0" y2="27.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,12.4 30.0,16.3 34.0,16.3" fill="#dfba47"/><line x1="28.2" y1="23.8" x2="35.8" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="28.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="14.2" x2="68.0" y2="27.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,12.4 66.0,16.3 70.0,16.3" fill="#dfba47"/><line x1="64.2" y1="23.8" x2="71.8" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="28.9" r="1.15" fill="#dfba47"/></g><g><line x1="32.0" y1="44.2" x2="32.0" y2="57.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,42.4 30.0,46.3 34.0,46.3" fill="#dfba47"/><line x1="28.2" y1="53.8" x2="35.8" y2="53.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="58.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="44.2" x2="68.0" y2="57.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,42.4 66.0,46.3 70.0,46.3" fill="#dfba47"/><line x1="64.2" y1="53.8" x2="71.8" y2="53.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="58.9" r="1.15" fill="#dfba47"/></g><g><line x1="32.0" y1="88.2" x2="32.0" y2="101.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,86.4 30.0,90.3 34.0,90.3" fill="#dfba47"/><line x1="28.2" y1="97.8" x2="35.8" y2="97.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="102.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="88.2" x2="68.0" y2="101.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,86.4 66.0,90.3 70.0,90.3" fill="#dfba47"/><line x1="64.2" y1="97.8" x2="71.8" y2="97.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="102.9" r="1.15" fill="#dfba47"/></g><g><line x1="32.0" y1="118.2" x2="32.0" y2="131.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="32.0,116.4 30.0,120.3 34.0,120.3" fill="#dfba47"/><line x1="28.2" y1="127.8" x2="35.8" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="32.0" cy="132.9" r="1.15" fill="#dfba47"/></g><g><line x1="68.0" y1="118.2" x2="68.0" y2="131.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="68.0,116.4 66.0,120.3 70.0,120.3" fill="#dfba47"/><line x1="64.2" y1="127.8" x2="71.8" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="68.0" cy="132.9" r="1.15" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_9",
        name: "寶劍九 (Nine of Swords)",
        number: "9",
        keywords: "焦慮、噩夢、憂慮纏身、內心煎熬",
        upright: "寶劍九正位描繪深夜裡因噩夢驚醒、掩面哭泣的人，象徵被焦慮與恐懼折磨得夜不成眠。多數的恐懼其實源於腦海中的想像，請試著與現實核對，別讓憂慮吞噬了你。",
        reversed: "寶劍九逆位代表你正逐漸走出焦慮的陰霾，學會釋放壓抑的情緒，或是長期壓力終於帶來身心的警訊。請正視內心真正的恐懼來源。",
        desc: "夜晚的床邊，一人坐起身掩面哭泣，牆上懸掛著九把劍，被褥上刻著爭鬥的圖案。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="76.0" cy="23.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="66.0" cy="27.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="27.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="131.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="30.0" y1="14.2" x2="30.0" y2="27.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="30.0,12.4 28.0,16.3 32.0,16.3" fill="#dfba47"/><line x1="26.2" y1="23.8" x2="33.8" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="30.0" cy="28.9" r="1.15" fill="#dfba47"/></g><g><line x1="50.0" y1="14.2" x2="50.0" y2="27.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="50.0,12.4 48.0,16.3 52.0,16.3" fill="#dfba47"/><line x1="46.2" y1="23.8" x2="53.8" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="50.0" cy="28.9" r="1.15" fill="#dfba47"/></g><g><line x1="70.0" y1="14.2" x2="70.0" y2="27.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="70.0,12.4 68.0,16.3 72.0,16.3" fill="#dfba47"/><line x1="66.2" y1="23.8" x2="73.8" y2="23.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="70.0" cy="28.9" r="1.15" fill="#dfba47"/></g><g><line x1="30.0" y1="66.2" x2="30.0" y2="79.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="30.0,64.4 28.0,68.3 32.0,68.3" fill="#dfba47"/><line x1="26.2" y1="75.8" x2="33.8" y2="75.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="30.0" cy="80.9" r="1.15" fill="#dfba47"/></g><g><line x1="50.0" y1="66.2" x2="50.0" y2="79.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="50.0,64.4 48.0,68.3 52.0,68.3" fill="#dfba47"/><line x1="46.2" y1="75.8" x2="53.8" y2="75.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="50.0" cy="80.9" r="1.15" fill="#dfba47"/></g><g><line x1="70.0" y1="66.2" x2="70.0" y2="79.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="70.0,64.4 68.0,68.3 72.0,68.3" fill="#dfba47"/><line x1="66.2" y1="75.8" x2="73.8" y2="75.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="70.0" cy="80.9" r="1.15" fill="#dfba47"/></g><g><line x1="30.0" y1="118.2" x2="30.0" y2="131.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="30.0,116.4 28.0,120.3 32.0,120.3" fill="#dfba47"/><line x1="26.2" y1="127.8" x2="33.8" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="30.0" cy="132.9" r="1.15" fill="#dfba47"/></g><g><line x1="50.0" y1="118.2" x2="50.0" y2="131.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="50.0,116.4 48.0,120.3 52.0,120.3" fill="#dfba47"/><line x1="46.2" y1="127.8" x2="53.8" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="50.0" cy="132.9" r="1.15" fill="#dfba47"/></g><g><line x1="70.0" y1="118.2" x2="70.0" y2="131.1" stroke="#dfba47" stroke-width="1.39"/><polygon points="70.0,116.4 68.0,120.3 72.0,120.3" fill="#dfba47"/><line x1="66.2" y1="127.8" x2="73.8" y2="127.8" stroke="#dfba47" stroke-width="1.15"/><circle cx="70.0" cy="132.9" r="1.15" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_10",
        name: "寶劍十 (Ten of Swords)",
        number: "10",
        keywords: "谷底、痛苦終結、背叛、絕處逢生",
        upright: "寶劍十正位描繪一人倒地、背後插滿了劍，象徵痛苦與磨難已經到達谷底。雖然畫面極其慘烈，但這也意味著最壞的情況已經過去，黎明即將到來。",
        reversed: "寶劍十逆位代表你正緩慢地從谷底復原，或是明知情勢已無可挽回卻仍苦苦掙扎抗拒。請接受結束的事實，才能真正迎向重生。",
        desc: "黑色天空下，一人俯臥在地，背上插著十把劍，遠方地平線透出一絲曙光。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.0" cy="22.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="79.0" cy="38.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="24.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="130.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><line x1="35.0" y1="11.2" x2="35.0" y2="22.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="35.0,9.6 33.3,13.0 36.7,13.0" fill="#dfba47"/><line x1="31.7" y1="19.6" x2="38.3" y2="19.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="35.0" cy="24.0" r="1.01" fill="#dfba47"/></g><g><line x1="65.0" y1="11.2" x2="65.0" y2="22.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="65.0,9.6 63.3,13.0 66.7,13.0" fill="#dfba47"/><line x1="61.7" y1="19.6" x2="68.3" y2="19.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="65.0" cy="24.0" r="1.01" fill="#dfba47"/></g><g><line x1="35.0" y1="37.2" x2="35.0" y2="48.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="35.0,35.6 33.3,39.0 36.7,39.0" fill="#dfba47"/><line x1="31.7" y1="45.6" x2="38.3" y2="45.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="35.0" cy="50.0" r="1.01" fill="#dfba47"/></g><g><line x1="65.0" y1="37.2" x2="65.0" y2="48.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="65.0,35.6 63.3,39.0 66.7,39.0" fill="#dfba47"/><line x1="61.7" y1="45.6" x2="68.3" y2="45.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="65.0" cy="50.0" r="1.01" fill="#dfba47"/></g><g><line x1="50.0" y1="63.2" x2="50.0" y2="74.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="50.0,61.6 48.3,65.0 51.7,65.0" fill="#dfba47"/><line x1="46.7" y1="71.6" x2="53.3" y2="71.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="50.0" cy="76.0" r="1.01" fill="#dfba47"/></g><g><line x1="35.0" y1="89.2" x2="35.0" y2="100.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="35.0,87.6 33.3,91.0 36.7,91.0" fill="#dfba47"/><line x1="31.7" y1="97.6" x2="38.3" y2="97.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="35.0" cy="102.0" r="1.01" fill="#dfba47"/></g><g><line x1="65.0" y1="89.2" x2="65.0" y2="100.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="65.0,87.6 63.3,91.0 66.7,91.0" fill="#dfba47"/><line x1="61.7" y1="97.6" x2="68.3" y2="97.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="65.0" cy="102.0" r="1.01" fill="#dfba47"/></g><g><line x1="35.0" y1="115.2" x2="35.0" y2="126.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="35.0,113.6 33.3,117.0 36.7,117.0" fill="#dfba47"/><line x1="31.7" y1="123.6" x2="38.3" y2="123.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="35.0" cy="128.0" r="1.01" fill="#dfba47"/></g><g><line x1="65.0" y1="115.2" x2="65.0" y2="126.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="65.0,113.6 63.3,117.0 66.7,117.0" fill="#dfba47"/><line x1="61.7" y1="123.6" x2="68.3" y2="123.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="65.0" cy="128.0" r="1.01" fill="#dfba47"/></g><g><line x1="50.0" y1="128.2" x2="50.0" y2="139.4" stroke="#dfba47" stroke-width="1.22"/><polygon points="50.0,126.6 48.3,130.0 51.7,130.0" fill="#dfba47"/><line x1="46.7" y1="136.6" x2="53.3" y2="136.6" stroke="#dfba47" stroke-width="1.01"/><circle cx="50.0" cy="141.0" r="1.01" fill="#dfba47"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_page",
        name: "寶劍侍者 (Page of Swords)",
        number: "侍",
        keywords: "學習、好奇心、新消息、初學者能量",
        upright: "寶劍侍者正位象徵著青春洋溢的好奇心與求知慾，如同一位剛踏上思想、衝突、溝通與真相旅程的學生。你可能即將收到與思想、衝突、溝通與真相相關的新消息，或是萌生出躍躍欲試的新想法，請保持開放與熱忱的心態去探索。",
        reversed: "寶劍侍者逆位代表三分鐘熱度、消息延誤，或是因為缺乏經驗而顯得不夠成熟。你可能想法不切實際，或是遲遲無法將學習化為行動。請放慢腳步，紮實地累積基礎。",
        desc: "一位年輕的侍者站在開闊的原野上，好奇地端詳著手中的寶劍，眼神充滿探索的渴望。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32.0" cy="21.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="72.0" cy="29.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="21.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="129.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M43 37 Q50 31 57 37" stroke="#dfba47" stroke-width="1" fill="none" opacity="0.8"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="39.9" x2="70.0" y2="53.2" stroke="#dfba47" stroke-width="1.44"/><polygon points="70.0,38.1 68.0,42.1 72.0,42.1" fill="#dfba47"/><line x1="66.1" y1="49.9" x2="73.9" y2="49.9" stroke="#dfba47" stroke-width="1.19"/><circle cx="70.0" cy="55.1" r="1.19" fill="#dfba47"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_knight",
        name: "寶劍騎士 (Knight of Swords)",
        number: "騎",
        keywords: "行動、追尋目標、熱切衝勁、冒險",
        upright: "寶劍騎士正位象徵著全力以赴、勇往直前的行動力，騎著駿馬奔馳於思想、衝突、溝通與真相的道路上。此刻的你充滿幹勁，願意為了追求目標而全力衝刺，請善用這股熱情，但也別忘了掌握方向。",
        reversed: "寶劍騎士逆位代表衝動魯莽、有勇無謀，或是三心二意導致行動半途而廢。你可能因為操之過急而忽略了潛在的風險。請在熱情與理性之間找到平衡。",
        desc: "騎士策馬疾馳，手持寶劍衝向遠方，斗篷在風中翻飛，姿態英勇果決。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="45.0" cy="20.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="20.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="18.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="128.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="92" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M44 36 L40 24 Q50 30 46 40" stroke="#dfba47" stroke-width="1.1" fill="#dfba47" fill-opacity="0.12"/><path d="M56 38 Q66 34 62 22" stroke="#dfba47" stroke-width="1" fill="none"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="39.9" x2="70.0" y2="53.2" stroke="#dfba47" stroke-width="1.44"/><polygon points="70.0,38.1 68.0,42.1 72.0,42.1" fill="#dfba47"/><line x1="66.1" y1="49.9" x2="73.9" y2="49.9" stroke="#dfba47" stroke-width="1.19"/><circle cx="70.0" cy="55.1" r="1.19" fill="#dfba47"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M22 128 L34 104 L50 100 L66 106 L78 128" stroke="#dfba47" stroke-width="1.5" fill="none"/><path d="M50 100 L50 92" stroke="#dfba47" stroke-width="1.4"/><polygon points="30,104 26,96 34,98" fill="#dfba47" opacity="0.7"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_queen",
        name: "寶劍皇后 (Queen of Swords)",
        number: "皇",
        keywords: "成熟、內化力量、直覺智慧、包容",
        upright: "寶劍皇后正位象徵著你已經將思想、衝突、溝通與真相的能量內化為成熟穩定的智慧，如同一位端坐王座、從容自信的女性。你善於運用直覺與同理心來處理相關的課題，散發著沉穩而溫暖的力量。",
        reversed: "寶劍皇后逆位代表情緒化、過度敏感，或是原本擅長的能力此刻顯得力不從心。你可能因為內在的不安而顯得患得患失。請重新找回屬於你的沉穩與自信。",
        desc: "一位優雅的女王端坐王座之上，手中輕握著寶劍，神情從容睿智，散發溫暖的氣場。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="58.0" cy="19.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="78.0" cy="31.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="25.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="137.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M41 36 Q50 27 59 36" stroke="#dfba47" stroke-width="1.3" fill="none"/><circle cx="50" cy="28" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="39.9" x2="70.0" y2="53.2" stroke="#dfba47" stroke-width="1.44"/><polygon points="70.0,38.1 68.0,42.1 72.0,42.1" fill="#dfba47"/><line x1="66.1" y1="49.9" x2="73.9" y2="49.9" stroke="#dfba47" stroke-width="1.19"/><circle cx="70.0" cy="55.1" r="1.19" fill="#dfba47"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "swords_king",
        name: "寶劍國王 (King of Swords)",
        number: "國",
        keywords: "權威、掌控全局、成熟領導、實踐智慧",
        upright: "寶劍國王正位象徵著你已經完全掌握思想、衝突、溝通與真相的能量，能夠像一位睿智的君主般統馭全局。你的決策成熟穩健，具備領導者的高度與遠見，足以承擔起更大的責任。",
        reversed: "寶劍國王逆位代表濫用權力、專制獨裁，或是對相關領域的掌控力正在減弱。你可能顯得固執己見或缺乏彈性。請重新檢視自己運用權威的方式是否恰當。",
        desc: "君王威嚴地端坐寶座之上，手持象徵寶劍力量的權杖，目光堅定地俯視著自己的疆土。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="71.0" cy="18.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="71.0" cy="22.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="22.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="136.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M15 20 Q30 12 45 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M55 20 Q70 12 85 20" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M40 35 L44 26 L50 33 L56 26 L60 35 Z" stroke="#dfba47" stroke-width="1.3" fill="#dfba47" fill-opacity="0.15"/><circle cx="50" cy="25" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><line x1="70.0" y1="39.9" x2="70.0" y2="53.2" stroke="#dfba47" stroke-width="1.44"/><polygon points="70.0,38.1 68.0,42.1 72.0,42.1" fill="#dfba47"/><line x1="66.1" y1="49.9" x2="73.9" y2="49.9" stroke="#dfba47" stroke-width="1.19"/><circle cx="70.0" cy="55.1" r="1.19" fill="#dfba47"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_1",
        name: "錢幣一 (Ace of Pentacles)",
        number: "Ace",
        keywords: "新機會、豐盛顯化、實質成果、務實起點",
        upright: "錢幣一正位如同一枚從雲端捧出的閃亮金幣，象徵著實質層面的新機會正在降臨，無論是事業、財務或健康都將迎來豐盛的起點。腳踏實地地把握，這份潛力終將開花結果。",
        reversed: "錢幣一逆位代表錯失良機、缺乏務實規劃，或是財務上的匱乏感。你可能空有想法卻遲遲未能落實。請重新檢視計畫的可行性，穩紮穩打地重新出發。",
        desc: "一隻手從雲中托出一枚刻有五角星的金幣，下方是綻放著白百合的花園小徑。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="84.0" cy="17.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="33.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="19.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="135.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="50.0" cy="72.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,65.0 54.1,77.7 43.3,69.8 56.7,69.8 45.9,77.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_2",
        name: "錢幣二 (Two of Pentacles)",
        number: "2",
        keywords: "平衡、調適、多工並進、財務周轉",
        upright: "錢幣二正位描繪一人靈巧地拋接兩枚錢幣，象徵你正努力在多項事務或財務狀況間取得平衡。保持彈性與從容的心態，你有能力巧妙應對生活中的各種變動。",
        reversed: "錢幣二逆位代表因分身乏術而顧此失彼，財務調度出現困難，或是生活失去平衡。請重新排列輕重緩急，別讓自己蠟燭兩頭燒。",
        desc: "一位舞者般的年輕人靈活地將兩枚以無限符號相連的錢幣拋接於指尖。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.0" cy="16.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="77.0" cy="24.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="26.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="134.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="50.0" cy="35.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,28.0 54.1,40.7 43.3,32.8 56.7,32.8 45.9,40.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="112.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,105.0 54.1,117.7 43.3,109.8 56.7,109.8 45.9,117.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_3",
        name: "錢幣三 (Three of Pentacles)",
        number: "3",
        keywords: "團隊合作、精進技藝、專業認可、共同建造",
        upright: "錢幣三正位描繪工匠與委託人專注討論建築藍圖的畫面，象徵透過團隊合作與專業技能的精進，你的努力正逐漸獲得肯定與具體成果。",
        reversed: "錢幣三逆位代表團隊合作出現摩擦、技藝尚未成熟，或是缺乏共識導致進度延宕。請虛心求教，並重視與夥伴之間的溝通協調。",
        desc: "石匠在教堂裡專注雕琢石柱，一旁的建築師與神職人員審視著他的作品。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40.0" cy="15.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="70.0" cy="35.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="23.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="133.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="50.0" cy="28.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,21.0 54.1,33.7 43.3,25.8 56.7,25.8 45.9,33.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="72.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,65.0 54.1,77.7 43.3,69.8 56.7,69.8 45.9,77.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="118.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,111.0 54.1,123.7 43.3,115.8 56.7,115.8 45.9,123.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_4",
        name: "錢幣四 (Four of Pentacles)",
        number: "4",
        keywords: "掌控、安全感、保守、物質執著",
        upright: "錢幣四正位描繪一人緊抱著錢幣端坐，象徵對物質安全感的強烈需求，你正努力鞏固自己已擁有的一切。適度的謹慎值得肯定，但別讓緊握變成畫地自限。",
        reversed: "錢幣四逆位代表過度的物質執著、貪婪，或是因害怕失去而變得吝嗇小氣。也可能象徵你終於願意鬆手，讓資源重新流動起來。",
        desc: "一人穩坐城中，頭頂、懷中與腳下各壓著一枚錢幣，姿態拘謹而防備。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="53.0" cy="29.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="26.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="20.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="132.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="32.0" cy="38.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,31.0 36.1,43.7 25.3,35.8 38.7,35.8 27.9,43.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="38.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,31.0 72.1,43.7 61.3,35.8 74.7,35.8 63.9,43.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="112.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,105.0 36.1,117.7 25.3,109.8 38.7,109.8 27.9,117.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="112.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,105.0 72.1,117.7 61.3,109.8 74.7,109.8 63.9,117.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_5",
        name: "錢幣五 (Five of Pentacles)",
        number: "5",
        keywords: "困頓、財務壓力、孤立無援、逆境",
        upright: "錢幣五正位描繪衣衫襤褸的兩人在風雪中經過教堂窗前，象徵正經歷財務困頓或身心的孤立無援。請記得，即使外在艱難，溫暖的支援其實近在咫尺。",
        reversed: "錢幣五逆位代表你正走出困境、迎來轉機，或是終於願意向外尋求協助。物質的匱乏終將過去，內心的貧乏感也逐漸被療癒。",
        desc: "風雪之夜，兩位衣衫破舊的旅人蹣跚走過教堂彩繪窗，窗內透出溫暖燈光。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="66.0" cy="28.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="76.0" cy="37.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="27.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="131.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="32.0" cy="35.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,28.0 36.1,40.7 25.3,32.8 38.7,32.8 27.9,40.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="35.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,28.0 72.1,40.7 61.3,32.8 74.7,32.8 63.9,40.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="74.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="50.0,67.0 54.1,79.7 43.3,71.8 56.7,71.8 45.9,79.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="115.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,108.0 36.1,120.7 25.3,112.8 38.7,112.8 27.9,120.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="115.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,108.0 72.1,120.7 61.3,112.8 74.7,112.8 63.9,120.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_6",
        name: "錢幣六 (Six of Pentacles)",
        number: "6",
        keywords: "施與受、慷慨、公平分享、援助",
        upright: "錢幣六正位描繪富人將錢幣分給求助者的畫面，象徵慷慨給予與公平分享的能量正在流動。無論你是給予的一方或是接受幫助的一方，這都是良性循環的展現。",
        reversed: "錢幣六逆位代表施捨背後暗藏條件、權力不對等的關係，或是負債累累的窘境。請留意援助是否夾帶著操控，也別忘了適時為自己發聲。",
        desc: "一位富商手持天平，將錢幣分發給跪地的貧困者，象徵施與受的平衡。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="79.0" cy="27.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="69.0" cy="28.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="24.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="130.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="32.0" cy="28.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,21.0 36.1,33.7 25.3,25.8 38.7,25.8 27.9,33.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="28.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,21.0 72.1,33.7 61.3,25.8 74.7,25.8 63.9,33.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="74.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,67.0 36.1,79.7 25.3,71.8 38.7,71.8 27.9,79.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="74.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,67.0 72.1,79.7 61.3,71.8 74.7,71.8 63.9,79.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="120.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="32.0,113.0 36.1,125.7 25.3,117.8 38.7,117.8 27.9,125.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="120.0" r="8.5" stroke="#dfba47" stroke-width="1.00"/><polygon points="68.0,113.0 72.1,125.7 61.3,117.8 74.7,117.8 63.9,125.7" stroke="#dfba47" stroke-width="0.80" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_7",
        name: "錢幣七 (Seven of Pentacles)",
        number: "7",
        keywords: "耐心、長期投資、評估收成、暫時停頓",
        upright: "錢幣七正位描繪農夫倚著鋤頭，審視著藤蔓上尚未成熟的果實，象徵長期投入後耐心等待收成的階段。此時適合停下來評估成果，而非急於求成。",
        reversed: "錢幣七逆位代表缺乏耐心、投資回報不如預期，或是努力方向出現偏差。請重新檢視你的長期計畫，必要時調整策略而非半途而廢。",
        desc: "農夫靠著鋤頭，若有所思地凝視著眼前結實纍纍卻尚未完全成熟的錢幣藤蔓。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22.0" cy="26.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="39.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="21.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="83.0" cy="129.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="32.0" cy="24.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,18.3 35.4,28.6 26.5,22.2 37.5,22.2 28.6,28.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="24.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,18.3 71.4,28.6 62.5,22.2 73.5,22.2 64.6,28.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="48.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="50.0,42.3 53.4,52.6 44.5,46.2 55.5,46.2 46.6,52.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="74.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,68.3 35.4,78.6 26.5,72.2 37.5,72.2 28.6,78.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="74.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,68.3 71.4,78.6 62.5,72.2 73.5,72.2 64.6,78.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="118.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,112.3 35.4,122.6 26.5,116.2 37.5,116.2 28.6,122.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="118.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,112.3 71.4,122.6 62.5,116.2 73.5,116.2 64.6,122.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_8",
        name: "錢幣八 (Eight of Pentacles)",
        number: "8",
        keywords: "精益求精、專注技藝、勤奮踏實、匠人精神",
        upright: "錢幣八正位描繪工匠專心致志地雕刻一枚又一枚錢幣，象徵透過反覆練習與專注投入，你正穩步精進自己的專業技能。腳踏實地的努力終將累積成卓越的成果。",
        reversed: "錢幣八逆位代表過度追求完美而停滯不前，或是對工作失去熱情、敷衍了事。請重新找回對這份技藝或工作的初心與熱忱。",
        desc: "工匠坐在工作台前專注鑿刻錢幣，身旁已完成的六枚錢幣整齊排列。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35.0" cy="25.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="75.0" cy="30.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="18.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="86.0" cy="128.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="32.0" cy="22.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,16.3 35.4,26.6 26.5,20.2 37.5,20.2 28.6,26.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="22.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,16.3 71.4,26.6 62.5,20.2 73.5,20.2 64.6,26.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="52.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,46.3 35.4,56.6 26.5,50.2 37.5,50.2 28.6,56.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="52.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,46.3 71.4,56.6 62.5,50.2 73.5,50.2 64.6,56.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="96.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,90.3 35.4,100.6 26.5,94.2 37.5,94.2 28.6,100.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="96.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,90.3 71.4,100.6 62.5,94.2 73.5,94.2 64.6,100.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="32.0" cy="126.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="32.0,120.3 35.4,130.6 26.5,124.2 37.5,124.2 28.6,130.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="68.0" cy="126.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="68.0,120.3 71.4,130.6 62.5,124.2 73.5,124.2 64.6,130.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_9",
        name: "錢幣九 (Nine of Pentacles)",
        number: "9",
        keywords: "富足、自給自足、成果享受、優雅獨立",
        upright: "錢幣九正位描繪一位女子在自己的葡萄園中悠然自得，象徵透過自身努力獲得的豐盛與獨立。盡情享受這份靠自己雙手贏得的富足與從容吧。",
        reversed: "錢幣九逆位代表表面風光卻暗藏財務隱憂，或是過度依賴他人而失去獨立性。請重新審視你的成功是否建立在穩固的根基之上。",
        desc: "華服女子站在結實纍纍的葡萄園中，手上停著一隻戴頭罩的獵鷹，姿態優雅從容。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="48.0" cy="24.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="68.0" cy="21.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="25.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="137.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="30.0" cy="22.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="30.0,16.3 33.4,26.6 24.5,20.2 35.5,20.2 26.6,26.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="22.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="50.0,16.3 53.4,26.6 44.5,20.2 55.5,20.2 46.6,26.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="70.0" cy="22.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="70.0,16.3 73.4,26.6 64.5,20.2 75.5,20.2 66.6,26.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="30.0" cy="74.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="30.0,68.3 33.4,78.6 24.5,72.2 35.5,72.2 26.6,78.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="74.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="50.0,68.3 53.4,78.6 44.5,72.2 55.5,72.2 46.6,78.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="70.0" cy="74.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="70.0,68.3 73.4,78.6 64.5,72.2 75.5,72.2 66.6,78.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="30.0" cy="126.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="30.0,120.3 33.4,130.6 24.5,124.2 35.5,124.2 26.6,130.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="126.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="50.0,120.3 53.4,130.6 44.5,124.2 55.5,124.2 46.6,130.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="70.0" cy="126.0" r="7.2" stroke="#dfba47" stroke-width="0.82"/><polygon points="70.0,120.3 73.4,130.6 64.5,124.2 75.5,124.2 66.6,130.6" stroke="#dfba47" stroke-width="0.66" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_10",
        name: "錢幣十 (Ten of Pentacles)",
        number: "10",
        keywords: "傳承、家族財富、長遠成就、圓滿富足",
        upright: "錢幣十正位描繪祖孫三代與家犬齊聚的溫馨畫面，象徵物質層面最圓滿的境界——穩固的家族基業與世代相傳的財富。這是錢幣家族旅程中豐收圓滿的終點。",
        reversed: "錢幣十逆位代表家族財務糾紛、遺產爭議，或是長期建立的基業出現動搖。請正視家庭與財務規劃中被忽略的隱憂，及早溝通協調。",
        desc: "拱門下，白髮老者與家人、幼犬相伴，十枚錢幣以生命之樹的圖形排列其間。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="61.0" cy="23.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="81.0" cy="32.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="22.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="84.0" cy="136.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><g><circle cx="35.0" cy="18.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="35.0,13.0 38.0,22.1 30.2,16.4 39.8,16.4 32.0,22.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="65.0" cy="18.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="65.0,13.0 68.0,22.1 60.2,16.4 69.8,16.4 62.0,22.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="35.0" cy="44.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="35.0,39.0 38.0,48.1 30.2,42.4 39.8,42.4 32.0,48.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="65.0" cy="44.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="65.0,39.0 68.0,48.1 60.2,42.4 69.8,42.4 62.0,48.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="70.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="50.0,65.0 53.0,74.1 45.2,68.4 54.8,68.4 47.0,74.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="35.0" cy="96.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="35.0,91.0 38.0,100.1 30.2,94.4 39.8,94.4 32.0,100.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="65.0" cy="96.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="65.0,91.0 68.0,100.1 60.2,94.4 69.8,94.4 62.0,100.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="35.0" cy="122.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="35.0,117.0 38.0,126.1 30.2,120.4 39.8,120.4 32.0,126.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="65.0" cy="122.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="65.0,117.0 68.0,126.1 60.2,120.4 69.8,120.4 62.0,126.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><g><circle cx="50.0" cy="135.0" r="6.5" stroke="#dfba47" stroke-width="0.72"/><polygon points="50.0,130.0 53.0,139.1 45.2,133.4 54.8,133.4 47.0,139.1" stroke="#dfba47" stroke-width="0.58" fill="#dfba47" fill-opacity="0.18"/></g><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_page",
        name: "錢幣侍者 (Page of Pentacles)",
        number: "侍",
        keywords: "學習、好奇心、新消息、初學者能量",
        upright: "錢幣侍者正位象徵著青春洋溢的好奇心與求知慾，如同一位剛踏上物質、金錢、事業與健康旅程的學生。你可能即將收到與物質、金錢、事業與健康相關的新消息，或是萌生出躍躍欲試的新想法，請保持開放與熱忱的心態去探索。",
        reversed: "錢幣侍者逆位代表三分鐘熱度、消息延誤，或是因為缺乏經驗而顯得不夠成熟。你可能想法不切實際，或是遲遲無法將學習化為行動。請放慢腳步，紮實地累積基礎。",
        desc: "一位年輕的侍者站在開闊的原野上，好奇地端詳著手中的錢幣，眼神充滿探索的渴望。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="74.0" cy="22.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="74.0" cy="23.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="19.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="87.0" cy="135.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M43 37 Q50 31 57 37" stroke="#dfba47" stroke-width="1" fill="none" opacity="0.8"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><circle cx="70.0" cy="48.0" r="7.5" stroke="#dfba47" stroke-width="0.85"/><polygon points="70.0,42.0 73.5,52.8 64.3,46.2 75.7,46.2 66.5,52.8" stroke="#dfba47" stroke-width="0.68" fill="#dfba47" fill-opacity="0.18"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_knight",
        name: "錢幣騎士 (Knight of Pentacles)",
        number: "騎",
        keywords: "行動、追尋目標、熱切衝勁、冒險",
        upright: "錢幣騎士正位象徵著全力以赴、勇往直前的行動力，騎著駿馬奔馳於物質、金錢、事業與健康的道路上。此刻的你充滿幹勁，願意為了追求目標而全力衝刺，請善用這股熱情，但也別忘了掌握方向。",
        reversed: "錢幣騎士逆位代表衝動魯莽、有勇無謀，或是三心二意導致行動半途而廢。你可能因為操之過急而忽略了潛在的風險。請在熱情與理性之間找到平衡。",
        desc: "騎士策馬疾馳，手持錢幣衝向遠方，斗篷在風中翻飛，姿態英勇果決。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17.0" cy="21.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="67.0" cy="34.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="26.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="82.0" cy="134.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="92" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M44 36 L40 24 Q50 30 46 40" stroke="#dfba47" stroke-width="1.1" fill="#dfba47" fill-opacity="0.12"/><path d="M56 38 Q66 34 62 22" stroke="#dfba47" stroke-width="1" fill="none"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><circle cx="70.0" cy="48.0" r="7.5" stroke="#dfba47" stroke-width="0.85"/><polygon points="70.0,42.0 73.5,52.8 64.3,46.2 75.7,46.2 66.5,52.8" stroke="#dfba47" stroke-width="0.68" fill="#dfba47" fill-opacity="0.18"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M22 128 L34 104 L50 100 L66 106 L78 128" stroke="#dfba47" stroke-width="1.5" fill="none"/><path d="M50 100 L50 92" stroke="#dfba47" stroke-width="1.4"/><polygon points="30,104 26,96 34,98" fill="#dfba47" opacity="0.7"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_queen",
        name: "錢幣皇后 (Queen of Pentacles)",
        number: "皇",
        keywords: "成熟、內化力量、直覺智慧、包容",
        upright: "錢幣皇后正位象徵著你已經將物質、金錢、事業與健康的能量內化為成熟穩定的智慧，如同一位端坐王座、從容自信的女性。你善於運用直覺與同理心來處理相關的課題，散發著沉穩而溫暖的力量。",
        reversed: "錢幣皇后逆位代表情緒化、過度敏感，或是原本擅長的能力此刻顯得力不從心。你可能因為內在的不安而顯得患得患失。請重新找回屬於你的沉穩與自信。",
        desc: "一位優雅的女王端坐王座之上，手中輕握著錢幣，神情從容睿智，散發溫暖的氣場。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30.0" cy="20.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="25.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="23.0" cy="135.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="85.0" cy="133.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M41 36 Q50 27 59 36" stroke="#dfba47" stroke-width="1.3" fill="none"/><circle cx="50" cy="28" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><circle cx="70.0" cy="48.0" r="7.5" stroke="#dfba47" stroke-width="0.85"/><polygon points="70.0,42.0 73.5,52.8 64.3,46.2 75.7,46.2 66.5,52.8" stroke="#dfba47" stroke-width="0.68" fill="#dfba47" fill-opacity="0.18"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    },
    {
        id: "pentacles_king",
        name: "錢幣國王 (King of Pentacles)",
        number: "國",
        keywords: "權威、掌控全局、成熟領導、實踐智慧",
        upright: "錢幣國王正位象徵著你已經完全掌握物質、金錢、事業與健康的能量，能夠像一位睿智的君主般統馭全局。你的決策成熟穩健，具備領導者的高度與遠見，足以承擔起更大的責任。",
        reversed: "錢幣國王逆位代表濫用權力、專制獨裁，或是對相關領域的掌控力正在減弱。你可能顯得固執己見或缺乏彈性。請重新檢視自己運用權威的方式是否恰當。",
        desc: "君王威嚴地端坐寶座之上，手持象徵錢幣力量的權杖，目光堅定地俯視著自己的疆土。",
        svg: `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="43.0" cy="19.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="73.0" cy="36.0" r="0.9" fill="#dfba47" opacity="0.55"/><circle cx="20.0" cy="130.0" r="1.2" fill="#dfba47" opacity="0.55"/><circle cx="80.0" cy="132.0" r="0.6" fill="#dfba47" opacity="0.55"/><circle cx="50" cy="75" r="40" stroke="#dfba47" stroke-width="0.7" stroke-dasharray="3 3" opacity="0.35"/><circle cx="50" cy="75" r="33" stroke="#dfba47" stroke-width="0.4" opacity="0.2"/><path d="M18 130 C18 120,26 120,26 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><path d="M74 130 C74 120,82 120,82 130" stroke="#dfba47" stroke-width="0.7" opacity="0.3" fill="none"/><line x1="50" y1="50" x2="50" y2="100" stroke="#dfba47" stroke-width="1.6"/><circle cx="50" cy="44" r="6.5" stroke="#dfba47" stroke-width="1.4"/><path d="M40 35 L44 26 L50 33 L56 26 L60 35 Z" stroke="#dfba47" stroke-width="1.3" fill="#dfba47" fill-opacity="0.15"/><circle cx="50" cy="25" r="1.6" fill="#dfba47"/><line x1="50" y1="58" x2="66" y2="52" stroke="#dfba47" stroke-width="1.3"/><g><circle cx="70.0" cy="48.0" r="7.5" stroke="#dfba47" stroke-width="0.85"/><polygon points="70.0,42.0 73.5,52.8 64.3,46.2 75.7,46.2 66.5,52.8" stroke="#dfba47" stroke-width="0.68" fill="#dfba47" fill-opacity="0.18"/></g><line x1="50" y1="58" x2="35" y2="68" stroke="#dfba47" stroke-width="1.3"/><path d="M40 100 L36 120 L64 120 L60 100 Z" stroke="#dfba47" stroke-width="1.2" fill="#dfba47" fill-opacity="0.06"/><rect x="5" y="5" width="90" height="140" rx="4" stroke="#dfba47" stroke-width="0.5" opacity="0.4"/></svg>`
    }
];

const TAROT_DECK = [...TAROT_CARDS, ...MINOR_ARCANA];

const SPREADS = {
    single: {
        name: "每日占卜 (Single Card)",
        slots: ["今日指引"]
    },
    three: {
        name: "三牌占卜 (Past, Present, Future)",
        slots: ["過去 (Past)", "現在 (Present)", "未來 (Future)"]
    },
    relationship: {
        name: "關係牌陣 (Relationship Spread)",
        slots: ["你的狀態 (You)", "對方的狀態 (The Other)", "你們的連結 (The Connection)"]
    },
    love: {
        name: "愛情牌陣 (Love Spread)",
        slots: [
            "你的感受 (Your Feelings)",
            "對方的感受 (Their Feelings)",
            "關係現況 (Current Dynamic)",
            "挑戰與課題 (Challenges)",
            "指引建議 (Guidance)",
            "未來走向 (Potential Outcome)"
        ]
    },
    career: {
        name: "事業牌陣 (Career Spread)",
        slots: [
            "目前處境 (Current Situation)",
            "面臨阻礙 (Obstacles)",
            "優勢資源 (Strengths & Resources)",
            "行動建議 (Recommended Action)",
            "可能結果 (Likely Outcome)"
        ]
    },
    celtic: {
        name: "凱爾特十字牌陣 (Celtic Cross)",
        layoutClass: "layout-celtic",
        slots: [
            "現況 (Present)",
            "橫向挑戰 (Challenge)",
            "潛意識基礎 (Subconscious)",
            "過去 (Recent Past)",
            "意識目標 (Conscious Goal)",
            "近期未來 (Near Future)",
            "自身態度 (Your Attitude)",
            "外在環境 (External Influences)",
            "希望與恐懼 (Hopes & Fears)",
            "最終結果 (Final Outcome)"
        ]
    }
};

let currentSpreadType = 'single';
let drawnCards = [];
let shuffledDeck = [];

// Initialize Web Audio API for atmospheric sound effects
let audioCtx = null;
function playDrawSound() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(261.63, audioCtx.currentTime); // Middle C
        osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.55); // G5
        
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + 0.55);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.55);
    } catch (e) {
        console.log("Audio not supported or blocked by browser policies.");
    }
}

// Elements
const spreadSelector = document.getElementById('spreadSelector');
const spreadBoard = document.getElementById('spreadBoard');
const deckStatus = document.getElementById('deckStatus');
const readingResult = document.getElementById('readingResult');
const explanationList = document.getElementById('explanationList');
const actionContainer = document.getElementById('actionContainer');
const resetBtn = document.getElementById('resetBtn');

// Setup Spread Buttons
function initSpreads() {
    spreadSelector.innerHTML = '';
    Object.keys(SPREADS).forEach(key => {
        const btn = document.createElement('button');
        btn.classList.add('spread-btn');
        if (key === currentSpreadType) btn.classList.add('active');
        btn.textContent = SPREADS[key].name;
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-pressed', key === currentSpreadType ? 'true' : 'false');
        btn.addEventListener('click', (e) => selectSpread(key, e.currentTarget));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectSpread(key, e.currentTarget);
            }
        });
        spreadSelector.appendChild(btn);
    });
}

function selectSpread(type, targetBtn) {
    if (drawnCards.length > 0 && !confirm("切換牌陣將會重置當前的占卜，確定要切換嗎？")) {
        return;
    }
    currentSpreadType = type;
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.setAttribute('aria-pressed', 'true');
    }
    resetReading();
}

function resetReading() {
    drawnCards = [];
    readingResult.classList.remove('visible');
    actionContainer.style.display = 'none';
    
    // Re-shuffle a clean deck
    shuffledDeck = [...TAROT_DECK];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    // Build the visual slots on the board
    const spreadDef = SPREADS[currentSpreadType];
    const slots = spreadDef.slots;
    spreadBoard.innerHTML = '';
    spreadBoard.className = 'spread-board' + (spreadDef.layoutClass ? ` ${spreadDef.layoutClass}` : '') + ` slots-${slots.length}`;
    slots.forEach((slotName, index) => {
        const slotContainer = document.createElement('div');
        slotContainer.classList.add('slot-container');
        slotContainer.innerHTML = `
            <div class="slot-title">${slotName}</div>
            <div class="tarot-card-container" id="slot-${index}">
                <div class="tarot-card">
                    <div class="card-face back">
                        <div class="inner-pattern">${CARD_BACK_SVG}</div>
                    </div>
                </div>
            </div>
        `;
        spreadBoard.appendChild(slotContainer);
    });
    
    deckStatus.textContent = `請點擊牌堆抽取第 1 張牌 (${SPREADS[currentSpreadType].name})`;
    const deckEl = document.querySelector('.mystic-deck');
    deckEl.style.pointerEvents = 'auto';
    deckEl.style.opacity = '1';
    deckEl.setAttribute('tabindex', '0');
    deckEl.setAttribute('aria-disabled', 'false');
    
    // Dynamically update static deck cards on reset to use the new beautiful card backs
    const staticDecks = document.querySelectorAll('.deck-card');
    staticDecks.forEach(deck => {
        deck.innerHTML = `<div class="card-back-pattern">${CARD_BACK_SVG}</div>`;
    });
}

function drawCard() {
    const totalSlots = SPREADS[currentSpreadType].slots.length;
    if (drawnCards.length >= totalSlots) return;

    playDrawSound();

    const currentSlotIndex = drawnCards.length;
    const cardData = shuffledDeck.pop();
    const isReversed = Math.random() < 0.3; // 30% chance of being reversed
    
    drawnCards.push({
        ...cardData,
        isReversed
    });

    const slotCardEl = document.querySelector(`#slot-${currentSlotIndex} .tarot-card`);
    
    // Set card face inside the slot with corner borders
    slotCardEl.innerHTML += `
        <div class="card-face front">
            <!-- Ornate Corners -->
            <div class="corner-decor corner-tl"></div>
            <div class="corner-decor corner-tr"></div>
            <div class="corner-decor corner-bl"></div>
            <div class="corner-decor corner-br"></div>
            
            <div class="card-header">${cardData.number}</div>
            <div class="card-illustration">
                ${cardData.svg}
            </div>
            <div class="card-footer">${cardData.name}</div>
        </div>
    `;

    // Apply animation classes
    setTimeout(() => {
        if (isReversed) {
            slotCardEl.classList.add('reversed');
        }
        slotCardEl.classList.add('flipped');
    }, 100);

    // Update instruction
    if (drawnCards.length < totalSlots) {
        deckStatus.textContent = `請點擊牌堆抽取第 ${drawnCards.length + 1} 張牌`;
    } else {
        deckStatus.textContent = "抽牌完成，正在為您解讀命運之書...";
        const deckEl = document.querySelector('.mystic-deck');
        deckEl.style.pointerEvents = 'none';
        deckEl.style.opacity = '0.5';
        deckEl.setAttribute('tabindex', '-1');
        deckEl.setAttribute('aria-disabled', 'true');
        setTimeout(revealInterpretations, 1200);
    }
}

const SUIT_INFO = {
    wands: { label: '權杖 · 火', className: 'suit-wands', color: '#e2833e' },
    cups: { label: '聖杯 · 水', className: 'suit-cups', color: '#38bdf8' },
    swords: { label: '寶劍 · 風', className: 'suit-swords', color: '#cbd5e1' },
    pentacles: { label: '錢幣 · 土', className: 'suit-pentacles', color: '#34d399' }
};
const MAJOR_SUIT_INFO = { label: '大阿爾克那', className: 'suit-major', color: '#dfba47' };

function getSuitInfo(cardId) {
    const prefix = cardId.split('_')[0];
    return SUIT_INFO[prefix] || MAJOR_SUIT_INFO;
}

function revealInterpretations() {
    explanationList.innerHTML = '';
    const slots = SPREADS[currentSpreadType].slots;

    drawnCards.forEach((card, index) => {
        const item = document.createElement('div');
        item.classList.add('explanation-item');

        const directionText = card.isReversed ? '逆位 (Reversed)' : '正位 (Upright)';
        const directionClass = card.isReversed ? 'tag-reversed' : 'tag-upright';
        const interpretation = card.isReversed ? card.reversed : card.upright;
        const suitInfo = getSuitInfo(card.id);
        item.style.setProperty('--accent', suitInfo.color);

        item.innerHTML = `
            <div class="explanation-header">
                <span class="explanation-suit ${suitInfo.className}">${suitInfo.label}</span>
                <span class="explanation-card-name">${card.name}</span>
                <span class="explanation-tag ${directionClass}">${directionText}</span>
                <span class="explanation-slot">【${slots[index]}】</span>
            </div>
            <div class="explanation-keywords">關鍵字：${card.keywords}</div>
            <div class="explanation-desc"><strong>牌面意象：</strong>${card.desc}</div>
            <div class="explanation-desc"><strong>命運解讀：</strong>${interpretation}</div>
        `;
        explanationList.appendChild(item);
    });

    readingResult.classList.add('visible');
    actionContainer.style.display = 'flex';
    deckStatus.textContent = "星辰已為您指明道路。";
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

resetBtn.addEventListener('click', resetReading);

// Init on load
window.addEventListener('DOMContentLoaded', () => {
    initSpreads();
    resetReading();
});
