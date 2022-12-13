const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// we use JSON here to convert string to number
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");

scoreElement.innerText = `score: ${score}`;
questionElement.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswear = num1 * num2;

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value;
    if (userAnswer === correctAnswear) {
        score++;
       
    } else {
        score--;
    }
    updateLocalStorage();
})

function updateLocalStorage() {
    // we use JSON to convert to string before storing the data in the browser
    localStorage.setItem("score", JSON.stringify(score));
}