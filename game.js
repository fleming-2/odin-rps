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
    } while (choice != "rock" && choice != "paper" && choice != "scissors");

    return choice;
}
