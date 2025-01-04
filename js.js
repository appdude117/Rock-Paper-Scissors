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

function getHumanChoice() {
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
}

function playRound(human,computer) {
    if (human=="scissors"&&computer=="scissors") { 
        console.log("Its a Tie!");
    } else if (human=="paper"&&computer=="paper") {
        console.log("Its a Tie!");
    } else if (human=="rock"&&computer=="rock") {
        console.log("Its a Tie!");
    } else if (human=="scissors"&&computer=="paper") { 
        console.log("Congratulations, you win!");
        humanScore = humanScore + 1;
    } else if (human=="paper"&&computer=="rock") { 
        console.log("Congratulations, you win!");
        humanScore = humanScore + 1;
    } else if (human=="rock"&&computer=="scissors") { 
        console.log("Congratulations, you win!");
        humanScore = humanScore + 1;
    } else {
        console.log("You lose! And you suck!");
        computerScore = computerScore + 1;
    }
console.log("The Score is: Computer-" + computerScore + " Human-" + humanScore);    
}

getHumanChoice()
getComputerChoice(Math.floor(Math.random()*3))
playRound(humanselect,computerselect);
  
       









