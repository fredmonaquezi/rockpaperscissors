//1 - User will choose rock, paper or scissor
//2 - computer will select one of them at random
//3 - declare a winner, loser or draw
//4 - make the function case senstive so no mistakes happen

let playerSelection = prompt('Choose one', '');
let playerScore = 0;
let computerScore = 0;

const myArray = ['rock', 'paper', 'scissors'];

function computerPlay(computerSelection){
    computerSelection = myArray[Math.floor(Math.random() * myArray.length)]

    return computerSelection

}

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    // computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 'Tie!'
    } else if(
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||(computerSelection == 'scissors' && playerSelection == 'paper')) {
            computerScore;
            return 'The computer scores a point'
        //     computerScore++
        //     if(computerScore >= 3){
        //         return 'The computer wins the game';
        //     } else
        //    return 'The computer scores a point';
        } else if (
            (playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper'&& computerSelection == 'rock')||
            (playerSelection == 'scissors' && computerSelection == 'paper')){
                playerScore;
                return 'The player scores a point'
            }
            //     playerScore++
            //     if(playerScore >= 3){
            //         return 'You win the game'
            //     } else
            //     return 'You win the game!';
            // }

}

function game(playerSelection){
    for(let i = 0; i < 5; i++);
    let roundResult = playRound(playerSelection, computerSelection);
    if(roundResult == computerScore){
        computerScore++
    } else if(roundResult == playerScore){
        playerScore++
    }
        console.log(game());
        return;

    // if(playerScore < 3 || computerScore < 3){
    //     playerSelection = prompt('Choose one')
    // }

}

console.log(playerScore);
console.log(computerScore);
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));