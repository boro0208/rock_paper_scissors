function computerPlay(){
    const selection  = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * selection.length);
    
    return selection[random];
}

function playRound(playerSelection, computerSelection) {
    let win;
    (playerSelection.toUpperCase() === computerSelection) ? win = 0 : 
    (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS" || playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") ? win = 1 : win = 2;

    return win;
}

let playerWin = 0;
let computerWin = 0;
function game(){
    let msg;
    let playerSelection = prompt("Please enter your name");

    let result = playRound(playerSelection, computerPlay());
    // console.log(result);
    if(result === 0){ 
        msg = "It's tie!"
    } else if(result === 1){ 
        msg = "Player win this round!";
        playerWin++;
    }else{
        msg = "Computer win this round!";
        computerWin++;
    }

    return [msg, playerWin, computerWin];
}

for (let index = 0; index < 20; index++) {
    let result = game();
    console.log(result[0]+" Results: "+result[1]+" "+result[2]);
    if(result[1] === 5){
        console.log("Player win the match");
        break;
    }else if(result[2] === 5){ 
        console.log("Computer win the match");
        break; 
    }else{
        continue;
    }
}