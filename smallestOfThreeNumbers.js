function smallestOfThreeNumbers(numOne, numTwo, numThree) {
  //let minNum = Number.MAX_VALUE
  let newFunc = (a, b) => {
    if (a < b) return a;
    else return b;
  };

  let result = newFunc(newFunc(numOne, numTwo), numThree);
  console.log(result);
}

smallestOfThreeNumbers(
  600,

  342,

  123
);
