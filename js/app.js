const container = document.querySelector(".container");

const divResult = document.createElement("div");
divResult.classList.add("result");

const playerResult = document.createElement('p');
playerResult.classList.add('playerResult');
playerResult.textContent = 0;

const computerResult = document.createElement('p');
computerResult.classList.add('computerResult');
computerResult.textContent = 0;

divResult.appendChild(playerResult);
divResult.appendChild(computerResult);

const msg = document.createElement('p');
msg.classList.add('msg');
msg.textContent = '';

const res = document.createElement('p');
res.classList.add('res');
res.textContent = 'Result';

container.appendChild(res);
container.appendChild(divResult);
container.appendChild(msg);

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
function game(playerSelection){
    let msg;
    let result = playRound(playerSelection, computerPlay());

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

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
   btn.addEventListener('click', event => {
        let result = game(event.target.id);
        // console.log(result[0]+" Results: "+result[1]+" "+result[2]);
        playerResult.textContent = result[1];
        computerResult.textContent = result[2];
        msg.textContent = result[0];
        if(result[1] === 5){
            // console.log("Player win the match");
            msg.textContent = "Player win the match";
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
        }else if(result[2] === 5){ 
            // console.log("Computer win the match");
            msg.textContent = "Computer win the match";
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
        }
   });
});
