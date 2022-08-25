const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var colorText = document.querySelector(".colorText");

document.querySelector(".btn").addEventListener("click", function () {
    colorText.innerText = generateRandomColor();
    document.body.style.color = colorText.innerText;

});

function generateRandomColor () {
    var randomHex = "";
    for (let i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * 16);
        randomHex += hex[randomNum];
    }

    return "#" + randomHex;
}


