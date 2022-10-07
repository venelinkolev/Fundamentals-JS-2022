function factorialDivision(numOne, numTwo) {
  function factorial(num) {
    if (num <= 0) return 1;
    else return factorial(num - 1) * num;
  }

  let factNumOne = factorial(numOne);
  let factNumTwo = factorial(numTwo);
  console.log((factNumOne / factNumTwo).toFixed(2));
}

factorialDivision(6, 2);
