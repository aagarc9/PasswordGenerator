// Assignment Code
var generateBtn = document.querySelector("#generate");
var Sym ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var Upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lower = "abcdefghijklmnopqrstuvwxyz";
var Num ="123456789";
var includeSym = false;
var includeUpper = false;
var includeNum = false;
var includeLower = false;
var finalString = "";

function generatePassword() {
    var save_user_input = prompt("How many characters would you like your password? ( Between 8 and 128)")
   
    if (save_user_input < 8) {
      alert("This is less than 8")
      return "invalid input"
    } else if (save_user_input >= 8 && save_user_input <= 128) {
      includeNum = confirm("Would you like to include numbers?")
      console.log(includeNum)
    } else {
      alert("This is more than 128")
      return "invalid input"
    }


     includeSym = confirm ('"Would you like to include symbols?"')
          console.log(includeSym)
     includeUpper = confirm ('"Would you like to include Uppercase?"')
          console.log(includeUpper)
     includeLower = confirm ('"Would you like to include Lowercase?"')
          console.log(includeLower)
    
        if (includeNum) {
            for (let i = 0; i < Num.length; i++) {
              finalString += Num.charAt(Math.floor(Math.random() * save_user_input));
            }
          }if (includeSym) {
            for (let i = 0; i < Sym.length; i++) {
              finalString += Sym.charAt(Math.floor(Math.random() * save_user_input));
            }
          }if (includeUpper) {
            for (let i = 0; i < Upper.length; i++) {
              finalString += Upper.charAt(Math.floor(Math.random() * save_user_input));
            }
          }if (includeLower) {
            for (let i = 0; i < Lower.length; i++) {
              finalString += Lower.charAt(Math.floor(Math.random() * save_user_input));
            }
          }
          console.log("final string", finalString);
          return shuffle(finalString.split("")).join("").slice(0, save_user_input);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  
  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}