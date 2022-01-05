// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbols ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase ='abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';

function generatePassword() {
    
    // 1. Prompt the user for the password criteria
    prompt("How many charaters would you like your password")
    //      a. Password lenght 8 < 128
    //      b. lowercase, Uppercase, numbers, special characters
    // 2. Validate the input
    // 3. Display password to the page

}

generatePassword()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

