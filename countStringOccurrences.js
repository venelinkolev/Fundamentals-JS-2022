function countStringOccurrences(text, word) {
  let counter = 0;
  let resultTextArray = text.split(' ');

  for (let i of resultTextArray) {
    if (i === word) counter++;
  }

  console.log(counter);
}

countStringOccurrences(
  'This is a word and it also is a sentence',

  'is'
);
countStringOccurrences(
  'softuni is great place for learning new programming languages',

  'softuni'
);
