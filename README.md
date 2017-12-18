# Crystal Collector
Week 4 Assignment

Overview

This is another fun and interactive game for web browsers. This time, the app dynamically updates the HTML pages with the jQuery library.

Inside the week-4-game folder, Crystal Collector, you will find index.html file and a  folder called assets.

Inside the assets directory, there are three additional folders: javascript, css and images.

Inside the javascript folder is a file called game.js.  This folder contains all the javascript language.  

In the css folder are two files, style.css and reset.css.  The reset.css file contains code found from the Meyerweb Reset. 

Images folder includes the file with the 4 crystal images.

# Concepts and Highlights

Script tag lists parent folder, assets/javascript/game.js

<script type="text/javascript" src="assets/javascript/game.js"></script>



Math.random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 10, multiply your answer by 10:
Math.random() * 10

To get it to be a whole number, apply Math.floor, which rounds down to the nearest whole number:
Math.floor(Math.random() * 10)
To get a whole number between 1 and 10, add 1 to the answer:
Math.floor(Math.random() * 10 + 1)

To set a new Target Score (between 19 and 120)
    targetScore = Math.floor(Math.random() * (max - min + 1)) + min;

USE jQuery i.e.
$("#test").hide()
Demonstrates the jQuery hide() method, hiding the element with id="test".

Change the HTML to reflect changes in currentScore
$("#yourScore").html(currentScore);