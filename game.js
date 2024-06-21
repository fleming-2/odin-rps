"use strict";

// Interaction for UI
// Listen for button presses for human choice
let buttons = document.querySelectorAll("#choice-ui button");
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
    if (humanScore === 5 || computerScore === 5) {
        endGame(winner);
    }
}

function endGame(winner) {
    let winnerName;
    switch(winner) {
        case 1:
            winnerName = "Human";
            break;
        case -1:
            winnerName = "Computer";
            break;
    }
    let msg = `Game Over! The ${winnerName} wins.`;

    // Display game over information
    let gameOverDisplay = document.createElement("h4");
    gameOverDisplay.textContent = msg;
    result.appendChild(gameOverDisplay);

    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    result.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", resetGame);

    // Hide choice UI
    document.getElementById("choice-ui").classList.add("hidden");

}

function resetGame() {
    // Clear the displayed results ui
    result.textContent = '';

    // Reset scores
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Display choice ui again
    document.getElementById("choice-ui").classList.remove("hidden");
}

// TODO: Factor out updating the DOM from this function, move to updateScores?
function playRound(humanChoice, computerChoice) {
    let message = "Invalid choice";
    let winner;

    if (computerChoice === humanChoice) {
        message = "Tie!";
    }
    else if (humanChoice === beats(computerChoice)) {
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
        winner = 1;
    }
    else if (computerChoice === beats(humanChoice)) {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
        winner = -1;
    }

    result.textContent = message;
    updateScores(winner);
}
