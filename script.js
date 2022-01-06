// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var characters ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    
    var save_user_input = prompt("How many characters would you like your password? ( Between 8 and 128)")
   
    if (save_user_input < 8) {
      alert("This is less than 8")
      return "invalid input"
    } else if (save_user_input >= 8 && save_user_input <= 128) {
      var includeNum = confirm("Would you like to include numbers?")
      console.log(includeNum)
    } else {
      alert("This is more than 128")
      return "invalid input"
    }


     var includeSym = confirm ('"Would you like to include symbols?"')
          console.log(includeSym)
     var includeUpper = confirm ('"Would you like to include Uppercase?"')
          console.log(includeUpper)

    var includeLower = confirm ('"Would you like to include Lowercase?"')
          console.log(includeLower)

    var password = ""
    
    for (var i=0; i <= save_user_input; i++) {
        password += characters.chartAt(Math.floor(Math.random() * characters.length));
        
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

