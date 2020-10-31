Assignment Code

// variables prompted to user
var length = Number(prompt("How many characters would you like your password to be? (6-30)"));
var confUpper = confirm("Click OK to confirm including lowercase character?");
var confLower = confirm("Click OK to confirm including uppercase character?");
var confSpecial = confirm("Click OK to confirm including special character?");
var confNumber = confirm("Click OK to confirm including numeric character?");



// variable needed to generate 
var charStringEl ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz0123456789!@#$%^&*()_+=-';
var password = "";
var length = 6-30;

function generatePassword() {
  

for (var  i = 0 ; i < length ; i++) {
    var randPw = Math.floor(Math.random() * charStringEl.length);
    password += charStringEl.substring(randPw, randPw + 1); 

  console.log(randPw);
  }

  document.getElementById('password');

} 




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
