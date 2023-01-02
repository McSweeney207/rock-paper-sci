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
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Win"
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "Lose"
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "Win"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "Lose"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "Lose"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "Win"
    } else {
        return "Draw"
    }}

let playerSelection = getComputerChoice()
let computerSelection = getComputerChoice()
console.log("You: " + playerSelection + " CPU: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))