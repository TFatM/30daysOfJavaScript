    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string', '+pop');

// Styled
console.log('%cI am great text', 'font-size: 50px; background: red')

// warning!
console.warn('Warning');

// Error :|
console.error('Error');

// Info
console.info('info');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dogs years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/TFatM')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);