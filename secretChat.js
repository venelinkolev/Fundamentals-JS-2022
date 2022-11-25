function secretChat(arr) {
  let message = arr.shift();
  //  console.log(message);
  let command = arr.shift();

  while (command !== 'Reveal') {
    let currentCommand = command.split(':|:');

    switch (currentCommand[0]) {
      case 'InsertSpace':
        let index = currentCommand[1];
        let firstLetters = message.substring(0, index);
        let secondLetters = message.substring(index);

        message = firstLetters.concat(' ').concat(secondLetters);

        console.log(message);
        break;
      case 'Reverse':
        let searchLetters = currentCommand[1];
        let indexReverse = message.indexOf(searchLetters);
        if (indexReverse === -1) {
          console.log('error');
        } else {
          //let substring = message.substring(indexReverse, indexReverse + searchLetters.length + 1);
          message = message.replace(searchLetters, '');
          //console.log(message);
          let buffer = '';
          for (let i = searchLetters.length - 1; i >= 0; i--) {
            // let char = searchLetters[i];
            // console.log(char);
            buffer += searchLetters[i];
          }
          message = message.concat(buffer);
          console.log(message);
        }
        break;
      case 'ChangeAll':
        let oldLetters = currentCommand[1];
        let newLetters = currentCommand[2];
        let indexChangeAll = message.indexOf(oldLetters);
        while (indexChangeAll !== -1) {
          message = message.replace(oldLetters, newLetters);

          indexChangeAll = message.indexOf(oldLetters);
        }

        console.log(message);
        break;
    }

    command = arr.shift();
  }

  console.log(`You have a new text message: ${message}`);
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal',
]);
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);
