const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choiceList.length);
    let compChoice = choiceList[randomIndex];
    return compChoice;
}

function getPLayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors.");
    if (playerChoice.toLowerCase() === "paper") {
        alert("You chose paper.");
    } else if (playerChoice.toLowerCase() === "rock") {
        alert("You chose rock.");
    } else if (playerChoice.toLowerCase() === "scissors") {
        alert("You chose scissors.");
    }
    return playerChoice;
}

const playerSelection = getPLayerChoice();
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        alert("It's a draw!");
        return "It's a draw!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Better luck next time!");
        return "You lose! Better luck next time!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You won! Congratultions!");
        return "You won! Congratultions!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! Better luck next time!");
        return "You lose! Better luck next time!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You won! Congratulations!");
        return "You won! Congratulations!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! Better luck next time!");
        return "You lose! Better luck next time!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You won! Congratulations!");
        return "You won! Congratulations!";
    }
} 




/*
function getComputerChoice will randomly return rock, paper, or scissors
    choiceList = [rock, paper, scissors]
    compChoice = choiceList[(Math.floor(Math.random()*choiceList.length))];


*/

console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))