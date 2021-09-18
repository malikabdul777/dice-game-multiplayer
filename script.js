'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let varScoreP1 = 0;
let varScoreP2 = 0;
score0El.textContent = 0;
score1El.textContent = 0;

function hideCon() {
  let arr = [diceEl, btnRollEl, btnHoldEl];
  for (let i = 0; i <= arr.length - 1; i++) arr[i].classList.add('hidden');
}

function checkForWinner() {
  if (Number(score0El.textContent) >= 100) {
    player0El.classList.add('player--winner');
    hideCon();
  } else if (Number(score1El.textContent) >= 100) {
    player1El.classList.add('player--winner');
    hideCon();
  }
}

function toggleP() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  current0El.textContent = 0;
  current1El.textContent = 0;
}

btnRollEl.addEventListener('click', () => {
  let ranNum = Math.trunc(Math.random() * (6 - 1) + 1);
  // console.log(ranNum);
  diceEl.src = `dice-${ranNum}.png`;
  if (ranNum === 1) {
    toggleP();
    varScoreP1 = varScoreP2 = 0;
  } else {
    if (player0El.classList.contains('player--active')) {
      current0El.textContent = Number(current0El.textContent) + ranNum;
      varScoreP1 = Number(current0El.textContent);
      checkForWinner();
    } else {
      current1El.textContent = Number(current1El.textContent) + ranNum;
      varScoreP2 = Number(current1El.textContent);
      checkForWinner();
    }
  }
});

btnHoldEl.addEventListener('click', () => {
  if (player0El.classList.contains('player--active')) {
    score0El.textContent = Number(score0El.textContent) + varScoreP1;
    // console.log(score0El.textContent);
    checkForWinner();
    toggleP();
  } else {
    score1El.textContent = Number(score1El.textContent) + varScoreP2;
    checkForWinner();
    toggleP();
  }
});

btnNewEl.addEventListener('click', () => {
  location.reload();
});
