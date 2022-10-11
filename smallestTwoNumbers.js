function smallestTwoNumbers(arr) {
  const array = arr;
  let resultArray = [];

  resultArray = array.sort((a, b) => a - b).slice(0, 2);

  console.log(resultArray.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
