
class Hangman {


  constructor(word , guesses) {
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessed = [];
    this.status = 'playing';
  }


  get puzzle() {
    let puzzle = '';
    this.word.forEach((letter) => {
      if (letter === ' '){
        puzzle += letter;
      }
      else {
        if(this.guessed.includes(letter)){
          puzzle += letter;
        } else{
          puzzle += '*';
        }
      }
    });
    return puzzle;
  }


  get statusMessage() {
    if (this.status === 'playing'){
      return `${this.guesses} Guesses remaining.`;
    } else if (this.status === 'finished'){
      return `Great work! You guessed the word.`;
    } else {
      return `Nice try! The word was \"${this.word.join('')}\".`;
    }
  }

  updateStatus() {
    let isCompleted = this.word.every((letter) => {
      return this.guessed.includes(letter) || letter === ' ';
    });
    //Check current status
    if (this.status === 'finished' || this.status === 'failed') {
      return;
    } else {
      //If Still playing:
      //Check if finished.
      // this.word.forEach((letter) => {
      //   if((!this.guessed.includes(letter))){
      //     isCompleted = false;
      //   }
      // });
  
      if (isCompleted) {
        this.status = 'finished';
      } else if (this.guesses <= 0) {
        //If not finished check if the number of guesses is 0 - then change to failed.
        this.status = 'failed';
      }
    }
  }


  makeGuess(letter) {
    if (hang1.status === 'playing'){
      letter = letter.toLowerCase();
      const isUniqueGuess = !this.guessed.includes(letter);
      const isBadGuess = !this.word.includes(letter);
      if (isUniqueGuess){
        this.guessed.push(letter);
      }
      if (isUniqueGuess && isBadGuess){
        this.guesses--;
      }
      //Check status
      this.updateStatus();
    }
  }

}





// const Hangman = function (word , guesses) {
//   this.word = word.toLowerCase().split('');
//   this.guesses = guesses;
//   this.guessed = [];
//   this.status = 'playing';
// }

// Hangman.prototype.getPuzzle = function () {
//   let puzzle = '';
//   this.word.forEach((letter) => {
//     if (letter === ' '){
//       puzzle += letter;
//     }
//     else {
//       if(this.guessed.includes(letter)){
//         puzzle += letter;
//       } else{
//         puzzle += '*';
//       }
//     }
//   });
//   return puzzle;
// }

// Hangman.prototype.getStatusMessage = function () {
//   if (this.status === 'playing'){
//     return `${this.guesses} Guesses remaining.`;
//   } else if (this.status === 'finished'){
//     return `Great work! You guessed the word.`;
//   } else {
//     return `Nice try! The word was \"${this.word.join('')}\".`;
//   }
// };


// Hangman.prototype.updateStatus = function() {
//   let isCompleted = this.word.every((letter) => {
//     return this.guessed.includes(letter);
//   });
//   //Check current status
//   if (this.status === 'finished' || this.status === 'failed') {
//     return;
//   } else {
//     //If Still playing:
//     //Check if finished.
//     // this.word.forEach((letter) => {
//     //   if((!this.guessed.includes(letter))){
//     //     isCompleted = false;
//     //   }
//     // });

//     if (isCompleted) {
//       this.status = 'finished';
//     } else if (this.guesses <= 0) {
//       //If not finished check if the number of guesses is 0 - then change to failed.
//       this.status = 'failed';
//     }
//   }
// };

// Hangman.prototype.makeGuess = function (letter) {
//   if (hang1.status === 'playing'){
//     letter = letter.toLowerCase();
//     const isUniqueGuess = !this.guessed.includes(letter);
//     const isBadGuess = !this.word.includes(letter);
//     if (isUniqueGuess){
//       this.guessed.push(letter);
//     }
//     if (isUniqueGuess && isBadGuess){
//       this.guesses--;
//     }
//     //Check status
//     this.updateStatus();
//   }
// }


