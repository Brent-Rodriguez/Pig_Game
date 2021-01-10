'use strict'

const player0_El = document.querySelector('.player--0')
const player1_El = document.querySelector('.player--1')
const score0_El = document.getElementById('score--0')
const score1_El = document.getElementById('score--1')
const current0_El = document.getElementById('current--0')
const current1_El = document.getElementById('current--1')
const dice_El = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let scores, 
    currentScore, 
    activePlayer, 
    playing

const init = () => {
  //Initializing Conditions
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  score0_El.textContent = 0
  score1_El.textContent = 0
  current0_El.textContent = 0
  current1_El.textContent = 0

  dice_El.classList.add('hidden')
  player0_El.classList.add('player--active')
  player0_El.classList.remove('player--winner')
  player1_El.classList.remove('player--winner')
  player1_El.classList.remove('player--active')
}

//Initialize Condition
init()

//Switch Player Function
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player0_El.classList.toggle('player--active')
    player1_El.classList.toggle('player--active')
}

//Roll Dice Event
btnRoll.addEventListener('click', () => {
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1   //Random Dice Roll
    dice_El.classList.remove('hidden')               //Display Dice
    dice_El.src = `assets/dice-${dice}.png`          //Source for dice img

    if(dice !== 1){
      currentScore += dice                           //Add dice to Current Score
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {                                         //Switch to next player
      switchPlayer()
    }
  }
  
})

//Hold Current Score Event
btnHold.addEventListener('click', () => {
  if(playing) {
    scores[activePlayer] += currentScore   //Add current scors to Active Player
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if(scores[activePlayer] >= 100){
      playing = false
      dice_El.classList.add('hidden')
      //Game Winner
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {
      switchPlayer()  //Switch to next player
    }
  }
})
  
//New game Event
btnNew.addEventListener('click', init)
