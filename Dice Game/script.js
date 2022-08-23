var randomNum = Math.floor( (Math.random() * 6) + 1 );
var diceImage = document.querySelector(".img1");

if (randomNum === 1) {
    diceImage.setAttribute("src", "images/dice1.png");
} 
else if (randomNum === 2) {
    diceImage.setAttribute("src", "images/dice2.png");
}
else if (randomNum === 3) {
    diceImage.setAttribute("src", "images/dice3.png");
}
else if (randomNum === 4) {
    diceImage.setAttribute("src", "images/dice4.png");
}
else if (randomNum === 5) {
    diceImage.setAttribute("src", "images/dice5.png");
}
else if (randomNum === 6) {
    diceImage.setAttribute("src", "images/dice6.png");
}