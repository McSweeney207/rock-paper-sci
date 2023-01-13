const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result')
const playerInput = document.getElementById('player-input')
const computerInput = document.getElementById('computer-input')
const playerScoreOutput = document.getElementById('player-score')
const computerScoreOutput = document.getElementById('computer-score')
const roundDisplay = document.getElementById('game-round')

let playerScore = 0
let cpuScore = 0
let gameRound = 0

function getComputerChoice(){
    let choice = Math.trunc(Math.random()*3) + 1;
    switch (choice){
        case 1:
            return "Rock"
            break
        case 2:
            return "Paper"
            break
        case 3:
            return "Scissors"
            break
    }
}  

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You Lose! Scissors beat Paper!"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === computerSelection){
        return "It is a Draw!"
    } else {
        return 
    }
}

function updateScores(game){
    if (game.charAt(4) === "W"){
        playerScore++
    } else if (game.charAt(4) === "L"){
        cpuScore++
    }
    gameRound++

    roundDisplay.textContent = "Round: " + gameRound
    playerScoreOutput.textContent = playerScore
    computerScoreOutput.textContent = cpuScore
}

function gameReset(){
    console.log(gameRound)
    if (gameRound === 5) {
        if (playerScore > cpuScore){
            alert("Well Done, you beat the computer! Play again?")
        } else if (cpuScore > playerScore){
            alert("You Lost! Better luck next time! Play again?")
        } else {
            alert("It is a tie! Play again?")
        }
        playerScore = 0
        cpuScore = 0
        gameRound = 0
    
        roundDisplay.textContent = "Round: " + gameRound
        playerScoreOutput.textContent = playerScore
        computerScoreOutput.textContent = cpuScore

        playerInput.textContent = ''
        computerInput.textContent = ''
        result.textContent = ''
    } else {
        return
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    computer = getComputerChoice()    
    game = playRound(button.id, computer)
    playerInput.textContent = button.id
    computerInput.textContent = computer
    result.textContent = game
    updateScores(game)
    gameReset()
    });
  });

