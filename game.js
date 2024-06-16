"use strict";

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get a choice as a string from the human player
function getHumanChoice() {
    let choice;
    let promptMessage = "Enter your choice:"

    do {
        choice = prompt(promptMessage);
        choice = choice.trim().toLowerCase();

        promptMessage = "Your choice must be one of rock, paper, or scissors:"
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");

    return choice;
}


// Returns the choice that would beat another
function beats(choice) {
    switch (choice) {
        case "scissors":
            return "rock";
        case "rock":
            return "paper";
        case "paper":
            return "scissors";
    }
}



// --- Core game logic ---

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let message = "invalid input"; // Indicates no condition satisfied

        if (computerChoice == humanChoice) {
            message = "Tie!";
        }
        else if (computerChoice === beats(humanChoice)) {
            message = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
        else if (humanChoice === beats(computerChoice)) {
            message = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        console.log(message);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Declare the winner
    let endMessage = "All rounds played. "
    if (humanScore > computerScore) {
        endMessage += "The human wins!"
    }
    else if (computerScore > humanScore) {
        endMessage += "The computer wins!"
    }
    else {
        endMessage += "The game ends with a tie!"
    }
    console.log(endMessage);
}
