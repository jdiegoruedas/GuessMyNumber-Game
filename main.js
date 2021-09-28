const elements = document.querySelectorAll('.sign-animation');
const rotateElements = function () {
  elements.forEach(elements => {
    elements.classList.add('rotate');
  });
  console.log(elements);
};

document.querySelector('.start').addEventListener('click', function () {
  const begin = document.querySelector('.game-begin');
  begin.classList.add('hide');
  rotateElements();
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const livesCountdown = function () {
  lives--;
  document.querySelector('.lives').textContent = `Lives: ${lives}`;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let lives = 15;

const guessRange = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  '?',
];

const changeNumbers = function () {
  let timer = 0;

  for (let i = 0; i < guessRange.length; i++) {
    setTimeout(() => {
      document.querySelector('.number').innerHTML = guessRange[i];
    }, timer);

    timer = timer + 20;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess !== secretNumber) {
    changeNumbers();
    if (guess > secretNumber) {
      displayMessage('Too high!');
      livesCountdown();
    }
    if (guess < secretNumber) {
      displayMessage('Too low!');
      livesCountdown();
    }
  } else {
    const winNumberChange = document.querySelector('.number');
    winNumberChange.textContent = secretNumber;
    winNumberChange.style.width = '30rem';
    displayMessage('You win!');
    document.querySelector('.check').textContent = 'Congratz!';
  }

  if (lives === 0) {
    displayMessage('You lost!');
    const check = document.querySelector('.check');
    check.textContent = 'Try again!';

    document.querySelector('.check').addEventListener('click', function () {
      location.reload();
    });
  }
});
