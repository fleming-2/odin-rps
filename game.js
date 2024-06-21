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

// Elements to update when tracking score
let result = document.querySelector("#result");
let humanScoreDisplay = document.getElementById("human-score");
let computerScoreDisplay = document.getElementById("computer-score")

let humanScore = 0;
let computerScore = 0;

// Takes 1 for a human win, -1 for a computer win, 0 for tie
function updateScores(winner) {
    let hs = humanScore;
    let cs = computerScore
    switch (winner) {
        case 1:
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            break;
        case -1:
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    // TODO: Display overall winner after 5 wins
}

// TODO: Factor out updating the DOM from this function, move to updateScores?
function playRound(humanChoice, computerChoice) {
    let message = "Invalid choice";

    if (computerChoice === humanChoice) {
        message = "Tie!";
        updateScores(0);
    }
    else if (humanChoice === beats(computerChoice)) {
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
        updateScores(1);
    }
    else if (computerChoice === beats(humanChoice)) {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
        updateScores(-1);
    }

    result.textContent = message;
}
