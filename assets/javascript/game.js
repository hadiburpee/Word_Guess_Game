//Word Guess Game Javascript File


//declare/initialize global variables
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

//Changes the underline _ _ _ to the length of the word
function lineFix(){
    var line1 = "_ ";

    for(i=0; i<splitLetter.length; i++){
        countLine[i] = line1;
        wordSplit[i]=splitLetter[i];
        console.log(wordSplit);
    }
    // console.log(countLine); Testing Purposes Only
    // console.log(wordSplit);
    var x = document.getElementById("demo");
    x.innerHTML = countLine.join(" ");    
};

//Joins the correctly guessed letters back together to match back with the wordbank in later code
function wordJoinFunk(){
    wordCombine = countLine.join("");
};

//store wrong guesses in a bank and display in html
function wrongWordBank(){  
    var node = document.createElement("IL");
    var textnode = document.createTextNode(userGuess);
    node.appendChild(textnode);
    document.getElementById("demo2").appendChild(node);  
    
};

//Counts points when the conditions in the function GuessWorkFunk are met.
function scoreKeeper(){
    points++;
    document.getElementById("demo3").innerHTML = points;    
};

//Checking what key is pressed.  Will modify to work for the game
//Maybe try and event listener for multiple events

document.addEventListener("keyup", GuessWordFunk);

function GuessWordFunk(){

// document.onkeyup = function(event) {
    userGuess = event.key;
    console.log("A key was pressed" + " - " + userGuess + " - ");

    for(i=0; i<splitLetter.length; i++){

        //conditional that puts a correct letter guess into the correct index of array countLine.
        if (userGuess === splitLetter[i]){
            countLine[i] = userGuess;
            // console.log(countLine[i]);
            // console.log(splitLetter[i]);
        }
  
        document.getElementById("demo").innerHTML = countLine.join(" ");
        // console.log(countLine);

        if(wordCombine != wordBank[randomNumber]){
            wordJoinFunk();
        }
        
    }

    // var x = splitLetter.indexOf(userGuess);
    if(splitLetter.indexOf(userGuess) == -1){
        wrongWordBank();
        console.log("Wrong " + userGuess);
    }
    

    //run scorekeeper outside of for loop so score doesn't get added multiple times    
    if(wordCombine == wordBank[randomNumber]){
            scoreKeeper();
        }
};



// lineFix();

lineFix();




// Testing get element by Id function
// function myFunction(){
//     document.getElementById("demo").innerHTML = "Changed";

// }

//CALLS








