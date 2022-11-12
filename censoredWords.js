function censoredWords(text, word) {
  let resultText = text;
  while (resultText.includes(word)) {
    resultText = resultText.replace(word, '*'.repeat(word.length));
  }

  console.log(resultText);
}

censoredWords(
  'A small sentence with some words',

  'small'
);
censoredWords('Find the hidden word', 'hidden');
