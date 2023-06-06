let playerSum = 0;
let compSum = 0;

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
    temp.textContent = text;
}

function scoreUpdate(scorePlayer, scoreComp){
    const temp = document.querySelector('#score');
    temp.textContent = `Score - Player: ${scorePlayer}      Computer: ${scoreComp}`;
}

function winUpdate(bool){
    const temp = document.querySelector('#win');
    if (bool === true){
        temp.textContent = "You Win The Game!";
    }
    else{
        temp.textContent = "You Lose The Game!";
    }

}

function game(num){
    let result;
    let input = "";
    num = Number(num);
    //console.log(num);
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
    switch(result){
        case 1:
            playerSum += 1;
            break;
        case -1:
            compSum += 1;
            break;
        default:
            break;
    }
    scoreUpdate(playerSum, compSum);
    if (playerSum >= 5){
        winUpdate(true);
    }
    else if (compSum >= 5){
        winUpdate(false);
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});