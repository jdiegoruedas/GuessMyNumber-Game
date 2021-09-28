document.querySelector('.start').addEventListener('click', function () {
  const begin = document.querySelector('.game-begin');
  begin.classList.add('hide');
});

let secretNumber = Math.trunc(Math.random() * 20 + 1);

/* 
const livesCountdown = function () {
  let lives = 15;
  document.querySelector('.lives').textContent = `Lives: ${lives--}`;
}; */

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage('Too high!');
    }
    if (guess < secretNumber) {
      displayMessage('Too low!');
    }
  } else {
    displayMessage('You win!');
  }
});
