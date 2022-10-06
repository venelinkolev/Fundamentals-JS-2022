function charactersInRange(parameterOne, parameterTwo) {
  let buffer = [];
  let firstChar = 0;
  let secondChar = 0;

  let charOne = Number(parameterOne.charCodeAt());
  let charTwo = Number(parameterTwo.charCodeAt());

  if (charTwo < charOne) {
    firstChar = charTwo;
    secondChar = charOne;
  } else {
    firstChar = charOne;
    secondChar = charTwo;
  }

  let result = (numOne, numTwo) => {
    for (let i = numOne + 1; i < numTwo; i++) {
      buffer.push(String.fromCharCode(i));
    }
    return buffer;
  };

  //result(firstChar, secondChar);

  console.log(result(firstChar, secondChar).join(" "));
}

charactersInRange(
  "C",

  "#"
);
