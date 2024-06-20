"use strict";

// Interaction for UI
// Listen for button presses for human choice
let buttons = document.querySelectorAll("body > button");
buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        let humanChoice = e.target.getAttribute("id");
        playRound(humanChoice, getComputerChoice());
    });
});

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
