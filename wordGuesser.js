
  /*created two arrays for the word the guess and the letters guessed*/
var wordList = ["fox" ,"dog", "cat", "horse", "panda", "bear"];

var word = wordList[Math.floor(Math.random()*wordList.length)];

var guessedLetters = [];


/*created a variable to count the total number of tries */
var numberOfTries = 0;
var youWon = 0;


function guessLetter(letter) {

  /*inialize the boolean variables*/
  var correct = false;
  var wrong = false;


  /*created a for loop to iterate through the word letters to see if the guessed letter is in there and depending on if it is or not change the value of the boolean to true*/
  for (var i = 0; i < word.length; i++) {

    if (word[i] == letter) {
      guessedLetters[i] = letter;
      correct = true;


    }
    else if (guessedLetters[i] == " ") {
      wrong = true;


    }
  }

  /*boolean if-statement to give output for whether it is true or false*/

  if (correct) {
    youWon++;
    /* created a nested if statement to print the game result*/
    if (youWon == word.length) {
      console.log("Congrats!! You won!!!!");
      console.log(guessedLetters.join(''));

    }

    else {
      console.log("You guessed a letter!!!")
      console.log(guessedLetters.join(''));
    }

  }

  else {

    numberOfTries++;

    if (numberOfTries == 8) {
      console.log("You lost");


    }
    else {
      console.log("Try again!");
    }
  }

}


guessLetter("c");
guessLetter("f");
guessLetter("e");
guessLetter("o");
guessLetter("x");
guessLetter("h");
guessLetter("r");
guessLetter("s");

