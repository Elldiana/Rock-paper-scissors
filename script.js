const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        playGame(userChoice);
    });
});
