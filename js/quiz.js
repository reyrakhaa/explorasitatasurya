// quiz.js — logika kuis interaktif per planet
document.addEventListener('DOMContentLoaded', () => {
  const selectView = document.getElementById('selectView');
  const playView = document.getElementById('playView');
  const resultModal = document.getElementById('resultModal');
  const planetGrid = document.getElementById('planetGrid');
  const btnSound = document.getElementById('btnSound');

  const quizPlanets = window.PLANET_DATA.filter(p => p.type === 'planet');
  let activePlanet = null;
  let questions = [];
  let qIndex = 0;
  let score = 0;
  let answered = false;

  // ---------- render pilihan planet ----------
  function renderGrid() {
    planetGrid.innerHTML = '';
    quizPlanets.forEach((p, i) => {
      const best = localStorage.getItem('sst_best_' + p.id);
      const tile = document.createElement('div');
      tile.className = 'planet-tile clickable';
      tile.style.animationDelay = (i * 0.06) + 's';
      tile.innerHTML = `
        <div class="dot" style="background-image:${p.texture ? `url('${p.texture}'), ` : ''}radial-gradient(circle at 32% 30%, ${p.color}, ${p.color2}); background-size:cover; background-position:center;"></div>
        <h3>${p.name}</h3>
        <div class="best-score">${best ? '⭐ Skor terbaik: ' + best + '/10' : 'Belum dicoba'}</div>
      `;
      tile.addEventListener('click', () => startQuiz(p));
      planetGrid.appendChild(tile);
    });
  }

  // ---------- mulai kuis: coba fetch JSON, fallback ke data embedded ----------
  async function startQuiz(planet) {
    activePlanet = planet;
    questions = null;
    try {
      const res = await fetch(`../quiz-data/${planet.id}.json`);
      if (res.ok) {
        const data = await res.json();
        questions = data.map(item => ({ q: item.question, o: item.options, a: item.answer, e: item.explanation }));
      }
    } catch (err) {
      // fetch gagal (mis. dibuka langsung via file://) → pakai data cadangan
    }
    if (!questions) questions = window.QUIZ_DATA[planet.id];

    qIndex = 0; score = 0; answered = false;
    selectView.hidden = true; resultModal.classList.remove("show"); playView.hidden = false;
    if (!SpaceAudio.isMuted()) SpaceAudio.playOpen();
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    document.getElementById('quizPlanetBadge').textContent = activePlanet.name;
    document.getElementById('progressText').textContent = `Soal ${qIndex + 1}/${questions.length}`;
    document.getElementById('progressFill').style.width = ((qIndex) / questions.length * 100) + '%';
    document.getElementById('scoreText').textContent = score;
    document.getElementById('feedbackPanel').hidden = true;

    const item = questions[qIndex];
    document.getElementById('questionText').textContent = item.q;
    const wrap = document.getElementById('optionsWrap');
    wrap.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    item.o.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn clickable';
      btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
      btn.addEventListener('click', () => selectAnswer(i, btn));
      wrap.appendChild(btn);
    });

    const card = document.getElementById('quizCard');
    card.classList.remove('fade-up'); void card.offsetWidth; card.classList.add('fade-up');
  }

  function selectAnswer(i, btn) {
    if (answered) return;
    answered = true;
    const item = questions[qIndex];
    const correct = i === item.a;
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach((b, idx) => {
      b.disabled = true;
      if (idx === item.a) b.classList.add('correct');
      else if (idx === i && !correct) b.classList.add('wrong');
    });

    if (correct) {
      score++;
      if (!SpaceAudio.isMuted()) SpaceAudio.playCorrect();
    } else {
      if (!SpaceAudio.isMuted()) SpaceAudio.playWrong();
    }
    document.getElementById('scoreText').textContent = score;

    const feedbackPanel = document.getElementById('feedbackPanel');
    const head = document.getElementById('feedbackHead');
    head.textContent = correct ? '🎉 Benar sekali!' : '💡 Belum tepat, yuk simak penjelasannya:';
    head.className = 'feedback-head ' + (correct ? 'is-correct' : 'is-wrong');
    document.getElementById('feedbackExplain').textContent = item.e;
    feedbackPanel.hidden = false;
    feedbackPanel.classList.remove('fade-up'); void feedbackPanel.offsetWidth; feedbackPanel.classList.add('fade-up');

    document.getElementById('btnNext').textContent = (qIndex === questions.length - 1) ? 'Lihat Hasil 🏁' : 'Lanjut →';
  }

  document.getElementById('btnNext').addEventListener('click', () => {
    qIndex++;
    if (qIndex >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  });

  function showResult() {
    document.getElementById('progressFill').style.width = '100%';
    playView.hidden = true; resultModal.classList.add('show');
    if (!SpaceAudio.isMuted()) SpaceAudio.playFinish();

    const total = questions.length;
    const stars = Math.max(1, Math.round((score / total) * 5));
    const emoji = score === total ? '🏆' : score >= total * 0.7 ? '🌟' : score >= total * 0.4 ? '🚀' : '🌙';
    const title = score === total ? 'Sempurna!' : score >= total * 0.7 ? 'Hebat sekali!' : score >= total * 0.4 ? 'Kerja bagus!' : 'Terus semangat belajar!';

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultDesc').textContent = `Kamu menjawab benar ${score} dari ${total} soal tentang ${activePlanet.name}.`;
    document.getElementById('resultStars').textContent = '⭐'.repeat(stars) + '☆'.repeat(5 - stars);

    const prevBest = parseInt(localStorage.getItem('sst_best_' + activePlanet.id) || '0', 10);
    if (score > prevBest) localStorage.setItem('sst_best_' + activePlanet.id, String(score));

    const card = document.querySelector('.result-card');
    card.classList.remove('pop-anim'); void card.offsetWidth; card.classList.add('pop-anim');
  }

  document.getElementById('btnRetry').addEventListener('click', () => startQuiz(activePlanet));
  document.getElementById('btnChooseAnother').addEventListener('click', () => {
    renderGrid();
    resultModal.classList.remove("show"); playView.hidden = true; selectView.hidden = false;
  });
  document.getElementById('btnQuitQuiz').addEventListener('click', () => {
    renderGrid();
    playView.hidden = true; selectView.hidden = false;
  });
  document.getElementById("btnReset").addEventListener("click", ()=>{
    document.getElementById("resetModal") .classList.add("show");
  });
  document.getElementById("btnCancelReset").addEventListener("click", ()=>{
    document.getElementById("resetModal") .classList.remove("show");
  });
  document.getElementById("btnConfirmReset").addEventListener("click", ()=>{
    quizPlanets.forEach((planet)=>{localStorage.removeItem('sst_best_'+planet.id);
  });
    activePlanet = null;
    questions = [];
    qIndex = 0;
    score = 0;
    answered = false;
    playView.hidden = true;
    resultModal.classList.remove("show");
    selectView.hidden = false;
    renderGrid();
    document.getElementById("resetModal").classList.remove("show"); showToast("Progres kuis berhasil direset!");
});
  
  // ---------- reset ----------
  function resetAllQuiz(){
    if(confirm(
        "Yakin ingin mereset seluruh progres kuis?"
    )){
        quizPlanets.forEach((planet)=>{
            localStorage.removeItem(
                'sst_best_'+planet.id
            );
        });
        activePlanet = null;
        questions = [];
        qIndex = 0;
        score = 0;
        answered = false;
        playView.hidden = true;
        resultModal.classList.remove("show");
        selectView.hidden = false;
        renderGrid();
        showToast(
            "Seluruh progres kuis berhasil direset!"
        );
    }
}

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

  renderGrid();
});
