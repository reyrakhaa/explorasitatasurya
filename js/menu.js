document.addEventListener('DOMContentLoaded', () => {
  const btnSound = document.getElementById('btnSound');

  function refreshSound() {
    btnSound.textContent = SpaceAudio.isMuted() ? '🔇' : '🔊';
  }

  refreshSound();

  btnSound.addEventListener('click', () => {
    SpaceAudio.toggleMuted();
    refreshSound();
  });

  SpaceAudio.bindUISounds(document);

  window.addEventListener("load", ()=>{
    if(!SpaceAudio.isMuted()){
        SpaceAudio.startAmbient();
    }
  });
});