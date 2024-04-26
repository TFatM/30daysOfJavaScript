let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const audio = document.getElementById('audio');

function timer(seconds) {
  //Прибрати існуючі таймери
  clearInterval(countdown);
  pauseAudio();

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //Перевірка чи потрібно його зупинити
    if (secondsLeft < 0) {
      clearInterval(countdown);
      playAudio();
      return;
    }
    //показати його
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaiderSeconds = seconds % 60;
  const display = `${minutes}:${remaiderSeconds < 10 ? '0' : ''}${remaiderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Повернись о ${hour}:${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
})