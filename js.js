let humanScore = 0;
let computerScore = 0;
let humanselect = ""
let computerselect = ""

function getComputerChoice(roll) {
    let computerchoice = "empty";
        if (roll==0) {
            computerchoice = "rock";
        } else if (roll==1) {
            computerchoice = "paper";
        } else if (roll==2) {
            computerchoice = "scissors";
        }
    console.log(computerchoice);
    computerselect = computerchoice
    }

/*function getHumanChoice() {
    let humanchoice = prompt("Whats your play?").toLowerCase();
        if (humanchoice == "rock") {
            console.log(humanchoice);
        } else if (humanchoice == "scissors") {
            console.log(humanchoice);
        } else if (humanchoice == "paper") {
            console.log(humanchoice);
        } else {
            alert("Command not recognized, please try again");
            getHumanChoice();
        }
        humanselect = humanchoice
}*/

function playRound(human,computer) {
    if (human=="scissors"&&computer=="scissors") { 
        resultsdiv.textContent = "Its a Tie!";
    } else if (human=="paper"&&computer=="paper") {
        resultsdiv.textContent = "Its a Tie!";
    } else if (human=="rock"&&computer=="rock") {
        resultsdiv.textContent = "Its a Tie!";
    } else if (human=="scissors"&&computer=="paper") { 
        resultsdiv.textContent = "Congratulations, you win!";
        humanScore = humanScore + 1;
    } else if (human=="paper"&&computer=="rock") { 
        resultsdiv.textContent = "Congratulations, you win!";
        humanScore = humanScore + 1;
    } else if (human=="rock"&&computer=="scissors") { 
        resultsdiv.textContent = "Congratulations, you win!";
        humanScore = humanScore + 1;
    } else {
        resultsdiv.textContent = "You lose! And you suck!";
        computerScore = computerScore + 1;
    }
resultssummarydiv.textContent = "The Score is: Computer-" + computerScore + " Human-" + humanScore;    
}

btnRock.addEventListener("click", () => {
    if (computerScore == 5) {
        return;
    }
    if (humanScore == 5) {
        return;
    }
    getComputerChoice(Math.floor(Math.random()*3));
    playRound("rock",computerselect);
    whoWins(computerScore, humanScore);
  });
btnPaper.addEventListener("click", () => {
    if (computerScore == 5) {
        return;
    }
    if (humanScore == 5) {
        return;
    }
    getComputerChoice(Math.floor(Math.random()*3));
    playRound("paper",computerselect);
    whoWins(computerScore, humanScore);
  });
btnScissors.addEventListener("click", () => {
    if (computerScore == 5) {
        return;
    }
    if (humanScore == 5) {
        return;
    }
    getComputerChoice(Math.floor(Math.random()*3));
    playRound("scissors",computerselect);
    whoWins(computerScore, humanScore);
  });

function whoWins(computerScore, humanScore) {
  if (computerScore ==5) {
    winnerdiv.textContent = "Game Over! Computer Wins!";
}
    
  else if (humanScore == 5) {
    winnerdiv.textContent = "Game Over! HumanWins!";
} 
  }
  


/*for (let step = 0; step < 5; step++){
    getHumanChoice()
    getComputerChoice(Math.floor(Math.random()*3))
    playRound(humanselect,computerselect);
}*/

       








