//Global Scope - everything defined outside of all code blockes. 
//Local Scope - defined inside a code block. 


let varOne = 'varOne';

if(true){
  console.log(varOne);
  let varTwo = 'varTwo';
  console.log(varTwo);
  if(true){
    let varFour = 'varFour';
  }
}

if(true) {
  let varThree = 'varThree';

}

console.log(varTwo);