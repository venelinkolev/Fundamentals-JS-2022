function stringSubstring(word, text) {
  let textArray = text.toLowerCase().split(' ');
  let isFound = false;

  for (let i of textArray) {
    if (i === word) {
      console.log(word);
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log(`${word} not found!`);
  }
  //console.log(textArray);
}

stringSubstring(
  'javascript',

  'JavaScript is the best programming language'
);
stringSubstring(
  'python',

  'JavaScript is the best programming language'
);
