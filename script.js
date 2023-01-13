const playerTxt = document.querySelector('.player');
const computerTxt = document.querySelector('.computer');
const buttons = document.querySelectorAll('.attackBtn');

let player;
let computer;

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerTxt.textContent = `Player: ${player}`;
    computerTxt.textContent = `Computer: ${computer}`;
}))

function computerTurn()
{
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum)
    {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}