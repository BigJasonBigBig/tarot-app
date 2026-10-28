// 華麗特效：閃爍星空畫布、隨機流星、滑鼠/觸控金粉。純裝飾，不影響任何互動。
(function () {
    'use strict';
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // ---- 星空畫布 ----
    var canvas = document.createElement('canvas');
    canvas.id = 'luxeStarCanvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var stars = [];
    var orbs = [];
    var w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w * dpr; canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var count = Math.round(Math.min(280, (w * h) / 5500));
        stars = [];
        orbs = [];
        for (var o = 0; o < 22; o++) {
            orbs.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 38 + 14, vy: Math.random() * 0.25 + 0.08, vx: (Math.random() - 0.5) * 0.15, p: Math.random() * 6.28, a: Math.random() * 0.07 + 0.04 });
        }
        for (var i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * w, y: Math.random() * h,
                r: Math.random() * 1.8 + 0.4,
                p: Math.random() * Math.PI * 2,
                s: Math.random() * 0.02 + 0.006,
                gold: Math.random() < 0.45
            });
        }
    }

    function frame() {
        ctx.clearRect(0, 0, w, h);
        for (var k = 0; k < orbs.length; k++) {
            var ob = orbs[k];
            ob.y -= ob.vy; ob.x += ob.vx; ob.p += 0.01;
            if (ob.y < -ob.r) { ob.y = h + ob.r; ob.x = Math.random() * w; }
            var g = ctx.createRadialGradient(ob.x, ob.y, 0, ob.x, ob.y, ob.r);
            var oa = ob.a * (0.7 + 0.3 * Math.sin(ob.p));
            g.addColorStop(0, 'rgba(255,233,160,' + oa + ')');
            g.addColorStop(1, 'rgba(255,233,160,0)');
            ctx.globalAlpha = 1;
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(ob.x, ob.y, ob.r, 0, Math.PI * 2);
            ctx.fill();
        }
        for (var i = 0; i < stars.length; i++) {
            var st = stars[i];
            st.p += st.s;
            var a = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(st.p));
            ctx.globalAlpha = a;
            ctx.fillStyle = st.gold ? '#ffe9a0' : '#ffffff';
            ctx.beginPath();
            ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
            ctx.fill();
            if (st.r > 1.2 && a > 0.8) {
                ctx.globalAlpha = a * 0.5;
                ctx.fillRect(st.x - st.r * 3, st.y - 0.4, st.r * 6, 0.8);
                ctx.fillRect(st.x - 0.4, st.y - st.r * 3, 0.8, st.r * 6);
            }
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(frame);

    // ---- 流星 ----
    function meteor() {
        if (document.hidden) return;
        var m = document.createElement('div');
        m.className = 'luxe-meteor';
        m.style.left = (Math.random() * 70 + 5) + 'vw';
        m.style.top = (Math.random() * 40) + 'vh';
        m.style.setProperty('--ang', (25 + Math.random() * 25) + 'deg');
        document.body.appendChild(m);
        setTimeout(function () { m.remove(); }, 1400);
    }
    (function loop() {
        setTimeout(function () { meteor(); loop(); }, 1800 + Math.random() * 3200);
    })();

    // ---- 游標光暈 ----
    var halo = document.createElement('div');
    halo.id = 'luxeHalo';
    halo.setAttribute('aria-hidden', 'true');
    document.body.appendChild(halo);
    window.addEventListener('mousemove', function (e) {
        halo.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    }, { passive: true });

    // ---- 金粉 ----
    var last = 0;
    function spark(x, y) {
        var now = Date.now();
        if (now - last < 45) return;
        last = now;
        var s = document.createElement('span');
        s.className = 'luxe-spark';
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        s.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
        s.style.setProperty('--dy', (Math.random() * 40 + 8) + 'px');
        document.body.appendChild(s);
        setTimeout(function () { s.remove(); }, 850);
    }
    window.addEventListener('mousemove', function (e) { spark(e.clientX, e.clientY); }, { passive: true });
    window.addEventListener('touchmove', function (e) {
        var t = e.touches[0];
        if (t) spark(t.clientX, t.clientY);
    }, { passive: true });
})();
