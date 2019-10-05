//create an array of letters: Is there a better way?

//Another way:[allLettersArray(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97);

//Execute js after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    let allLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(allLettersArray);
    //Create variables to hold wins, loses
    let wins = 0;
    let loses = 0;
    let lives = 7; //this game is really hard to win
    console.log(wins);

    //get Element from HTML to link to js var
    let winText = document.getElementById("num-of-wins"); //window 
    let loseText = document.getElementById("num-of-loses");
    let livesText = document.getElementById("remaining-guesses");
    let letterGuessedText = document.getElementById("user-guesses");
    let computerChoiceText = document.getElementById("computer-choices");
    let messageText = document.getElementById("output");

    //Create object messages to hold user communications
    let message = {
        start: "Press a key from a to z to start!",
        invalidKey: "Please choose a key from a to z!",
        correctGuess: "Our minds are connected!<3",
        wrongGuess: "You don't know me at all!",
    }
    console.log(message.start);

    //Write lives number to html
    livesText.textContent = lives;

    // computer selects new letter 

    let computerChoiceIndex = chooseComputerIndex();

    function chooseComputerIndex() {
        let chosenIndex = Math.floor(Math.random() * allLettersArray.length);

        return chosenIndex;
    }

    //Reset when:  lives===0,  or user wins

    function reset() {
        wins = 0;
        loses = 0;
        lives = 7;
        winText = document.getElementById("num-of-wins");
        loseText = document.getElementById("num-of-loses");
        livesText = document.getElementById("remaining-guesses");
        computerChoiceText = document.getElementById("computer-choices");
        winText.innerHTML = wins;
        loseText.innerHTML = loses;
        livesText.innerHTML = lives;
        letterGuessedText.innerHTML = "";
        messageText.innerHTML = message.start;
        computerChoiceText.innerHTML = "";
    }

    //start to guess - from now within the function it has its own scope
    document.onkeyup = function pressKey(event) {
        //store user input key:
        let userGuessKey = event.key;
        console.log(userGuessKey)
        //console.log(allLettersArray);
        //store the index(position) of computer choice in the allLetterArray
        //let computerChoiceIndex = Math.floor(Math.random() * allLettersArray.length);
        console.log(allLettersArray[computerChoiceIndex]); // 

        //Write userGuessKey and computerChoice to html
        letterGuessedText.textContent = userGuessKey;
        computerChoiceText.textContent = allLettersArray[computerChoiceIndex]; //???***???

        //While remaining 0<=guess <=21, compare between the two values and take actions

        if (lives <= 7 && lives > 0) {
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
                alert("You will!")
                console.log(userGuessKey);
                console.log('Correct guess');
                wins++; //Needs to put this in front of return, or it would never run.
                winText.textContent = wins;
                //alert("You will!")
                //computerChoiceText.textContent = allLettersArray[computerChoiceIndex]; //???
                messageText.textContent = message.correctGuess;
                reset();
                // when user wins, series of things happen, i.e. reset game, choose new index, reset lives, etc
                // choose new index
                //computerChoiceIndex = chooseComputerIndex();
                //reset lives to 21
                //clear chosen letters
                //rethink loses, wins and lives

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
                //wrong letter and last life, then use loses.
            }
        } else {
            alert('Game over, try again!');
            reset();
        }


    }
})