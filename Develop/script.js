// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt('Choose a length of at least 8 characters and no more than 128 characters');
  while (passwordLength == null || passwordLength == '' || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
  {
    passwordLength = prompt('Choose a length of at least 8 characters and no more than 128 characters');
  }

  var passwordLowercase = prompt('Do you want to include lowercase characters? (y/n)');
  while (passwordLowercase != 'Y' && passwordLowercase != 'y' && passwordLowercase != 'N' && passwordLowercase != 'n')
  {
    passwordLowercase = prompt('Do you want to include lowercase characters? (y/n)');
  }
  passwordLowercase = passwordLowercase.toLowerCase();

  var passwordUppercase = prompt('Do you want to include uppercase characters? (y/n)');
  while (passwordUppercase != 'Y' && passwordUppercase != 'y' && passwordUppercase != 'N' && passwordUppercase != 'n')
  {
    passwordUppercase = prompt('Do you want to include uppercase characters? (y/n)');
  }
  passwordUppercase = passwordUppercase.toLowerCase();

  var passwordNumeric = prompt('Do you want to include numeric characters? (y/n)');
  while (passwordNumeric != 'Y' && passwordNumeric != 'y' && passwordNumeric != 'N' && passwordNumeric != 'n')
  {
    passwordNumeric = prompt('Do you want to include numeric characters? (y/n)');
  }
  passwordNumeric = passwordNumeric.toLowerCase();

  var passwordSpecialChar = prompt('Do you want to include special characters? (y/n)');
  while (passwordSpecialChar != 'Y' && passwordSpecialChar != 'y' && passwordSpecialChar != 'N' && passwordSpecialChar != 'n')
  {
    passwordSpecialChar = prompt('Do you want to include special characters? (y/n)');
  }
  passwordSpecialChar = passwordSpecialChar.toLowerCase();

  // Enter while loop if all prompts were "n"
  while (passwordLowercase == 'n' && passwordUppercase == 'n' && passwordNumeric == 'n' && passwordSpecialChar == 'n')
  {
    var passwordInvalid = prompt('Password must include at least 1 character type (press OK to continue)');

    passwordLowercase = prompt('Do you want to include lowercase characters? (y/n)');
    while (passwordLowercase != 'Y' && passwordLowercase != 'y' && passwordLowercase != 'N' && passwordLowercase != 'n')
    {
      passwordLowercase = prompt('Do you want to include lowercase characters? (y/n)');
    }
    passwordLowercase = passwordLowercase.toLowerCase();

    passwordUppercase = prompt('Do you want to include uppercase characters? (y/n)');
    while (passwordUppercase != 'Y' && passwordUppercase != 'y' && passwordUppercase != 'N' && passwordUppercase != 'n')
    {
      passwordUppercase = prompt('Do you want to include uppercase characters? (y/n)');
    }
    passwordUppercase = passwordUppercase.toLowerCase();

    passwordNumeric = prompt('Do you want to include numeric characters? (y/n)');
    while (passwordNumeric != 'Y' && passwordNumeric != 'y' && passwordNumeric != 'N' && passwordNumeric != 'n')
    {
      passwordNumeric = prompt('Do you want to include numeric characters? (y/n)');
    }
    passwordNumeric = passwordNumeric.toLowerCase();

    passwordSpecialChar = prompt('Do you want to include special characters? (y/n)');
    while (passwordSpecialChar != 'Y' && passwordSpecialChar != 'y' && passwordSpecialChar != 'N' && passwordSpecialChar != 'n')
    {
      passwordSpecialChar = prompt('Do you want to include special characters? (y/n)');
    }
    passwordSpecialChar = passwordSpecialChar.toLowerCase();
  }

  var acceptableChars = '';

  if (passwordLowercase == 'y')
  {
    acceptableChars = acceptableChars + 'abcdefghijklmnopqrstuvwxyz';
  }

  if (passwordUppercase == 'y')
  {
    acceptableChars = acceptableChars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (passwordNumeric == 'y')
  {
    acceptableChars = acceptableChars + '0123456789';
  }

  if (passwordSpecialChar == 'y')
  {
    acceptableChars = acceptableChars + '`~!@#$%^&*()-_=+[{]}\|;:",<.>/?';
  }

  var userPassword = '';

  for (var i = 0; i < passwordLength; i++)
  {
    var charPosition = Math.floor(Math.random()*acceptableChars.length);

    userPassword = userPassword + acceptableChars.substring(charPosition,charPosition+1);
  }

  return userPassword;
}