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
        //console.log("Game Round: Tie!");
        divUpdate("Game Round: Tie!")
        return 0;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")){
        //console.log(`You Win This Round! ${playerSelection} beats ${computerSelection}`);
        divUpdate(`You Win This Round! ${playerSelection} beats ${computerSelection}`)
        return 1;
    }
    else {
        //console.log(`You Lose This Round! ${playerSelection} loses to ${computerSelection}`);
        divUpdate(`You Lose This Round! ${playerSelection} loses to ${computerSelection}`)
        return -1;
    }
}

function divUpdate(text){
    const temp = document.querySelector('#result-div');
    temp.textContent = text
}

function game(num){
    let result;
    let input = "";
    num = Number(num);
    //console.log(num);
    let sum = 0;
    switch (num){
        case 1:
            input = "rock";
            break;
        case 2:
            input = "paper";
            break;
        case 3:
            input = "scissors";
            break;
        default:
            input = "critical error";
            break;
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


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});