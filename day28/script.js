const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

function handleMove(e) {
  if (isDown) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const height = Math.round(percent * 100) + '%';
    bar.style.height = height;
    const min = 0.4;
    const max = 4;
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
  }
};

speed.addEventListener('mousemove', handleMove);
speed.addEventListener('mousedown', () => isDown = true);
speed.addEventListener('mouseup', () => isDown = false);