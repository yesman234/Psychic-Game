var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
var oldnum = [];    
var wins = 0;
var losses = 0;
var guessesleft = 9;


var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guesses-left-text");

document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


if(computerGuess==userGuess){
wins++;

}
else if(computerGuess!=userGuess) {
oldnum.push(userGuess);
console.log(oldnum);
guessesleft--;
losses++;
}
if (guessesleft===-1){
alert("game over");
}
function userGuess() {
    var oldnum = document.createTextNode(userChoiceText);
    document.body.appendChild(oldnum);
}

// Display the user and computer guesses, and wins/losses/guessesleft.
userChoiceText.textContent = "You chose: " + userGuess;
computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesleftText.textContent = "guesses left: " +" " + guessesleft +" " +  oldnum.join(",");



}
