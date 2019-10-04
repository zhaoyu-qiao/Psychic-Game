//create an array of letters: Is there a better way?
//let lettersString="abcdefghijlmnopqrstuvwxyz";
//let lettersArray=lettersString.split""

//[allLettersArray(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97);
//console.log(allLettersArray);


let allLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(allLettersArray);
//Create variables to hold wins, loses, remaining guesss, letterGuessed
let wins = 0; // window or root scope
let loses = 0;
let lives = 7;
//let letterGuessed = "";
console.log(wins);


//Link placeholder in html to the js input, vs code wants me to put it in a function?
let winText = document.getElementById("num-of-wins"); //window or root scope
let loseText = document.getElementById("num-of-loses");
let livesText = document.getElementById("remaining-guesses");
let letterGuessedText = document.getElementById("user-guesses");
let messageText = document.getElementById("output");

//Create object message to hold user communications
//root scope
let message = {
    start: "Press a key from a to z to start!",
    invalidKey: "Please choose a key from a to z!",
    correctGuess: "Our minds are connected!<3",
    wrongGuess: "You don't know me at all!"
}
console.log(message.start);

//start to guess - from now within the function it has its own scope
document.onkeyup = function pressKey(event) {

    let letterGuessed = "";
    //store user input key:
    let userGuessKey = event.key;
    console.log(userGuessKey)
    //console.log(allLettersArray);
    //store the index(position) of computer choice in the allLetterArray
    let computerChoiceIndex = Math.floor(Math.random() * allLettersArray.length);
    console.log(computerChoiceIndex); // needs to be a number
    //let computerChoice = allLettersArray[computerChoiceIndex];


    //compare between the two values and take actions
    //If userGuessKey is not in [a-z] at all
    if (allLettersArray.indexOf[userGuessKey] < 0) { // this seems to be *wrong*, console log is always showing wrong guess
        //return message invalidKey
        console.log(message.invalidKey);

        return message.invalidKey;

    } else {
        //for loop within 7 lives, otherwise need to restart
        for (let i = 0; i < 7; i++) {

            if (letterGuessed === allLettersArray[computerChoiceIndex]) {
                console.log(letterGuessed);
                console.log("Correct guess");
                wins++; //Needs to put this in front of return, or it would never run.
                return message.correctGuess;

            } else {
                console.log("Wrong guess");
                loses++;

                return message.wrongGuess;
            }
        }
    }

    pressKey();




}