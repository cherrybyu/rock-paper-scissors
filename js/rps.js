const choiceList = ['rock', 'paper', 'scissors'];

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

const playerSelection = getPLayerChoice90;
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection){
    
}
    



/*
function getComputerChoice will randomly return rock, paper, or scissors
    choiceList = [rock, paper, scissors]
    compChoice = choiceList[(Math.floor(Math.random()*choiceList.length))];


*/
console.log(getPLayerChoice())
console.log(getComputerChoice())