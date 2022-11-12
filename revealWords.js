function revealWords(string, text) {
  //let firstIndex = 0;
  //let endIndex = 0;

  //   for (let i = 0; i < text.length; i++) {
  //     let currentChar = text[i];

  //     if (currentChar === '*')
  //   }
  let replaceWordArray = string.split(', ');
  let textArray = text.split(' ');

  //console.log(replaceWordArray);
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].includes('*')) {
      for (let j = 0; j < replaceWordArray.length; j++) {
        if (textArray[i].length === replaceWordArray[j].length) {
          textArray[i] = replaceWordArray[j];
        }
      }
    }
  }

  console.log(textArray.join(' '));
}

revealWords(
  'great',

  'softuni is ***** place for learning new programming languages'
);
revealWords(
  'great, learning',

  'softuni is ***** place for ******** new programming languages'
);
