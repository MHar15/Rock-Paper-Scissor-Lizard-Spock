const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userchoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoiceDisplay = e.target.id
  userChoiceDisplay.innerHTML = user-choice
  generateComputerChoice()
}))

function generateComputerChoice() {
   const randomNumber = Math.random() * possibleChoices.length
   console.log(randomNumber)
}