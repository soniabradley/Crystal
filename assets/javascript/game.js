// Global Variables
// __________________________________________
// Crystal variables and Value
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
}
// Scores (Current anb Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

// Functions
// ____________________________________________

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {

    // Reset the Current Score
    currentScore = 0;

    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);

    // Set different value for each of the crystals (between 1 and 12)
    // Path
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    // Testing Console
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
}

// Respond to clicks on the crystals
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin Function
    checkWin();

    // Testing Console
    console.log("Your Score:" + currentScore);
}

// Check if User Won or Lost and Reset the Game
var checkWin = function() {
    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry. You Lost");
        console.log("You Lost");

        // add to Loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#lossCount").html(lossCount);

        // ***Restart the game***
        startGame();
    }
    else if(currentScore == targetScore) {
        alert("Hurray! You Won");
        console.log("You Won");

        // add to Win Counter
        winCount++;

        // Change Win Count HTML
        $("#winCount").html(winCount);

        // ***Restart the game***
        startGame();
    }
}

// Main Process
// ______________________________________________

// Starts the game the first time.
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
});
$("#green").click(function(){
    addValues(crystal.green);
});
$("#red").click(function(){
    addValues(crystal.red);
});
$("#yellow").click(function(){
    addValues(crystal.yellow);
});