function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.code}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return; //Зупиняє функцію
  audio.currentTime = 0; //Відкачує фунцію на початок
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!key) return;
  key.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

window.addEventListener('keyup', removeTransition);
