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

// Generate the 56 Minor Arcana
const MINOR_ARCANA = [];
SUITS.forEach(suit => {
    const suitInfo = SUIT_NAMES[suit];
    CARD_NUMBERS.forEach((cardNum, idx) => {
        const id = `${suit}_${cardNum.num.toLowerCase()}`;
        const name = `${suitInfo.zh}${cardNum.zh} (${cardNum.num} of ${suitInfo.en})`;
        const numLabel = cardNum.num;
        
        // Define upright/reversed interpretations
        const uprightMeaning = `${suitInfo.zh}${cardNum.zh}正位代表在${suitInfo.key}元素的引導下，迎來「${cardNum.keywords[suit]}」的狀態。這股能量能帶領您踏上務實的成長路徑，請善加運用您的意志與專注。`;
        const reversedMeaning = `${suitInfo.zh}${cardNum.zh}逆位暗示著能量的過度溢出或受阻，可能處於「${cardNum.keywords[suit]}」的反面或極端狀態。請冷靜省思，調整心態，尋回內心的平衡。`;
        
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
window.TAROT_CARDS = TAROT_DECK;
window.CARD_BACK_SVG = CARD_BACK_SVG;
