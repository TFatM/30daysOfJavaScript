const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation();
  // console.log(this);
}

// document.body.addEventListener('click', logText)

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('click!');
}, {
  once:true
})