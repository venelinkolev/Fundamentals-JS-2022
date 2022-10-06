function passwordValidator(string) {
  const pass = string;
  let length = false;
  let char = false;
  let digits = false;

  function checkLength(pass) {
    let passLength = pass.length;
    if (passLength >= 6 && passLength <= 10) length = true;
    else console.log("Password must be between 6 and 10 characters");
  }

  function checkCharacter(pass) {
    let currentChar = 0;

    for (let i = 0; i < pass.length; i++) {
      currentChar = pass[i].charCodeAt();
      if (
        (currentChar > 47 && currentChar < 58) ||
        (currentChar > 64 && currentChar < 91) ||
        (currentChar > 96 && currentChar < 123)
      ) {
        char = true;
      } else {
        console.log("Password must consist only of letters and digits");
        break;
      }
    }
  }

  function checkDigits(pass) {}
}

passwordValidator();
