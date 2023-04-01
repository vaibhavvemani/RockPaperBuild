const inputText = document.getElementById('uname');
const submitBtnEl = document.getElementById('getInfo');
const outputEl = document.getElementById('displayMessage');

function getUserName() {
    outputEl.innerHTML = `Hi ${inputText.value}! Choose an option`;
}
submitBtnEl.addEventListener('click', getUserName);

let playerScore = 0, computerScore = 0;
const choices = ['Rock', 'Paper', 'Sicssor'];

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const sicssorBtn = document.getElementById('sicssor');

function checkWinner(usr, comp){
    if((usr === 1 && comp === 3) || (usr === 2 && comp === 1) || (usr === 3 && comp === 2)){
        playerScore += 1;
        document.getElementById('winner').innerHTML = `${inputText.value} won`;
        document.getElementById('playerScore').innerHTML = `Player score is ${playerScore}`;
    } else if((usr === 1 && comp === 2) || (usr === 2 && comp === 3) || (usr === 3 && comp === 1)){
        computerScore += 1;
        document.getElementById('compScore').innerHTML = `Computer score is ${computerScore}`;
        document.getElementById('winner').innerHTML = `Computer won`;
    } else{
        document.getElementById('winner').innerHTML = `It\'s a tie`;
    }
}

function computerSelect(usr) {

    let randNum = Math.floor(Math.random(1) * 3);
    let comp = randNum + 1;
    let computerChoice = choices[randNum];
    document.getElementById('computerChoice').innerHTML = `Computer chose ${computerChoice}`;

    checkWinner(usr, comp);
}

function choiceRock() {
    document.getElementById('userChoice').innerHTML = `You chose rock`;
    computerSelect(1);
}

function choicePaper() {
    document.getElementById('userChoice').innerHTML = `You chose paper`;
    computerSelect(2);
}

function choiceSicssor() {
    document.getElementById('userChoice').innerHTML = `You chose sicssor`;
    computerSelect(3);
}


rockBtn.addEventListener('click', choiceRock);
paperBtn.addEventListener('click', choicePaper);
sicssorBtn.addEventListener('click', choiceSicssor);