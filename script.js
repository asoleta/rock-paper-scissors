const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const buttons = document.querySelectorAll('.attackBtn');

let playerTxt;
let computerTxt;

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
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