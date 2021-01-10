'use strict'

const score0_El = document.getElementById('score--0')
const score1_El = document.getElementById('score--1')
const current0_El = document.getElementById('current--0')
const current1_El = document.getElementById('current--1')
const dice_El = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


//Starting Conditions
score0_El.textContent = 0
score1_El.textContent = 0
dice_El.classList.add('hidden')

const scores = [0, 0]

let currentScore = 0
let activePlayer = 0

//Roll Dice
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1   //Random Dice Roll
  dice_El.classList.remove('hidden')               //Display Dice
  dice_El.src = `assets/dice-${dice}.png`          //Source for dice img

  if(dice !== 1){
    currentScore += dice                           //Add dice to Current Score
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0 
  }
})
