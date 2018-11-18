//Primitive values of javascript: string, number , boolean , null , undefined.

//Object: myObject --> Object.protoype --> null
//Array: myArrray --> Array.prototype --> Object.prototype --> null 
//Function: MyFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBool --> Boolean.prototype --> Object.prototype --> null

//creating hangman games
const hang1 = new Hangman('Car Parts' , 2);
const hang2 = new Hangman('New Jersey' , 4);

//Select Main DIVs
const mainDIV = document.querySelector('#game-container');
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status');

const updatePuzzle = function (puzzle) {
  puzzleEl.textContent = puzzle;
};

const updateGuesses = function (guesses) {
  guessesEl.textContent = `${guesses} Guesses remaining.`;
};

const updateStatus = function (status) {
  statusEl.textContent = status;
}

//Render game to screen
const renderGame = function () {

  updatePuzzle(hang1.puzzle);
  //updateGuesses(hang1.guesses);
  updateStatus(hang1.statusMessage);
};

//First render of the game: 
renderGame();
//Added event listener to the windo
window.addEventListener('keypress' ,(e) => {
  const guess = String.fromCharCode(e.charCode);
  hang1.makeGuess(guess);
  //show changes on the screen
  renderGame();
});


getPuzzle('3').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Puzzle Error: ${err}`);
});


getCountry('IL').then((country) => {
  console.log(`Country name: ${country.name}`);
}).catch((err) => {
  console.log(`An error has occured: ${err}`);
});

// fetch('http://puzzle.mead.io/puzzle' , {}).then( (response) => {
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     throw new Error('Something went wrong with fetch');
//   }
// }).then((data) => {
//   console.log(data.puzzle);
// }).catch((err) => {
//   console.log(err);
// });

