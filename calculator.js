function calculator(a, b, c) {
  const number1 = Number(a);
  const operator = b;
  const number2 = Number(c);

  switch (operator) {
    case "+":
      console.log((number1 + number2).toFixed(2));
      break;
    case "-":
      console.log((number1 - number2).toFixed(2));
      break;
    case "/":
      console.log((number1 / number2).toFixed(2));
      break;
    case "*":
      console.log((number1 * number2).toFixed(2));
      break;
  }
}

calculator(
  25.5,

  "-",

  3
);
