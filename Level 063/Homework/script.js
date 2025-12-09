
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const messageDisplay = document.getElementById("message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

// wvwnt listenerebi
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        playerChoiceDisplay.textContent = capitalize(playerChoice);
        computerChoiceDisplay.textContent = capitalize(computerChoice);
        messageDisplay.textContent = result.message;

        if (result.winner === "player") {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if (result.winner === "computer") {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    });
});

// Reset game
resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    messageDisplay.textContent = "Choose your move!";
});

// random copute choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// winner
function determineWinner(player, computer) {
    if (player === computer) {
        return { winner: "none", message: "It's a tie!" };
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return { winner: "player", message: "You win this round!" };
    } else {
        return { winner: "computer", message: "Computer wins this round!" };
    }
}

// Capitalizes the first letter sitkvis
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
