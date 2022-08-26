const computerChoice =  document.getElementById("computer-choice");
const userChoice =  document.getElementById("user-choice");
const result =  document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
possibleChoices.forEach(item => item.addEventListener("click", () => {
    userChoice.innerText = item.innerText;
    computerChoice.innerText = getComputerChoice();
    result.innerText = getResult(userChoice.innerText, computerChoice.innerText);

}));

function getComputerChoice () {
    var choices = ["rock", "paper", "scissors"];
    var randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice ) {
        return "Draw";
    }
    else if (userChoice === "rock" && computerChoice ==="paper") {
        return "Computer Wins";
    }
    else if (userChoice === "rock" && computerChoice ==="scissors") {
        return "You Win";
    }
    else if (userChoice === "paper" && computerChoice ==="rock") {
        return "You Win";
    }
    else if (userChoice === "paper" && computerChoice ==="scissors") {
        return "Computer Win";
    }
    else if (userChoice === "scissors" && computerChoice ==="rock") {
        return "Computer Win";
    }
    else if (userChoice === "scissors" && computerChoice ==="paper") {
        return "You Win";
    }
}