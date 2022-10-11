const startButton = document.querySelector('.startgame')
startButton.addEventListener("click", function() {
    const container = document.querySelector('.container');
    const scoreboard = document.createElement('div');
    scoreboard.classList.add('scoreboard');
    container.appendChild(scoreboard)

    const playerCorner = document.createElement('div')
    playerCorner.classList.add('playercorner')
    scoreboard.appendChild(playerCorner)

    const opponentCorner = document.createElement('div')
    opponentCorner.classList.add('opponentcorner')
    scoreboard.appendChild(opponentCorner)

    const playerScoreText = document.createElement('div');
    playerScoreText.classList.add('play-score-text')
    playerScoreText.textContent = "Player Score";
    const scoreOfPlayer = document.createElement('div')
    scoreOfPlayer.classList.add('player-score')
    scoreOfPlayer.textContent = "0"
    playerCorner.appendChild(playerScoreText)
    playerCorner.appendChild(scoreOfPlayer)

    const computerScoreText = document.createElement('div');
    computerScoreText.classList.add('comp-score-text')
    computerScoreText.textContent = "Opponent Score";
    const scoreOfComp = document.createElement('div')
    scoreOfComp.classList.add('comp-score')
    scoreOfComp.textContent = "0"
    opponentCorner.appendChild(computerScoreText)
    opponentCorner.appendChild(scoreOfComp)

    const start = document.querySelector('.start')
    start.remove()
})









let playerScore = 0;
let computerScore = 0;

const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choiceList.length);
    let compChoice = choiceList[randomIndex];
    return compChoice;
}

// makes the buttons change color when mouseover
for (let i = 0; i < choiceList.length; i++) {
    let choice = choiceList[i]
    const element = document.querySelector("." + choice);
    element.addEventListener("mouseover", function() {
        element.classList.add('hover')
    })
    element.addEventListener("mouseout", function() {
        element.classList.remove('hover')
    })
}

// gets the player's choice
for (let i = 0; i < choiceList.length; i++) {
    let choice = choiceList[i]
    const element = document.querySelector("." + choice);
    element.addEventListener("click", function() {
        console.log(choice)
        game(choice)
        console.log(playerScore)
        console.log(computerScore)
        const playersScore = document.querySelector('.player-score')
        playersScore.textContent = playerScore
        const compsScore = document.querySelector('.comp-score')
        compsScore.textContent = computerScore
    })
}

const draw = "It's a draw!";
const playerWin = "You won! Congratulations!";
const playerLose = "You lose! Better luck next time!"

function playRound(playerChoice) {
    const computerSelection = getComputerChoice();
    console.log("comp " + computerSelection)
    console.log("player "+ playerChoice)
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

function gameOver() {
    const newGame = document.createElement('div')
    newGame.classList.add('newGame')
    newGame.textContent = "Click here to start new game!"
    const newGameButton = document.createElement('button')
    newGameButton.textContent = "New Game"
    container.appendChild(newGame)
    container.appendChild(newGameButton)
    
    //playerScore = 0
    //computerScore = 0
}

function youLose() {
    const youLose = document.createElement('div')
    youLose.classList.add('youLose')
    youLose.textContent = "You lose!"
    container.appendChild(youLose)
}

function youWin() {
    const youWin = document.createElement('div')
    youWin.classList.add('youWin')
    youWin.textContent = "You win!"
    const winnerImg = document.createElement('img')
    winnerImg.src = "img/win.jpeg"
    container.appendChild(youWin)
    youWin.appendChild(winnerImg)
}



function game(playerChoice) {   
let roundResult = playRound(playerChoice)
    if (roundResult === playerWin) {
        playerScore = playerScore + 1
    } else if (roundResult === playerLose) {
        computerScore = computerScore + 1
    }

    if (playerScore < 5 && computerScore == 5) {
        youLose()
        alert("Computer Wins!")
        gameOver()
    } else if (playerScore == 5 && computerScore < 5) {
        youWin()
        alert("Player Wins!")
        gameOver()
    }
}

