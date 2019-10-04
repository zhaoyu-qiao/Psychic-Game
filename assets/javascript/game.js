//create an array of letters: Is there a better way?
//let lettersString="abcdefghijlmnopqrstuvwxyz";
//let lettersArray=lettersString.split""

//[allLettersArray(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97);
//console.log(allLettersArray);
for (char c = 'a'; c <= 'z'; c++) {
    alphabet[c - 'a'] = c;
    console.log(c);
}

let allLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables to hold wins, loses, remaining guesss, letterGuessed
let wins = 0;
let loses = 0;
let lives = 7;
//let letterGuessed = "";


//Link placeholder in html to the js input, vs code wants me to put it in a function?
let winText = document.getElementById("num-of-wins");
let loseText = document.getElementById("num-of-loses");
let livesText = document.getElementById("remaining-guesses");
let letterGuessedText = document.getElementById("user-guesses");
let messageText = document.getElementById("output");

//Create object message to hold user communications

let message = {
    start: "Press key a to z to start!",
    invalidKey: "Please choose a key from a to z!",
    correctGuess: "Our minds are connected!<3",
    wrongGuess: "You don't know me at all!"
}

//start to guess:
document.onkeyup = function (event) {

    let letterGuessed = "";
    //store user input key:
    let userGuessKey = event.key;
    console.log(userGuessKey)

    //store compute choice index in the allLetterArray
    let computerChoiceIndex = Math.floor(Math.random) * allLettersArray.length;
    //let computerChoice = allLettersArray[computerChoiceIndex];


    //compare between the two values and take actions
    //If userGuessKey is not in [a-z] at all
    if (allLettersArray.indexOf[userGuessKey] === -1) { // this seems to be wrong
        //return message invalidKey
        return message.invalidKey;
    } else {
        //for loop within 7 lives, otherwise need to restart
        for (let i = 0; i < 7; i++) {

            if (letterGuessed === allLettersArray[computerChoiceIndex]) {
                console.log(letterGuessed);
                console.log("Correct guess");
                return message.correctGuess;
                wins++; //???????????????
            } else {
                console.log("Wrong guess");
                return message.wrongGuess;
            }
        }
    }






}