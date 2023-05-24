function getComputerChoice(){
    randInt = Math.floor(Math.random() * 3)
    switch (randInt){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return null;
    }
}

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return "Tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    rounds = 5;
    input = "";
    checkArray = ["rock", "paper", "scissors"]
    while (rounds-- > 0){
        while (!input)
        {
            input = prompt("rock, paper, or scissors?")
            input = input.toLowerCase()
            if (checkArray.includes(input)){
                continue;
            }
            else{
                console.log("Please input a valid choice");
                input = "";
            }
        }
    }
    
}

game()