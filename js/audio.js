/*
  audio.js — Modul suara Petualangan Tata Surya
  Semua efek suara & backsound dibuat langsung dengan Web Audio API
  (osilator disintesis) supaya website tetap 100% berjalan tanpa
  file audio eksternal & tanpa server/backend. File di assets/sound/
  disediakan sebagai placeholder jika ingin diganti dengan rekaman asli.
*/
const SpaceAudio = (function () {
  let ctx = null;
  let masterGain = null;
  let ambientNodes = [];
  let muted = localStorage.getItem('sst_muted') !== 'false';
  let bgMusic = null;

  function ensureCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = muted ? 0 : 0.5;
      masterGain.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
  }

  function tone({ freq = 440, type = 'sine', dur = 0.2, gain = 0.25, glideTo = null, delay = 0 }) {
    ensureCtx();
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function playClick() {
    tone({ freq: 520, type: 'triangle', dur: 0.09, gain: 0.22, glideTo: 700 });
  }
  function playHover() {
    tone({ freq: 900, type: 'sine', dur: 0.06, gain: 0.08, glideTo: 1100 });
  }
  function playCorrect() {
    tone({ freq: 523, type: 'sine', dur: 0.14, gain: 0.25 });
    tone({ freq: 659, type: 'sine', dur: 0.14, gain: 0.25, delay: 0.12 });
    tone({ freq: 784, type: 'sine', dur: 0.22, gain: 0.28, delay: 0.24 });
  }
  function playWrong() {
    tone({ freq: 300, type: 'sawtooth', dur: 0.18, gain: 0.2, glideTo: 160 });
    tone({ freq: 220, type: 'sawtooth', dur: 0.22, gain: 0.18, glideTo: 120, delay: 0.14 });
  }
  function playOpen() {
    tone({ freq: 400, type: 'sine', dur: 0.12, gain: 0.2, glideTo: 640 });
    tone({ freq: 640, type: 'sine', dur: 0.16, gain: 0.18, delay: 0.08, glideTo: 880 });
  }
  function playFinish() {
    [523, 659, 784, 1047].forEach((f, i) =>
      tone({ freq: f, type: 'sine', dur: 0.25, gain: 0.26, delay: i * 0.14 })
    );
  }

  function startMusic() {
    if(!bgMusic)
    bgMusic = new Audio("/assets/sound/backsound.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.1;

    if(!muted){
        bgMusic.play().catch(()=>{});
    }

  }


  function stopMusic(){
      if(bgMusic){
          bgMusic.pause();
      }

  }

  function startAmbient() {
    startMusic();
  }
  function stopAmbient() {
    stopMusic();
  }

  function setMuted(val) {
    muted = val;
    localStorage.setItem('sst_muted', val);
    if (val) {
        stopMusic();}
    if (!val) {
        startMusic();}
  }
  function toggleMuted() { setMuted(!muted); return muted; }
  function isMuted() { return muted; }

  // Attach hover/click SFX automatically to interactive elements
  function bindUISounds(root = document) {
    root.querySelectorAll('[data-sfx="click"], button, .clickable').forEach((el) => {
      if (el.dataset.sfxBound) return;
      el.dataset.sfxBound = '1';
      el.addEventListener('mouseenter', () => !muted && playHover());
      el.addEventListener('click', () => !muted && playClick());
    });
  }

  return {
    ensureCtx, playClick, playHover, playCorrect, playWrong, playOpen, playFinish,
    startAmbient, stopAmbient, setMuted, toggleMuted, isMuted, bindUISounds, startMusic, stopMusic
  };
})();
