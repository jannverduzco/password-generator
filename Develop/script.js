// Assignment Code



var userInput = prompt("How many characters would you like your password to be?");
var confUpper = confirm ("Click OK to confirm including lowercase character?");
var confLower = confirm ("Click OK to confirm including uppercase character?");
var confSpecial = confirm ("Click OK to confirm including special characters?");
var confNumber = confirm ("Click OK to confirm including numeric character?");


// Generate random Characters
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97) ;
}

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65) ;
}
function getSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33) ;
}
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48) ;
}

console.log (getUpper());
console.log (getLower());
console.log (getSpecial());
console.log (getNumber());

// // DOM Communication
// var lenghtEl = document.getElementById("length");
// var lowercaseEl = document.getElementById('lowercase');
// var uppercaseEl = document.getElementById('uppercase');
// var specialEl = document.getElementById('special');
// var numbersEl = document.getElementById('numbers');
// var generateEl = document.getElementById('generate')

// const randomFunc = {
//   lower: getLower,
//   upper: getUpper,
//   special: getSpecial,
//   number: getNumber
// };

// generateEl.addEventListener('click', () => {
//   const length = +lengthEl.value;
//   const hasLower = lowerEl.checked;
//   const hasUpper  = upperEl.checked;
//   const hasSpecial = specialEl.checked;
//   const hasNumber = numberEl.checked;

//   answerEl.innerText = generatePassword(hasUpper,hasLower, hasSpecial, hasNumber, length)

// });


// function generatePassword (){

// }




// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
