const computerAanswer = ["rock", "paper", "scissors"];

function computerPlay() {
    let answer = computerAanswer[Math.floor(Math.random() * computerAanswer.length)];
    console.log('computer choice is: ' + answer.toUpperCase()); 
    return answer;
}



function playRound (playerSelection, computerSelection) {
    playerSelection  = playerSelection.toLowerCase()
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Congrats,you are winner!";
    }   else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Congrats,you are winner!";
    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Congrats,you are winner!";
    }   else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Draw!";
    }   else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Draw!";
    }   else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw!";
    }   else {
        return "You lose. Maybe next time...";
    }
}

let playerSelection = prompt("Make your choose: Rock, Paper or Scissors?");
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

console.log('player choice is: ' + playerSelection.toUpperCase());



