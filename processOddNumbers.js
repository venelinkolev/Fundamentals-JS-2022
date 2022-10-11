function processOddNumbers(arr) {
  const array = arr;
  let resultArray = [];
  resultArray = array
    .filter((element, index) => index % 2 !== 0)
    .map((element) => element * 2)
    .reverse();

  console.log(resultArray.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
