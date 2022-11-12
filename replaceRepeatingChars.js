function replaceRepeatingChars(input) {
  let resultArray = [];

  resultArray.push(input[0]);

  for (let i = 1; i < input.length; i++) {
    let currentChar = input[i];
    let char = input[i - 1];

    if (char !== currentChar) resultArray.push(currentChar);
  }

  console.log(resultArray.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');
