function substring(string, number1, number2) {
  let word = string;
  let newWord = word.substring(number1, number1 + number2);

  console.log(newWord);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);
