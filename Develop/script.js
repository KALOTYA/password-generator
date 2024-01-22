// Assignment code here

function generatePassword() {
  
  //prompting User for password length
  var length = parceInt(prompt("how long would you like your password? (MUST CONTAIN BETWEEN 8 - 128 CHARECTERS:"));
  
  
  //prompting user for password criteria
  var incLowercase = confirm("Do you want to include Lowercase?");
  var incUppercase = confirm("Do you want to include Uppercase?");
  var incNumbers = confirm("Do you want to include Numbers?");
  var incSpecial = confirm("Do you want to include Special Charecters?");

  if (!incLowercase && !incUppercase && !incNumbers && !incSpecial) {}

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersChars = "0123456789";
  var specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";

  var allChars = "";
  if (incLowercase) allChars += lowercaseChars;
  if (incLowercase) allChars += lowercaseChars;
  if (incLowercase) allChars += lowercaseChars;
  if (incLowercase) allChars += lowercaseChars;


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