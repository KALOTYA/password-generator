// Assignment code here

function generatePassword() {
  
  //prompting User for password length
  var length = parseInt(prompt("how long would you like your password? (MUST CONTAIN BETWEEN 8 - 128 CHARECTERS:"));
  console.log("password length:" + length);
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return "";
  }

  //prompting user for password criteria
  var incLowercase = confirm("Do you want to include Lowercase?");
  var incUppercase = confirm("Do you want to include Uppercase?");
  var incNumbers = confirm("Do you want to include Numbers?");
  var incSpecial = confirm("Do you want to include Special Charecters?");

  console.log("Do they want Lowercase?:" + incLowercase);
  console.log("Do they want Uppercase?:" + incUppercase);
  console.log("Do they want Numbers?:" + incNumbers);
  console.log("Do they want Special charecters?:" + incSpecial);



  //Validating to make sure the User selects at least one of the criteria
  if (!incLowercase && !incUppercase && !incNumbers && !incSpecial) {
    
    //Alerting User that they must pick one in order to generate password
    alert("You cant do that! You must select at least one! Hurry! >:(");
    
    //returning empty string
    return "";
  }


  //Assigning variables for all possible charecters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersChars = "0123456789";
  var specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";

  var allChars = "";
  var requiredChars = [];
  if (incLowercase) {
    allChars += lowercaseChars;
    requiredChars.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
  }
  if (incUppercase) {
    allChars += uppercaseChars;
    requiredChars.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
  }
  if (incNumbers) {
    allChars += numbersChars;
    requiredChars.push(numbersChars[Math.floor(Math.random() * numbersChars.length)]);
  }
  if (incSpecial) {
    allChars += specialChars;
    requiredChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
  }


  //Generating the password
  var password = "";
  for (var i = 0;i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;

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