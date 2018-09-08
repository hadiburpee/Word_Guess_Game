//Word Guess Game Javascript File


//declare and initialize wordBank array
var wordBank = ["space", "earth", "sun", "galaxy", "saturn", "pillars of creation", "constellations"];


//creates a random number that is multipled by the length of the wordBank
var randomNumber = Math.floor(Math.random() * wordBank.length);
    console.log(randomNumber);

//splits the word into letters

var splitLetter = wordBank[randomNumber].split("");

    console.log(splitLetter);

//Changes the underlines for the letters to the length of the word
function lineFix(){
    var line1 = "_ ";
    var countLine = " ";
    var line2 = [];
    
    //trying to add an array for the _ so that each _ has a location which can then be
    //filled with the corresponding letter.  In a for loop, they should have the same index.
    for(i=0; i<splitLetter.length; i++){
        countLine = line1 + countLine;
        // line2[i]= " _ ";
    }
    console.log(countLine);
    document.getElementById("demo").innerHTML = countLine;
}

//Checking what key is pressed.  Will modify to work for the game
document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log("A key was pressed" + " - " + userGuess + " - ");

    for(i=0; i<splitLetter.length; i++){
        if (userGuess === splitLetter[i]){
            console.log("you guessed right");
        }
        else if (userGuess != splitLetter[i]){
            console.log("you guessed wrong");

        }


}
}
//Testing get element by Id function
function myFunction(){
    document.getElementById("demo").innerHTML = "Changed";



}

function my2ndFunction(e, a, r, t, h){
    console.log(e, a, r, t, h);

}






