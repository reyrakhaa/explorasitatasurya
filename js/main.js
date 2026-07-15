// main.js — logika halaman Home
document.addEventListener('DOMContentLoaded', () => {
  const btnInfo = document.getElementById('btnInfo');
  const btnSound = document.getElementById('btnSound');
  const infoModal = document.getElementById('infoModal');
  const closeInfo = document.getElementById('closeInfo');
  const btnStart = document.getElementById('btnStart');
  const menuSection = document.getElementById('menuSection');
  const heroSection = document.getElementById('heroSection');

  // ----- Sound toggle -----
  function refreshSoundIcon() {
    btnSound.textContent = SpaceAudio.isMuted() ? '🔇' : '🔊';
  }
  refreshSoundIcon();
  if (!SpaceAudio.isMuted()) {
    // ambient will start after first user gesture (browser autoplay policy)
  }
  btnSound.addEventListener('click', () => {
    SpaceAudio.toggleMuted();
    refreshSoundIcon();
    showToast(SpaceAudio.isMuted() ? 'Suara dimatikan' : 'Suara dinyalakan');
  });

  window.addEventListener("load", ()=>{
    if(!SpaceAudio.isMuted()){
        SpaceAudio.startAmbient();
    }
  });

  // ----- Info modal -----
  btnInfo.addEventListener('click', () => infoModal.classList.add('show'));
  closeInfo.addEventListener('click', () => infoModal.classList.remove('show'));
  infoModal.addEventListener('click', (e) => { if (e.target === infoModal) infoModal.classList.remove('show'); });

  SpaceAudio.bindUISounds(document);

  // ----- toast helper -----
  window.showToast = function (msg, duration = 2200) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), duration);
  };
});
