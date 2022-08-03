
//Get random number 1-3 and return rock, paper, or scissors

function rockPaperScissors() {
    let result = Math.floor(Math.random() * 3 + 1);
    if (result === 1) {
        return 'rock';
    } else if (result === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getComputerChoice() {
    return rockPaperScissors();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie! Rock and Rock bounce off each other.'
        }
        else if (computerSelection === 'paper') {
            return 'You lose! Rock gets covered by Paper.'
        }
        else {
            return 'You win! Rock smashes Scissors.'
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper covers Rock.'
        } else if (computerSelection === 'paper') {
            return 'Tie! Paper and Paper flutter together in the wind.'
        } else {
            return 'You lose! Paper gets cut by Scissors.'
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Scissors gets smashed by Rock.'
        } else if (computerSelection === 'paper') {
            return 'You win! Scissors cuts through Paper.'
        } else {
            return 'Tie! Scissors and Scissors snip menacingly at each other.'
        }
    } else {
        return 'Please input "Rock", "Paper", or "Scissors".'
    }
}

const playerSelection = 'PAPER';
const computerSelection = getComputerChoice();

console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));