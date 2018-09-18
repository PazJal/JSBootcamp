let num = 12.345

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

let guess = function (num){
 return (num === randomNum);
}
console.log(guess(1));