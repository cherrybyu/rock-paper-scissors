const choiceList = ["rock", "paper", "scissors"];

// makes the buttons change color when mouseover
for (let i = 0; i < choiceList.length; i++) {
let choice = choiceList[i];
const element = document.querySelector("." + choice);
element.addEventListener("mouseover", function() {
    element.classList.add('hover');
})
element.addEventListener("mouseout", function() {
    element.classList.remove('hover');
})
}

// gets the player's choice
for (let i = 0; i < choiceList.length; i++) {
let choice = choiceList[i];
const element = document.querySelector("." + choice);
element.addEventListener("click", function() {
    console.log(choice);
    game(choice);
    console.log(playerScore);
    console.log(computerScore);
    const playersScore = document.querySelector('.player-score');
    playersScore.textContent = playerScore;
    const compsScore = document.querySelector('.comp-score');
    compsScore.textContent = computerScore;
})
}

const container = document.querySelector('.container')

const youLose = document.createElement('div');
youLose.classList.add('youLose');
youLose.textContent = "You lose!";

const youWin = document.createElement('div');
youWin.classList.add('youWin');
youWin.textContent = "You win!";
const winnerImg = document.createElement('img');
winnerImg.src = "img/win.jpeg";
winnerImg.classList.add('winner-img')
youWin.appendChild(winnerImg);
    

function gameOver() {
    const newGameContainer = document.createElement('div');
    newGameContainer.classList.add('new-game-container')
    container.appendChild(newGameContainer)
    const newGame = document.createElement('div');
    newGame.classList.add('newGame');
    newGame.textContent = "Click here to start new game!";
    const newGameButton = document.createElement('button');
    newGameButton.textContent = "New Game";
    newGameContainer.appendChild(newGame);
    newGameContainer.appendChild(newGameButton);
    const buttons = document.querySelector('.buttons');
    buttons.remove()
    newGameButton.addEventListener('click', function() {
        location.href = "index.html"
    })


    //playerScore = 0;
    //computerScore = 0;
}



let playerScore = 0;
let computerScore = 0;

function game(playerChoice) {   
let roundResult = playRound(playerChoice);
    if (roundResult === playerWin) {
        playerScore = playerScore + 1;
    } else if (roundResult === playerLose) {
        computerScore = computerScore + 1;
    }

    if (computerScore == 5) {
        container.appendChild(youLose);
        alert("Computer Wins!");
        gameOver();
    } else if (playerScore == 5) {
        container.appendChild(youWin);
        alert("Player Wins!");
        gameOver();
    }
}

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choiceList.length);
    let compChoice = choiceList[randomIndex];
    return compChoice;
}

const draw = "It's a draw!";
const playerWin = "You won! Congratulations!";
const playerLose = "You lose! Better luck next time!";

function playRound(playerChoice) {
    const computerSelection = getComputerChoice();
    console.log("comp " + computerSelection);
    console.log("player "+ playerChoice);
    if (playerChoice == computerSelection) {
        alert(draw);
        return draw;
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        alert(playerLose);
        return playerLose;
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        alert(playerWin);
        return playerWin;
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        alert(playerLose);
        return playerLose;
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        alert(playerWin);
        return playerWin;
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        alert(playerLose);
        return playerLose;
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        alert(playerWin);
        return playerWin;
    }
} 

