var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gameHasStarted = false;
var level = 0;


$(document).keypress(function() {
    if (gameHasStarted === false) {
        gameHasStarted = true;
        $("#level-title").text("Level " + level);
        nextSequence();
    }

  });



$( ".btn" ).click(function() {
    
    var userChosenColor = this.id;
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    

});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    gamePattern.push(randomChosenColor);

    var randomButton = $("#" + randomChosenColor);
    randomButton.fadeOut(100).fadeIn(100);

    level++;
    $("#level-title").text("Level " + level);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    var selectedBtn = $("#" + currentColor);
    selectedBtn.addClass("pressed");

    setTimeout(function() {
        selectedBtn.removeClass("pressed");
      }, 100);

}

function checkAnswer(currentLevel) {

    if (currentLevel === gamePattern.length -1) {
        if (JSON.stringify(userClickedPattern) == JSON.stringify(gamePattern)) 
        {
            $("#level-title").text("Correct");
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
              }, 1000);
        } 
        else 
        {
            var audio = new Audio("wrong.mp3");
            audio.play();

            $("body").addClass("game-over")
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);

            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
    }

    if (currentLevel > gamePattern.length - 1) {
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameHasStarted = false;
}