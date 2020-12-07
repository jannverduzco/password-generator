// Assignment Code

// variable needed to generate 
var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];


var userInput = [];

var password = "";

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
  //  push values userInput array
  if (upper) {
    userInput.push(charString[0]);
  }

  if (lower) {
    userInput.push(charString[1]);
  }

  if (number) {
    userInput.push(charString[2]);
  }

  if (symbol) {
    userInput.push(charString[3]);
  }

  var password = "";

  // join all array elements into a single array -> then split to get an array of characters
  userInput = userInput.join("").split("");

// for loop through charachter array
  for (var i = 0; i < characterLength; i++) {
    // generatign random characters from userInput array
    var index = (Math.floor(Math.random() * userInput.length));
    password = password + userInput[index]
  }
  return password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




