function passwordValidatorExam(arr) {
  let password = arr.shift().split('');
  //console.log(password);

  let isUpperCase = false;
  let isLowerCse = false;
  let isDigit = false;
  let isOnly = true;

  while (arr[0] !== 'Complete') {
    let command = arr.shift().split(' ');
    let currentCommand = command.shift();
    //console.log(command);
    //console.log(currentCommand);
    switch (currentCommand) {
      case 'Make':
        let index = Number(command[1]);
        if (command[0] === 'Upper') {
          password.splice(index, 1, password[index].toUpperCase());
          console.log(password.join(''));
        } else {
          password.splice(index, 1, password[index].toLowerCase());
          console.log(password.join(''));
        }
        break;
      case 'Insert':
        let indexInsert = Number(command[0]);
        let char = command[1];

        if (indexInsert >= 0 && indexInsert < password.length) {
          password.splice(indexInsert, 0, char);
          console.log(password.join(''));
        }
        break;
      case 'Replace':
        let charReplace = command[0];
        let charAscii = Number(command[0].charCodeAt());
        let value = Number(command[1]);

        if (password.includes(charReplace)) {
          let newChar = String.fromCharCode(charAscii + value);
          password = password
            .join('')
            .split(charReplace)
            .join(newChar)
            .split('');

          console.log(password.join(''));
        }
        break;
      case 'Validation':
        //console.log(password);
        if (password.length < 8)
          console.log('Password must be at least 8 characters long!');

        //let pattern = /[a-zA-z\d_]+/g;
        let test = password.join('').split(/[a-zA-z\d_]+/g);
        //console.log(test);
        for (let i of test) {
          if (i.charCodeAt() >= 0) {
            console.log('Password must consist only of letters, digits and _!');
            break;
          }
        }

        // let result = password.join('').match(pattern);
        // //console.log(result);
        // if (result.length > 1)
        //   console.log('Password must consist only of letters, digits and _!');

        for (let i of password) {
          let charAscii = Number(i.charCodeAt());
          //   if (
          //     (charAscii < 48 && charAscii > 57) ||
          //     charAscii !== 95 ||
          //     (charAscii < 65 && charAscii > 90) ||
          //     (charAscii < 97 && charAscii > 122)
          //   ) {
          //     console.log('Password must consist only of letters, digits and _!');
          //   }

          if (charAscii >= 48 && charAscii <= 57) {
            isDigit = true;
          }
          if (charAscii >= 65 && charAscii <= 90) {
            isUpperCase = true;
          }
          if (charAscii >= 97 && charAscii <= 122) {
            isLowerCse = true;
          }
        }
        if (!isUpperCase)
          console.log('Password must consist at least one uppercase letter!');
        if (!isLowerCse)
          console.log('Password must consist at least one lowercase letter!');
        if (!isDigit) console.log('Password must consist at least one digit!');

        break;
    }
    //console.log(command);
  }

  //console.log(password);
}

passwordValidatorExam([
  'invalidpasswor?d*',
  'Add 2 p',
  'Replace i -50',
  'Replace * 10',
  'Make Upper 2',
  'Validation',
  'Insert 3 &',
  'Validation',
  'Complete',
]);

// passwordValidatorExam([
//   '123456789',
//   'Insert 3 R',
//   'Replace 5 15',
//   'Validation',
//   'Make Lower 3',
//   'Complete',
// ]);
