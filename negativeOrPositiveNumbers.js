function negativeOrPositiveNumbers(arr) {
  let array = arr;
  let resultArray = [];

  for (let i of array) {
    if (i >= 0) resultArray.push(i);
    else resultArray.unshift(i);
  }

  console.log(resultArray.join("\n"));
}

negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
