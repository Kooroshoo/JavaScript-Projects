const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
];

// a way to sort the array randomly
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];
const resultDisplay = document.querySelector("#result");


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.append(card);
        
    }
}

createBoard();

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name); 
    cardChosenIds.push(cardId); 
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 300);
    }

}

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if (optionOneId == optionTwoId) {
        alert("You clicked the same card");

        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
    } 
    else {
        if (cardChosen[0] == cardChosen[1]) {
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionTwoId].removeEventListener("click", flipCard);

            cardsWon.push(cardChosen);

        } 
        else {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
        }
    }

    cardChosen = [];
    cardChosenIds = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "You have won!";
    } 
    


}
