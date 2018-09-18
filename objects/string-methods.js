let name = '  Paz Jaldety ';

//Length property:
console.log(name.length);

// Convert to Uppercase:
console.log(name.toUpperCase());

// Convert to lowercase:
console.log(name.toLowerCase());

let password = 'abc123passord098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

let isValidPassword = function (password) {

    // if (password.length < 9){
    //   return false;
    // }
    // if (password.includes('password')) {
    //   return false;
    // }
    // return true;
  return (password.length > 8 && !password.includes('password'));

}


console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('adfaljkalkjfalfpassword12345'));