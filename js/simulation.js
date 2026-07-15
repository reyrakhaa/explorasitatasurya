// simulation.js — animasi orbit tata surya
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('simCanvas');
  const ctx = canvas.getContext('2d');
  const btnSound = document.getElementById('btnSound');
  const btnPlayPause = document.getElementById('btnPlayPause');
  const btnReset = document.getElementById('btnReset');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const zoomLabel = document.getElementById('zoomLabel');
  const speedRange = document.getElementById('speedRange');
  const planetModal = document.getElementById('planetModal');
  const closePlanetModal = document.getElementById('closePlanetModal');

  const allData = window.PLANET_DATA;
  const sun = allData.find(p => p.id === 'matahari');
  const planets = allData.filter(p => p.type === 'planet').sort((a, b) => a.order - b.order);

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w, h, cx, cy;
  let zoom = 1;
  let playing = true;
  let speed = 1;
  let stars = [];

  // orbit config: schematic (not to real scale) radius spacing + relative speed & size
  const bodies = planets.map((p, i) => ({
    data: p,
    orbitR: 60 + i * 42,
    angle: Math.random() * Math.PI * 2,
    speed: 0.016 / Math.pow(i + 1, 0.55), // closer planets orbit faster
    size: 8 + Math.min(16, Math.log2((i + 2)) * 6) ,
    spin: 0
  }));
  // custom sizing tweaks for readability
  const sizeMap = { merkurius:7, venus:10, bumi:10.5, mars:8.5, jupiter:20, saturnus:18, uranus:13, neptunus:13 };
  bodies.forEach(b => b.size = sizeMap[b.data.id] || 10);

  // ---------- load real planet images (assets/planet/<id>.jpg) ----------
  // Falls back to the color gradient automatically if the file is missing.
  function loadImage(src) {
    const entry = { img: null, loaded: false };
    if (!src) return entry;
    const img = new Image();
    img.onload = () => { entry.loaded = true; };
    img.src = src;
    entry.img = img;
    return entry;
  }
  bodies.forEach(b => { b.tex = loadImage(b.data.texture); });
  const sunTex = loadImage(sun.texture);
  // #simCanvas menutupi seluruh layar, jadi background gambar sendiri digambar di sini
  // (bukan lewat CSS body background). Ganti assets/background/space-bg.jpg.
  const bgImage = loadImage('../assets/background/space-bg.jpg');

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = canvas.clientWidth * dpr;
    h = canvas.height = canvas.clientHeight * dpr;
    cx = w / 2; cy = h / 2;
    buildStars();
  }
  function buildStars() {
    stars = [];
    for (let i = 0; i < 160; i++) {
      stars.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 * dpr + 0.3, phase: Math.random() * Math.PI * 2 });
    }
  }

  function drawStars(t) {
    if (bgImage.loaded) {
      const img = bgImage.img;
      const scale = Math.max(w / img.width, h / img.height);
      const dw = img.width * scale, dh = img.height * scale;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    } else {
      ctx.fillStyle = '#070a22';
      ctx.fillRect(0, 0, w, h);
    }
    stars.forEach(s => {
      const a = 0.3 + Math.abs(Math.sin(t * 0.001 + s.phase)) * 0.7;
      ctx.globalAlpha = a;
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function drawSun(t) {
    const r = 30 * dpr * zoom;
    const glow = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r * 2.6);
    glow.addColorStop(0, 'rgba(255,200,90,0.55)');
    glow.addColorStop(1, 'rgba(255,120,20,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(cx, cy, r * 2.6, 0, Math.PI * 2); ctx.fill();

    if (sunTex.loaded) {
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
      ctx.drawImage(sunTex.img, cx - r, cy - r, r * 2, r * 2);
      ctx.restore();
    } else {
      const bodyGrad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
      bodyGrad.addColorStop(0, '#fff6d6');
      bodyGrad.addColorStop(0.5, sun.color);
      bodyGrad.addColorStop(1, sun.color2);
      ctx.fillStyle = bodyGrad;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function drawOrbits() {
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1 * dpr;
    ctx.setLineDash([4 * dpr, 6 * dpr]);
    bodies.forEach(b => {
      ctx.beginPath();
      ctx.arc(cx, cy, b.orbitR * dpr * zoom, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.setLineDash([]);
  }

  function drawPlanets(dt) {
    bodies.forEach(b => {
      if (playing) b.angle += b.speed * speed * dt * 0.06;
      const R = b.orbitR * dpr * zoom;
      const x = cx + Math.cos(b.angle) * R;
      const y = cy + Math.sin(b.angle) * R * 0.94; // slight ellipse for depth feel
      b.screenX = x; b.screenY = y; b.screenR = b.size * dpr * zoom * 0.9;

      if (b.tex.loaded) {
        ctx.save();
        ctx.beginPath(); ctx.arc(x, y, b.screenR, 0, Math.PI * 2); ctx.clip();
        ctx.drawImage(b.tex.img, x - b.screenR, y - b.screenR, b.screenR * 2, b.screenR * 2);
        ctx.restore();
      } else {
        const grad = ctx.createRadialGradient(x - b.screenR * 0.35, y - b.screenR * 0.35, b.screenR * 0.1, x, y, b.screenR);
        grad.addColorStop(0, b.data.color);
        grad.addColorStop(1, b.data.color2);
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(x, y, b.screenR, 0, Math.PI * 2); ctx.fill();
      }

      if (b.data.id === 'saturnus') {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-0.3);
        ctx.scale(1, 0.35);
        ctx.beginPath();
        ctx.arc(0, 0, b.screenR + 8 * dpr * zoom, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(230,200,150,0.6)';
        ctx.lineWidth = 3.5 * dpr * zoom;
        ctx.stroke();
        ctx.restore();
      }

      // label (fades in when zoomed enough)
      if (zoom > 0.55) {
        ctx.font = `${11 * dpr}px Baloo 2, sans-serif`;
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.textAlign = 'center';
        ctx.fillText(b.data.name, x, y + b.screenR + 14 * dpr);
      }
    });
  }

  let lastT = performance.now();
  function loop(t) {
    const dt = Math.min(32, t - lastT);
    lastT = t;
    drawStars(t);
    drawOrbits();
    drawSun(t);
    drawPlanets(dt);
    requestAnimationFrame(loop);
  }

  // ---------- controls ----------
  btnPlayPause.addEventListener('click', () => {
    playing = !playing;
    btnPlayPause.textContent = playing ? '⏸' : '▶';
  });
  btnReset.addEventListener('click', () => {
    zoom = 1; speed = 1; speedRange.value = 1;
    zoomLabel.textContent = '100%';
    bodies.forEach((b, i) => b.angle = (i / bodies.length) * Math.PI * 2);
    playing = true; btnPlayPause.textContent = '⏸';
    showToast('Simulasi direset');
  });
  btnZoomIn.addEventListener('click', () => setZoom(zoom + 0.15));
  btnZoomOut.addEventListener('click', () => setZoom(zoom - 0.15));
  function setZoom(z) {
    zoom = Math.max(1.0, Math.min(5, z));
    zoomLabel.textContent = Math.round(zoom * 20) + '%';
  }
  speedRange.addEventListener('input', () => { speed = parseFloat(speedRange.value); });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    setZoom(zoom + (e.deltaY < 0 ? 0.1 : -0.1));
  }, { passive: false });

  // ---------- click detection on planets ----------
  function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: (clientX - rect.left) * dpr, y: (clientY - rect.top) * dpr };
  }
  function handleTap(e) {
    const pos = getPointerPos(e);
    for (const b of bodies) {
      const dx = pos.x - b.screenX, dy = pos.y - b.screenY;
      if (Math.sqrt(dx * dx + dy * dy) <= b.screenR + 10 * dpr) {
        openPopup(b.data);
        return;
      }
    }
    // check sun
    const dxs = pos.x - cx, dys = pos.y - cy;
    if (Math.sqrt(dxs * dxs + dys * dys) <= 30 * dpr * zoom) openPopup(sun);
  }
  canvas.addEventListener('click', handleTap);

  function openPopup(p) {
    if (!SpaceAudio.isMuted()) SpaceAudio.playOpen();
    const texUrl = p.texture ? `url('${p.texture}'), ` : '';
    document.getElementById('popupDot').style.backgroundImage =
      `${texUrl}radial-gradient(circle at 32% 30%, ${p.color}, ${p.color2})`;
    document.getElementById('popupDot').style.backgroundSize = 'cover';
    document.getElementById('popupDot').style.backgroundPosition = 'center';
    document.getElementById('popupName').textContent = p.name;
    document.getElementById('popupTagline').textContent = p.tagline;
    const stats = p.type === 'star'
      ? [['Diameter', p.diameter], ['Usia', '±4,6 miliar tahun']]
      : [['Diameter', p.diameter], ['Jarak', p.distance], ['Satelit', String(p.moons)], ['Revolusi', p.revolution]];
    document.getElementById('popupStats').innerHTML = stats.map(([l, v]) => `<div><b>${v}</b>${l}</div>`).join('');
    document.getElementById('popupMore').href = `material.html?planet=${p.id}`;
    planetModal.classList.add('show');
  }
  closePlanetModal.addEventListener('click', () => planetModal.classList.remove('show'));
  planetModal.addEventListener('click', (e) => { if (e.target === planetModal) planetModal.classList.remove('show'); });

  // ---------- sound ----------
  function refreshSoundIcon() { btnSound.textContent = SpaceAudio.isMuted() ? '🔇' : '🔊'; }
  refreshSoundIcon();
  btnSound.addEventListener('click', () => { SpaceAudio.toggleMuted(); refreshSoundIcon(); });
  window.addEventListener("load", ()=>{
    if(!SpaceAudio.isMuted()){
        SpaceAudio.startAmbient();
    }
  });
  SpaceAudio.bindUISounds(document);

  window.showToast = function (msg, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), duration);
  };

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(loop);
});
