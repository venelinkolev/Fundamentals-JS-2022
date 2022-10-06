function simpleCalculator(num1, num2, operator) {
  let result;
  //   if (operator === "multiply") result = (num1, num2) => num1 * num2;
  //   console.log(result);
  //   if (operator === "divide")
  //     console.log((result = (num1, num2) => num1 / num2));
  //   if (operator === "add") console.log((result = (num1, num2) => num1 + num2));
  //   if (operator === "subtract")
  //     console.log((result = (num1, num2) => num1 - num2));

  switch (operator) {
    case "multiply":
      result = (a, b) => a * b;
      console.log(result(num1, num2));
      break;
    case "divide":
      result = (a, b) => a / b;
      console.log(result(num1, num2));
      break;
    case "add":
      result = (a, b) => a + b;
      console.log(result(num1, num2));
      break;
    case "subtract":
      result = (a, b) => a - b;
      console.log(result(num1, num2));
      break;
  }
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(
  12,

  19,

  "add"
);
