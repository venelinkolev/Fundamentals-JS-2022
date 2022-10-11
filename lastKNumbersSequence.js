function lastKNumbersSequence(n, k) {
  let length = n;
  let element = k;

  let resultArray = [];
  let sum = 1;

  for (let i = 0; i < length; i++) {
    for (let j = 1; j <= element; j++) {
      if (i - j >= 0) {
        sum += resultArray[i - j];
      }
    }
    resultArray.push(sum);
    sum = 0;
  }
  console.log(resultArray.join(" "));
}

lastKNumbersSequence(8, 2);
