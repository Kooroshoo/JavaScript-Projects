var buttons = document.querySelectorAll(".drum");

// handle button pressed on mouse click
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () { // using higher order functions(A function that can take other functions as input) and callback functions (the function that is passed in as a input and gets executed) 

        handleSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}

// handle key presses on keyboard
document.addEventListener("keydown", function(event) { // using callback functions to get the event object that called the function

    handleSound(event.key);
    buttonAnimation(event.key)

})

function handleSound (char) {
    switch (char) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            
            break;

        case "j":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
    
        default:
            break;
    }
}


function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);


}

