document.addEventListener('DOMContentLoaded', () => {
  const picker = document.getElementById('planetPicker');
  const canvas = document.getElementById('planetCanvas');
  const btnSound = document.getElementById('btnSound');

  const planets = window.PLANET_DATA;
  let current = planets.find(p => p.id === 'bumi') || planets[0];

  const SIZE = 360;

  // ---------- setup Three.js (bola 3D asli) ----------
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(SIZE, SIZE);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.z = 6;

  scene.add(new THREE.AmbientLight(0xffffff, 2.0));
  const sunLight = new THREE.DirectionalLight(0xffffff, 1.15);
  sunLight.position.set(3, 2, 4);
  scene.add(sunLight);

  const geometry = new THREE.SphereGeometry(1.5, 64, 64);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  let ring = null;
  function updateRing(planet) {
    if (ring) { scene.remove(ring); ring = null; }
    if (planet.id === 'saturnus') {
      const ringGeo = new THREE.RingGeometry(2.0, 2.8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xe6c896, side: THREE.DoubleSide, transparent: true, opacity: 0.55
      });
      ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.3;
      scene.add(ring);
    }
  }

  const loader = new THREE.TextureLoader();
  function loadTexture(planet) {
    if (!planet.texture) { fallbackColor(planet); return; }
    loader.load(
      planet.texture,
      (tex) => {
        if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace; // three r152+
        material.map = tex;
        material.color.set(0xffffff);
        material.emissive.set(planet.id === 'matahari' ? 0xff9933 : 0x000000);
        material.emissiveIntensity = planet.id === 'matahari' ? 0.6 : 0;
        material.needsUpdate = true;
      },
      undefined,
      () => fallbackColor(planet) // gagal load -> fallback warna, tidak error
    );
  }
  function fallbackColor(planet) {
    material.map = null;
    material.color.set(planet.color || '#888888');
    material.needsUpdate = true;
  }

  // ---------- drag & auto-spin ----------
  let autoSpin = true;
  let dragging = false;
  let lastX = 0;

  function animate() {
    if (autoSpin && !dragging) sphere.rotation.y += 0.004;
    if (ring) ring.rotation.z = sphere.rotation.y;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  function pointerDown(x) { dragging = true; lastX = x; canvas.style.cursor = 'grabbing'; }
  function pointerMove(x) {
    if (!dragging) return;
    sphere.rotation.y += (x - lastX) * 0.01;
    lastX = x;
  }
  function pointerUp() { dragging = false; canvas.style.cursor = 'grab'; }

  canvas.addEventListener('mousedown', (e) => pointerDown(e.clientX));
  window.addEventListener('mousemove', (e) => pointerMove(e.clientX));
  window.addEventListener('mouseup', pointerUp);
  canvas.addEventListener('touchstart', (e) => pointerDown(e.touches[0].clientX), { passive: true });
  canvas.addEventListener('touchmove', (e) => pointerMove(e.touches[0].clientX), { passive: true });
  canvas.addEventListener('touchend', pointerUp);

  // ---------- picker chip & info panel (sama seperti sebelumnya) ----------
  function renderPicker() {
    picker.innerHTML = '';
    planets.forEach((p) => {
      const chip = document.createElement('button');
      chip.className = 'planet-chip clickable' + (p.id === current.id ? ' active' : '');
      const texUrl = p.texture ? `url('${p.texture}'), ` : '';
      chip.innerHTML = `<span class="dot" style="background-image:${texUrl}radial-gradient(circle at 32% 30%, ${p.color}, ${p.color2}); background-size:cover; background-position:center;"></span>${p.name}`;
      chip.addEventListener('click', () => selectPlanet(p));
      picker.appendChild(chip);
    });
  }

  function selectPlanet(p) {
    current = p;
    // khusus Saturnus
    if (p.id === "saturnus") {
        camera.position.y = 0;
        camera.position.z = 10;
    }

    // planet lainnya
    else {
        camera.position.y = 0;
        camera.position.z = 6;
    }

    sphere.rotation.y = 0;
    loadTexture(p);
    updateRing(p);
    renderPicker();
    renderInfo();
    if (!SpaceAudio.isMuted()) SpaceAudio.playOpen();
  }

  function renderInfo() {
    document.getElementById('infoTag').textContent = current.type === 'star' ? 'Bintang' : `Planet ke-${current.order}`;
    document.getElementById('infoName').textContent = current.name;
    document.getElementById('infoTagline').textContent = current.tagline;
    document.getElementById('infoDesc').textContent = current.desc;

    const stats = [
      ['Diameter', current.diameter],
      ['Jarak dari Matahari', current.distance],
      ['Jumlah Satelit', String(current.moons)],
      ['Rotasi', current.rotation],
      ['Revolusi', current.revolution]
    ];
    document.getElementById('statGrid').innerHTML = stats.map(([label, value]) =>
      `<div class="stat-item"><div class="label">${label}</div><div class="value">${value}</div></div>`
    ).join('');

    document.getElementById('infoFacts').innerHTML = current.facts.map(f => `<li>${f}</li>`).join('');
    document.getElementById('infoPanel').classList.remove('fade-up');
    void document.getElementById('infoPanel').offsetWidth;
    document.getElementById('infoPanel').classList.add('fade-up');
  }

  function refreshSoundIcon() { btnSound.textContent = SpaceAudio.isMuted() ? '🔇' : '🔊'; }
  refreshSoundIcon();
  btnSound.addEventListener('click', () => { SpaceAudio.toggleMuted(); refreshSoundIcon(); });
  window.addEventListener("load", ()=>{
    if(!SpaceAudio.isMuted()){
        SpaceAudio.startAmbient();
    }
  });
  SpaceAudio.bindUISounds(document);

  loadTexture(current);
  updateRing(current);
  renderPicker();
  renderInfo();
  animate();
});