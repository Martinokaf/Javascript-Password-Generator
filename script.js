// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var choice = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var characterAmount = window.prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters"); 
  while (characterAmount === null || isNaN(characterAmount) || characterAmount < 8 || characterAmount > 128) {
  
    if(isNaN(characterAmount) || characterAmount <  8 || characterAmount > 128) {
       alert("Character amount has to be 8 - 128. Try again.");
    }
    characterAmount = window.prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters"); 
  }
  if (confirm("Include special character letters?")) {
    choice = choice.concat(specialCharacters);
  }
  if (confirm("Include numeric character letters?")) {
      choice = choice.concat(numericCharacters);
  }
  if (confirm("Include lower cased character letters?")) {
      choice = choice.concat(lowerCasedCharacters);
  }
  if (confirm("Include upper cased character letters?")) {
    choice = choice.concat(upperCasedCharacters); 
  }
  return { characterAmount, choice };
   
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var password = "";
  for (var i = 0; i < options.characterAmount; i++) {
    var random = getRandom(options.choice);
    password += random;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);