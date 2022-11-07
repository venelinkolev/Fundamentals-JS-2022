function wordsTracker(arr) {
  let searchWords = arr.shift().split(" ");

  let wordsObject = {};

  for (let i of searchWords) {
    wordsObject[i] = 0;
  }

  for (let i of arr) {
    if (wordsObject.hasOwnProperty(i)) wordsObject[i]++;
  }

  let resultArray = Object.entries(wordsObject).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of resultArray) {
    console.log(`${key} - ${value}`);
  }
}

wordsTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
