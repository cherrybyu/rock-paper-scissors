const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choiceList.length);
    let compChoice = choiceList[randomIndex];
    return compChoice;
}

function getPlayerChoice() {
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
const draw = "It's a draw!";
const playerWin = "You won! Congratulations!";
const playerLose = "You lose! Better luck next time!"

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("comp " + computerSelection)
    console.log("player "+ playerSelection)
    if (playerSelection == computerSelection) {
        alert(draw);
        return draw;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert(playerLose);
        return playerLose;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert(playerWin);
        return playerWin;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert(playerLose);
        return playerLose;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert(playerWin);
        return playerWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert(playerLose);
        return playerLose;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert(playerWin);
        return playerWin;
    }
} 

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound()
        if (roundResult === playerWin) {
            playerScore = playerScore + 1
        } else if (roundResult === playerLose) {
            computerScore = computerScore + 1
        }
    }
    if (playerScore === computerScore) {
        return "Draw!"
    } else if (playerScore < computerScore) {
        return "Computer Wins!"
    } else if (playerScore > computerScore) {
        return "Player Wins!"
    }
}

console.log(game())