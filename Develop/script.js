// Assignment Code

// variable needed to generate 
var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];

var userInput = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Character length prompt
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
    characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));

  }

  var upper = false
  var lower = false
  var number = false
  var symbol = false

  while (!upper && !lower && !number && !symbol) {

    // Uppercase pop up
    upper = confirm("Click OK to confirm uppercase characters");

    // Lowercase pop up
    lower = confirm("Click OK to confirm lowercase characters");

    // Numeric pop up
    number = confirm("Click OK to confirm numeric characters");

    // Special charcter  pop up
    symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");

  }

  if (upper) {
    userInput += charString[0];

  }

  if (lower) {
    userInput += charString[1]

  }


  if (number) {
    userInput += charString[2]

  }


  if (symbol) {
    userInput += charString[3]

  }

  var password = "";

  for (var i = 1; i <= userInput.length ; i++) {
    var index = [Math.floor(Math.random) * userInput.length];
    password = password + userInput[index]
  }

  return password

}

console.log(returnpassword)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




