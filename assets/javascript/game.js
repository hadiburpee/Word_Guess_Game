//Word Guess Game Javascript File


//------------GLOBAL VARIABLES------------
var wordBank = ["earth", "sun", "galaxy", "pluto", "pillarsofcreation", "constellations"];
var wordSplit = [];
var countLine = [];
var points = 0;
var wordCombine;
var wantToPlay = true;
var userGuess; 
var randomNumber;
var splitLetter = [];
var guessL = 15;



//------------FUNCTIONS------------

//I had wordBank.lenght + 1 but it would never pull the first word 
//took out the +1 and it still pulls all the words
function wordChooser(){
    randomNumber = Math.floor(Math.random() * wordBank.length);
};


function splitWord(){
    console.log(randomNumber);
    splitLetter = wordBank[randomNumber].split("");
    console.log(splitLetter);
};


//function to reset necessary attributes for a new game.
function splitRst(){
    
    splitLetter = [];
    wordSplit = [];
    countLine = [];
    guessL = 15;
    console.log(splitLetter);
    document.getElementById("demo2").innerHTML = " ";
    document.getElementById("guessRem").innerHTML = ("15");
};


//guesses left counter function.
function guessLeft(){

    document.getElementById("guessRem").innerHTML = guessL;
    guessL--;

};



//Changes the underline _ _ _ to the length of the word
function lineFix(){
    var line1 = "_ ";

    for(i=0; i<splitLetter.length; i++){
        countLine[i] = line1;
        wordSplit[i]=splitLetter[i];
        console.log(wordSplit);
    }

    var x = document.getElementById("demo");
    x.innerHTML = countLine.join(" ");    
};



//changes pictures based on random number
//["earth", "sun", "galaxy", "pluto", "pillarsofcreation", "constellations"];
function pictureChanger(){
    if(randomNumber == 0){
        document.getElementById("pictures").innerHTML = "";
        document.getElementById("pictures").src="assets/images/Earth.jpg";
    }

    if(randomNumber == 1){
        document.getElementById("pictures").innerHTML = "";
        document.getElementById("pictures").src="assets/images/Sun.jpg";  
    }

    if(randomNumber == 2){
        document.getElementById("pictures").innerHTML = "";
        document.getElementById("pictures").src="assets/images/galaxy.jpg";
    }

    if(randomNumber == 3){
        document.getElementById("pictures").innerHTML = "";
        document.getElementById("pictures").src="assets/images/Pluto.jpg";
    }

    if(randomNumber == 4){
        document.getElementById("pictures").innerHTML = "";
        document.getElementById("pictures").src="assets/images/pillarsofcreation.jpg";
    }

    if(randomNumber == 5){
        document.getElementById("pictures").innerHTML = "";
        document.getElementById("pictures").src="assets/images/constellations.jpg";
    }



};

//Joins the correctly guessed letters back together to match back with the wordbank in later code
function wordJoinFunk(){
    wordCombine = countLine.join("");
};

//store wrong guesses in a bank and display in html
function wrongWordBank(){  
    var node = document.createElement("IL");
    var textnode = document.createTextNode(userGuess + " ");
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



function GuessWordFunk(){

    userGuess = event.key;
    console.log("A key was pressed" + " - " + userGuess + " - ");

    for(i=0; i<splitLetter.length; i++){

        //conditional that puts a correct letter guess into the correct index of array countLine.
        if (userGuess === splitLetter[i]){
            countLine[i] = userGuess;
        }
  
        document.getElementById("demo").innerHTML = countLine.join(" ");

        if(wordCombine != wordBank[randomNumber]){
            wordJoinFunk();
        }
        
    }

    // var x = splitLetter.indexOf(userGuess);
    if(splitLetter.indexOf(userGuess) == -1){
        wrongWordBank();
        guessLeft();
        
        console.log("Wrong " + userGuess);
    }

    if(guessL == -1){
        splitRst();
        wordChooser();
        splitWord();
        lineFix();
        pictureChanger();
    }

    //keeps score if correct and then resets the game    
    if(wordCombine == wordBank[randomNumber]){
            scoreKeeper();
            splitRst();
            wordChooser();
            splitWord();
            lineFix();
            pictureChanger();

        }
};



//------------CALLS------------
//NEED TO ADD PRESS ANY KEY TO START

wordChooser();
splitWord();
lineFix();
guessLeft();
pictureChanger();
document.addEventListener("keyup", GuessWordFunk);

















