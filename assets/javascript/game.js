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
let lives = 21; //this game is really hard to win
//let letterGuessed = "";
console.log(wins);


//Link placeholder in html to the js input, vs code wants me to put it in a function?
let winText = document.getElementById("num-of-wins"); //window or root scope
let loseText = document.getElementById("num-of-loses");
let livesText = document.getElementById("remaining-guesses");
let letterGuessedText = document.getElementById("user-guesses");
let computerChoiceText = document.getElementById("computer-choices");
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

//Write lives number to html
livesText.textContent = lives;


//start to guess - from now within the function it has its own scope
document.onkeyup = function pressKey(event) {
    //store user input key:
    let userGuessKey = event.key;
    console.log(userGuessKey)
    //console.log(allLettersArray);
    //store the index(position) of computer choice in the allLetterArray
    let computerChoiceIndex = Math.floor(Math.random() * allLettersArray.length);
    console.log(allLettersArray[computerChoiceIndex]); // needs to be a number

    //Write userGuessKey and computerChoice to html
    letterGuessedText.textContent = userGuessKey;
    //computerChoiceText.textContent = allLettersArray[computerChoiceIndex]; //???***???

    //While remaining 0<=guess <=21, compare between the two values and take actions

    if (lives <= 21 && lives > 0) {
        //If userGuessKey is not in [a-z] at all, alert choose from a-z, write message-invalidKey
        if (allLettersArray.indexOf(userGuessKey) === -1) {
            console.log(allLettersArray.indexOf(userGuessKey));
            //return message invalidKey
            console.log(message.invalidKey);
            messageText.textContent = message.invalidKey;
            alert("Please choose from a to z!")
            return message.invalidKey;
        }
        //If userGuessKey ==computerChoice - correct, wins++
        else if (userGuessKey === allLettersArray[computerChoiceIndex]) {
            console.log(userGuessKey);
            console.log('Correct guess');
            wins++; //Needs to put this in front of return, or it would never run.
            winText.textContent = wins;
            //computerChoiceText.textContent = allLettersArray[computerChoiceIndex]; //???
            messageText.textContent = message.correctGuess;
            return message.correctGuess;
        }
        //otherwise - wrong, loses++
        else {
            console.log('Wrong guess');
            loses++;
            lives--;
            loseText.textContent = loses;
            livesText.textContent = lives;
            //computerChoiceText.textContent = allLettersArray[computerChoiceIndex]; //???
            messageText.textContent = message.wrongGuess;
            return message.wrongGuess;
        }
    } else {
        alert('Game completed, refresh the page to start again!')
    }
};