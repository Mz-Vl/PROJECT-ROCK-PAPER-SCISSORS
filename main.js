let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const computerAanswer = ["rock", "paper", "scissors"];
    let answer = computerAanswer[Math.floor(Math.random() * computerAanswer.length)];
    console.log('Computer choice is: ' + answer.toUpperCase()); 
    return answer;
}



function playRound () {
    let playerSelection = prompt("Make your choose: Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    
    if  ((playerSelection == "rock"     && computerSelection == "scissors") ||
         (playerSelection == "paper"    && computerSelection == "rock")     ||
         (playerSelection == "scissors" && computerSelection == "paper")) {
         playerScore++;
         let roundResult = 'Your choice is: ' + playerSelection.toUpperCase();
         roundResult += "\nCongrats,you are winner!";
         roundResult += '\nYour score is: ' + playerScore;
         roundResult += '\nComputer score is: ' + computerScore;
                 return roundResult;

    }   else if ((playerSelection == "rock"     && computerSelection == "rock")    ||
                 (playerSelection == "paper"    && computerSelection == "paper")   ||
                 (playerSelection == "scissors" && computerSelection == "scissors")) {
                 let roundResult = 'Your choice is: ' + playerSelection.toUpperCase();
                 roundResult += "\nDraw!";
                 roundResult += '\nYour score is: ' + playerScore;
                 roundResult += '\nComputer score is: ' + computerScore;
                 return roundResult;
                 

    }   else if ((computerSelection == "rock"     && playerSelection == "scissors")  ||
                 (computerSelection == "paper"    && playerSelection == "rock")      ||
                 (computerSelection == "scissors" && playerSelection == "paper")){
                 computerScore++;
                 let roundResult = 'Your choice is: ' + playerSelection.toUpperCase();
                 roundResult += "\nYou lose. Maybe next time...";
                 roundResult += '\nYour score is: ' + playerScore;
                 roundResult += '\nComputer score is: ' + computerScore;
                 return roundResult;

    }   else {
            return 'Wrong input.'
    }
}

function gameResult() {
    if (playerScore > computerScore) {
        console.log('You won this game! ');
    } else if (computerScore > playerScore) {
        console.log('You lost!');
    } else if (computerScore == playerScore) {
        console.log('Wow! It\'s Draw!')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    return gameResult();
}

// function game() {
//     console.log(playRound());
//     if (playerScore < 5 && computerScore < 5) {
//         game();
//     } else {
//         gameResult();
//     }
// }

game();
