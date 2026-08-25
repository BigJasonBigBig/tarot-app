// Ornate Black and Gold Tarot Deck Dataset
// This file contains the complete 78 card dataset with premium occult style SVG graphics.

// Helper to generate the ornate occult double-gold border with corner spirals and beaded side borders.
function createOccultCardBack() {
    return `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#997d2d" />
                <stop offset="25%" stop-color="#dfba47" />
                <stop offset="50%" stop-color="#fff2a1" />
                <stop offset="75%" stop-color="#dfba47" />
                <stop offset="100%" stop-color="#997d2d" />
            </linearGradient>
        </defs>
        <!-- Deep ornamental starfield -->
        <circle cx="13" cy="16" r="0.9" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="87" cy="18" r="0.7" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="15" cy="132" r="0.8" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="85" cy="134" r="0.9" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="50" cy="12" r="0.6" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="50" cy="138" r="0.6" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="10" cy="60" r="0.6" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="90" cy="60" r="0.6" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="10" cy="95" r="0.6" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="90" cy="95" r="0.6" fill="url(#goldGradient)" opacity="0.55"/>

        <!-- Outer triple frame with beaded inner border -->
        <rect x="4" y="4" width="92" height="142" rx="9" stroke="url(#goldGradient)" stroke-width="1.1" opacity="0.9"/>
        <rect x="7.5" y="7.5" width="85" height="135" rx="7" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.5"/>
        
        <!-- Beaded Outline Dots -->
        <circle cx="11.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="20.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="29.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="38.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="47.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="56.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="65.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="74.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="83.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        
        <circle cx="89.0" cy="20.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="29.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="38.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="47.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="56.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="65.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="74.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="83.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="92.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="101.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="110.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="119.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="128.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="137.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        
        <circle cx="80.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="71.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="62.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="53.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="44.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="35.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="26.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="17.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        
        <circle cx="11.0" cy="130.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="121.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="112.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="103.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="94.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="85.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="76.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="67.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="58.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="49.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="40.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="31.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="22.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="13.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>

        <rect x="13" y="13" width="74" height="124" rx="5" stroke="url(#goldGradient)" stroke-width="0.4" opacity="0.35"/>

        <!-- Corner flourishes (rotated scroll motif in each corner) -->
        <g transform="translate(10,10) rotate(0)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <path d="M0 0 C 4.6 0, 6.9 2.875, 5.75 6.899" stroke="url(#goldGradient)" stroke-width="0.69" fill="none" opacity="0.6"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>
        <g transform="translate(90,10) rotate(90)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <path d="M0 0 C 4.6 0, 6.9 2.875, 5.75 6.899" stroke="url(#goldGradient)" stroke-width="0.69" fill="none" opacity="0.6"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>
        <g transform="translate(90,140) rotate(180)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <path d="M0 0 C 4.6 0, 6.9 2.875, 5.75 6.899" stroke="url(#goldGradient)" stroke-width="0.69" fill="none" opacity="0.6"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>
        <g transform="translate(10,140) rotate(270)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <path d="M0 0 C 4.6 0, 6.9 2.875, 5.75 6.899" stroke="url(#goldGradient)" stroke-width="0.69" fill="none" opacity="0.6"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>

        <!-- Constellation rings -->
        <circle cx="50" cy="75" r="46" stroke="url(#goldGradient)" stroke-width="0.6" stroke-dasharray="1 4" opacity="0.4"/>
        <circle cx="50" cy="75" r="42" stroke="url(#goldGradient)" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.55"/>
        <circle cx="50" cy="75" r="34" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.35"/>

        <!-- Radiating mandala behind central emblem -->
        <line x1="67.0" y1="75.0" x2="73.0" y2="75.0" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="66.2" y1="80.3" x2="71.9" y2="82.1" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="63.8" y1="85.0" x2="68.6" y2="88.5" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="60.0" y1="88.8" x2="63.5" y2="93.6" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="55.3" y1="91.2" x2="57.1" y2="96.9" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="50.0" y1="92.0" x2="50.0" y2="98.0" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="44.7" y1="91.2" x2="42.9" y2="96.9" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="40.0" y1="88.8" x2="36.5" y2="93.6" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="36.2" y1="85.0" x2="31.4" y2="88.5" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="33.8" y1="80.3" x2="28.1" y2="82.1" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="33.0" y1="75.0" x2="27.0" y2="75.0" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="33.8" y1="69.7" x2="28.1" y2="67.9" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="36.2" y1="65.0" x2="31.4" y2="61.5" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="40.0" y1="61.2" x2="36.5" y2="56.4" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="44.7" y1="58.8" x2="42.9" y2="53.1" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="50.0" y1="58.0" x2="50.0" y2="52.0" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="55.3" y1="58.8" x2="57.1" y2="53.1" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="60.0" y1="61.2" x2="63.5" y2="56.4" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="63.8" y1="65.0" x2="68.6" y2="61.5" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>
        <line x1="66.2" y1="69.7" x2="71.9" y2="67.9" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3"/>

        <!-- Moon Phases (Vertical symmetry) -->
        <!-- Full Moon (Center) with star core -->
        <circle cx="50" cy="75" r="10.5" stroke="url(#goldGradient)" stroke-width="1.3" fill="url(#goldGradient)" fill-opacity="0.15"/>
        <circle cx="50" cy="75" r="7.5" stroke="url(#goldGradient)" stroke-width="0.6" opacity="0.5"/>
        <polygon points="50.0,69.8 53.1,79.2 45.1,73.4 54.9,73.4 46.9,79.2" fill="url(#goldGradient)" opacity="1"/>

        <!-- Gibbous Moons -->
        <path d="M50 46 C 57 46, 57 35, 50 35 C 45 35, 46 40.5, 46 40.5 C 46 40.5, 45 46, 50 46 Z" stroke="url(#goldGradient)" stroke-width="1" fill="url(#goldGradient)" fill-opacity="0.12"/>
        <path d="M50 104 C 57 104, 57 115, 50 115 C 45 115, 46 109.5, 46 109.5 C 46 109.5, 45 104, 50 104 Z" stroke="url(#goldGradient)" stroke-width="1" fill="url(#goldGradient)" fill-opacity="0.12"/>

        <!-- Crescent Moons -->
        <path d="M50 22 C 53.5 22, 53.5 15, 50 15 C 47.5 15, 48 18.5, 48 18.5 C 48 18.5, 47.5 22, 50 22" stroke="url(#goldGradient)" stroke-width="1"/>
        <path d="M50 128 C 53.5 128, 53.5 135, 50 135 C 47.5 135, 48 131.5, 48 131.5 C 48 131.5, 47.5 128, 50 128" stroke="url(#goldGradient)" stroke-width="1"/>

        <!-- Small guide stars flanking the moons -->
        <polygon points="38.0,26.0 39.2,29.6 36.1,27.4 39.9,27.4 36.8,29.6" fill="url(#goldGradient)" opacity="0.7"/>
        <polygon points="62.0,26.0 63.2,29.6 60.1,27.4 63.9,27.4 60.8,29.6" fill="url(#goldGradient)" opacity="0.7"/>
        <polygon points="38.0,120.0 39.2,123.6 36.1,121.4 39.9,121.4 36.8,123.6" fill="url(#goldGradient)" opacity="0.7"/>
        <polygon points="62.0,120.0 63.2,123.6 60.1,121.4 63.9,121.4 60.8,123.6" fill="url(#goldGradient)" opacity="0.7"/>

        <!-- Side sentinel stars -->
        <circle cx="22" cy="75" r="1.4" fill="url(#goldGradient)" opacity="0.7"/>
        <circle cx="78" cy="75" r="1.4" fill="url(#goldGradient)" opacity="0.7"/>
    </svg>`;
}

const CARD_BACK_SVG = createOccultCardBack();

// Helper to inject the double-gold border frame, corner scrolls, and background stars into every card SVG automatically.
function createOccultCardFront(innerArt) {
    return `<svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#997d2d" />
                <stop offset="25%" stop-color="#dfba47" />
                <stop offset="50%" stop-color="#fff2a1" />
                <stop offset="75%" stop-color="#dfba47" />
                <stop offset="100%" stop-color="#997d2d" />
            </linearGradient>
        </defs>
        <!-- Starry background dots -->
        <circle cx="15" cy="20" r="0.6" fill="url(#goldGradient)" opacity="0.45"/>
        <circle cx="85" cy="22" r="0.6" fill="url(#goldGradient)" opacity="0.45"/>
        <circle cx="20" cy="130" r="0.6" fill="url(#goldGradient)" opacity="0.45"/>
        <circle cx="80" cy="132" r="0.6" fill="url(#goldGradient)" opacity="0.45"/>
        <circle cx="10" cy="75" r="0.5" fill="url(#goldGradient)" opacity="0.4"/>
        <circle cx="90" cy="75" r="0.5" fill="url(#goldGradient)" opacity="0.4"/>

        <!-- Outer Double Frame -->
        <rect x="4" y="4" width="92" height="142" rx="9" stroke="url(#goldGradient)" stroke-width="1.1" opacity="0.9"/>
        <rect x="7.5" y="7.5" width="85" height="135" rx="7" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.5"/>
        
        <!-- Beaded Dots Outline -->
        <circle cx="11.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="20.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="29.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="38.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="47.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="56.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="65.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="74.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="83.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="11.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="20.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="29.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="38.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="47.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="56.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="65.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="74.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="83.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="92.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="101.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="110.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="119.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="128.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="137.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="89.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="80.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="71.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="62.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="53.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="44.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="35.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="26.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="17.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="139.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="130.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="121.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="112.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="103.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="94.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="85.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="76.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="67.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="58.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="49.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="40.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="31.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="22.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>
        <circle cx="11.0" cy="13.0" r="0.55" fill="url(#goldGradient)" opacity="0.55"/>

        <!-- Card Inner Frame -->
        <rect x="13" y="13" width="74" height="124" rx="5" stroke="url(#goldGradient)" stroke-width="0.4" opacity="0.35"/>

        <!-- Corner Flourishes -->
        <g transform="translate(10,10) rotate(0)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>
        <g transform="translate(90,10) rotate(90)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>
        <g transform="translate(90,140) rotate(180)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>
        <g transform="translate(10,140) rotate(270)">
            <path d="M0 0 C 6.9 0, 11.5 4.6, 9.2 10.35 C 6.9 14.95, 0 14.95, 0 10.35 C 0 6.9, 3.45 5.75, 5.75 6.9" stroke="url(#goldGradient)" stroke-width="1.03" fill="none" opacity="0.85"/>
            <circle cx="9.2" cy="10.3" r="1.3" fill="url(#goldGradient)"/>
        </g>

        <!-- Inner Art -->
        ${innerArt}
    </svg>`;
}

const TAROT_CARDS = [
    {
        id: "fool",
        name: "愚者 (The Fool)",
        number: "0",
        keywords: "冒險、全新起點、自發性、純真、信仰",
        upright: "愚者正位預示著一個充滿無限潛力的新旅程。此時正是放下恐懼、大膽躍進的時刻。相信宇宙，保持純真與好奇心，未知的世界正等待著你去探索。",
        reversed: "愚者逆位提醒你可能面臨莽狂與不負責任的抉擇。你是否因為過於急躁而忽略了潛在的危險？抑或是害怕跨出舒適圈而停滯不前？請深思熟慮後再行動。",
        desc: "一頂帶有三隻垂飾鈴鐺的金色小丑帽，在夜空中熠熠生輝，周圍環繞著散射的耀眼射線與小星斗，洋溢著純真、無拘無束與勇往直前的愚者之心。",
        svg: createOccultCardFront(`
            <!-- Jester Hat Occult Art (User Image Card 7) -->
            <g transform="translate(50, 75)">
                <!-- Radiating Rays -->
                <path d="M-40 0 L40 0 M0 -40 L0 40 M-28 -28 L28 28 M-28 28 L28 -28" stroke="url(#goldGradient)" stroke-width="0.45" stroke-dasharray="1 3" opacity="0.6"/>
                <path d="M-30 0 L30 0 M0 -30 L0 30" stroke="url(#goldGradient)" stroke-width="0.7" opacity="0.5"/>
                
                <!-- Central Jester Hat Shape -->
                <!-- Center Point -->
                <path d="M-15 15 Q0 -25 15 15 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Floppy Ears -->
                <path d="M-15 15 Q-30 -15 -8 -5" stroke="url(#goldGradient)" stroke-width="1.5" fill="#000000"/>
                <path d="M15 15 Q30 -15 8 -5" stroke="url(#goldGradient)" stroke-width="1.5" fill="#000000"/>
                <path d="M0 10 Q0 -30 0 -5" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <!-- Little bells / circles at tips -->
                <circle cx="-30" cy="-15" r="2.5" stroke="url(#goldGradient)" stroke-width="1.2" fill="url(#goldGradient)" fill-opacity="0.3"/>
                <circle cx="30" cy="-15" r="2.5" stroke="url(#goldGradient)" stroke-width="1.2" fill="url(#goldGradient)" fill-opacity="0.3"/>
                <circle cx="0" cy="-30" r="2.5" stroke="url(#goldGradient)" stroke-width="1.2" fill="url(#goldGradient)" fill-opacity="0.3"/>
                <!-- Bottom collar line -->
                <path d="M-18 15 C-8 22, 8 22, 18 15" stroke="url(#goldGradient)" stroke-width="1.8" fill="none"/>
                <!-- Little stars under the hat -->
                <circle cx="-18" cy="28" r="0.8" fill="url(#goldGradient)"/>
                <circle cx="18" cy="28" r="0.8" fill="url(#goldGradient)"/>
                <circle cx="0" cy="32" r="1.2" fill="url(#goldGradient)"/>
            </g>
        `)
    },
    {
        id: "magician",
        name: "魔術師 (The Magician)",
        number: "I",
        keywords: "創造力、意志力、專注、實踐、掌控",
        upright: "魔術師正位代表你已具備將想法轉化為現實的所有資源與能力。風、火、水、土四大元素均為你所用。專注你的意志力，啟動計畫，你就是自己命運的創造者。",
        reversed: "魔術師逆位警告你可能存在能量的浪費、欺騙或是空有才華而無處施展。你是否在投機取巧，或是缺乏毅力？請重新整理思緒，腳踏實地地發揮你的真正潛力。",
        desc: "一個精緻的復古黃金沙漏，上下燈泡完美對稱，周圍布滿了精確的星圖刻度線與閃爍的行星，象徵對時間與物質的精準掌控與創造力。",
        svg: createOccultCardFront(`
            <!-- Hourglass Occult Art (User Image Card 1) -->
            <g transform="translate(50, 75)">
                <!-- Back star maps / circles -->
                <circle cx="0" cy="0" r="32" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.4"/>
                <circle cx="0" cy="0" r="24" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.2"/>
                <!-- Constellation lines -->
                <path d="M-22 -22 L-10 -25 L5 -18 L22 -22" stroke="url(#goldGradient)" stroke-width="0.4" opacity="0.5"/>
                <circle cx="-22" cy="-22" r="1.2" fill="url(#goldGradient)"/>
                <circle cx="-10" cy="-25" r="1" fill="url(#goldGradient)"/>
                <circle cx="5" cy="-18" r="1.2" fill="url(#goldGradient)"/>
                <circle cx="22" cy="-22" r="1.5" fill="url(#goldGradient)"/>
                
                <!-- Hourglass Pillars -->
                <line x1="-12" y1="-25" x2="-12" y2="25" stroke="url(#goldGradient)" stroke-width="1.8"/>
                <line x1="12" y1="-25" x2="12" y2="25" stroke="url(#goldGradient)" stroke-width="1.8"/>
                <!-- Hourglass Top & Bottom Plates -->
                <rect x="-16" y="-28" width="32" height="4" rx="1" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <rect x="-16" y="24" width="32" height="4" rx="1" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                
                <!-- Glass Bulb Shape -->
                <path d="M-9 -24 L-9 -10 Q-9 0 0 0 Q9 0 9 -10 L9 -24 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <path d="M-9 24 L-9 10 Q-9 0 0 0 Q9 0 9 10 L9 24 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.2"/>
                
                <!-- Golden Sand inside -->
                <!-- Top Bulb Sand (emptying) -->
                <path d="M-7 -20 L-6 -10 Q0 -3 6 -10 L7 -20 Z" fill="url(#goldGradient)" fill-opacity="0.3"/>
                <!-- Bottom Bulb Sand (filling) -->
                <path d="M-8 23 C-5 14, 5 14, 8 23 Z" fill="url(#goldGradient)" fill-opacity="0.7" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <!-- Falling Sand Stream -->
                <line x1="0" y1="-20" x2="0" y2="22" stroke="url(#goldGradient)" stroke-width="1.2" stroke-dasharray="2 2"/>
            </g>
        `)
    },
    {
        id: "priestess",
        name: "女祭司 (The High Priestess)",
        number: "II",
        keywords: "潛意識、直覺、秘密、智慧、靜止",
        upright: "女祭司正位代表著向內探索的智慧。你的直覺此刻非常敏銳，答案就在你的潛意識深處，無需急於行動。保持安靜與傾聽，真相自然會浮現出來。",
        reversed: "女祭司逆位表示你可能忽略了直覺的呼喚，或是過度理智、流於表面。你可能在隱瞞某些事情，或者有內在焦慮。請花時間靜心，找回與內心真實自我的連結。",
        desc: "一輪美麗精緻的黃金雙重月牙，靜靜懸掛在厚實、重疊的巴洛克浮雕雲海上，正中心一顆閃亮的八角星散發著祥和的光輝，象徵無上的神性直覺與潛意識之海。",
        svg: createOccultCardFront(`
            <!-- Crescent Moon & Clouds Occult Art (User Image Card 2) -->
            <g transform="translate(50, 75)">
                <!-- Radiating Background Rays -->
                <path d="M0 0 L-40 -40 M0 0 L40 -40 M0 0 L0 -50 M0 0 L-25 -45 M0 0 L25 -45" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.35"/>
                
                <!-- Central Star -->
                <g transform="translate(0, -10)">
                    <path d="M0 -15 L3 -3 L15 0 L3 3 L0 15 L-3 3 L-15 0 L-3 -3 Z" fill="url(#goldGradient)"/>
                    <circle cx="0" cy="0" r="2.5" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                </g>
                
                <!-- Thick Crescent Moon -->
                <path d="M-22 -15 C-22 15, 22 15, 22 -15 C 13 -5, -13 -5, -22 -15 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.6"/>
                <!-- Shimmer inner lines on moon -->
                <path d="M-18 -10 C-18 10, 18 10, 18 -10" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.6"/>

                <!-- Detailed Baroque Cloud Layers below -->
                <g transform="translate(0, 18)">
                    <!-- Back clouds -->
                    <path d="M-30 5 Q-20 -8 -5 0 Q10 -10 25 2 Q32 10 30 15 L-30 15 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.7"/>
                    <!-- Front main clouds -->
                    <path d="M-26 10 Q-15 -3 0 5 Q15 -5 26 10 L-26 10" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                    <!-- Swirl details on clouds -->
                    <path d="M-12 8 C-8 5, -5 10, -8 11" stroke="url(#goldGradient)" stroke-width="0.8"/>
                    <path d="M10 7 C14 4, 18 9, 14 11" stroke="url(#goldGradient)" stroke-width="0.8"/>
                </g>
            </g>
        `)
    },
    {
        id: "empress",
        name: "皇后 (The Empress)",
        number: "III",
        keywords: "豐盛、滋養、自然、感官享受、孕育",
        upright: "皇后正位代表大自然的繁衍與無盡的豐盛。它象徵著創造力的孕育、母性般的溫暖關懷與感官的和諧享受。此刻是你的計畫開花結果、生活充滿滋養的美好時期。",
        reversed: "皇后逆位暗示著創造力的停滯、過度的控制欲或對自己身體的忽視。你可能感到了精力的枯竭，或是人際關係中的過度依賴。請回歸自然，重新學習無條件愛護自己。",
        desc: "一個精密的黃金天體運行儀，外圈環繞著行星軌道與細緻的星盤刻度，中央是代表大自然與母性繁衍的璀璨太陽輪盤，象徵浩瀚宇宙的孕育與無限滋養。",
        svg: createOccultCardFront(`
            <!-- Celestial Orbit / Empress Art (User Image Card 8) -->
            <g transform="translate(50, 75)">
                <!-- Orbital Circles -->
                <circle cx="0" cy="0" r="34" stroke="url(#goldGradient)" stroke-width="0.8" stroke-dasharray="5 2"/>
                <circle cx="0" cy="0" r="28" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.5"/>
                <circle cx="0" cy="0" r="20" stroke="url(#goldGradient)" stroke-width="0.7"/>
                
                <!-- Ornate corner stars inside orbits -->
                <circle cx="-24" cy="-24" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="24" cy="-24" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="0" cy="30" r="2" fill="url(#goldGradient)"/>
                
                <!-- Center Crescent and Sun Rays -->
                <path d="M-12 -12 C-12 12, 12 12, 12 -12 C 5 -4, -5 -4, -12 -12 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <!-- Central starburst -->
                <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="url(#goldGradient)"/>
                
                <!-- Flowing leaf scroll motifs under orbit (embodying nature/fertility) -->
                <path d="M-34 0 C-40 20, -10 32, 0 32 C10 32, 40 20, 34 0" stroke="url(#goldGradient)" stroke-width="1.2" fill="none"/>
                <path d="M-20 28 Q-28 20 -15 15 M20 28 Q28 20 15 15" stroke="url(#goldGradient)" stroke-width="0.8"/>
            </g>
        `)
    },
    {
        id: "emperor",
        name: "皇帝 (The Emperor)",
        number: "IV",
        keywords: "權力、穩定、控制、秩序、父親形象",
        upright: "皇帝正位代表著至高無上的秩序、結構與堅實的掌控力。你擁有強大的意志，能夠建立穩固的制度並保護你所珍視的人。這是一個採取理性行動、實行自我管理的時刻。",
        reversed: "皇帝逆位警告你可能存在過度控制、專制暴政或是秩序的崩潰。你可能感到有些無能為力，或面臨他人的強烈打壓。請反思自己的管理方式，切勿流於武斷冷酷。",
        desc: "一座穩固的黃金磚塊金字塔，中央刻有一隻全能之眼，周圍環繞著精細的同心星軌與萬丈芒光，象徵堅實的建制、理性掌控與至高的權威統治。",
        svg: createOccultCardFront(`
            <!-- Pyramid & Eye Occult Art (User Image Card 3) -->
            <g transform="translate(50, 75)">
                <!-- Radiating Starburst Lines -->
                <circle cx="0" cy="0" r="35" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="1 3" opacity="0.6"/>
                <path d="M-36 0 H36 M0 -36 V36" stroke="url(#goldGradient)" stroke-width="0.4" opacity="0.4"/>
                
                <!-- Outer Ring -->
                <circle cx="0" cy="0" r="28" stroke="url(#goldGradient)" stroke-width="1" opacity="0.75"/>
                
                <!-- Pyramid Body -->
                <polygon points="0,-25 -25,20 25,20" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.6"/>
                
                <!-- Brick line segments -->
                <line x1="-10" y1="-2" x2="10" y2="-2" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="-18" y1="10" x2="18" y2="10" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="-5" y1="-12" x2="5" y2="-12" stroke="url(#goldGradient)" stroke-width="0.8"/>
                
                <!-- Vertical bricks -->
                <line x1="0" y1="-25" x2="0" y2="-12" stroke="url(#goldGradient)" stroke-width="0.7"/>
                <line x1="-4" y1="-12" x2="-6" y2="-2" stroke="url(#goldGradient)" stroke-width="0.7"/>
                <line x1="4" y1="-12" x2="6" y2="-2" stroke="url(#goldGradient)" stroke-width="0.7"/>
                
                <!-- Eye of Providence inside Pyramid -->
                <g transform="translate(0, 5)">
                    <!-- Eye Outline -->
                    <path d="M-10 0 C-4 -6, 4 -6, 10 0 C4 6, -4 6, -10 0 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.2"/>
                    <!-- Pupil -->
                    <circle cx="0" cy="0" r="3.2" stroke="url(#goldGradient)" stroke-width="1" fill="url(#goldGradient)" fill-opacity="0.3"/>
                    <circle cx="0" cy="0" r="1.2" fill="url(#goldGradient)"/>
                </g>
            </g>
        `)
    },
    {
        id: "hierophant",
        name: "教皇 (The Hierophant)",
        number: "V",
        keywords: "傳統、信仰、盟約、教育、精神指引",
        upright: "教皇正位代表精神領域的傳統、道德與智慧導師。這是一個尋求信仰力量、遵循社會常規或接受高等教育的時期。向有智慧的長者學習，你能獲得內在的和諧與救贖。",
        reversed: "教皇逆位象徵對傳統觀念的反叛、叛逆與特立獨行。你可能對現有的體制感到厭倦，或是遇到了虛偽的導師。請學會用自己的獨立思考去探尋真理。",
        desc: "一隻威嚴的黃金幾何線條貓頭鷹，雙眼如睿智的星辰，雙爪緊緊抓著一把古老的黃金鑰匙，背後發散著智慧的光芒，象徵神聖傳承、真理盟約與心靈之門的鑰匙。",
        svg: createOccultCardFront(`
            <!-- Owl with Key Occult Art (User Image Card 5) -->
            <g transform="translate(50, 75)">
                <!-- Radiating Rays -->
                <circle cx="0" cy="0" r="32" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.3"/>
                
                <!-- Owl Head & Body Silhouette -->
                <!-- Head & Horns -->
                <path d="M-15 -25 L-22 -15 L-12 -12 L12 -12 L22 -15 L15 -25 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Big Eyes -->
                <circle cx="-7" cy="-18" r="4.5" stroke="url(#goldGradient)" stroke-width="1.2" fill="#000000"/>
                <circle cx="7" cy="-18" r="4.5" stroke="url(#goldGradient)" stroke-width="1.2" fill="#000000"/>
                <circle cx="-7" cy="-18" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="7" cy="-18" r="1.5" fill="url(#goldGradient)"/>
                <!-- Beak -->
                <polygon points="0,-16 -2,-11 2,-11" fill="url(#goldGradient)"/>
                
                <!-- Body -->
                <path d="M-14 -12 C-18 10, -10 25, 0 25 C10 25, 18 10, 14 -12 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Wing feathers -->
                <path d="M-14 -5 Q-10 12 -6 20 M14 -5 Q10 12 6 20" stroke="url(#goldGradient)" stroke-width="1" opacity="0.85"/>
                <!-- Chest pattern -->
                <path d="M-5 -2 L0 3 L5 -2 M-7 3 L0 9 L7 3" stroke="url(#goldGradient)" stroke-width="0.8"/>
                
                <!-- Key held by Owl (horizontal) -->
                <g transform="translate(0, 31)">
                    <!-- Key shaft -->
                    <line x1="-22" y1="0" x2="16" y2="0" stroke="url(#goldGradient)" stroke-width="1.6"/>
                    <!-- Key Ring / Head (left) -->
                    <circle cx="-22" cy="0" r="5.5" stroke="url(#goldGradient)" stroke-width="1.5" fill="#000000"/>
                    <circle cx="-22" cy="0" r="2" fill="url(#goldGradient)"/>
                    <!-- Key teeth (right) -->
                    <path d="M12 0 V6 H16 V0 M8 0 V4 H10 V0" stroke="url(#goldGradient)" stroke-width="1.2" fill="none"/>
                </g>
            </g>
        `)
    },
    {
        id: "lovers",
        name: "戀人 (The Lovers)",
        number: "VI",
        keywords: "愛、和諧、關係、選擇、價值觀對齊",
        upright: "戀人牌正位不僅代表浪漫美好的愛情，更象徵著深刻的內在選擇與和諧。你面臨著一個重大抉擇，請傾聽你內心的真愛與真實信念，將自己與更崇高的目標對齊。",
        reversed: "戀人牌逆位警告關係的失衡、內在衝突或做出了錯誤的選擇。你可能正面臨溝通上的隔閡或是信任的破裂。請退一步，重新審視自己的內心價值，找回真正的和諧。",
        desc: "兩顆相互交纏、環繞的金色心形藤蔓，中心是一隻銜著和平橄欖枝的飛翔白鴿，四周布滿浪漫的星芒，象徵心靈與靈魂的和諧、誓約與神聖連結。",
        svg: createOccultCardFront(`
            <!-- Lovers Occult Vine & Dove Art -->
            <g transform="translate(50, 75)">
                <!-- Radiating Heart Background -->
                <path d="M-30 -10 A10 10 0 0 1 0 -10 A10 10 0 0 1 30 -10 C30 10, 10 25, 0 35 C-10 25, -30 10, -30 -10 Z" stroke="url(#goldGradient)" stroke-width="0.6" stroke-dasharray="2 3" opacity="0.4"/>
                
                <!-- Intertwined Hearts Vines -->
                <path d="M-15 -8 A6 6 0 0 1 0 -8 A6 6 0 0 1 15 -8 C15 5, 0 18, 0 18 C0 18, -15 5, -15 -8 Z" stroke="url(#goldGradient)" stroke-width="1.5" fill="none"/>
                <path d="M-10 -15 A6 6 0 0 1 5 -15 A6 6 0 0 1 20 -15 C20 -2, 5 11, 5 11" stroke="url(#goldGradient)" stroke-width="1" opacity="0.7" fill="none"/>
                
                <!-- Flying Dove (Center) -->
                <g transform="translate(0, -5) scale(0.9)">
                    <!-- Wings -->
                    <path d="M0 -5 C-15 -25, -20 -10, 0 2" stroke="url(#goldGradient)" stroke-width="1.3" fill="#000000"/>
                    <path d="M0 -5 C15 -25, 20 -10, 0 2" stroke="url(#goldGradient)" stroke-width="1.3" fill="#000000"/>
                    <!-- Head -->
                    <circle cx="0" cy="-10" r="2.5" fill="url(#goldGradient)"/>
                    <!-- Tail -->
                    <path d="M-3 8 L0 18 L3 8 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                </g>
                
                <!-- Starry sprinkles around -->
                <polygon points="25,-25 27,-22 30,-22 28,-20 29,-17 25,-19 21,-17 22,-20 20,-22 23,-22" fill="url(#goldGradient)"/>
                <polygon points="-25,-25 -23,-22 -20,-22 -22,-20 -21,-17 -25,-19 -29,-17 -28,-20 -30,-22 -27,-22" fill="url(#goldGradient)"/>
            </g>
        `)
    },
    {
        id: "chariot",
        name: "戰車 (The Chariot)",
        number: "VII",
        keywords: "意志力、勝利、控制、決心、克服障礙",
        upright: "戰車正位代表著以強大的意志力與絕不動搖的決心戰勝眼前的混亂。你正朝著目標勇往直前。平衡並掌控你內在衝突的力量，保持自律，勝利終將屬於你。",
        reversed: "戰車逆位警告你正失去控制，可能面臨挫折、前進方向的偏差或盲目的狂躁。你是否有些操之過急，或是被情緒的韁繩給絆倒？請立刻停下重整，調整方向。",
        desc: "一輛由兩隻交纏的金色神話雙頭鷹徽章守護的盾牌戰車，車身刻有繁複的神聖符文，背景充滿飛速的放射光軌，象徵意志克服一切、勇往直前與最終凱旋。",
        svg: createOccultCardFront(`
            <!-- Chariot Shield / Emblem Art -->
            <g transform="translate(50, 75)">
                <!-- Radiating Speed Lines -->
                <line x1="-38" y1="-38" x2="38" y2="38" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="4 2"/>
                <line x1="38" y1="-38" x2="-38" y2="38" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="4 2"/>
                
                <!-- Shield Border -->
                <polygon points="0,-28 -20,-10 -15,18 0,30 15,18 20,-10" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.8"/>
                <polygon points="0,-23 -16,-8 -12,15 0,25 12,15 16,-8" stroke="url(#goldGradient)" stroke-width="0.6" opacity="0.6"/>
                
                <!-- Crest Star inside shield -->
                <g transform="translate(0, -6)">
                    <path d="M0 -12 L2 -2 L12 0 L2 2 L0 12 L-2 2 L-12 0 L-2 -2 Z" fill="url(#goldGradient)"/>
                </g>
                <!-- Crossed Spears behind Shield -->
                <line x1="-26" y1="-32" x2="26" y2="34" stroke="url(#goldGradient)" stroke-width="1.2" opacity="0.8"/>
                <line x1="26" y1="-32" x2="-26" y2="34" stroke="url(#goldGradient)" stroke-width="1.2" opacity="0.8"/>
                <!-- Spear tips -->
                <polygon points="-26,-32 -22,-32 -26,-28" fill="url(#goldGradient)"/>
                <polygon points="26,-32 22,-32 26,-28" fill="url(#goldGradient)"/>
            </g>
        `)
    },
    {
        id: "strength",
        name: "力量 (Strength)",
        number: "VIII",
        keywords: "勇氣、內在力量、耐心、同理心、溫柔掌控",
        upright: "力量正位代表著以溫柔、耐心與內在同理心克服野性本能的力量。它不是狂暴的物理對抗，而是堅定心靈的以柔克剛。相信你的內在勇氣，你能馴服心中與外界的猛獸。",
        reversed: "力量逆位提醒你可能面臨內心恐懼的吞噬、無奈與抑鬱，或是力量的濫用。你是否感到軟弱、容易屈服於誘惑，或是脾氣失控？請回歸冷靜，重新尋找內心的平靜力量。",
        desc: "一隻由繁複巴洛克金線條繪製的雄獅，身軀中央刻著代表無限智慧的無限大符號（Infinity），獅口微微閉合，神態溫順而強大，象徵溫柔馴服與強大意志力。",
        svg: createOccultCardFront(`
            <!-- Lion Head with Infinity Symbol Art -->
            <g transform="translate(50, 75)">
                <!-- Lion Mane Outer Circles -->
                <circle cx="0" cy="0" r="32" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.4"/>
                
                <!-- Infinity Symbol (Top) -->
                <g transform="translate(0, -22) scale(0.75)">
                    <path d="M-8 0 C-8 -5, -1 -5, 0 0 C1 -5, 8 -5, 8 0 C8 5, 1 5, 0 0 C-1 5, -8 5, -8 0 Z" stroke="url(#goldGradient)" stroke-width="1.5" fill="none"/>
                </g>
                
                <!-- Lion Head Silhouette -->
                <path d="M-15 -10 Q-25 0 -12 15 Q0 25 12 15 Q25 0 15 -10 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Mane line flourishes -->
                <path d="M-15 -10 C-18 -18, -8 -20, 0 -15 C8 -20, 18 -18, 15 -10" stroke="url(#goldGradient)" stroke-width="1.2" fill="none"/>
                <path d="M-22 2 C-26 12, -15 20, -10 16" stroke="url(#goldGradient)" stroke-width="0.9" fill="none"/>
                <path d="M22 2 C26 12, 15 20, 10 16" stroke="url(#goldGradient)" stroke-width="0.9" fill="none"/>
                
                <!-- Lion Face details -->
                <path d="M-6 -6 L-2 -1 L2 -1 L6 -6" stroke="url(#goldGradient)" stroke-width="0.8" fill="none"/>
                <!-- Nose & Muzzle -->
                <polygon points="0,-1 -3,3 3,3" fill="url(#goldGradient)"/>
                <path d="M-3 3 Q0 6 3 3 M0 3 V9" stroke="url(#goldGradient)" stroke-width="1"/>
                <path d="M-5 9 C-3 12, 3 12, 5 9 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
            </g>
        `)
    },
    {
        id: "hermit",
        name: "隱士 (The Hermit)",
        number: "IX",
        keywords: "內省、孤獨、尋求真理、心靈指引、退隱",
        upright: "隱士正位代表一段向內探索、尋求心靈真理的旅程。此刻適合遠離繁雜的社交與世俗紛擾，在孤獨中省思。你內在的智慧之燈已點亮，它將指引你前行。",
        reversed: "隱士逆位警告過度的孤立、固執拒絕他人的建議，或是迷失在自己的主觀世界中。你是否因為孤傲而與世界脫節？請打開一扇窗，重新接納與外界的良性溝通。",
        desc: "一座在洶湧海浪與濃密雲層中屹立不搖的黃金燈塔，頂端散發出萬丈探照光芒，為迷失的船隻與靈魂照亮前方的道路，象徵真理之燈與內在智慧的指引。",
        svg: createOccultCardFront(`
            <!-- Lighthouse Occult Art (User Image Card 6) -->
            <g transform="translate(50, 75)">
                <!-- Radiating Searchlight Beams (Top) -->
                <g transform="translate(0, -25)">
                    <!-- Giant Beams -->
                    <polygon points="0,0 -40,30 -25,45" fill="url(#goldGradient)" fill-opacity="0.12"/>
                    <polygon points="0,0 40,30 25,45" fill="url(#goldGradient)" fill-opacity="0.12"/>
                    <!-- Light rays -->
                    <line x1="0" y1="0" x2="-38" y2="10" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.7"/>
                    <line x1="0" y1="0" x2="38" y2="10" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.7"/>
                    <line x1="0" y1="0" x2="-30" y2="-20" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.5"/>
                    <line x1="0" y1="0" x2="30" y2="-20" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.5"/>
                </g>
                
                <!-- Lighthouse Tower -->
                <!-- Top Cap / Dome -->
                <path d="M-6 -25 L0 -32 L6 -25 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Light Room (Grid) -->
                <rect x="-8" y="-25" width="16" height="8" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <line x1="-4" y1="-25" x2="-4" y2="-17" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="4" y1="-25" x2="4" y2="-17" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="0" y1="-25" x2="0" y2="-17" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <!-- Gallery Railing -->
                <rect x="-11" y="-17" width="22" height="3" fill="url(#goldGradient)"/>
                
                <!-- Main Stone Tower -->
                <polygon points="-8,-14 -12,25 12,25 8,-14" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.8"/>
                <!-- Stone texture rows -->
                <line x1="-9" y1="-4" x2="9" y2="-4" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="-10" y1="6" x2="10" y2="6" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="-11" y1="16" x2="11" y2="16" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <!-- Vertical lines for bricks -->
                <line x1="-2" y1="-14" x2="-2" y2="-4" stroke="url(#goldGradient)" stroke-width="0.7"/>
                <line x1="4" y1="-4" x2="5" y2="6" stroke="url(#goldGradient)" stroke-width="0.7"/>
                <line x1="-5" y1="6" x2="-6" y2="16" stroke="url(#goldGradient)" stroke-width="0.7"/>
                <!-- Doorway at bottom -->
                <path d="M-4 25 V17 C-4 15, 4 15, 4 17 V25 Z" fill="url(#goldGradient)"/>

                <!-- Swirling Clouds around base -->
                <path d="M-28 25 Q-15 15 0 22 Q15 12 28 25 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <path d="M-22 25 C-12 18, 12 18, 22 25" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.6"/>
            </g>
        `)
    },
    {
        id: "wheel",
        name: "命運之輪 (Wheel of Fortune)",
        number: "X",
        keywords: "轉折點、好運、命運、契機、生命週期",
        upright: "命運之輪正位帶來源源不絕的轉機與好運。生命是不斷循環的，逆境即將過去，好運正在悄悄降臨。請順應自然的潮流，抓住機會，勇敢迎接全新的人生起點。",
        reversed: "命運之輪逆位代表運氣不佳、遭遇挫折或面臨突如其來的混亂。你可能在抗拒改變，或是陷入了不好的重複循環中。請保持平常心，積蓄力量，等待風暴過去。",
        desc: "一個精細雕琢的八角星黃金輪盤，外緣布滿神聖星座符文，正中心刻有一隻神聖的法老之眼，四周被旋轉的星系與流星軌道環繞，象徵時來運轉與宿命輪迴。",
        svg: createOccultCardFront(`
            <!-- Wheel of Fortune Occult Art -->
            <g transform="translate(50, 75)">
                <!-- Rotating Star Orbits -->
                <circle cx="0" cy="0" r="33" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="6 3" opacity="0.5"/>
                <circle cx="0" cy="0" r="28" stroke="url(#goldGradient)" stroke-width="0.8"/>
                
                <!-- Main Wheel Structure -->
                <circle cx="0" cy="0" r="20" stroke="url(#goldGradient)" stroke-width="1.5" fill="#000000"/>
                <circle cx="0" cy="0" r="16" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 1"/>
                
                <!-- 8 Spokes -->
                <line x1="0" y1="-20" x2="0" y2="20" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <line x1="-20" y1="0" x2="20" y2="0" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <line x1="-14" y1="-14" x2="14" y2="14" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="-14" y1="14" x2="14" y2="-14" stroke="url(#goldGradient)" stroke-width="0.8"/>
                
                <!-- Eye symbol in the dead center -->
                <circle cx="0" cy="0" r="5" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                <circle cx="0" cy="0" r="1.5" fill="url(#goldGradient)"/>
                
                <!-- Outer symbols (Hebrew/Alchemical symbols on wheel rim) -->
                <circle cx="0" cy="-24" r="1" fill="url(#goldGradient)"/>
                <circle cx="24" cy="0" r="1" fill="url(#goldGradient)"/>
                <circle cx="0" cy="24" r="1" fill="url(#goldGradient)"/>
                <circle cx="-24" cy="0" r="1" fill="url(#goldGradient)"/>
                <polygon points="17,-17 19,-14 16,-15" stroke="url(#goldGradient)" stroke-width="0.8" fill="none"/>
                <polygon points="-17,17 -19,14 -16,15" stroke="url(#goldGradient)" stroke-width="0.8" fill="none"/>
            </g>
        `)
    },
    {
        id: "justice",
        name: "正義 (Justice)",
        number: "XI",
        keywords: "公正、因果律、誠實、法律、決定",
        upright: "正義正位代表公正、因果與絕對的誠實。你此前的努力或行為此刻正面臨客觀的裁決，付出終會得到合理的回報。請保持冷靜與理性，做出不偏不倚的明智抉擇。",
        reversed: "正義逆位警告不公正的對待、偏見或是逃避責任帶來的惡果。你可能感到受到了委屈，或是試圖掩蓋自己的過錯。因果規律是無情的，請真誠面對自己的內心。",
        desc: "一副完美平衡的黃金天平，懸掛在莊嚴的石柱門廊之下，天平兩端各點綴一顆璀璨的小星斗，背後襯托著代表法律與因果的和諧射線。",
        svg: createOccultCardFront(`
            <!-- Balance/Justice Scale Occult Art -->
            <g transform="translate(50, 75)">
                <!-- Radiating background rays -->
                <path d="M-35 -15 L35 15 M-35 15 L35 -15 M-40 0 H40 M0 -40 V40" stroke="url(#goldGradient)" stroke-width="0.4" stroke-dasharray="2 3" opacity="0.4"/>
                
                <!-- Temple pillars (flanks) -->
                <line x1="-30" y1="-30" x2="-30" y2="30" stroke="url(#goldGradient)" stroke-width="1.8" opacity="0.6"/>
                <line x1="30" y1="-30" x2="30" y2="30" stroke="url(#goldGradient)" stroke-width="1.8" opacity="0.6"/>
                
                <!-- Main Scale Stand (Center) -->
                <line x1="0" y1="-28" x2="0" y2="28" stroke="url(#goldGradient)" stroke-width="2"/>
                <!-- Base pedestal -->
                <rect x="-10" y="25" width="20" height="4" rx="1" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Top loop -->
                <circle cx="0" cy="-28" r="3" stroke="url(#goldGradient)" stroke-width="1.2"/>
                
                <!-- Balance Beam (Crossbar) -->
                <line x1="-22" y1="-20" x2="22" y2="-20" stroke="url(#goldGradient)" stroke-width="2.2"/>
                <!-- Little center needle -->
                <line x1="0" y1="-20" x2="0" y2="-27" stroke="url(#goldGradient)" stroke-width="1.2"/>
                
                <!-- Left Pan (Hanging) -->
                <line x1="-22" y1="-20" x2="-29" y2="-3" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="-22" y1="-20" x2="-15" y2="-3" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <path d="M-31 -3 C-31 5, -13 5, -13 -3 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <circle cx="-22" cy="1" r="1.5" fill="url(#goldGradient)"/>
                
                <!-- Right Pan (Hanging) -->
                <line x1="22" y1="-20" x2="15" y2="-3" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <line x1="22" y1="-20" x2="29" y2="-3" stroke="url(#goldGradient)" stroke-width="0.8"/>
                <path d="M13 -3 C13 5, 31 5, 31 -3 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <circle cx="22" cy="1" r="1.5" fill="url(#goldGradient)"/>
            </g>
        `)
    },
    {
        id: "hangedman",
        name: "倒吊人 (The Hanged Man)",
        number: "XII",
        keywords: "犧牲、等待、換個角度、放手、心靈頓悟",
        upright: "倒吊人正位象徵著自願的奉獻、換位思考與耐心的等待。此刻雖然動彈不得，但那不是懲罰，而是開闊視野、獲得心靈頓悟的契機。換個角度看世界，你會發現隱藏的解答。",
        reversed: "倒吊人逆位暗示無謂的掙扎、抗拒犧牲或是徒勞無功的等待。你可能在死撐，或者做出了無謂的妥協。請及時放手，跳出思維的死胡同，重獲前行的自由。",
        desc: "一根倒懸在夜空中的金色神聖雙十字架，中心是一隻展開雙翅向下俯衝的聖鴿，周圍環繞著象徵救贖與智慧開悟的光輪環，富有神聖精神與內在平靜意象。",
        svg: createOccultCardFront(`
            <!-- Hanged Man Sacred Inverted Cross & Dove -->
            <g transform="translate(50, 75)">
                <!-- Halo rings of light -->
                <circle cx="0" cy="8" r="28" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.5"/>
                <circle cx="0" cy="8" r="20" stroke="url(#goldGradient)" stroke-width="0.7" opacity="0.3"/>
                <circle cx="0" cy="8" r="12" stroke="url(#goldGradient)" stroke-width="1" fill="url(#goldGradient)" fill-opacity="0.1"/>
                
                <!-- Inverted T-Shape Cross structure -->
                <line x1="0" y1="-32" x2="0" y2="28" stroke="url(#goldGradient)" stroke-width="2.5"/>
                <!-- Upper bar -->
                <line x1="-16" y1="-18" x2="16" y2="-18" stroke="url(#goldGradient)" stroke-width="2"/>
                <!-- Bottom bar -->
                <line x1="-24" y1="20" x2="24" y2="20" stroke="url(#goldGradient)" stroke-width="2"/>
                
                <!-- Dove diving down (facing downward) -->
                <g transform="translate(0, -2) scale(0.95)">
                    <!-- Wings -->
                    <path d="M0 0 C-18 18, -12 25, 0 10" stroke="url(#goldGradient)" stroke-width="1.3" fill="#000000"/>
                    <path d="M0 0 C18 18, 12 25, 0 10" stroke="url(#goldGradient)" stroke-width="1.3" fill="#000000"/>
                    <!-- Head pointing down -->
                    <polygon points="0,18 -3,11 3,11" fill="url(#goldGradient)"/>
                    <circle cx="0" cy="11" r="2.5" fill="url(#goldGradient)"/>
                    <!-- Tail pointing up -->
                    <path d="M-3 -5 L0 -15 L3 -5 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                </g>
            </g>
        `)
    },
    {
        id: "death",
        name: "死神 (Death)",
        number: "XIII",
        keywords: "結束、轉變、新生、告別過去、淘汰",
        upright: "死神正位並不代表生理的死亡，而是象徵徹底的結束與痛苦後的浴火新生。舊有的事物（人際、思想、習慣）已經不再適合你，唯有徹底告別過去，才能迎來耀眼的全新曙光。",
        reversed: "死神逆位警告你正痛苦地抗拒改變，或是卡在名存實亡的僵局中不肯放手。拖延痛苦只會阻礙進步。請鼓起勇氣切斷壞死的藤蔓，迎接必須到來的革新。",
        desc: "一把鋒利、泛著寒光的黃金死神巨鐮（Scythe），斜斜切過一朵盛開至極即將凋零的金色曼陀羅花，四周有花瓣碎屑在虛空中飄散，象徵生命的更替與重生。",
        svg: createOccultCardFront(`
            <!-- Death Scythe and Dying Flower Art -->
            <g transform="translate(50, 75)">
                <!-- Dark circular grid -->
                <circle cx="0" cy="0" r="32" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="1 3" opacity="0.4"/>
                
                <!-- Dying Rose / Mandala flower in background center -->
                <g opacity="0.65">
                    <circle cx="0" cy="0" r="14" stroke="url(#goldGradient)" stroke-width="1" stroke-dasharray="3 3"/>
                    <path d="M-10 -10 C-15 -3, -15 3, -10 10 C-3 15, 3 15, 10 10 C15 3, 15 -3, 10 -10 Z" stroke="url(#goldGradient)" stroke-width="0.8" fill="none"/>
                    <!-- Petals dropping -->
                    <path d="M-16 16 C-20 25, -12 28, -10 22 C-8 16, -12 10, -16 16 Z" stroke="url(#goldGradient)" stroke-width="0.7" fill="#000000"/>
                    <path d="M18 12 C24 16, 26 22, 21 24 C16 26, 12 18, 18 12 Z" stroke="url(#goldGradient)" stroke-width="0.7" fill="#000000"/>
                </g>
                
                <!-- The Scythe (Scythe Handle & Blade) -->
                <!-- Shaft -->
                <line x1="-25" y1="28" x2="22" y2="-28" stroke="url(#goldGradient)" stroke-width="1.8"/>
                <!-- Grip knobs -->
                <circle cx="-16" cy="18" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="8" cy="-11" r="1.5" fill="url(#goldGradient)"/>
                <!-- Curved Scythe Blade (Top Right) -->
                <path d="M22 -28 C18 -32, -8 -34, -24 -24 C-10 -22, 10 -22, 22 -28 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Shimmer edge line -->
                <path d="M20 -28 C10 -26, -5 -25, -20 -25" stroke="url(#goldGradient)" stroke-width="0.8"/>
            </g>
        `)
    },
    {
        id: "temperance",
        name: "節制 (Temperance)",
        number: "XIV",
        keywords: "平衡、融和、節制、耐心、心靈療癒",
        upright: "節制正位代表完美的平衡、包容與心靈的自我療癒。你正成功調和著不同的能量，建立起生活秩序。保持耐心與和諧，以不溫不火的態度處事，能為你帶來深度的平靜。",
        reversed: "節制逆位警告生活节奏的失衡、極端衝動、或是無法將相互衝突的資源融會貫通。你可能在放縱自己，或與他人產生摩擦。請重整作息，回歸內心的平衡線。",
        desc: "一對神聖的金色天使翅膀展翅張開，中心是一隻精緻的古老沙漏，有金沙在上下均勻地流動，代表永恆流動、平衡融合與心靈能量的完美流轉。",
        svg: createOccultCardFront(`
            <!-- Angel Wings & Hourglass/Cups Flow Art -->
            <g transform="translate(50, 75)">
                <!-- Radiating circles -->
                <circle cx="0" cy="0" r="34" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="4 2" opacity="0.3"/>
                
                <!-- Angel Wings (Left and Right) -->
                <!-- Left Wing -->
                <path d="M-8 -15 C-26 -28, -38 -8, -12 18 C-6 10, -5 2, -8 -15 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <path d="M-12 -10 C-22 -18, -28 -3, -13 12" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.8"/>
                <!-- Right Wing -->
                <path d="M8 -15 C26 -28, 38 -8, 12 18 C6 10, 5 2, 8 -15 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <path d="M12 -10 C22 -18, 28 -3, 13 12" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.8"/>
                
                <!-- Central Alchemical Cups/Hourglass -->
                <g transform="translate(0, 0) scale(0.9)">
                    <!-- Hourglass Columns -->
                    <line x1="-7" y1="-20" x2="-7" y2="20" stroke="url(#goldGradient)" stroke-width="1.2"/>
                    <line x1="7" y1="-20" x2="7" y2="20" stroke="url(#goldGradient)" stroke-width="1.2"/>
                    <!-- Caps -->
                    <line x1="-11" y1="-22" x2="11" y2="-22" stroke="url(#goldGradient)" stroke-width="1.5"/>
                    <line x1="-11" y1="22" x2="11" y2="22" stroke="url(#goldGradient)" stroke-width="1.5"/>
                    <!-- Glass bulb -->
                    <path d="M-6 -18 L-6 -8 C-6 0, 6 0, 6 -8 L6 -18 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                    <path d="M-6 18 L-6 8 C-6 0, 6 0, 6 8 L6 18 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                    <line x1="0" y1="-14" x2="0" y2="16" stroke="url(#goldGradient)" stroke-width="1" stroke-dasharray="1 2"/>
                </g>
            </g>
        `)
    },
    {
        id: "devil",
        name: "惡魔 (The Devil)",
        number: "XV",
        keywords: "執著、物質誘惑、束縛、成癮、潛意識陰暗面",
        upright: "惡魔正位揭示了你心中對物質享樂、權力或感情的過度執著，這已形成無形的沉重束縛。你可能被負面成癮或慾望所掌控。請意識到，那些鎖鏈其實非常寬鬆，你可以隨時決定放手。",
        reversed: "惡魔逆位象徵著覺醒與自我救贖的開始。你開始看清誘惑背後的虛無，並下定決心斬斷不良習慣或有害的執念，重新奪回自我精神的主導權，重獲心靈自由。",
        desc: "一個燃燒著熊熊烈焰的金色五角星（Baphomet Pentagram），背景充斥著扭曲的暗黑荊棘藤蔓與鏈條，象徵物質慾望的鎖鏈、執念與沉重的自我束縛。",
        svg: createOccultCardFront(`
            <!-- Burning Pentagram & Chain Chains Art -->
            <g transform="translate(50, 75)">
                <!-- Thorns / Chains Background -->
                <path d="M-30 20 C-10 10, -5 30, 20 20 C10 10, 30 5, 25 -15" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.4"/>
                
                <!-- Chains -->
                <g stroke="url(#goldGradient)" stroke-width="0.8" fill="none" opacity="0.6">
                    <!-- Left dangling chain -->
                    <rect x="-24" y="0" width="3" height="6" rx="1.5" transform="rotate(15 -24 0)"/>
                    <rect x="-22" y="5" width="3" height="6" rx="1.5" transform="rotate(15 -22 5)"/>
                    <rect x="-20" y="10" width="3" height="6" rx="1.5" transform="rotate(15 -20 10)"/>
                    <!-- Right dangling chain -->
                    <rect x="21" y="0" width="3" height="6" rx="1.5" transform="rotate(-15 21 0)"/>
                    <rect x="19" y="5" width="3" height="6" rx="1.5" transform="rotate(-15 19 5)"/>
                    <rect x="17" y="10" width="3" height="6" rx="1.5" transform="rotate(-15 17 10)"/>
                </g>
                
                <!-- Main Inverted Pentagram Ring -->
                <circle cx="0" cy="-2" r="24" stroke="url(#goldGradient)" stroke-width="1" stroke-dasharray="3 1" opacity="0.8"/>
                <circle cx="0" cy="-2" r="20" stroke="url(#goldGradient)" stroke-width="1.8" fill="#000000"/>
                
                <!-- Inverted Pentagram (Star) -->
                <!-- Points: Bottom, Top-Left, Top-Right, Bottom-Left, Bottom-Right -->
                <polygon points="0,17 -11,-15 17,-4 -17,-4 11,-15" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                
                <!-- Little flame on top -->
                <path d="M-4 -23 Q0 -34 4 -23 Q0 -18 -4 -23 Z" fill="url(#goldGradient)" opacity="0.9"/>
                <path d="M-1.5 -22 Q0 -28 1.5 -22 Q0 -19 -1.5 -22 Z" fill="#000000"/>
            </g>
        `)
    },
    {
        id: "tower",
        name: "高塔 (The Tower)",
        number: "XVI",
        keywords: "驟變、崩解、啟示、解放、重建面臨危機",
        upright: "高塔正位是一張震撼的牌，代表虛假的建制、謊言或過時觀念面臨突如其來的崩裂。雖然驟變伴隨著痛苦與混亂，但這是一次彻底清除腐朽根基的強烈解放，讓你能重建真正真實的未來。",
        reversed: "高塔逆位暗示著你在極力避免一場不可避免的風暴，或是危機正在緩緩降臨，痛苦被拉長。請不要死守著即將坍塌的斷垣殘壁，主動放手重建，傷害反而能降到最低。",
        desc: "一道刺眼的金色雷霆劈入一座高聳的城堡塔頂，高塔從頂端粉碎崩塌，四周有碎石與飛旋的星火在夜空中墜落，象徵舊觀念的崩解與真理天啟的解放。",
        svg: createOccultCardFront(`
            <!-- Lightning Striking Tower Art -->
            <g transform="translate(50, 75)">
                <!-- Falling debris dots -->
                <circle cx="-25" cy="5" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="-18" cy="22" r="1.2" fill="url(#goldGradient)"/>
                <circle cx="20" cy="-10" r="1" fill="url(#goldGradient)"/>
                <circle cx="28" cy="18" r="1.5" fill="url(#goldGradient)"/>
                
                <!-- Lightning Bolt (Shattering from top right) -->
                <path d="M30 -38 L10 -15 L20 -15 L0 10 L-6 2" stroke="url(#goldGradient)" stroke-width="2" fill="none" opacity="0.95"/>
                <path d="M10 -15 L-5 -3 L2 -3 L-12 15" stroke="url(#goldGradient)" stroke-width="1.2" fill="none" opacity="0.8"/>
                
                <!-- Tower Base (Slightly tilted/cracked) -->
                <!-- Ruined battlements -->
                <path d="M-10 -15 L-12 28 H12 L10 -15 L5 -12 L0 -16 L-5 -12 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.8"/>
                
                <!-- Large lightning cracks on tower body -->
                <path d="M-4 -2 L2 8 L-3 18" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <path d="M6 5 L0 12" stroke="url(#goldGradient)" stroke-width="0.8"/>
                
                <!-- Debris smoke curls -->
                <path d="M-22 30 Q-10 20 0 28" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.6"/>
                <path d="M10 28 Q22 24 16 34" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.6"/>
            </g>
        `)
    },
    {
        id: "star",
        name: "星星 (The Star)",
        number: "XVII",
        keywords: "希望、信念、寧靜、啟迪、靈魂淨化",
        upright: "星星正位是一張充滿祝福、安寧與希望的牌。經歷了高塔的風暴，夜空中最亮的那顆星正指引著你。保持信念，你的身心正得到滋養與淨化，光明與美好就在前方。",
        reversed: "星星逆位提醒你可能暫時失去了信念、感到迷茫失望、或陷入了悲觀情緒中。你是否把期望定得過高而感到受挫？請相信，烏雲背後的繁星從未消失，希望很快便會重燃。",
        desc: "一顆巨大的八角星耀眼地高懸在正中心，周圍環繞著七顆精緻的小星斗，下方是兩道代表靈魂甘露與潛意識源泉的黃金水流曲線，象徵無限希望與靈魂淨化。",
        svg: createOccultCardFront(`
            <!-- Major Star and 7 small stars Art -->
            <g transform="translate(50, 75)">
                <!-- Radiating Light Rings -->
                <circle cx="0" cy="-10" r="28" stroke="url(#goldGradient)" stroke-width="0.4" stroke-dasharray="4 4" opacity="0.5"/>
                
                <!-- Central Giant Star (8 Points) -->
                <g transform="translate(0, -12)">
                    <path d="M0 -22 L4 -5 L22 -5 L7 3 L12 20 L0 8 L-12 20 L-7 3 L-22 -5 L-4 -5 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.8"/>
                    <!-- Inner Star -->
                    <path d="M0 -10 L2 -2 L10 -2 L3 1 L5 10 L0 4 L-5 10 L-3 1 L-10 -2 L-2 -2 Z" fill="url(#goldGradient)"/>
                </g>
                
                <!-- 7 Small Stars flanking around -->
                <circle cx="-25" cy="-28" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="25" cy="-28" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="-32" cy="-10" r="1" fill="url(#goldGradient)"/>
                <circle cx="32" cy="-10" r="1" fill="url(#goldGradient)"/>
                <circle cx="-22" cy="10" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="22" cy="10" r="1.5" fill="url(#goldGradient)"/>
                <circle cx="0" cy="14" r="2.2" fill="url(#goldGradient)"/>

                <!-- Twin Pouring Streams (Water of Life) -->
                <path d="M-15 28 Q-5 18 10 24" stroke="url(#goldGradient)" stroke-width="1.2" fill="none"/>
                <path d="M15 28 Q5 18 -10 24" stroke="url(#goldGradient)" stroke-width="1" fill="none" opacity="0.7"/>
            </g>
        `)
    },
    {
        id: "moon",
        name: "月亮 (The Moon)",
        number: "XVIII",
        keywords: "不安、幻覺、恐懼、直覺、迷茫",
        upright: "月亮正位代表未知帶來的焦慮、迷茫與不安。事情的真相可能被迷霧籠罩，容易產生幻覺或誤解。此時請信任你的直覺，慢慢摸索前行，警惕隱藏的欺騙。",
        reversed: "月亮逆位象徵著迷霧即將散去，真相浮出水面。你心中的恐懼與不安正在減少，誤會得以澄清。這是一個重獲清晰視野、告別焦慮情緒的好兆頭。",
        desc: "一輪碩大的黃金雙重半月牙，中央星光閃耀，下方是兩座高聳的石塔，一隻野狼朝著夜空狂吠，下方象徵潛意識的水波中爬出一隻小龍蝦，象徵內在的夢境與潛意識幻覺。",
        svg: createOccultCardFront(`
            <!-- Ornate Moon & Twin Towers Art (User Image Card 2 variation) -->
            <g transform="translate(50, 75)">
                <!-- Radiating rays background -->
                <path d="M-30 -25 Q0 -40 30 -25" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.4"/>
                
                <!-- Giant Double Moon (Crescent Moon nested in Full Moon) -->
                <circle cx="0" cy="-15" r="20" stroke="url(#goldGradient)" stroke-width="1" fill="#000000" fill-opacity="0.1"/>
                <path d="M-20 -15 C-20 5, 20 5, 20 -15 C10 -8, -10 -8, -20 -15 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                <!-- Center star of moon -->
                <polygon points="0,-18 1.5,-14 5,-14 2,-12 3.5,-8 0,-10 -3.5,-8 -2,-12 -5,-14 -1.5,-14" fill="url(#goldGradient)"/>
                
                <!-- Twin Towers (Left and Right) -->
                <rect x="-32" y="5" width="8" height="30" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <rect x="24" y="5" width="8" height="30" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                <polygon points="-34,5 -28,5 -31,0" fill="url(#goldGradient)"/>
                <polygon points="22,5 28,5 25,0" fill="url(#goldGradient)"/>
                
                <!-- Howling Wolf (Left) -->
                <path d="M-15 30 L-12 25 L-15 22 L-10 22 L-8 30 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                
                <!-- Crawling Crayfish / Water below -->
                <path d="M-35 32 Q0 25 35 32" stroke="url(#goldGradient)" stroke-width="1.2"/>
                <path d="M-20 35 Q0 30 20 35" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.6"/>
            </g>
        `)
    },
    {
        id: "sun",
        name: "太陽 (The Sun)",
        number: "XIX",
        keywords: "成功、喜悅、光明、活力、自信",
        upright: "太陽正位是塔羅牌中極其幸運的牌。它代表活力、成功、喜悅與全然的自信。你的前路一片光明，所有陰霾都已被驅散。盡情展現自我，分享你的溫暖與熱情吧。",
        reversed: "太陽逆位代表短暫的烏雲籠罩，或是過度自信引發的自負。你可能感到有些疲憊，或者遭遇了小挫折。但請放心，太陽的光芒只是被暫時遮擋，溫暖很快就會回來。",
        desc: "一個光芒四射的萬丈金太陽，正中心浮現出一隻高貴的神秘全能之眼，四周射出波浪形與直線形的粗細金光束，極具震撼與喜悅活力的神秘風格。",
        svg: createOccultCardFront(`
            <!-- Ornate Sun & Central Eye Art (User Image Card 4) -->
            <g transform="translate(50, 75)">
                <!-- Radiating Sunburst Rays -->
                <!-- Long Straight Rays -->
                <path d="M-38 0 H38 M0 -38 V38 M-27 -27 L27 27 M-27 27 L27 -27" stroke="url(#goldGradient)" stroke-width="0.8" opacity="0.65"/>
                <!-- Alternating wavy rays -->
                <path d="M0 0 Q-15 -35 -20 -30 M0 0 Q15 -35 20 -30 M0 0 Q-35 -15 -30 -20 M0 0 Q35 15 30 20 M0 0 Q-15 35 -20 30 M0 0 Q15 35 20 30 M0 0 Q35 -15 30 -20 M0 0 Q-35 15 -30 20" stroke="url(#goldGradient)" stroke-width="0.5" fill="none" opacity="0.5"/>
                
                <!-- Outer Ring of Sun Core -->
                <circle cx="0" cy="0" r="18" stroke="url(#goldGradient)" stroke-width="1.5" fill="#000000"/>
                <circle cx="0" cy="0" r="15" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6"/>
                
                <!-- Central Mystic Eye -->
                <g transform="translate(0, 0)">
                    <!-- Eye Outline -->
                    <path d="M-8 0 C-3 -5, 3 -5, 8 0 C3 5, -3 5, -8 0 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                    <!-- Pupil -->
                    <circle cx="0" cy="0" r="2.8" stroke="url(#goldGradient)" stroke-width="0.8" fill="url(#goldGradient)" fill-opacity="0.3"/>
                    <circle cx="0" cy="0" r="1.1" fill="url(#goldGradient)"/>
                </g>
            </g>
        `)
    },
    {
        id: "judgement",
        name: "審判 (Judgement)",
        number: "XX",
        keywords: "覺醒、呼喚、重生、重大決定、業力清算",
        upright: "審判正位代表著靈魂的覺醒與關鍵命運之鐘的敲響。你正受到某種崇高使命的感召，是時候清算過去、告別舊生活並做出決定人生的重大選擇了。重生即在眼前。",
        reversed: "審判逆位警告你在逃避命運的呼喚，不肯面對業力清算，或是拖延重大決定。懷疑與退縮只會讓機會流逝。請鼓起勇氣，誠實面對靈魂的召喚，跨向新生活。",
        desc: "一把從雲霧中伸出的金色天使號角，號角口散發著強烈呈幾何三角形的光芒束，正中刻有代表復活與救贖的神聖十字符號，象徵覺醒召喚與靈魂救贖。",
        svg: createOccultCardFront(`
            <!-- Angel Trumpet & Awakening Cross Art -->
            <g transform="translate(50, 75)">
                <!-- Radiating expansion circles -->
                <ellipse cx="0" cy="-10" rx="34" ry="24" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="5 3" opacity="0.4"/>
                
                <!-- Sacred Cross Emblem (Center-right background) -->
                <g transform="translate(18, 5) scale(0.85)">
                    <line x1="0" y1="-15" x2="0" y2="15" stroke="url(#goldGradient)" stroke-width="1.8"/>
                    <line x1="-10" y1="-5" x2="10" y2="-5" stroke="url(#goldGradient)" stroke-width="1.8"/>
                    <rect x="-12" y="-17" width="24" height="24" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6"/>
                </g>
                
                <!-- Angel Trumpet / Horn (Leaning from top-left to bottom-right) -->
                <g transform="translate(-10, -15) rotate(25)">
                    <!-- Horn Tube -->
                    <path d="M-22 0 L15 0" stroke="url(#goldGradient)" stroke-width="2.5"/>
                    <!-- Bell / Mouthpiece -->
                    <polygon points="15,-2 15,2 25,7 25,-7" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.5"/>
                    <!-- Banner hanging from horn -->
                    <rect x="-5" y="1" width="16" height="12" fill="#000000" stroke="url(#goldGradient)" stroke-width="1"/>
                    <!-- Banner cross pattern -->
                    <line x1="-5" y1="1" x2="11" y2="13" stroke="url(#goldGradient)" stroke-width="0.6"/>
                    <line x1="11" y1="1" x2="-5" y2="13" stroke="url(#goldGradient)" stroke-width="0.6"/>
                </g>
                
                <!-- Clouds of Resurrection (Bottom) -->
                <path d="M-30 28 Q-12 18 5 28 Q18 20 30 28 L-30 28 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
            </g>
        `)
    },
    {
        id: "world",
        name: "世界 (The World)",
        number: "XXI",
        keywords: "圓滿、成就、整合、旅行、圓滿結束",
        upright: "世界牌正位象徵著一段旅程的圓滿結束與成功。你已經達成了階段性的目標，內心感到無比的和諧與充實。這個世界正在為你喝采，準備迎接更廣闊的新舞台吧。",
        reversed: "世界牌逆位代表事情接近完成，但仍差臨門一腳，或是你對圓滿感到抗拒。你可能感到有些遺憾或未竟之志。請總結經驗，堅持下去，成功就在不遠處。",
        desc: "一尊精巧的金色曼陀羅地球軌道運轉儀，最中心一輪美麗的雙月捧托著閃亮的星曜，外圍有桂冠狀環繞的橄欖葉軌道，象徵大宇宙秩序的和諧、圓滿與旅程完結。",
        svg: createOccultCardFront(`
            <!-- World Mandala Orbit / Sun-Moon Art (User Image Card 8 style) -->
            <g transform="translate(50, 75)">
                <!-- Mandorla Oval/Circle wreath -->
                <ellipse cx="0" cy="0" rx="26" ry="34" stroke="url(#goldGradient)" stroke-width="1.5" stroke-dasharray="6 2"/>
                <ellipse cx="0" cy="0" rx="29" ry="37" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.4"/>
                
                <!-- Inner Sun-Moon Core -->
                <g transform="translate(0, 0)">
                    <!-- Crescent Moon -->
                    <path d="M-12 -12 C-12 12, 12 12, 12 -12 C 5 -4, -5 -4, -12 -12 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
                    <!-- Star Center -->
                    <polygon points="0,-9 2,-2 9,0 2,2 0,9 -2,2 -9,0 -2,-2" fill="url(#goldGradient)"/>
                    <circle cx="0" cy="0" r="1.5" fill="#000000"/>
                </g>

                <!-- Four Corner Guardian Elements symbols -->
                <!-- Angel (Top Left) -->
                <g transform="translate(-25, -28) scale(0.6)">
                    <circle cx="0" cy="-3" r="2.5" stroke="url(#goldGradient)" fill="url(#goldGradient)" fill-opacity="0.3"/>
                    <path d="M-6 5 C-6 0, 6 0, 6 5 Z" stroke="url(#goldGradient)" fill="none"/>
                </g>
                <!-- Eagle (Top Right) -->
                <g transform="translate(25, -28) scale(0.6)">
                    <polygon points="0,-5 4,2 -4,2" fill="url(#goldGradient)"/>
                    <line x1="0" y1="0" x2="-6" y2="-2" stroke="url(#goldGradient)"/>
                    <line x1="0" y1="0" x2="6" y2="-2" stroke="url(#goldGradient)"/>
                </g>
                <!-- Bull (Bottom Left) -->
                <g transform="translate(-25, 28) scale(0.6)">
                    <rect x="-4" y="-3" width="8" height="6" rx="1.5" stroke="url(#goldGradient)" fill="none"/>
                    <path d="M-4 -3 Q0 -7 4 -3" stroke="url(#goldGradient)" fill="none"/>
                </g>
                <!-- Lion (Bottom Right) -->
                <g transform="translate(25, 28) scale(0.6)">
                    <circle cx="0" cy="-2" r="3.5" stroke="url(#goldGradient)" fill="none"/>
                    <path d="M-3 2 C-5 8, 3 8, 3 2" stroke="url(#goldGradient)" fill="none"/>
                </g>
            </g>
        `)
    }
];

// Dynamically generate the 56 Minor Arcana card items using the exquisite black & gold vector style.
const SUITS = ['wands', 'cups', 'swords', 'pentacles'];
const SUIT_NAMES = {
    wands: { zh: '權杖', en: 'Wands', key: '火', color: '#e2833e' },
    cups: { zh: '聖杯', en: 'Cups', key: '水', color: '#38bdf8' },
    swords: { zh: '寶劍', en: 'Swords', key: '風', color: '#cbd5e1' },
    pentacles: { zh: '錢幣', en: 'Pentacles', key: '土', color: '#34d399' }
};

const CARD_NUMBERS = [
    { num: 'Ace', zh: '一 (Ace)', keywords: { wands: '靈感、新起點、創造力', cups: '情感、愛、新關係', swords: '突破、清晰、力量', pentacles: '富足、機遇、物質基礎' } },
    { num: '2', zh: '二 (Two)', keywords: { wands: '規劃、決策、遠見', cups: '合夥、吸引、連結', swords: '僵局、逃避、猶豫', pentacles: '平衡、適應、多工' } },
    { num: '3', zh: '三 (Three)', keywords: { wands: '拓展、合作、展望', cups: '慶祝、友誼、團體', swords: '傷心、失落、背叛', pentacles: '團隊合作、技能、榮譽' } },
    { num: '4', zh: '四 (Four)', keywords: { wands: '穩固、家園、歡慶', cups: '冷漠、沉思、錯失', swords: '休息、復原、沉思', pentacles: '守財、保守、安全感' } },
    { num: '5', zh: '五 (Five)', keywords: { wands: '衝突、競爭、爭吵', cups: '悲傷、失望、遺憾', swords: '失敗、自私、不擇手段', pentacles: '貧困、孤立、物質困境' } },
    { num: '6', zh: '六 (Six)', keywords: { wands: '勝利、榮譽、好消息', cups: '懷舊、童真、慷慨', swords: '渡過難關、療癒、旅行', pentacles: '施予、慷慨、慈善' } },
    { num: '7', zh: '七 (Seven)', keywords: { wands: '防衛、挑戰、毅力', cups: '幻想、選擇、誘惑', swords: '欺騙、暗中行動、逃避', pentacles: '耐心、收穫、評估' } },
    { num: '8', zh: '八 (Eight)', keywords: { wands: '迅速、行動、溝通', cups: '放棄、尋求真理、離去', swords: '受困、無力感、束縛', pentacles: '專注、精進、工匠精神' } },
    { num: '9', zh: '九 (Nine)', keywords: { wands: '防備、堅持、最後關頭', cups: '滿足、願望成真、享樂', swords: '焦慮、失眠、恐懼', pentacles: '獨立、富足、自我實現' } },
    { num: '10', zh: '十 (Ten)', keywords: { wands: '重擔、壓力、過度操勞', cups: '幸福、家庭和諧、圓滿', swords: '慘敗、結束、黎明前黑暗', pentacles: '傳承、繁榮、家庭財富' } },
    { num: 'Page', zh: '侍從 (Page)', keywords: { wands: '熱情、冒險、消息', cups: '直覺、敏感、新消息', swords: '好奇心、警覺、心智活動', pentacles: '學習、務實、新起點' } },
    { num: 'Knight', zh: '騎士 (Knight)', keywords: { wands: '衝動、行動力、挑戰', cups: '浪漫、追求、情感邀約', swords: '急躁、衝鋒、心智敏捷', pentacles: '可靠、勤奮、例行公事' } },
    { num: 'Queen', zh: '皇后 (Queen)', keywords: { wands: '熱情、自信、慷慨', cups: '直覺、同理心、溫柔', swords: '理性、獨立、冷靜', pentacles: '慷慨、務實、豐盛安全' } },
    { num: 'King', zh: '國王 (King)', keywords: { wands: '領導力、遠見、掌控力', cups: '情感掌控、智慧、寬容', swords: '權威、真理、冷酷理性', pentacles: '成功、富裕、安全保障' } }
];

// Helper to draw geometric/occult suit emblems for card designs
function getSuitEmblemSVG(suit, x, y, scale = 1) {
    if (suit === 'wands') {
        // Occult Fire wand / torch
        return `<g transform="translate(${x}, ${y}) scale(${scale})">
            <line x1="0" y1="-8" x2="0" y2="8" stroke="url(#goldGradient)" stroke-width="1.6"/>
            <path d="-3.5 -5.5 Q0 -11.5 3.5 -5.5" stroke="url(#goldGradient)" stroke-width="1" fill="none"/>
            <path d="-3.5 5.5 Q0 11.5 3.5 5.5" stroke="url(#goldGradient)" stroke-width="1" fill="none"/>
            <path d="-2.2 -2.8 Q-6 -0.8 -2.2 1.2" stroke="url(#goldGradient)" stroke-width="0.7" fill="none" opacity="0.8"/>
            <path d="M2.2 -1.2 Q6 0.8 2.2 2.8" stroke="url(#goldGradient)" stroke-width="0.7" fill="none" opacity="0.8"/>
        </g>`;
    } else if (suit === 'cups') {
        // Occult Water Cup
        return `<g transform="translate(${x}, ${y}) scale(${scale})">
            <path d="M-6 -8 H6 V-3 C6 3, -6 3, -6 -3 Z" fill="#000000" stroke="url(#goldGradient)" stroke-width="1.3"/>
            <line x1="-7" y1="-8" x2="7" y2="-8" stroke="url(#goldGradient)" stroke-width="1"/>
            <line x1="0" y1="0" x2="0" y2="8" stroke="url(#goldGradient)" stroke-width="1.3"/>
            <rect x="-4" y="6" width="8" height="2" fill="url(#goldGradient)"/>
            <!-- water drop -->
            <circle cx="0" cy="-11" r="1.2" fill="url(#goldGradient)"/>
        </g>`;
    } else if (suit === 'swords') {
        // Occult Sword
        return `<g transform="translate(${x}, ${y}) scale(${scale})">
            <line x1="0" y1="-11" x2="0" y2="7" stroke="url(#goldGradient)" stroke-width="1.5"/>
            <line x1="-5" y1="3" x2="5" y2="3" stroke="url(#goldGradient)" stroke-width="1.5"/>
            <circle cx="0" cy="9" r="1.5" fill="url(#goldGradient)"/>
            <path d="M-2 -8 L0 -12 L2 -8" stroke="url(#goldGradient)" stroke-width="1" fill="#000000"/>
        </g>`;
    } else if (suit === 'pentacles') {
        // Occult Star Pentacle Coin
        return `<g transform="translate(${x}, ${y}) scale(${scale})">
            <circle cx="0" cy="0" r="7" stroke="url(#goldGradient)" stroke-width="1.3" fill="#000000"/>
            <circle cx="0" cy="0" r="5" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="1 1" opacity="0.6"/>
            <!-- star -->
            <polygon points="0,-4.5 1.3,-1.2 4.5,-1.2 2,1 3,4.2 0,2 -3,4.2 -2,1 -4.5,-1.2 -1.3,-1.2" fill="url(#goldGradient)"/>
        </g>`;
    }
    return '';
}

// Bespoke, hand-written upright/reversed interpretations for all 56 Minor
// Arcana cards (paraphrased original wording, informed by the standard,
// widely-taught Rider-Waite-Smith reading for each card — not copied
// verbatim from any single source). Previously every Minor Arcana card
// shared one generic templated sentence differing only by suit/keyword;
// this replaces that with a genuinely distinct reading per card, matching
// the depth already given to the 22 Major Arcana. Keyed by "<suit>_<num>"
// using the same lowercase id scheme as the rest of this file (e.g.
// "wands_ace", "cups_2", "swords_king").
const MINOR_MEANINGS = {
    wands_ace: { upright: "權杖一代表全新靈感與創造力的迸發，就像一把充滿生命力的火炬點燃了眼前的可能性。這是展開新計畫、新事業或新熱情的絕佳時機，請把握這股一觸即發的衝勁，勇敢跨出第一步。", reversed: "權杖一逆位暗示靈感遲遲無法落地，或是熱情正在消退、計畫一再延宕。你可能對方向感到猶豫不決，或是缺乏足夠的資源與動力去啟動，請重新找回讓自己心動的初衷。" },
    wands_2: { upright: "權杖二代表站在十字路口上規劃未來藍圖，你已經有了初步的成果，現在是放眼更遠大目標的時候。適合評估選項、擬定策略，並且勇敢地把眼光放向外面更廣闊的世界。", reversed: "權杖二逆位暗示對未知的恐懼讓你遲遲不敢跨出舒適圈，或是計畫缺乏清晰的方向而原地打轉。你可能因為害怕承擔風險而放棄了原本值得一試的機會，提醒自己重新拾回勇氣。" },
    wands_3: { upright: "權杖三代表計畫開始擴展、開花結果，你先前的布局正在逐漸看到成效。適合放眼未來、與人合作拓展版圖，耐心等待遠方的機會隨著船隻歸來。", reversed: "權杖三逆位暗示擴展計畫遇到阻礙，進度比預期緩慢，或是與夥伴之間出現協調上的落差。長遠的眼光可能暫時受阻，請重新檢視策略，調整步伐後再出發。" },
    wands_4: { upright: "權杖四代表值得慶祝的里程碑，家庭、團隊或社群之間洋溢著歡慶與和諧的氣氛。這是穩固根基、享受眼前成果的好時機，也適合與親友一同慶祝這份得來不易的喜悅。", reversed: "權杖四逆位暗示原本該慶祝的時刻卻蒙上陰影，內部關係或家庭氣氛出現一些不和諧的雜音。慶典可能被延後或取消，提醒你先處理好眼前懸而未決的問題，再談歡聚。" },
    wands_5: { upright: "權杖五代表競爭、意見分歧與良性的較勁，眾人各自堅持己見、爭論不休。這股張力雖然帶來摩擦，卻也是激發創意與成長的契機，適合在衝突中學習尊重不同的聲音。", reversed: "權杖五逆位暗示衝突正在逐漸平息，或是原本的競爭關係找到了化解的方式。也可能代表你正在迴避一場遲早要面對的爭論，提醒自己該正面處理而非視而不見。" },
    wands_6: { upright: "權杖六代表凱旋而歸、贏得眾人肯定的高光時刻，你的努力終於獲得應有的掌聲與認可。這是享受成功、抬頭挺胸接受讚美的好時機，也適合善用這股氣勢邁向下一個目標。", reversed: "權杖六逆位暗示遲來的肯定、被忽視的努力，或是對自己的成就感到心虛不安。你可能因為過度在意他人的評價而感到失落，提醒自己成功的定義不必只由外界來裁定。" },
    wands_7: { upright: "權杖七代表堅守立場、勇敢捍衛自己的信念與成果，即使四面受敵仍然屹立不搖。這是需要展現毅力與勇氣的時刻，只要站穩腳步，你就能守住得來不易的優勢。", reversed: "權杖七逆位暗示你在壓力之下逐漸失去信心，開始懷疑自己是否還有能力捍衛立場。四面而來的挑戰讓你感到疲於招架，提醒自己適時尋求支援，而不是獨自硬撐。" },
    wands_8: { upright: "權杖八代表事情正以飛快的速度推進，消息、機會與行動接連而來，毫不停歇。這是把握時機、迅速行動的好時候，只要方向正確，進展會比你預期的更加順利。", reversed: "權杖八逆位暗示計畫出現延誤、溝通產生誤解，原本該加速的事情卻卡在原地。挫折感可能讓你心浮氣躁，提醒自己先釐清問題根源，而不是一味催促求快。" },
    wands_9: { upright: "權杖九代表歷經多次考驗後仍堅守崗位的韌性，你已經傷痕累累卻依然選擇不放棄。這是最後衝刺前的關鍵時刻，提醒你儘管疲憊，勝利其實已經近在眼前。", reversed: "權杖九逆位暗示長期的防備心讓你身心俱疲，甚至開始懷疑自己是否還能撐下去。過度戒備也可能讓你把身邊的人都當成假想敵，提醒自己適度放下心防、尋求協助。" },
    wands_10: { upright: "權杖十代表肩負沉重的責任與壓力，你可能已經攬下超出負荷的工作或義務。這是提醒你重新檢視分工、學會適度放手的時刻，成功不該用犧牲健康作為代價。", reversed: "權杖十逆位暗示終於卸下重擔，或是意識到自己不需要獨自扛起所有責任。也可能代表壓力已經累積到臨界點，提醒你正視過勞的警訊，及早尋求分擔與支援。" },
    wands_page: { upright: "權杖侍從代表對新事物充滿熱情與好奇的探索者，帶著初生之犢的勇氣準備冒險。這是嘗試新想法、擁抱冒險精神的好時機，適合以開放的心態迎接還不熟悉的領域。", reversed: "權杖侍從逆位暗示三分鐘熱度、計畫尚未成熟就急著行動，容易半途而廢。你可能還缺乏足夠的準備或耐心，提醒自己先把基礎打穩，再談大展身手。" },
    wands_knight: { upright: "權杖騎士代表充滿行動力與冒險精神，帶著滿腔熱血勇往直前、不畏艱難。這是積極出擊、大膽追求目標的時機，只要保持衝勁，機會就會在行動中逐漸浮現。", reversed: "權杖騎士逆位暗示衝動行事、欠缺周全規劃，容易因為魯莽而讓局面失控。過度躁進可能讓你顧此失彼，提醒自己在行動前先冷靜評估風險。" },
    wands_queen: { upright: "權杖皇后代表自信、熱情且充滿魅力的領導者，懂得溫暖待人也懂得堅持自己的方向。這是展現個人魅力、勇敢做自己的好時機，你的自信會自然而然吸引他人的支持。", reversed: "權杖皇后逆位暗示信心動搖、容易因為外界眼光而患得患失，或是過度強勢而顯得咄咄逼人。提醒自己重新找回內在的篤定，不需要靠他人的肯定來證明自己的價值。" },
    wands_king: { upright: "權杖國王代表具有遠見與魄力的領導者，能夠將宏大的願景轉化為實際的成果。這是發揮領導力、承擔更大責任的時機，你的果斷與熱情能夠帶領團隊邁向成功。", reversed: "權杖國王逆位暗示獨斷專行、聽不進他人意見，或是空有雄心卻缺乏具體的執行力。過度的控制欲可能讓身邊的人感到窒息，提醒自己學習授權與傾聽。" },

    cups_ace: { upright: "聖杯一代表全新情感能量的湧現，就像一只滿溢的杯子承載著愛、直覺與創造力。這是敞開心房、迎接新關係或新靈感的好時機，允許自己單純地感受這份純粹的喜悅。", reversed: "聖杯一逆位暗示情感受到壓抑，或是內心感到空虛卻找不到宣洩的出口。你可能對表達真實感受感到卻步，提醒自己重新練習向自己與他人敞開心房。" },
    cups_2: { upright: "聖杯二代表兩心相印、彼此吸引的和諧連結，象徵一段平等而深刻的關係正在萌芽。這是建立信任、深化情感連結的好時機，適合珍惜眼前這份難得的心意相通。", reversed: "聖杯二逆位暗示關係中出現失衡，溝通不良或價值觀落差讓彼此漸行漸遠。也可能代表一段連結正走向分裂，提醒你誠實面對彼此之間需要修補的裂痕。" },
    cups_3: { upright: "聖杯三代表歡聚、友誼與值得慶祝的好消息，你身邊的支持系統正在為你帶來溫暖與力量。這是與朋友歡慶、享受團體歸屬感的好時機，好好珍惜這份陪伴的情誼。", reversed: "聖杯三逆位暗示團體中出現了小摩擦、八卦或是過度沉溺於享樂而忽略了重要的事。也可能代表你感到被團體排除在外，提醒自己重新檢視這些關係是否仍然滋養你。" },
    cups_4: { upright: "聖杯四代表對眼前事物感到冷漠與提不起勁，即使機會就在面前，你卻沉浸在自己的思緒裡。這是提醒你重新張開眼睛、留意生活中可能被忽略的美好的時刻。", reversed: "聖杯四逆位暗示你正逐漸走出麻木與冷漠，重新對生活燃起興趣與期待。也可能代表一個新的機會終於被你注意到，提醒自己勇敢地伸手接住它。" },
    cups_5: { upright: "聖杯五代表沉浸在失落與遺憾之中，眼睛只盯著打翻的杯子，卻沒看見身後仍然站立的兩只。這是提醒你允許自己悲傷，但也別忘了轉身看見還擁有的一切。", reversed: "聖杯五逆位暗示你正在慢慢從傷痛中走出來，開始願意放下過去、重新往前看。這是療癒與釋懷的階段，提醒自己給自己多一點時間與溫柔。" },
    cups_6: { upright: "聖杯六代表懷舊、純真與溫暖的情感連結，過去美好的回憶或舊識可能重新出現在生命中。這是珍惜單純情誼、以赤子之心待人的好時機，慷慨分享你所擁有的溫暖。", reversed: "聖杯六逆位暗示過度沉溺於過去，難以放下懷舊的濾鏡活在當下。也可能代表某段舊關係帶著不切實際的期待重新靠近，提醒自己以現在的眼光重新評估。" },
    cups_7: { upright: "聖杯七代表眼前充滿各種誘人的選項與幻想，讓人眼花撩亂、難以分辨真實與夢幻。這是提醒你先看清每個選擇背後的真相，而不是被表面的美好迷惑。", reversed: "聖杯七逆位暗示迷霧正在散去，你終於能看清哪些選項是真實可行、哪些只是空想。這是做出清醒決定的好時機，提醒自己相信自己辨別真偽的能力。" },
    cups_8: { upright: "聖杯八代表儘管眼前擁有一定的成果，內心卻感覺到某種缺失，促使你轉身尋找更深層的意義。這是允許自己放下表面的滿足、勇敢追尋內心真正渴望的時刻。", reversed: "聖杯八逆位暗示你害怕改變而勉強留在早已不再滿足的處境裡，遲遲無法邁開腳步。也可能代表你正處於猶豫不決的階段，提醒自己誠實面對內心真正的聲音。" },
    cups_9: { upright: "聖杯九代表願望實現、心滿意足的豐盛狀態，你正享受著努力後應得的喜悅與滿足。這是感恩當下、慶祝自己所擁有的一切的好時機，好好享受這份踏實的幸福感。", reversed: "聖杯九逆位暗示表面上看似滿足，內心卻仍有一絲空虛或不滿足感揮之不去。也可能代表過度耽溺於物質享樂，提醒自己重新省思什麼才是真正讓你快樂的事。" },
    cups_10: { upright: "聖杯十代表家庭美滿、情感圓滿的幸福狀態，你與所愛之人共享著深刻的和諧與歸屬感。這是珍惜身邊親密關係、享受這份得來不易的幸福的好時機。", reversed: "聖杯十逆位暗示家庭或關係表面和諧，實際上卻藏著尚未解決的裂痕或價值觀落差。也可能代表理想與現實之間出現落差，提醒你誠實面對需要修復的關係課題。" },
    cups_page: { upright: "聖杯侍從代表帶著純真直覺的情感訊息使者，對世界充滿好奇與細膩的感受力。這是敞開心去接收生活中細微驚喜與靈感的好時機，信任你天真而敏銳的直覺。", reversed: "聖杯侍從逆位暗示情緒尚未成熟，容易因為一時衝動或幻想而做出不切實際的判斷。也可能代表某個消息或訊號還不夠明確，提醒自己再多一點耐心求證。" },
    cups_knight: { upright: "聖杯騎士代表懷抱浪漫理想的追求者，帶著一份溫柔的邀約前來，可能是感情上的告白或創意上的提案。這是跟隨內心渴望、以真誠與詩意的方式表達情感的好時機。", reversed: "聖杯騎士逆位暗示言過其實、口惠而實不至，浪漫的承諾可能缺乏實際的行動支撐。也可能代表情緒起伏不定或帶著不切實際的幻想，提醒自己看清對方或自己是否真心誠意。" },
    cups_queen: { upright: "聖杯皇后代表溫柔且富有同理心的情感智慧，懂得傾聽自己與他人內心深處的聲音。這是以柔軟而堅定的心照顧自己與所愛之人的好時機，你的直覺此刻格外敏銳可靠。", reversed: "聖杯皇后逆位暗示情緒容易被牽動、過度敏感或陷入情緒化的反應中。也可能代表你把太多心力用在照顧別人，卻忽略了自己的情感需求，提醒自己適度回頭關照自己。" },
    cups_king: { upright: "聖杯國王代表情緒成熟穩定的智者，能夠在風浪中保持內心的平靜與寬容。這是以理性與同理心並重的方式處理感情與人際議題的好時機，你的沉穩會安撫身邊的人。", reversed: "聖杯國王逆位暗示表面冷靜、內心其實壓抑著波動的情緒，長期下來容易累積成內耗。也可能代表用情緒操控他人或逃避真實感受，提醒自己誠實面對內心真正的狀態。" },

    swords_ace: { upright: "寶劍一代表清晰的洞見與突破性的想法，如同利劍劃破迷霧，讓真相瞬間變得明朗。這是運用理性思考、勇敢說出真話的好時機，你的心智此刻格外銳利清晰。", reversed: "寶劍一逆位暗示思緒混亂、真相尚未浮現，或是溝通中出現誤解與混淆。你可能被過多的資訊淹沒而難以理出頭緒，提醒自己先沉澱下來，再重新釐清方向。" },
    swords_2: { upright: "寶劍二代表面臨兩難的抉擇而選擇暫時蒙眼逃避，遲遲無法下定決心。這是提醒你正視內心迴避已久的問題，唯有誠實面對，才能真正打破這個僵局。", reversed: "寶劍二逆位暗示你終於願意卸下防備、正視一直逃避的抉擇，僵局開始鬆動。也可能代表資訊過載讓你更加猶豫，提醒自己找到值得信任的人幫忙釐清思緒。" },
    swords_3: { upright: "寶劍三代表心碎、背叛或難以避免的傷痛，如同利劍直接刺穿心臟般真實而尖銳。這是允許自己感受悲傷、誠實面對傷口的時刻，唯有承認痛苦才能真正開始療癒。", reversed: "寶劍三逆位暗示傷痛正在慢慢癒合，你開始有能力放下過去、重新信任。也可能代表舊傷尚未痊癒卻被你強行壓抑，提醒自己給療癒足夠的時間與空間。" },
    swords_4: { upright: "寶劍四代表暫停腳步、讓身心徹底休息的必要階段，就像戰士卸下盔甲靜養傷勢。這是提醒你放慢步調、讓自己充分恢復的好時機，急躁只會拖慢真正的復原。", reversed: "寶劍四逆位暗示休息夠了，你已經準備好重新振作、回到行動的節奏中。也可能代表你正在勉強自己提前復出，提醒自己確認身心真的準備好了再出發。" },
    swords_5: { upright: "寶劍五代表贏了爭辯卻可能輸了關係，一時的勝利背後暗藏著人際上的代價。這是提醒你思考這場衝突是否真的值得，有時候讓步比爭贏更有智慧。", reversed: "寶劍五逆位暗示衝突正逐漸落幕，雙方都在學習放下敵意、尋求和解的可能。也可能代表過去的爭執仍留下未癒合的餘波，提醒自己主動修復受損的關係。" },
    swords_6: { upright: "寶劍六代表離開動盪、駛向平靜彼岸的過渡旅程，你正逐漸遠離風暴、走向更安穩的處境。這是允許自己放下過去包袱、迎向新開始的好時機。", reversed: "寶劍六逆位暗示你仍困在過渡期裡，遲遲無法真正放下、順利前行。也可能代表想要逃避的問題其實會如影隨形，提醒自己先處理好未竟之事再啟程。" },
    swords_7: { upright: "寶劍七代表暗中行動、不夠光明正大的策略，提醒你檢視自己或他人是否正在迴避誠實面對。這是提醒你三思而後行，別讓一時的算計壞了長遠的信任。", reversed: "寶劍七逆位暗示隱藏已久的真相即將被揭穿，欺瞞的行為終究藏不住。也可能代表你正準備坦承過去有所隱瞞的事，提醒自己誠實面對會比繼續掩蓋更輕鬆。" },
    swords_8: { upright: "寶劍八代表被自己的想法困住而動彈不得，其實限制你的枷鎖大多來自內心而非外在環境。這是提醒你重新檢視那些自我設限的信念，出路其實比想像中更近。", reversed: "寶劍八逆位暗示你正在找到脫困的方法，開始鬆綁那些困住自己已久的限制性想法。也可能代表你仍在害怕面對真正的自由，提醒自己勇敢跨出那一步。" },
    swords_9: { upright: "寶劍九代表深夜裡輾轉難眠的焦慮與恐懼，腦海中的擔憂往往比現實本身更加誇大。這是提醒你溫柔對待自己的焦慮，很多恐懼其實只存在於想像之中。", reversed: "寶劍九逆位暗示你正逐漸放下部分的憂慮，開始能夠喘一口氣、看清事情沒有想像中糟。也可能代表焦慮已經影響到日常生活，提醒自己尋求適度的支持與協助。" },
    swords_10: { upright: "寶劍十代表徹底的結束與谷底的處境，就像故事走到了最痛苦的終點。這雖然令人心痛，卻也代表最壞的情況已經發生，接下來只會慢慢好轉。", reversed: "寶劍十逆位暗示你正在從谷底緩慢復原，開始有力氣重新站起來面對生活。也可能代表你正拖延著承認某件事已經結束，提醒自己接受過去、才能真正向前走。" },
    swords_page: { upright: "寶劍侍從代表充滿好奇心與警覺性的心智探索者，對新資訊總是保持敏銳的觀察力。這是保持開放心態、蒐集足夠資訊再下判斷的好時機，別急著妄下結論。", reversed: "寶劍侍從逆位暗示八卦、謠言或不實訊息可能正在干擾你的判斷，讓人真假難辨。也可能代表你正衝動地散播未經證實的說法，提醒自己謹言慎行、多加查證。" },
    swords_knight: { upright: "寶劍騎士代表行動迅速、思路敏捷的挑戰者，帶著堅定的決心直奔目標而去。這是果斷行動、勇敢表達立場的好時機，只是別忘了兼顧周全的考量。", reversed: "寶劍騎士逆位暗示行事魯莽衝動，只顧著衝刺卻忽略了應有的準備與後果。過於急躁的態度可能讓你樹敵，提醒自己放慢腳步、三思而後行。" },
    swords_queen: { upright: "寶劍皇后代表理性獨立、洞察敏銳的智者，能夠不帶情緒地看清事情的真相。這是運用清晰的邏輯、誠實表達自己想法的好時機，你的直言能為局勢帶來清明。", reversed: "寶劍皇后逆位暗示過度批判或言詞尖銳，可能讓身邊的人感到被評判而心生防備。也可能代表你正用理性當作防禦，隱藏了內心真正的脆弱，提醒自己適度柔軟。" },
    swords_king: { upright: "寶劍國王代表公正理性、以真理為準則的權威者，能夠做出經得起檢驗的清晰判斷。這是運用邏輯與原則處理難題的好時機，你的決斷值得他人信賴。", reversed: "寶劍國王逆位暗示過於冷酷嚴苛，只講規則卻忽略了人情與同理心。也可能代表你正濫用權威或言語來控制他人，提醒自己在理性之外也保留一份溫度。" },

    pentacles_ace: { upright: "錢幣一代表一個扎實的新機會正在萌芽，無論是事業、財務或健康，都象徵著豐盛的起點。這是把握實際機會、為未來打下穩固基礎的好時機，值得認真投入耕耘。", reversed: "錢幣一逆位暗示機會延遲出現，或是基礎尚未穩固就急著擴張。你可能錯失了一個原本值得把握的機會，提醒自己先把根基打穩，再談長遠的發展。" },
    pentacles_2: { upright: "錢幣二代表在多項事務之間靈活調度、努力維持平衡的能力，你正巧妙地兼顧著不同的責任。這是保持彈性應變、適應變化節奏的好時機，別忘了保留餘裕給自己喘息。", reversed: "錢幣二逆位暗示分身乏術、難以兼顧多頭馬車，資源與時間都被拉扯到極限。財務或行程上可能出現失衡，提醒自己重新排出優先順序，別想著什麼都要做好。" },
    pentacles_3: { upright: "錢幣三代表透過團隊合作打造出扎實的成果，每個人的專業與分工都在這個過程中被看見。這是重視合作、精進技藝的好時機，攜手努力往往比單打獨鬥更有成效。", reversed: "錢幣三逆位暗示團隊合作出現分歧，各自為政或溝通不良讓成果打了折扣。也可能代表你的專業或努力沒有得到應有的認可，提醒自己主動協調、釐清彼此的角色分工。" },
    pentacles_4: { upright: "錢幣四代表緊緊守住既有的資源與成果，帶著一份想要掌控安全感的謹慎心態。這股穩固固然帶來踏實感，但也提醒你別因為太害怕失去而錯過了流動與成長的機會。", reversed: "錢幣四逆位暗示過度執著於掌控金錢或資源，反而因小失大、錯失了更大的機會。也可能代表你終於願意鬆開緊握的拳頭，學習適度地付出與分享。" },
    pentacles_5: { upright: "錢幣五代表資源匱乏、感覺被排除在外的艱難處境，物質或情感上的支持似乎都遙不可及。這是提醒你即使身處困境，身邊仍有你尚未看見的援助與出路。", reversed: "錢幣五逆位暗示最艱難的時期正在過去，處境開始慢慢好轉、資源逐漸恢復。也可能代表你終於願意接受他人伸出的援手，不再獨自硬撐。" },
    pentacles_6: { upright: "錢幣六代表公平的施與受，資源在給予與接受之間找到平衡的流動。這是慷慨分享自己所擁有、也懂得適時接受幫助的好時機，善意的循環會讓彼此都受益。", reversed: "錢幣六逆位暗示付出與回報之間出現不對等，可能是給予背後帶著條件，或是接受幫助時感到不自在。這提醒你檢視這段資源交換的關係是否真正健康。" },
    pentacles_7: { upright: "錢幣七代表在長期耕耘後停下腳步，評估目前的投入是否值得繼續下去。這是需要耐心等待成果、同時誠實檢視方向的好時機，收穫需要時間才能真正顯現。", reversed: "錢幣七逆位暗示努力已久卻遲遲看不到相應的回報，讓人開始懷疑是否走錯了方向。也可能代表你缺乏耐心、太早放棄了原本會有成果的投入，提醒自己重新評估後再決定去留。" },
    pentacles_8: { upright: "錢幣八代表專注投入、精益求精的工匠精神，你正透過反覆練習讓自己的技藝日趨純熟。這是深耕專業、腳踏實地累積實力的好時機，扎實的努力終將轉化為真本事。", reversed: "錢幣八逆位暗示對工作的熱情逐漸消退，品質開始打折扣，或是缺乏持續精進的動力。也可能代表你正在做著不適合自己的事，提醒自己重新找回讓你願意投入的初衷。" },
    pentacles_9: { upright: "錢幣九代表憑藉自己的努力獲得富足與自由，你正享受著獨立自主帶來的踏實與滿足。這是欣賞自己一路走來的成果、享受這份得來不易的自在的好時機。", reversed: "錢幣九逆位暗示表面上看似獨立自足，內心其實仍然依賴著他人的認可或支持。也可能代表過度專注在物質成就上，卻忽略了與人連結的重要性，提醒自己找回平衡。" },
    pentacles_10: { upright: "錢幣十代表家族與財富得以長久傳承的圓滿成就，你正在為長遠的未來打下穩固的基業。這是重視傳承、建立能夠延續下去的成果的好時機，值得為此感到踏實與驕傲。", reversed: "錢幣十逆位暗示家族或財務問題浮上檯面，可能涉及遺產、傳承或價值觀上的分歧。也可能代表物質上的成功無法填補內心真正的空缺，提醒自己重新省思什麼才是真正的富足。" },
    pentacles_page: { upright: "錢幣侍從代表務實而好學的新手，帶著踏實的態度展開一段學習或累積資源的旅程。這是投入時間打好基礎、認真規劃長期目標的好時機，一步一腳印會帶來扎實的成果。", reversed: "錢幣侍從逆位暗示計畫停留在紙上談兵，缺乏具體的行動去落實想法。也可能代表你三心二意、難以專注在單一目標上，提醒自己選定方向後就踏實地執行。" },
    pentacles_knight: { upright: "錢幣騎士代表穩紮穩打、值得信賴的實踐者，即使進展緩慢也堅持按部就班地完成任務。這是發揮耐心與毅力、腳踏實地推進計畫的好時機，穩健終將帶來可靠的成果。", reversed: "錢幣騎士逆位暗示過度墨守成規，害怕改變而讓進度停滯不前。也可能代表你因為過於謹慎保守而錯失了原本可以把握的機會，提醒自己適度保持彈性。" },
    pentacles_queen: { upright: "錢幣皇后代表務實且慷慨的照顧者，懂得在物質與情感上為自己與所愛之人創造安全感。這是兼顧現實與關懷、把日子過得踏實又溫暖的好時機，你的付出會滋養身邊的人。", reversed: "錢幣皇后逆位暗示過度操心瑣事或財務細節，反而讓自己身心疲憊、忽略了休息的需要。也可能代表你把太多心力放在照顧他人，提醒自己也該留一些餘裕照顧自己。" },
    pentacles_king: { upright: "錢幣國王代表穩健踏實、成就斐然的實業家，懂得運用資源創造長遠而穩固的成功。這是發揮務實的判斷力、建立可靠事業基礎的好時機，你的穩重會為他人帶來安全感。", reversed: "錢幣國王逆位暗示過度重視物質成就，可能因此忽略了健康、關係等其他同樣重要的面向。也可能代表財務決策趨於保守僵化，提醒自己在穩健之外也保留一些彈性與冒險精神。" },
};

// Generate the 56 Minor Arcana
const MINOR_ARCANA = [];
SUITS.forEach(suit => {
    const suitInfo = SUIT_NAMES[suit];
    CARD_NUMBERS.forEach((cardNum, idx) => {
        const id = `${suit}_${cardNum.num.toLowerCase()}`;
        const name = `${suitInfo.zh}${cardNum.zh} (${cardNum.num} of ${suitInfo.en})`;
        const numLabel = cardNum.num;
        
        // Bespoke reading from MINOR_MEANINGS (see its definition above for
        // rationale); falls back to the old generic templated sentence only
        // if a lookup entry is somehow missing, so this never breaks.
        const bespoke = MINOR_MEANINGS[id];
        const uprightMeaning = bespoke
            ? bespoke.upright
            : `${suitInfo.zh}${cardNum.zh}正位代表在${suitInfo.key}元素的引導下，迎來「${cardNum.keywords[suit]}」的狀態。這股能量能帶領您踏上務實的成長路徑，請善加運用您的意志與專注。`;
        const reversedMeaning = bespoke
            ? bespoke.reversed
            : `${suitInfo.zh}${cardNum.zh}逆位暗示著能量的過度溢出或受阻，可能處於「${cardNum.keywords[suit]}」的反面或極端狀態。請冷靜省思，調整心態，尋回內心的平衡。`;
        
        // Generate a beautiful, geometric pattern based on number
        let innerArt = `
            <!-- Radiating geometric background -->
            <circle cx="50" cy="75" r="32" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.4"/>
            <circle cx="50" cy="75" r="24" stroke="url(#goldGradient)" stroke-width="0.4" opacity="0.2"/>
        `;
        
        // Arrange emblems symmetrically based on type/number
        if (numLabel === 'Ace') {
            innerArt += getSuitEmblemSVG(suit, 50, 75, 2.5);
            // Flanking guide lines
            innerArt += `<line x1="50" y1="35" x2="50" y2="48" stroke="url(#goldGradient)" stroke-width="0.6" stroke-dasharray="2 2" />`;
            innerArt += `<line x1="50" y1="102" x2="50" y2="115" stroke="url(#goldGradient)" stroke-width="0.6" stroke-dasharray="2 2" />`;
        } else if (numLabel === '2') {
            innerArt += getSuitEmblemSVG(suit, 50, 48, 1.8);
            innerArt += getSuitEmblemSVG(suit, 50, 102, 1.8);
            innerArt += `<line x1="50" y1="62" x2="50" y2="88" stroke="url(#goldGradient)" stroke-width="0.6" opacity="0.5" />`;
        } else if (numLabel === '3') {
            innerArt += getSuitEmblemSVG(suit, 50, 42, 1.5);
            innerArt += getSuitEmblemSVG(suit, 32, 95, 1.5);
            innerArt += getSuitEmblemSVG(suit, 68, 95, 1.5);
            innerArt += `<path d="M50 48 L32 90 H68 Z" stroke="url(#goldGradient)" stroke-width="0.5" stroke-dasharray="2 2" fill="none" opacity="0.4"/>`;
        } else if (numLabel === '4') {
            innerArt += getSuitEmblemSVG(suit, 32, 48, 1.4);
            innerArt += getSuitEmblemSVG(suit, 68, 48, 1.4);
            innerArt += getSuitEmblemSVG(suit, 32, 102, 1.4);
            innerArt += getSuitEmblemSVG(suit, 68, 102, 1.4);
            innerArt += `<rect x="32" y="48" width="36" height="54" stroke="url(#goldGradient)" stroke-width="0.5" fill="none" opacity="0.3"/>`;
        } else if (numLabel === '5') {
            innerArt += getSuitEmblemSVG(suit, 32, 48, 1.3);
            innerArt += getSuitEmblemSVG(suit, 68, 48, 1.3);
            innerArt += getSuitEmblemSVG(suit, 50, 75, 1.6); // Center main
            innerArt += getSuitEmblemSVG(suit, 32, 102, 1.3);
            innerArt += getSuitEmblemSVG(suit, 68, 102, 1.3);
            innerArt += `<path d="M32 48 L68 102 M68 48 L32 102" stroke="url(#goldGradient)" stroke-width="0.4" opacity="0.3"/>`;
        } else if (numLabel === '6') {
            innerArt += getSuitEmblemSVG(suit, 32, 42, 1.2);
            innerArt += getSuitEmblemSVG(suit, 50, 42, 1.2);
            innerArt += getSuitEmblemSVG(suit, 68, 42, 1.2);
            innerArt += getSuitEmblemSVG(suit, 32, 108, 1.2);
            innerArt += getSuitEmblemSVG(suit, 50, 108, 1.2);
            innerArt += getSuitEmblemSVG(suit, 68, 108, 1.2);
        } else if (numLabel === '7') {
            innerArt += getSuitEmblemSVG(suit, 50, 75, 1.8); // Center
            innerArt += getSuitEmblemSVG(suit, 30, 42, 1.1);
            innerArt += getSuitEmblemSVG(suit, 50, 42, 1.1);
            innerArt += getSuitEmblemSVG(suit, 70, 42, 1.1);
            innerArt += getSuitEmblemSVG(suit, 30, 108, 1.1);
            innerArt += getSuitEmblemSVG(suit, 50, 108, 1.1);
            innerArt += getSuitEmblemSVG(suit, 70, 108, 1.1);
        } else if (numLabel === '8') {
            innerArt += getSuitEmblemSVG(suit, 32, 38, 1.1);
            innerArt += getSuitEmblemSVG(suit, 68, 38, 1.1);
            innerArt += getSuitEmblemSVG(suit, 32, 62, 1.1);
            innerArt += getSuitEmblemSVG(suit, 68, 62, 1.1);
            innerArt += getSuitEmblemSVG(suit, 32, 88, 1.1);
            innerArt += getSuitEmblemSVG(suit, 68, 88, 1.1);
            innerArt += getSuitEmblemSVG(suit, 32, 112, 1.1);
            innerArt += getSuitEmblemSVG(suit, 68, 112, 1.1);
        } else if (numLabel === '9') {
            // grid layout with central core
            innerArt += getSuitEmblemSVG(suit, 50, 75, 1.8);
            for (let x = 28; x <= 72; x += 22) {
                for (let y = 42; y <= 108; y += 66) {
                    if (x !== 50 || y !== 75) {
                        innerArt += getSuitEmblemSVG(suit, x, y, 1.1);
                    }
                }
            }
        } else if (numLabel === '10') {
            for (let x = 28; x <= 72; x += 22) {
                for (let y = 38; y <= 112; y += 37) {
                    innerArt += getSuitEmblemSVG(suit, x, y, 1.0);
                }
            }
            innerArt += getSuitEmblemSVG(suit, 50, 75, 1.6);
        } else {
            // Court Cards (Page, Knight, Queen, King)
            // Draw a beautiful crest for Court cards
            innerArt += `
                <!-- Court shield frame -->
                <polygon points="50,42 70,55 64,98 50,112 36,98 30,55" stroke="url(#goldGradient)" stroke-width="1" fill="none" opacity="0.6"/>
                <polygon points="50,46 66,57 61,94 50,106 39,94 34,57" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.3" fill="none"/>
            `;
            // Add a central star above court shields
            innerArt += `<polygon points="50,30 52,34 56,34 53,36 54,40 50,38 46,40 47,36 44,34 48,34" fill="url(#goldGradient)"/>`;
            
            if (numLabel === 'Page') {
                innerArt += getSuitEmblemSVG(suit, 50, 75, 2.2);
            } else if (numLabel === 'Knight') {
                innerArt += getSuitEmblemSVG(suit, 50, 75, 2.2);
                innerArt += `<path d="M28 50 L72 100 M72 50 L28 100" stroke="url(#goldGradient)" stroke-width="0.5" opacity="0.4" />`;
            } else if (numLabel === 'Queen') {
                innerArt += getSuitEmblemSVG(suit, 50, 75, 2.4);
                // Queen's crescent accent below
                innerArt += `<path d="M36 102 C36 112, 64 112, 64 102" stroke="url(#goldGradient)" stroke-width="1.1" fill="none" />`;
            } else if (numLabel === 'King') {
                innerArt += getSuitEmblemSVG(suit, 50, 75, 2.6);
                // King's crown accent above
                innerArt += `<path d="M40 40 L45 35 L50 40 L55 35 L60 40" stroke="url(#goldGradient)" stroke-width="1.3" fill="none" />`;
            }
        }

        MINOR_ARCANA.push({
            id: id,
            name: name,
            number: numLabel,
            keywords: cardNum.keywords[suit],
            upright: uprightMeaning,
            reversed: reversedMeaning,
            desc: `在漆黑深邃的背景中，對稱裝飾著 ${numLabel} 個精美設計的黃金「${suitInfo.zh}」星象符文，並鑲嵌於帶有雙金線與四角螺旋的巴洛克神聖畫框之內，散發出優雅古典的奧秘氛圍。`,
            svg: createOccultCardFront(innerArt)
        });
    });
});

// Combine into one unified Tarot Deck
const TAROT_DECK = [...TAROT_CARDS, ...MINOR_ARCANA];

// Export to global window context

// ---------------------------------------------------------------------------
// Extra tarot knowledge layer: astrology/element correspondence, numerology,
// and a simple yes/no guidance system, merged onto every card in TAROT_DECK.
// This is a general reference synthesized from common, widely-taught tarot
// traditions (Rider-Waite-Smith + Golden Dawn correspondences) — offered as a
// guideline for reflection, not a deterministic prediction.
// ---------------------------------------------------------------------------

const NUMBER_MEANINGS = {
    0: "無限的能量：尚未成形的起點，是一切可能性的種子，也代表全然的自由。",
    1: "起始的能量：新機會、原創的火花，一切尚未定型，充滿可能性。",
    2: "二元的能量：選擇、夥伴關係、需要找到平衡點。",
    3: "成長的能量：初步的成果開始展現，適合尋求協作與交流。",
    4: "穩固的能量：建立基礎與秩序，但也要留意是否過度保守。",
    5: "變動的能量：挑戰、衝突或失序出現，是成長必經的陣痛。",
    6: "和諧的能量：付出與回報開始找到平衡，關係趨於穩定。",
    7: "內省的能量：需要停下來思考、評估，而非急著往前衝。",
    8: "力量的能量：透過紀律與專注，把想法落實為具體成果。",
    9: "接近完成的能量：大部分的旅程已走完，但仍需最後的堅持。",
    10: "循環完成的能量：一個階段徹底結束，也是下一個循環的種子。"
};

const COURT_NUMEROLOGY = {
    page: "宮廷牌．侍從：學習與探索的角色，代表該元素剛萌芽、還在摸索的階段。",
    knight: "宮廷牌．騎士：行動與追尋的角色，代表該元素被積極地實踐與驅動。",
    queen: "宮廷牌．皇后：內化與涵容的角色，代表該元素成熟、由內而外自然流露。",
    king: "宮廷牌．國王：精通與掌權的角色，代表該元素被完全掌握並展現於外在的權威。"
};

// Reduce a Major Arcana number (0-21) down to a single digit for its
// numerology reading, the way most numerology-based tarot guides do.
function reduceMajorNumber(n) {
    if (n === 0) return 0;
    let x = n;
    while (x > 9) {
        x = String(x).split('').reduce((sum, d) => sum + Number(d), 0);
    }
    return x;
}

const MAJOR_ROMAN_TO_INT = {
    "0": 0, "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7,
    "VIII": 8, "IX": 9, "X": 10, "XI": 11, "XII": 12, "XIII": 13, "XIV": 14,
    "XV": 15, "XVI": 16, "XVII": 17, "XVIII": 18, "XIX": 19, "XX": 20, "XXI": 21
};

// Traditional Golden-Dawn-style astrology/element attributions for each
// Major Arcana card, plus a curated yes/no leaning for quick guidance.
const MAJOR_EXTRA_INFO = {
    fool:        { astro: "元素：風 Air（自由不羈、無拘無束的能量）",
        yesNo: { upright: { answer: "maybe", note: "值得放手一試，但請留意潛在的風險。" }, reversed: { answer: "no", note: "時機尚未成熟，貿然行動容易後悔。" } } },
    magician:    { astro: "行星：水星 Mercury（溝通、智識、實踐的力量）",
        yesNo: { upright: { answer: "yes", note: "你已具備足夠的能力與資源去實現它。" }, reversed: { answer: "no", note: "資源或方向尚未到位，容易淪為空談。" } } },
    priestess:   { astro: "天體：月亮 Moon（直覺、潛意識、隱藏的真相）",
        yesNo: { upright: { answer: "maybe", note: "答案尚未明朗，先相信直覺、耐心等待。" }, reversed: { answer: "no", note: "資訊被隱瞞或誤導，暫時看不清全貌。" } } },
    empress:     { astro: "行星：金星 Venus（豐盛、滋養、創造與愛）",
        yesNo: { upright: { answer: "yes", note: "豐盛與滋養的能量站在你這一邊。" }, reversed: { answer: "maybe", note: "資源或情感上有些匱乏感，需要先照顧好自己。" } } },
    emperor:     { astro: "星座：牡羊座 Aries（結構、權威、掌控力）",
        yesNo: { upright: { answer: "yes", note: "只要建立清楚的規劃與紀律，結果會很穩固。" }, reversed: { answer: "no", note: "過度控制或僵化的做法會帶來阻力。" } } },
    hierophant:  { astro: "星座：金牛座 Taurus（傳統、制度、既定的道路）",
        yesNo: { upright: { answer: "yes", note: "依循既有的規範或尋求前輩指引會比較順利。" }, reversed: { answer: "maybe", note: "傳統做法未必適用，可考慮走一條不一樣的路。" } } },
    lovers:      { astro: "星座：雙子座 Gemini（連結、選擇、價值觀的一致）",
        yesNo: { upright: { answer: "yes", note: "彼此的心意一致，這是值得投入的連結。" }, reversed: { answer: "no", note: "價值觀或溝通上出現落差，需要先釐清。" } } },
    chariot:     { astro: "星座：巨蟹座 Cancer（意志力、掌控方向、勝利）",
        yesNo: { upright: { answer: "yes", note: "只要意志堅定、方向明確，就能順利達成。" }, reversed: { answer: "no", note: "方向不一致或內部拉扯會讓進展停滯。" } } },
    strength:    { astro: "星座：獅子座 Leo（內在力量、溫柔的堅韌）",
        yesNo: { upright: { answer: "yes", note: "用溫柔而堅定的態度面對，會比強硬更有效。" }, reversed: { answer: "maybe", note: "信心正在動搖，先找回內在的力量再前進。" } } },
    hermit:      { astro: "星座：處女座 Virgo（內省、獨處、尋求真理）",
        yesNo: { upright: { answer: "maybe", note: "此刻更適合先向內探索，答案還需要一些時間沉澱。" }, reversed: { answer: "no", note: "過度孤立反而讓你看不清全貌，適時尋求陪伴。" } } },
    wheel:       { astro: "行星：木星 Jupiter（命運、機運、循環的轉折）",
        yesNo: { upright: { answer: "yes", note: "命運的風向正在轉為對你有利。" }, reversed: { answer: "no", note: "這段時間運勢起伏較大，宜靜觀其變。" } } },
    justice:     { astro: "星座：天秤座 Libra（公平、因果、清晰的判斷）",
        yesNo: { upright: { answer: "yes", note: "只要合情合理，結果會是公平且對等的。" }, reversed: { answer: "no", note: "目前的處理方式有失公允，值得重新檢視。" } } },
    hangedman:   { astro: "元素：水 Water（暫停、犧牲、換個角度看世界）",
        yesNo: { upright: { answer: "maybe", note: "現在適合暫停等待，而不是急著採取行動。" }, reversed: { answer: "no", note: "持續的拖延或抗拒改變只會讓情況更僵持。" } } },
    death:       { astro: "星座：天蠍座 Scorpio（結束、蛻變、徹底的轉化）",
        yesNo: { upright: { answer: "no", note: "這代表某個階段的結束，而非你期待的延續。" }, reversed: { answer: "no", note: "該放手的執著遲遲無法放下，轉化正在被卡住。" } } },
    temperance:  { astro: "星座：射手座 Sagittarius（調和、耐心、循序漸進）",
        yesNo: { upright: { answer: "yes", note: "只要保持耐心、循序漸進，結果會趨於和諧。" }, reversed: { answer: "no", note: "步調失衡、太過極端，需要重新找回平衡。" } } },
    devil:       { astro: "星座：摩羯座 Capricorn（束縛、慾望、不健康的依附）",
        yesNo: { upright: { answer: "no", note: "這段關係或選擇可能帶有不健康的束縛。" }, reversed: { answer: "yes", note: "你正在鬆開束縛，準備掙脫不再適合的處境。" } } },
    tower:       { astro: "行星：火星 Mars（劇變、衝擊、瞬間的瓦解）",
        yesNo: { upright: { answer: "no", note: "會有突如其來的變化，計畫恐怕難以照原樣進行。" }, reversed: { answer: "no", note: "該面對的衝擊被拖延，壓力正在暗中累積。" } } },
    star:        { astro: "星座：水瓶座 Aquarius（希望、療癒、對未來的信念）",
        yesNo: { upright: { answer: "yes", note: "懷抱希望前進，事情正朝好的方向療癒與開展。" }, reversed: { answer: "no", note: "信心正在流失，先給自己一些療癒與喘息的空間。" } } },
    moon:        { astro: "星座：雙魚座 Pisces（迷惘、潛意識、尚未清晰的真相）",
        yesNo: { upright: { answer: "maybe", note: "事情尚未明朗，很多擔憂可能只是想像放大了。" }, reversed: { answer: "yes", note: "混亂正在散去，真相與清晰感即將浮現。" } } },
    sun:         { astro: "天體：太陽 Sun（成功、活力、毫無保留的喜悅）",
        yesNo: { upright: { answer: "yes", note: "這是牌組中最正向、最明確的肯定訊號之一。" }, reversed: { answer: "maybe", note: "好結果仍在，但可能不如預期那樣張揚顯著。" } } },
    judgement:   { astro: "元素：火 Fire（覺醒、重生、對過去的總結與釋放）",
        yesNo: { upright: { answer: "yes", note: "這是一次重要的覺醒與更新，值得把握。" }, reversed: { answer: "no", note: "對自己的評判太過嚴苛，卡在自我懷疑裡。" } } },
    world:       { astro: "行星：土星 Saturn（圓滿、整合、階段性的完成）",
        yesNo: { upright: { answer: "yes", note: "一個完整的階段即將圓滿達成，值得慶祝。" }, reversed: { answer: "maybe", note: "還差最後一哩路，尚未真正走到完成。" } } }
};

const SUIT_ELEMENT_EN = { wands: "Fire", cups: "Water", swords: "Air", pentacles: "Earth" };

// Curated yes/no guidance for all 56 Minor Arcana cards, based on their
// standard Rider-Waite-Smith meanings (each suit x rank combination is
// hand-checked rather than derived from a generic formula, since suits genuinely
// differ in tone — e.g. Nine of Swords is anxious while Nine of Cups is content).
const MINOR_YESNO = {
    wands_ace:     { upright: { answer: "yes", note: "新靈感、新機會正在浮現。" }, reversed: { answer: "maybe", note: "機會延遲，方向感尚未穩固。" } },
    wands_2:       { upright: { answer: "yes", note: "正在規劃，前景樂觀。" }, reversed: { answer: "maybe", note: "猶豫不決，仍在按兵不動。" } },
    wands_3:       { upright: { answer: "yes", note: "拓展順利，機會在望。" }, reversed: { answer: "maybe", note: "進度比預期慢一些。" } },
    wands_4:       { upright: { answer: "yes", note: "值得慶祝的好結果。" }, reversed: { answer: "maybe", note: "慶祝被延後，並非全然否定。" } },
    wands_5:       { upright: { answer: "no", note: "競爭與衝突增加了阻力。" }, reversed: { answer: "maybe", note: "衝突正在逐漸化解。" } },
    wands_6:       { upright: { answer: "yes", note: "勝利與好消息就在眼前。" }, reversed: { answer: "maybe", note: "成果被延遲或尚未被看見。" } },
    wands_7:       { upright: { answer: "maybe", note: "需要堅持捍衛立場，結果未定。" }, reversed: { answer: "no", note: "難以招架各方壓力。" } },
    wands_8:       { upright: { answer: "yes", note: "事情快速推進，好消息在路上。" }, reversed: { answer: "maybe", note: "出現延誤與溝通不良。" } },
    wands_9:       { upright: { answer: "maybe", note: "已經很努力，接近終點但仍需堅持。" }, reversed: { answer: "no", note: "疲憊感讓你很想放棄。" } },
    wands_10:      { upright: { answer: "maybe", note: "目標將達成，但代價是龐大的負擔。" }, reversed: { answer: "no", note: "不堪重負，是該放手部分責任了。" } },
    wands_page:    { upright: { answer: "yes", note: "充滿熱情的新消息或起點。" }, reversed: { answer: "maybe", note: "三分鐘熱度，需要更多耐心。" } },
    wands_knight:  { upright: { answer: "yes", note: "行動力強，勇於嘗試。" }, reversed: { answer: "no", note: "衝動躁進，欠缺規劃。" } },
    wands_queen:   { upright: { answer: "yes", note: "自信與魅力帶來好結果。" }, reversed: { answer: "maybe", note: "信心動搖，需要重新聚焦。" } },
    wands_king:    { upright: { answer: "yes", note: "有遠見的領導帶來成功。" }, reversed: { answer: "maybe", note: "獨斷專行可能造成阻礙。" } },

    cups_ace:      { upright: { answer: "yes", note: "新的情感或創意能量正湧現。" }, reversed: { answer: "maybe", note: "情感受阻或被壓抑。" } },
    cups_2:        { upright: { answer: "yes", note: "和諧的連結與吸引力。" }, reversed: { answer: "maybe", note: "關係略失衡，需要溝通。" } },
    cups_3:        { upright: { answer: "yes", note: "值得慶祝的好消息，友誼支持著你。" }, reversed: { answer: "maybe", note: "團體中出現了一些小摩擦。" } },
    cups_4:        { upright: { answer: "no", note: "提不起興趣，容易錯過眼前的好機會。" }, reversed: { answer: "maybe", note: "重新燃起了對事物的興趣。" } },
    cups_5:        { upright: { answer: "no", note: "失落與遺憾佔據了心思。" }, reversed: { answer: "maybe", note: "正從傷痛中慢慢恢復。" } },
    cups_6:        { upright: { answer: "yes", note: "懷舊而美好的能量，值得信任。" }, reversed: { answer: "maybe", note: "停留在過去，難以往前走。" } },
    cups_7:        { upright: { answer: "maybe", note: "選項很多，但需要先看清真相。" }, reversed: { answer: "yes", note: "看清楚後，你能做出清醒的決定。" } },
    cups_8:        { upright: { answer: "maybe", note: "離開表面的滿足，去尋找更深的意義。" }, reversed: { answer: "no", note: "害怕改變而勉強留下。" } },
    cups_9:        { upright: { answer: "yes", note: "願望實現，心滿意足。" }, reversed: { answer: "maybe", note: "表面滿足，內心其實仍有缺口。" } },
    cups_10:       { upright: { answer: "yes", note: "圓滿與幸福的結果。" }, reversed: { answer: "maybe", note: "表面和諧，實際仍有裂痕待修復。" } },
    cups_page:     { upright: { answer: "yes", note: "充滿直覺與好消息的訊號。" }, reversed: { answer: "maybe", note: "情緒不夠成熟，訊息還不明確。" } },
    cups_knight:   { upright: { answer: "yes", note: "浪漫的邀約或提案值得期待。" }, reversed: { answer: "maybe", note: "言過其實，實際行動略顯不足。" } },
    cups_queen:    { upright: { answer: "yes", note: "同理心帶來正向的結果。" }, reversed: { answer: "maybe", note: "情緒化正在影響判斷。" } },
    cups_king:     { upright: { answer: "yes", note: "情緒成熟穩定，帶來好結果。" }, reversed: { answer: "maybe", note: "表面冷靜，內心其實壓抑著波動。" } },

    swords_ace:    { upright: { answer: "yes", note: "清晰的洞見帶來突破。" }, reversed: { answer: "no", note: "思緒混亂，尚未看清真相。" } },
    swords_2:      { upright: { answer: "no", note: "陷入僵局，仍在逃避做決定。" }, reversed: { answer: "maybe", note: "開始願意面對抉擇了。" } },
    swords_3:      { upright: { answer: "no", note: "心痛與失落難以避免。" }, reversed: { answer: "maybe", note: "傷痛正在慢慢癒合。" } },
    swords_4:      { upright: { answer: "maybe", note: "需要先休息，暫不宜貿然行動。" }, reversed: { answer: "yes", note: "休息夠了，準備重新出發。" } },
    swords_5:      { upright: { answer: "no", note: "這場衝突裡沒有真正的贏家。" }, reversed: { answer: "maybe", note: "衝突正在落幕，但餘波仍在。" } },
    swords_6:      { upright: { answer: "yes", note: "正在渡過難關，情況會逐漸好轉。" }, reversed: { answer: "maybe", note: "過渡期尚未真正結束。" } },
    swords_7:      { upright: { answer: "no", note: "暗藏欺瞞或不夠光明正大的策略。" }, reversed: { answer: "maybe", note: "真相即將浮現。" } },
    swords_8:      { upright: { answer: "no", note: "感覺受困，但限制其實多來自自己。" }, reversed: { answer: "yes", note: "正在找到脫困的方法。" } },
    swords_9:      { upright: { answer: "no", note: "焦慮與恐懼放大了問題本身。" }, reversed: { answer: "maybe", note: "開始能放下一部分的憂慮。" } },
    swords_10:     { upright: { answer: "no", note: "徹底的結束，但也代表谷底已經過去。" }, reversed: { answer: "maybe", note: "最壞的已經過去，正在慢慢復原。" } },
    swords_page:   { upright: { answer: "maybe", note: "需要更多資訊才能下判斷。" }, reversed: { answer: "no", note: "八卦或不實訊息正在干擾判斷。" } },
    swords_knight: { upright: { answer: "maybe", note: "行動快速，但可能不夠周全。" }, reversed: { answer: "no", note: "魯莽衝動可能帶來反效果。" } },
    swords_queen:  { upright: { answer: "yes", note: "理性的分析帶來清楚的答案。" }, reversed: { answer: "maybe", note: "過度批判可能影響了判斷。" } },
    swords_king:   { upright: { answer: "yes", note: "公正且理性的決策值得信賴。" }, reversed: { answer: "maybe", note: "過於冷酷，可能忽略了人情。" } },

    pentacles_ace:    { upright: { answer: "yes", note: "實質的機會正在出現。" }, reversed: { answer: "maybe", note: "機會延遲，基礎尚未穩固。" } },
    pentacles_2:      { upright: { answer: "maybe", note: "正在努力維持平衡，結果仍在調整中。" }, reversed: { answer: "no", note: "資源分身乏術，難以兼顧。" } },
    pentacles_3:      { upright: { answer: "yes", note: "團隊合作帶來扎實的成果。" }, reversed: { answer: "maybe", note: "合作出現分歧，需要協調。" } },
    pentacles_4:      { upright: { answer: "maybe", note: "穩固，但也可能過於保守。" }, reversed: { answer: "no", note: "過度執著於掌控，反而錯失機會。" } },
    pentacles_5:      { upright: { answer: "no", note: "資源匱乏，或感覺被排除在外。" }, reversed: { answer: "maybe", note: "處境正在慢慢好轉。" } },
    pentacles_6:      { upright: { answer: "yes", note: "公平的給予與收穫。" }, reversed: { answer: "maybe", note: "付出與回報不太對等，需留意。" } },
    pentacles_7:      { upright: { answer: "maybe", note: "成果仍在累積中，需要耐心等待。" }, reversed: { answer: "no", note: "努力似乎沒有得到相應的回報。" } },
    pentacles_8:      { upright: { answer: "yes", note: "專注精進帶來扎實的進展。" }, reversed: { answer: "maybe", note: "品質或熱情有些下滑。" } },
    pentacles_9:      { upright: { answer: "yes", note: "憑自己的努力獲得富足與自由。" }, reversed: { answer: "maybe", note: "表面獨立，實際仍有依賴。" } },
    pentacles_10:     { upright: { answer: "yes", note: "長遠且穩定的成功與傳承。" }, reversed: { answer: "maybe", note: "家庭或財務問題需要處理。" } },
    pentacles_page:   { upright: { answer: "yes", note: "務實的新機會或學習計畫值得投入。" }, reversed: { answer: "maybe", note: "缺乏實際行動，只停留在計畫階段。" } },
    pentacles_knight: { upright: { answer: "yes", note: "穩紮穩打，值得信賴的進展。" }, reversed: { answer: "no", note: "進度停滯，過於墨守成規。" } },
    pentacles_queen:  { upright: { answer: "yes", note: "務實且慷慨的能量帶來安全感。" }, reversed: { answer: "maybe", note: "過度操心瑣事，忽略了自己。" } },
    pentacles_king:   { upright: { answer: "yes", note: "穩健的實力帶來實質的成功。" }, reversed: { answer: "maybe", note: "過度重視物質，可能忽略了其他面向。" } }
};

const YES_NO_LABEL = { yes: "傾向：是", no: "傾向：否", maybe: "傾向：不確定" };

// Curated "signature" card-combination readings: when two specific cards
// land in the same spread together, tarot books commonly call out a
// well-known synergy between them. Keyed by "<id1>|<id2>" sorted alphabetically.
const CARD_COMBINATIONS = {};
function addCombo(a, b, text) {
    const key = [a, b].sort().join('|');
    CARD_COMBINATIONS[key] = text;
}
addCombo("death", "star", "「置之死地而後生」的強力組合：舊有的一切徹底結束後，全新的希望正在浮現，這是重生前必要的清空。");
addCombo("lovers", "cups_2", "極為和諧的感情連結，暗示彼此心意相通、深刻的靈魂契合，是難得的雙向奔赴。");
addCombo("star", "tower", "巨變之後迎來療癒與希望：混亂終將帶來新的信念與方向，黑暗過後總會有光。");
addCombo("fool", "magician", "全新的開始加上足夠的能力與資源，這是勇敢展開行動、心想事成的絕佳組合。");
addCombo("sun", "swords_10", "最谷底的結束後，迎來燦爛的新生：這代表否極泰來，黑暗之後必有光明。");
addCombo("devil", "tower", "長期壓抑或束縛的狀態即將被劇烈的方式打破，過程震撼，卻是掙脫枷鎖的必經之路。");
addCombo("empress", "wands_ace", "豐盛與新機會同時降臨，代表在創造力與資源上都會有令人滿意的收穫。");
addCombo("hermit", "moon", "需要更多獨處與內省的時間，答案尚未完全清晰，此刻適合向內探索而非急著對外行動。");
addCombo("justice", "swords_2", "一個懸而未決的抉擇，終於會有公平、清晰的答案浮現。");
addCombo("wheel", "world", "一個完整循環真正走向圓滿的結束，代表命運的安排恰好將一切帶向最好的結果。");
addCombo("cups_10", "sun", "家庭與幸福感達到顛峰，這是少見的極度正向組合，代表由衷的快樂與圓滿。");
addCombo("moon", "swords_9", "焦慮與不安可能被過度放大，很多恐懼其實只存在於想像之中，事情不一定如你所想的糟。");
addCombo("wands_ace", "wands_3", "全新的計畫正快速展開，並且已經看見未來擴展的契機，適合積極對外發展。");
addCombo("hangedman", "wheel", "暫時的停滯其實是命運巧妙的安排，換個角度看世界，會發現轉機正在醞釀。");
addCombo("strength", "sun", "內在的力量終將帶來外顯的成功與肯定，過程雖然需要耐心，但結果值得期待。");
addCombo("lovers", "swords_2", "面臨情感或關係上的重要抉擇，需要誠實面對自己真正的心意，才能做出無悔的決定。");
addCombo("cups_ace", "empress", "情感與創造力同時湧現，是孕育新關係或新作品的絕佳能量。");
addCombo("cups_9", "devil", "表面看似享樂滿足，實際上可能陷入不健康的依賴或欲望，值得誠實檢視。");
addCombo("cups_ace", "star", "懷抱希望展開一段新的情感或創作旅程，這股能量純粹而充滿信心。");
addCombo("death", "tower", "劇烈且徹底的變動同時發生，舊有的一切正在瓦解，雖然衝擊很大，卻是重生前必要的清空。");
addCombo("sun", "wands_6", "顯著的成功與眾人的肯定同時降臨，這是值得大方慶祝的高峰時刻。");
addCombo("moon", "swords_7", "事情背後可能隱藏著你尚未察覺的欺瞞或不透明之處，直覺提醒你要更謹慎查證。");
addCombo("hermit", "pentacles_9", "享受獨處帶來的富足與自我實現，這段時間最好的陪伴其實是你自己。");
addCombo("chariot", "wands_king", "意志力與領導力同時匯聚，只要方向明確，就能大步邁向成功。");

// Merge everything onto TAROT_DECK (majors + minors).
TAROT_DECK.forEach(card => {
    const isMinor = card.id.includes('_');
    if (!isMinor) {
        const extra = MAJOR_EXTRA_INFO[card.id];
        if (extra) {
            card.astro = extra.astro;
            card.yesNo = extra.yesNo;
        }
        const numValue = MAJOR_ROMAN_TO_INT[card.number];
        card.numerology = NUMBER_MEANINGS[reduceMajorNumber(numValue)];
    } else {
        const [suit, rank] = card.id.split('_');
        const elementZh = (SUIT_NAMES[suit] && SUIT_NAMES[suit].key) || '';
        const elementEn = SUIT_ELEMENT_EN[suit] || '';
        card.astro = `元素：${elementZh} ${elementEn}（${(SUIT_NAMES[suit] && SUIT_NAMES[suit].zh) || ''}牌組）`;
        if (COURT_NUMEROLOGY[rank]) {
            card.numerology = COURT_NUMEROLOGY[rank];
        } else {
            const n = rank === 'ace' ? 1 : Number(rank);
            card.numerology = NUMBER_MEANINGS[n] || '';
        }
        card.yesNo = MINOR_YESNO[card.id] || null;
    }
});


window.TAROT_CARDS = TAROT_DECK;
window.CARD_BACK_SVG = CARD_BACK_SVG;
