//1 - User will choose rock, paper or scissor
//2 - computer will select one of them at random
//3 - declare a winner, loser or draw
//4 - make the function case senstive so no mistakes happen

let playerSelection = '';
let playerScore = 0;
let computerScore = 0;

const myArray = ['rock', 'paper', 'scissors'];

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerPlay());
    console.log(playRound(playerSelection, computerSelection));
});

paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerPlay());
    console.log(playRound(playerSelection, computerSelection));
});

scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerPlay());
    console.log(playRound(playerSelection, computerSelection));
});

function computerPlay(computerSelection){
    computerSelection = myArray[Math.floor(Math.random() * myArray.length)]

    return computerSelection

}

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    // computerSelection = computerPlay().toLowerCase();
    // playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 'Tie!'
    } else if(
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||(computerSelection == 'scissors' && playerSelection == 'paper')) {
            computerScore++
            if(computerScore >= 3){
                return 'The computer wins the game';
            } else
           return 'The computer scores a point';
        } else if (
            (playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper'&& computerSelection == 'rock')||
            (playerSelection == 'scissors' && computerSelection == 'paper')){
                playerScore++
                if(playerScore >= 3){
                    return 'You win the game'
                } else
                return 'You win the game!';
            }

}

function game(){
    for(let i = 0; i < 5; i++);

}

console.log(playerScore);
console.log(computerScore);
// console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));