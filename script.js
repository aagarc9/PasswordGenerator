// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbols ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase ='abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';

var passwordChar = [symbols, uppercase, lowercase, num];

  console.log(passwordChar)

function generatePassword() {
    
    // 1. Prompt the user for the password criteria
    var save_user_input = prompt("How many characters would you like your password? ( Between 8 and 128)")
   
    // a. Password lenght 8 < 128
    if (save_user_input < 8) {
      alert("This is less than 8")
    } else if (save_user_input >= 8 && save_user_input <= 128) {
      alert("Would you like to include symbols?")
    } else {
      alert("This is more than 128")
    }

    alert ('"Would you like to include numbers?"')
    alert ('"Would you like to include Uppercase?"')
    alert ('"Would you like to include Lowercase?"')

  }

      

    //      b. lowercase, Uppercase, numbers, special characters
    // 2. Validate the input
    // 3. Display password to the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

