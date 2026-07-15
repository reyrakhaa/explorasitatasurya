/*
  animation.js — Latar bintang berkedip + meteor melintas
  Dipakai bersama di seluruh halaman lewat <canvas id="sky-canvas">
*/
function initSky(canvasId = 'sky-canvas', opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const density = opts.density || 140;
  let stars = [];
  let meteors = [];
  let w, h, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    buildStars();
  }

  function buildStars() {
    stars = [];
    for (let i = 0; i < density; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.6 + 0.4) * dpr,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.85 ? '#8fe3ff' : '#ffffff'
      });
    }
  }

  function spawnMeteor() {
    meteors.push({
      x: w * (0.5 + Math.random() * 0.5),
      y: -50,
      len: (Math.random() * 90 + 60) * dpr,
      speed: (Math.random() * 6 + 6) * dpr,
      life: 0,
      maxLife: 70 + Math.random() * 30,
      angle: Math.PI * 0.72
    });
  }

  let frame = 0;
  function loop() {
    ctx.clearRect(0, 0, w, h);
    // stars
    for (const s of stars) {
      s.phase += s.speed;
      const alpha = 0.35 + Math.abs(Math.sin(s.phase)) * 0.65;
      ctx.beginPath();
      ctx.fillStyle = s.hue;
      ctx.globalAlpha = alpha;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // meteors
    frame++;
    if (frame % 160 === 0 && meteors.length < 2) spawnMeteor();
    meteors.forEach((m) => {
      m.life++;
      m.x -= Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      const grad = ctx.createLinearGradient(
        m.x, m.y, m.x + Math.cos(m.angle) * m.len, m.y - Math.sin(m.angle) * m.len
      );
      grad.addColorStop(0, 'rgba(255,255,255,0.95)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.4 * dpr;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x + Math.cos(m.angle) * m.len, m.y - Math.sin(m.angle) * m.len);
      ctx.stroke();
    });
    meteors = meteors.filter((m) => m.life < m.maxLife && m.y < h + 100);

    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  resize();
  loop();
}

document.addEventListener('DOMContentLoaded', () => initSky());
