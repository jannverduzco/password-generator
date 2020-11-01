// Assignment Code

// variable needed to generate 
var charUpperEl = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"] ;
var length = 8 - 128;
var password = "";


var chartStringEl = [];

function generatePassword() {



  for (var i = 0; i < length; i++) {
    var randPw = Math.floor(Math.random() * charStringE;[].length);
    password += charStringEl.substring(randPw, randPw + 1);

    console.log(randPw);
  }

 
  var length = 
       prompt("How many characters would you like your password to be? (6-100)"));
  var confUpper = 
      confirm("Click OK to confirm including lowercase character?");
  var confLower = 
      confirm("Click OK to confirm including uppercase character?");
  var confSpecial =
      confirm("Click OK to confirm including special character?");
  var confNumber = 
      confirm("Click OK to confirm including numeric character?");


  document.getElementById('password');

}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
