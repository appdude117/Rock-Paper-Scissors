function getComputerChoice(roll) {
    let computerchoice = "empty";
        if (roll==0) {
            computerchoice = "Rock";
        } else if (roll==1) {
            computerchoice = "Paper";
        } else if (roll==2) {
            computerchoice = "Scissors";
        }
    console.log(computerchoice);
    }

function getHumanChoice() {
    let humanchoice = prompt("Whats your play?");
        if (humanchoice == "Rock") {
            console.log(humanchoice);
        } else if (humanchoice == "Scissors") {
            console.log(humanchoice);
        } else if (humanchoice == "Paper") {
            console.log(humanchoice);
        } else {
            alert("Command not recognized, please try again");
            getHumanChoice();
        }
}

getHumanChoice()
getComputerChoice(Math.floor(Math.random()*3));
  
       









