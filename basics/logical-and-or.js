let temp = 55;

if( (temp >= 60) && (temp <= 90) ){
  console.log('It is pretty nice out.');

} else if ( (temp >= 120) || (temp <=0) ){
  console.log(`Do not go outside.`);
} else {
  console.log('Do what you want.');
}

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if( (isGuestOneVegan) && (isGuestTwoVegan) ){
  console.log('Offer only vegan food.');
} else if (isGuestOneVegan || isGuestTwoVegan){
  console.log('Offer some vegan food.');
} else {
  console.log('Everything is okay.');
}