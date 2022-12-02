function passwordReset(arr) {
  let password = arr.shift();

  while (arr[0] !== 'Done') {
    let currentCommand = arr.shift().split(' ');
    let command = currentCommand[0];

    switch (command) {
      case 'TakeOdd':
        let result = '';
        let bufferPass = password.split('');
        for (let i = 0; i < bufferPass.length; i++) {
          if (i % 2 !== 0) result += bufferPass[i];
        }
        password = result;
        console.log(password);
        break;
      case 'Cut':
        let index = Number(currentCommand[1]);
        let length = Number(currentCommand[2]);
        let substringDelete = password.substring(index, index + length);

        let resultCut = password.replace(substringDelete, '');
        password = resultCut;

        console.log(password);
        break;
      case 'Substitute':
        let substring = currentCommand[1];
        let substitute = currentCommand[2];

        let indexFine = password.indexOf(substring);
        if (indexFine === -1) {
          console.log('Nothing to replace!');
        } else {
          while (indexFine !== -1) {
            password = password.replace(substring, substitute);
            indexFine = password.indexOf(substring);
          }
          console.log(password);
        }
        break;
    }
  }

  //console.log('------', password);
  console.log(`Your password is: ${password}`);
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
passwordReset([
  'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
  'TakeOdd',
  'Cut 18 2',
  'Substitute ! ***',
  'Substitute ? .!.',
  'Done',
]);
