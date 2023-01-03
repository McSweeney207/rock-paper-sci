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
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        return "You Lose! Scissors beat Paper!"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === computerSelection){
        return "It is a Draw!"
    } else {
        return 
    }
}

function game(){
    let playerScore = 0
    let cpuScore = 0
    for (i = 0; i < 5; i++){      
        let playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase()
        let computerSelection = getComputerChoice().toUpperCase()
        
        let outCome = playRound(playerSelection, computerSelection)

        if (outCome.charAt(4) === "W"){
            playerScore++
        } else if (outCome.charAt(4) === "L"){
            cpuScore++
        }
        console.log("Round: " + (i + 1))
        console.log("Player: " + playerSelection + " Score: " + playerScore)
        console.log("Computer: " + computerSelection + " Score: " + cpuScore)
        console.log(outCome)
    }
    if (playerScore > cpuScore){
        console.log("You Won The Game!")
    } else {
        console.log("You Lost The Game!")
    }
}

game()