import Hangman from './hangman';
import getPuzzle from './requests';

//creating hangman games
let hang1 = new Hangman('Car Parts' , 2);
const hang2 = new Hangman('New Jersey' , 4);

//Select Main DIVs
const mainDIV = document.querySelector('#game-container');
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status');

const updatePuzzle = function (puzzle) {
  const puzzleArray = puzzle.split('');
  puzzleEl.innerHTML = ''
  // puzzleEl.textContent = puzzle;
  puzzleArray.forEach(letter => {
    const letterDOM = document.createElement('span');
    letterDOM.textContent = letter;
    puzzleEl.appendChild(letterDOM);
  });
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

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  hang1 = new Hangman(puzzle , 5);
  renderGame();
}

document.querySelector('#reset').addEventListener('click' , startGame);

startGame();

