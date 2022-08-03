
// Get random number 1-3 and return rock, paper, or scissors

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3 + 1);
    if (result === 1) {
        return 'rock';
    } else if (result === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie! Rock and Rock bounce off each other.';
        }
        else if (computerSelection === 'paper') {
            return 'You lose! Rock gets covered by Paper.';
        }
        else {
            return 'You win! Rock smashes Scissors.';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper covers Rock.';
        } else if (computerSelection === 'paper') {
            return 'Tie! Paper and Paper flutter together in the wind.';
        } else {
            return 'You lose! Paper gets cut by Scissors.';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Scissors gets smashed by Rock.';
        } else if (computerSelection === 'paper') {
            return 'You win! Scissors cuts through Paper.';
        } else {
            return 'Tie! Scissors and Scissors snip menacingly at each other.';
        }
    } else {
        return 'Please input "Rock", "Paper", or "Scissors".';
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');

        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        
        if (result.startsWith('You win!')) {
            ++playerWins;
        } else if (result.startsWith('You lose!')) {
            ++computerWins;
        } else {
            ++ties;
        }

        console.log(result);
        console.log(`Your wins: ${playerWins} | Computer wins: ${computerWins} | Ties: ${ties}`);
    }
}

game();