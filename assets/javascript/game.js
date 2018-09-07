//Word Guess Game Javascript File


//declare and initialize wordBank array
var wordBank = ["space", "earth", "sun", "galaxy", "saturn", "pillars of creation", "constellations"];



for (i=0; i< wordBank.length; i++){
    console.log(wordBank[i]);

}

var splitLetter = wordBank[1].split("");

    console.log(splitLetter);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("A key was pressed" + " - " + userGuess + " - ");

if (userGuess === splitLetter[0]){

    console.log("you guessed right");

}

}






