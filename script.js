'use strict';
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
let playing, score, currentScore, activePlayer;
// reset function
const init = function() {
    playing = true;
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
};

init(); // **call reset function on page load

// switching function
const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Set action for Roll Button i.e. Roll Dice
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. generate a random dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        // 2. display the dice image
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        
        // 3. set condition for dice = 1
        if (dice != 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch player
            switchPlayer();
        }
    }
})

// Set action for Hold button
btnHold.addEventListener('click', function() {
    if (playing) {
        // Add current score to total score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // Set condition for total score >= 100
        if (score[activePlayer] >= 100) {
            // active player wins
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // switch player
            switchPlayer();
        }
    }
})

// Set action for New Game button i.e. Reset
btnNew.addEventListener('click', function() {
    // Set all scores to zero
    playing = true;
    score[0] = 0;
    score[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
})
