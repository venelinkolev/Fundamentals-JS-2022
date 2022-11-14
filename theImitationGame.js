function theImitationGame(arr) {
  let message = arr.shift();

  let command = arr.shift();

  while (command !== 'Decode') {
    let currentCommandArray = command.split('|');

    switch (currentCommandArray[0]) {
      case 'Move':
        let movesLetters = message.substring(0, currentCommandArray[1]);
        let newMessage = message.substring(currentCommandArray[1]);
        message = newMessage.concat(movesLetters);
        //console.log(movesLetters, newMessage);
        break;
      case 'Insert':
        let firstLetters = message.substring(0, currentCommandArray[1]);
        let secondLetters = message.substring(currentCommandArray[1]);
        //console.log(firstLetters, secondLetters);
        message = firstLetters
          .concat(currentCommandArray[2])
          .concat(secondLetters);
        break;
      case 'ChangeAll':
        for (let i of message) {
          if (i === currentCommandArray[1]) {
            message = message.replace(
              currentCommandArray[1],
              currentCommandArray[2]
            );
          }
        }
        break;
    }

    command = arr.shift();
  }

  console.log(`The decrypted message is: ${message}`);
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);
