// Function - input , code , output

let greetUser = function () {
  console.log('Welcome user!');
}

greetUser();
greetUser();
greetUser();

let square = function ( numberToSquare) {
  let result = numberToSquare * numberToSquare;
  return result;
}

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

let convertFahrenheitToCelsius = function ( fahrenheit) {
  let celsius = (fahrenheit -32) * 5 / 9;
  return celsius;
}

console.log(convertFahrenheitToCelsius(68));