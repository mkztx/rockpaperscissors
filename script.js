function getComputerChoice() {
    let choice;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        choice = 'rock';
    } else if (random == 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function playGame(playerSelection, ComputerSelection) {
    // changing names of variables for easier writing
    // get all strings to lower case
    let pChoice = playerSelection.toLowerCase();
    let cChoice = ComputerSelection.toLowerCase();

    // compare choices and select winner

    if (pChoice == cChoice) {
        return 'spare';
    } else if (pChoice == 'rock') {
        if (cChoice == 'paper') {
            return 'Computer Wins';
        } else if (cChoice == 'scissors') {
            return 'Player Wins';
        }
    } else if (pChoice == 'paper') {
        if (cChoice == 'rock') {
            return 'Player Wins';
        } else if (cChoice == 'scissors') {
            return 'Computer Wins';
        }
    } else if (pChoice == 'scissors') {
        if (cChoice == 'rock') {
            return 'Computer Wins';
        } else if (cChoice == 'paper') {
            return 'Player Wins';
        }
    } else {
        return 'invalid input';
    }
}
/*
const playerSelection = 'rock';
const ComputerSelection = getComputerChoice();
console.log(playGame(playerSelection, ComputerSelection));
*/

/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Game number: ' + i);
        let playerSel = prompt('Input your choice: rock, paper, scissors');
        console.log('Your choice: ' + playerSel);
        //playGame(playerSel, getComputerChoice());
        console.log(playGame(playerSel, getComputerChoice()));
    }
}
*/
let sumP = 0;
let sumC = 0;
function playGameAndCountScore(e) {
    if (playGame(e, getComputerChoice()) == 'Player Wins') {
        sumP++;
        console.log('Player Won round');
    } else if (playGame(e, getComputerChoice()) == 'Computer Wins') {
        sumC++;
        console.log('Computer Won round');
    } else {
        console.log('spare');
    }
    while (sumC == 5) {
        sumP = 0;
        sumC = 0;
        return 'Computer Won';
    }
    while (sumP == 5) {
        sumP = 0;
        sumC = 0;
        return 'Player Won';
    }
    return `player score = ${sumP} computer score = ${sumC}`;
}

const winner = document.querySelector('#winner');

const playRock = document.querySelector('#rock');
playRock.addEventListener(
    'click',
    () => (winner.textContent = playGameAndCountScore('rock'))
);

const playPaper = document.querySelector('#paper');
playPaper.addEventListener(
    'click',
    () => (winner.textContent = playGameAndCountScore('paper'))
);

const playScissor = document.querySelector('#scissor');
playScissor.addEventListener(
    'click',
    () => (winner.textContent = playGameAndCountScore('scissor'))
);
