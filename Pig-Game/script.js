'use strict';
// let dice = Math.random * 6;

const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const dice = document.querySelector('.dice');
const score_0 = (document.getElementById('score--0').textContent = 0);
const score_1 = (document.getElementById('score--1').textContent = 0);

dice.classList.add('hidden');
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
let playing = true;

rollDice.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    let randomDice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomDice}.png`;

    if (randomDice != 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

holdDice.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', function () {
  dice.classList.add('hidden');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
});
