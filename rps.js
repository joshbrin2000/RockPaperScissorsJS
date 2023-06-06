function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3)
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
        console.log("Game Round: Tie!");
        return 0;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")){
        console.log(`You Win This Round! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    else {
        console.log(`You Lose This Round! ${playerSelection} loses to ${computerSelection}`);
        return -1;
    }
}

function game(){
    let result;
    let input = "r";
    let sum = 0;
    let checkArray = ["rock", "paper", "scissors"];
    while (!input)
    {
        //input = prompt("Rock, Paper, or Scissors?");
        input = input.toLowerCase();
        console.log(input)
        if (checkArray.includes(input)){
            continue;
        }
        else{
            console.log("Please input a valid choice...");
            input = "";
        }
    }
    let compGen = getComputerChoice();
    result = singleRound(input, compGen);
    sum += result;
    input = "";
    if (sum > 0){
        console.log("You Win The Game!");
    }
    else if (sum < 0){
        console.log("You Lose The Game!");
    }
    else{
        console.log("You Tied With The Computer!");
    }
}


const btn1 = document.querySelector('#button1');
btn1.addEventListener('click', () => {
    alert("Hello World");
});

game();