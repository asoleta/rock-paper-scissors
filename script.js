function getComputerChoice()
{
    let choice;
    //generates number between 0-2
    let number = Math.floor(Math.random() * 3);

    if (number == 0)
    {
        choice = "rock";
    }

    else if (number == 1) 
    {
        choice = "paper";
    } 
    
    else {
        choice = "scissors";
    }

    return choice;
}

function playRound(playerChoice, computerChoice)
{
    
    let flag = -1;

    //based on player choice
    if (playerChoice == "rock")
    {
        if (computerChoice == "rock")
        {
            console.log("It's a tie!");
        }

        else if (computerChoice == "paper")
        {
            console.log("You lose! Paper beats rock.");
            flag = 0;
        }

        else
        {
            console.log("You win! Rock beats scissors!");
            flag = 1;
        }
    }

    else if (playerChoice == "paper")
    {
        if (computerChoice == "paper")
        {
            console.log("It's a tie!");
        }

        else if (computerChoice == "rock")
        {
            console.log("You win! Paper beats rock.");
            flag = 1;
        }

        else
        {
            console.log("You lose! Scissors beats paper");
            flag = 0;
        }
    }

    else if (playerChoice == "scissors")
    {
        if (computerChoice == "rock")
        {
            console.log("You lose! Rock beats scissors");
            flag = 0;
        }

        else if (computerChoice == "paper")
        {
            console.log("You win! Scissors beats paper.");
            flag = 1;
        }

        else
        {
            console.log("It's a tie!");
        }
    }

    return flag;
}

function game()
{
    const container = document.querySelector('.container');
    const score = document.createElement('div');
    const player = document.createElement('p');
    const computer = document.createElement('p');

    score.appendChild(player);
    score.appendChild(computer);
    container.appendChild(score);
    
    let playerChoice;
    let computerChoice;

    let playerScore = 0;
    let computerScore = 0;
    let flag;
    
    //for (let i = 0; i < 5; i++)
    //{
        
        //get the player's choice
        //playerChoice = (prompt("Rock, Paper or Scissors? Enter one.")).toLowerCase();
        computerChoice = getComputerChoice();

        //play a round
        flag = playRound(playerChoice, computerChoice);

        //calculate score
        if (flag == 0)
        {
            computerScore++;
        }

        else if (flag == 1)
        {
            playerScore++;
        }
    //}

    //output results
    player.textContent = "Player: " + playerScore;
    computer.textContent = "Computer: " + computerScore;

    if (computerScore > playerScore)
    {
        console.log("Computer wins!");
    }

    else if (computerScore < playerScore)
    {
        console.log("Player wins!");
    }

    else
    {
        console.log("The game was a tie!");
    }
}


//Events
const start = document.querySelector('.start');
start.addEventListener('click', function (e) {
    
    //remove button once game starts
    start.style.display = 'none';

    //start game
    game();
})


