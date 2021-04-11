// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "~", "?", "(", ")", "{", "}", "<", ">",];
var passwordOutput = [];


function generatePassword() { //This is the primary function. 

  var passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength >= 129 || passwordLength <= 7) { // This if statement returns an alert if the password isn't between 128 and 8 characters.
    alert("Please enter a password between 8 and 128 characters using ")
    passwordLength = prompt("How many characters would you like your password to be?")// This line causes the prompt to pop back up after the alert.
  }
  var passwordCaps = confirm("Would you like to use upper case letters?"); // Here is where the series of true/false confirmation boxes start.
  var passwordLows = confirm("Would you like to use lower case letters?");
  var includeNumbers = confirm("Would you like to use numbers?");
  var includeSpecials = confirm("Would you like to use special characters?");
  var result = ""

  for (var i = 0; i < passwordLength; i++) { //This for loop adds a character from each selected array to passwordOutput. It adds one untill the number specified by passwordLength.

    if (passwordCaps === true) {

      passwordOutput.push(randomCharacter(upperCase)) //.push adds the array to passwordOutput. randomCharacter calls the function to randomize the array.
    }
    if (passwordLows === true) {

      passwordOutput.push(randomCharacter(lowerCase))
    }
    if (includeNumbers === true) {

      passwordOutput.push(randomCharacter(numbers))
    }
    if (includeSpecials === true) {
      passwordOutput.push(randomCharacter(specialCharacters))
    }
    result = result + passwordOutput.join("") //.join creates a new string with the selected random elements and tells them to separate by nothing.
  }

  console.log(passwordOutput) 
  console.log(result.substring(0, passwordLength))

  return result.substring(0, passwordLength) //.substring extracts between 0 and passwordLength elements from the created string.
  //Return stops the function and returns the specified value.
}

function randomCharacter(inputArray) { //This function randomizes the arrays. I used a function so I did not have to repeat code.
  var randomize = Math.floor(Math.random() * inputArray.length)
  var randomElement = inputArray[randomize]

  return randomElement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




