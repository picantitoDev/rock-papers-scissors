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
        console.log("Its a Tie!");
        //Replay the round
        return playRound(playerSelection, getComputerChoice());
    } else {

        //Case Rock
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                console.log("You Lose! Paper beats Rock");
                return 1;
            } else {
                console.log("You Win! Rock beats Scissors");
                return 0;
            }
        }

        //Case Paper
        else if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                console.log("You Lose! Scissors beats Paper");
                return 1;
            } else {
                console.log("You Win! Paper beats Rock");
                return 0;
            }
        }

        //Case Scissors
        else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                console.log("You Lose! Rock beats Scissors");
                return 1;
            } else {
                console.log("You Win! Scissors beats Paper");
                return 0;
            }
        }
    }

}

function game(playerSelection){
    let player = 0;
    let pc = 0;
    let game;

    for(let i = 0; i < 5; i++){
        game = playRound(playerSelection, getComputerChoice());
        if(game === 1){
            player++;
        }else{
            pc++;
        }
    }

    console.log("Player: "+ player);
    console.log("Pc: "+ pc);
}


game("Rock");

