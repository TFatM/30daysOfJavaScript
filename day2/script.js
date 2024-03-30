const seconsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  seconsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds == 0) {
    hands.forEach(hand => hand.style.transitionDuration = '0s');
  } else {
    hands.forEach(hand => hand.style.transitionDuration = '0.05s');
  }
}

setInterval(setDate, 1000);