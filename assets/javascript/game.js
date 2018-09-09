//Word Guess Game Javascript File


//declare and initialize wordBank array
var wordBank = ["space", "earth", "sun", "galaxy", "saturn", "pillars of creation", "constellations"];
var wordSplit = [];
var countLine = [];

//creates a random number that is multipled by the length of the wordBank
var randomNumber = Math.floor(Math.random() * wordBank.length);
    console.log(randomNumber);

//splits the word into letters
var splitLetter = wordBank[randomNumber].split("");

    console.log(splitLetter);

//Changes the underlines for the letters to the length of the word
function lineFix(){
    var line1 = "_ ";
    // countLine = " ";
    
    //trying to add an array for the _ so that each _ has a location which can then be
    //filled with the corresponding letter.  In a for loop, they should have the same index.
    for(i=0; i<splitLetter.length; i++){
        // countLine = line1 + countLine;
        countLine[i] = line1;
        wordSplit[i]=splitLetter[i];
        console.log(wordSplit);
    }
    console.log(countLine);
    console.log(wordSplit);
    var x = document.getElementById("demo");
    x.innerHTML = countLine.join(" ");
    
}

//Checking what key is pressed.  Will modify to work for the game
document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log("A key was pressed" + " - " + userGuess + " - ");

    for(i=0; i<splitLetter.length; i++){

        if (userGuess === splitLetter[i]){

            countLine[i] = userGuess;
            console.log(countLine[i]);
            console.log(splitLetter[i]);
        }
        // else if (userGuess != splitLetter[i]){
        //     console.log("you guessed wrong");

        // }

        var x = document.getElementById("demo");
        x.innerHTML = countLine.join(" ");
}
}
//Testing get element by Id function
function myFunction(){
    document.getElementById("demo").innerHTML = "Changed";



}








