function activationKeys(arr) {
  let activationKey = arr.shift();
  //console.log(activationKey);
  let command = arr.shift();

  while (command !== 'Generate') {
    let currentCommand = command.split('>>>');

    let startIndex = 0;
    let endIndex = 0;
    let firstLetters = '';
    let secondLetters = '';
    let substring = '';
    //console.log(currentCommand);
    switch (currentCommand[0]) {
      case 'Contains':
        if (activationKey.includes(currentCommand[1]))
          console.log(`${activationKey} contains ${currentCommand[1]}`);
        else console.log(`Substring not found!`);
        break;
      case 'Flip':
        startIndex = Number(currentCommand[2]);
        endIndex = Number(currentCommand[3]);
        substring = activationKey.substring(startIndex, endIndex);
        firstLetters = activationKey.substring(0, startIndex);
        secondLetters = activationKey.substring(endIndex);

        if (currentCommand[1] === 'Upper') {
          substring = substring.toUpperCase();
          activationKey = firstLetters.concat(substring).concat(secondLetters);
          console.log(activationKey);
        } else {
          substring = substring.toLowerCase();
          activationKey = firstLetters.concat(substring).concat(secondLetters);
          console.log(activationKey);
        }
        break;
      case 'Slice':
        startIndex = currentCommand[1];
        endIndex = currentCommand[2];
        substring = activationKey.substring(startIndex, endIndex);
        firstLetters = activationKey.substring(0, startIndex);
        secondLetters = activationKey.substring(endIndex);
        activationKey = firstLetters.concat(secondLetters);

        console.log(activationKey);
        break;
    }

    command = arr.shift();
  }

  console.log(`Your activation key is: ${activationKey}`);
  //console.log('--------');
}

activationKeys([
  'abcdefghijklmnopqrstuvwxyz',

  'Slice>>>2>>>6',

  'Flip>>>Upper>>>3>>>14',

  'Flip>>>Lower>>>5>>>7',

  'Contains>>>def',

  'Contains>>>deF',

  'Generate',
]);
activationKeys([
  '134softsf5ftuni2020rockz42',

  'Slice>>>3>>>7',

  'Contains>>>-rock',

  'Contains>>>-uni-',

  'Contains>>>-rocks',

  'Flip>>>Upper>>>2>>>8',

  'Flip>>>Lower>>>5>>>11',

  'Generate',
]);
