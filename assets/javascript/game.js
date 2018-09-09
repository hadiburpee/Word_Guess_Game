//Word Guess Game Javascript File


//declare and initialize wordBank array
var wordBank = ["space", "earth", "sun", "galaxy", "saturn", "pillarsofcreation", "constellations"];
var wordSplit = [];
var countLine = [];
var points = 0;
var wordCombine;
var wantToPlay = true;
var userGuess; 


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
        countLine[i] = line1;
        wordSplit[i]=splitLetter[i];
        console.log(wordSplit);
    }
    console.log(countLine);
    console.log(wordSplit);
    var x = document.getElementById("demo");
    x.innerHTML = countLine.join(" ");
    
};

//Joins the correctly guessed letters back together to match back with the wordbank in later code
function wordJoinFunk(){
    console.log(countLine);
    wordCombine = countLine.join("");
    console.log(wordCombine);

};

function wrongWordBank(){
    wrongGuess = userGuess;
    wrongGuess = wrongGuess + " " + wrongGuess;
    document.getElementById("demo2").innerHTML = wrongGuess;

};

function scoreKeeper(){
    
    points++;
    console.log(points);
    document.getElementById("demo3").innerHTML = points;    

};

//Checking what key is pressed.  Will modify to work for the game
//Maybe try and event listener for multiple events

document.addEventListener("keyup", GuessWordFunk);

function GuessWordFunk(){

// document.onkeyup = function(event) {



    var userGuess = event.key;
    var wrongGuess = [];
    console.log("A key was pressed" + " - " + userGuess + " - ");

    for(i=0; i<splitLetter.length; i++){

        if (userGuess === splitLetter[i]){

            countLine[i] = userGuess;
            console.log(countLine[i]);
            console.log(splitLetter[i]);
        }
        else if (userGuess != splitLetter[i]){
            wrongWordBank();    

        }

        // var x = document.getElementById("demo");
        // x.innerHTML = countLine.join(" ");
        document.getElementById("demo").innerHTML = countLine.join(" ");
        console.log(countLine);

        if(wordCombine != wordBank[randomNumber]){
            wordJoinFunk();
        }
        
        if(wordCombine == wordBank[randomNumber]){
            scoreKeeper();
        }

    }

};



// lineFix();

lineFix();




// Testing get element by Id function
// function myFunction(){
//     document.getElementById("demo").innerHTML = "Changed";

// }

//CALLS








