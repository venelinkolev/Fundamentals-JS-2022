function passwordValidator(string) {
  const pass = string;
  let length = false;
  let char = false;
  let digits = false;
  let counterDigits = 0;

  function checkLength(pass) {
    let passLength = pass.length;
    if (passLength > 5 && passLength < 11) length = true;
    else console.log("Password must be between 6 and 10 characters");
  }

  function checkCharacter(pass) {
    let currentChar = 0;

    for (let i = 0; i < pass.length; i++) {
      currentChar = pass[i].charCodeAt();
      //console.log(typeof currentChar);
      if (
        (currentChar > 47 && currentChar < 58) ||
        (currentChar > 64 && currentChar < 91) ||
        (currentChar > 96 && currentChar < 123)
      ) {
        char = true;
      } else {
        console.log("Password must consist only of letters and digits");
        char = false;
        break;
      }
    }
  }

  function checkDigits(pass) {
    for (let i = 0; i < pass.length; i++) {
      if (pass[i].charCodeAt() > 47 && pass[i].charCodeAt() < 58) {
        counterDigits++;
      }
    }
    if (counterDigits >= 2) digits = true;
    else console.log("Password must have at least 2 digits");
  }

  checkLength(pass);
  checkCharacter(pass);
  checkDigits(pass);

  if (length && char && digits) console.log("Password is valid");
}

passwordValidator("Pa$s$s");
