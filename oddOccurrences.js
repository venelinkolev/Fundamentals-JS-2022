function oddOccurrences(input) {
  let string = input.toLowerCase().split(" ");

  let wordsObject = new Map();

  for (let i of string) {
    if (wordsObject.has(i)) {
      let currentValue = wordsObject.get(i) + 1;
      wordsObject.set(i, currentValue);
    } else wordsObject.set(i, 1);
  }

  for (let [key, value] of wordsObject) {
    if (value % 2 === 0) wordsObject.delete(key);
  }

  let buffer = "";

  for (let [key, value] of wordsObject) {
    buffer += key + " ";
  }

  console.log(buffer);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
