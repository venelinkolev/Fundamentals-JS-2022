function sorting(arr) {
  let array = arr;
  let resultArray = [];

  array = array.sort((a, b) => a - b);

  while (array.length !== 0) {
    resultArray.push(array.pop());
    resultArray.push(array.shift());
  }
  console.log(resultArray.join(" "));
}

sorting([
  34, 2, 32, 45, 690, 6, 32,

  7, 19, 47,
]);
