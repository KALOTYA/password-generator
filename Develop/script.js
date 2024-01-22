// Assignment code here

function generatePassword() {
  
  var length = parceInt(prompt("how long would you like your password? (MUST CONTAIN BETWEEN 8 - 128 CHARECTERS:"));
  
  
  
  var incLowercase = confirm();
  var incUppercase = confirm();
  var incNumbers = confirm();
  var incSpecial = confirm();

  if ()

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersChars = "0123456789";
  var specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";

  var allChars = "";
  if ()
  if ()
  if ()
  if ()


  //Generating the password
  var password = 
  for (var i = 0;i < length; i++) {}






}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);