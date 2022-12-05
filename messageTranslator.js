function messageTranslator(arr) {
  let counter = arr.shift();
  for (let i = 0; i < counter; i++) {
    let resultCommand = [];
    let resultString = [];
    let pattern = /!(?<command>[A-Z][a-z]{3,})!:\[(?<string>[a-zA-Z]{8,})\]/g;
    let currrentMatch = arr[i].matchAll(pattern);
    //console.log(currrentMatch);
    if (!currrentMatch) {
      console.log('The message is invalid');
    } else {
      for (let i of currrentMatch) {
        let command = i.groups.command;
        resultCommand.push(command);
        let string = i.groups.string;
        for (let j = 0; j < string.length; j++) {
          let currentCharNumber = string[j].charCodeAt();
          resultString.push(currentCharNumber);
        }
        //console.log(string);
      }
    }
    if (resultCommand[0] === undefined) {
      console.log('The message is invalid');
    } else {
      //console.log(currrentMatch);
      console.log(`${resultCommand[0]}: ${resultString.join(' ')}`);
    }
  }
  //console.log(resultString);
}

messageTranslator([
  '3',
  'go:[outside]',
  '!drive!:YourCarToACarWash',
  '!Watch!:[LordofTheRings]',
]);
messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready']);
