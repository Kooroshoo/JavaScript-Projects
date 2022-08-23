var randomNum = Math.floor( (Math.random() * 6) + 1 );
var randomDiceImage = "dice" + randomNum + ".png";

var diceImage = document.querySelector(".img1");
diceImage.setAttribute("src", "images/" + randomDiceImage);
