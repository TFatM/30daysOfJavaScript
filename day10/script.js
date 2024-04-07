const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  //Перевіряє чи натиснутий shift при виборі(check) і перевіряти чи вони натискають вибір
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //створюєм луп над всіма checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('checking')
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));