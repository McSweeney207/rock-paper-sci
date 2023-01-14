const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result')
const playerInput = document.getElementById('player-input')
const computerInput = document.getElementById('computer-input')
const playerScoreOutput = document.getElementById('player-score')
const computerScoreOutput = document.getElementById('computer-score')
const roundDisplay = document.getElementById('game-round')
const gamePlay = document.querySelector('.game-play')
const endGame = document.querySelector('.end-game')
const endResult = document.getElementById('end-result')

let playerScore = 0
let cpuScore = 0
let gameRound = 1

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

    playerScoreOutput.textContent = playerScore
    computerScoreOutput.textContent = cpuScore
}

function endOfGame(){
    if (playerScore === 5){
        gamePlay.style.display = "none"
        endGame.style.display = "block"
        endResult.textContent = "Well Done, you beat the computer!"
    } else if (cpuScore === 5){
        gamePlay.style.display = "none"
        endGame.style.display = "block"
        endResult.textContent = "You Lost! Better luck next time!"
    } else {
        return
    }
}

function gameReset(){   
    playerScore = 0
    cpuScore = 0
    gameRound = 1

    gamePlay.style.display = "block"
    endGame.style.display = "none"  

    playerScoreOutput.textContent = playerScore
    computerScoreOutput.textContent = cpuScore

    
    playerInput.textContent = ''
    computerInput.textContent = ''
    result.textContent = ''
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    
    if (button.id === 'playAgain'){
        gameReset()
    } else {
        computer = getComputerChoice()    
        game = playRound(button.id, computer)
    
        playerInput.textContent = button.id
        computerInput.textContent = computer
        result.textContent = game
        updateScores(game)
        endOfGame()
    }
    });
  });

