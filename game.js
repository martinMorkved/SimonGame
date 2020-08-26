var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
    var randomNUmber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNUmber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

$(".btn").click(function () {
    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});
