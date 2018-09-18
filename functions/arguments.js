//Multiple arguments. 

let add = function ( a , b , c) {
  return a + b + c;
}

let result = add( 10 , 1 , 5 );

console.log(result);

//Default arguments
let getScoreText = function ( name = 'Player', score = 0 ) {
  return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText(undefined , 99);
console.log(scoreText);


let getTip = function ( total , tipPercent = 0.2) {
  let result = total * tipPercent;

  return `A ${tipPercent*100}% tip on $${total} would be $${result}`;
}


let tipOne = getTip(100);
let tipTwo = getTip(400 , 0.1);
console.log(tipOne);
console.log(tipTwo);