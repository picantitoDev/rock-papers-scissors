// Button Elements
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

// Display Element
let displayer = document.getElementById('display-panel');

// Score Elements
let pcScore = 0;
let playerScore = 0;
let pcDisplay = document.getElementById('pc-score');
let playerDisplay = document.getElementById('player-score');

// Handling events
rockButton.addEventListener('click', function () {
    
    let game = playRound('Rock', getComputerChoice());

    if(game == 1){
        playerScore++;
    }
    if(game == 0){
        pcScore++;
    }

    pcDisplay.textContent = pcScore;
    playerDisplay.textContent = playerScore;
    checkGameStatus();
    
});

paperButton.addEventListener('click', function () {
    let game = playRound('Paper', getComputerChoice());

    if(game == 1){
        playerScore++;
    }
    if(game == 0){
        pcScore++;
    }

    pcDisplay.textContent = pcScore;
    playerDisplay.textContent = playerScore;
    checkGameStatus();
});

scissorsButton.addEventListener('click', function () {
    let game = playRound('Scissors', getComputerChoice());

    if(game == 1){
        playerScore++;
    }
    if(game == 0){
        pcScore++;
    }

    pcDisplay.textContent = pcScore;
    playerDisplay.textContent = playerScore;
    checkGameStatus();
});

function checkGameStatus() {
    if (pcScore >= 5) {
        pcDisplay.textContent = 5; 

        setTimeout(function() {
            alert("GAME OVER. PC Wins!");
            pcScore = 0;
            playerScore = 0;
            pcDisplay.textContent = pcScore; // Reset PC score display
            playerDisplay.textContent = playerScore;
            displayer.textContent = "Rock Paper Scissors";  // Reset player score display
        }, 0);
    }

    if (playerScore >= 5) {
        playerDisplay.textContent = 5; // Update player score display to 5
        setTimeout(function() {
            alert("Congrats! You Win!");
            pcScore = 0;
            playerScore = 0;
            pcDisplay.textContent = pcScore; // Reset PC score display
            playerDisplay.textContent = playerScore; 
            displayer.textContent = "Rock Paper Scissors"; // Reset player score display
        }, 0);
    }
}


function getComputerChoice() {

    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // your code here!

    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    //If it's a tie
    if (playerSelection === computerSelection) {
        displayer.textContent = "Its a Tie!";

    } else {

        if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
            displayer.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            return 1;
        } else {
            displayer.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            return 0;
        }
    }
}


