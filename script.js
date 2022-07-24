'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 10;
let highScore = 0;

// When user clicks on check btn.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const messageElem = document.querySelector('.message');

  // When there is no input.
  if (!guess) return (messageElem.textContent = 'No Number!');

  if (guess === secretNumber) {
    messageElem.textContent = '🎉 Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    // when Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageElem.textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('body').style.backgroundColor = 'Red';
      document.querySelector('.number').style.width = '30rem';
    }

    // When guess is too high.
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageElem.textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('body').style.backgroundColor = 'Red';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.ceil(Math.random() * 20);
  score = 10;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
});
