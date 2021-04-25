const computerAanswer = ["rock", "paper", "scissors"];

function computerPlay() {
    let answer = computerAanswer[Math.floor(Math.random() * computerAanswer.length)];
    console.log('computer choice is: ' + answer.toUpperCase()); 
    return answer;
}



function playRound (playerSelection, computerSelection) {
    playerSelection  = playerSelection.toLowerCase()
    
    if  ((playerSelection == "rock"     && computerSelection == "scissors") ||
         (playerSelection == "paper"    && computerSelection == "rock")     ||
         (playerSelection == "scissors" && computerSelection == "paper")) {

            return "Congrats,you are winner!";

    }   else if ((playerSelection == "rock"     && computerSelection == "rock")    ||
                 (playerSelection == "paper"    && computerSelection == "paper")   ||
                 (playerSelection == "scissors" && computerSelection == "scissors")) {

            return "Draw!";
    }   else if ((computerSelection == "rock"     && playerSelection == "scissors")  ||
                 (computerSelection == "paper"    && playerSelection == "rock")      ||
                 (computerSelection == "scissors" && playerSelection == "paper")){

            return "You lose. Maybe next time...";
    }   else {
            return 'Wrong input.'
    }
}

let playerSelection = prompt("Make your choose: Rock, Paper or Scissors?");
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log('player choice is: ' + playerSelection.toUpperCase());
