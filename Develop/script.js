// Assignment Code

// variable needed to generate 
var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];
var password = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Character length prompt
function generatePassword () {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
  characterLength - parseInt(prompt( "How many characters would you like your password to be? (8-128)"))
  }

 charString[0] = false
 charString[1] = false
 charString[2] = false
 charString[3] = false

 if (!charString[0] && !charString[1] && !charString[2] &&!charString[3]){

  
  charString[0] = confirm("Click OK to confirm uppercase characters");

  charString[1] = confirm("Click OK to confirm lowercase characters");

  charString[2] = confirm("Click OK to confirm numeric characters");

  charString[3] = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");



 }




}






 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




