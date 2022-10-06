function signCheck(numOne, numTwo, numThree) {
  let newFunc = (a, b) => a * b;
  let result = newFunc(newFunc(numOne, numTwo), numThree);

  result > 0 ? console.log("Positive") : console.log("Negative");
}

signCheck(
  -6,

  -12,

  14
);
