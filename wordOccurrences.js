function wordOccurrences(arr) {
  let wordsObject = {};

  for (let i of arr) {
    if (!wordsObject[i]) wordsObject[i] = 1;
    else wordsObject[i]++;
  }

  let resultArray = Object.entries(wordsObject).sort((a, b) => b[1] - a[1]);

  for (let [word, count] of resultArray) {
    console.log(`${word} -> ${count} times`);
  }
}

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
