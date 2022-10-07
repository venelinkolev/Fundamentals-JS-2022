function numberModification(num) {
  let numberString = String(num);
  let array = [];
  let averageSumDigits = 0;

  for (let i = 0; i < numberString.length; i++) {
    array.push(numberString[i]);
  }

  let averageSum = (arr) => {
    let averageSum = 0;
    for (let i = 0; i < arr.length; i++) {
      averageSum += Number(arr[i]);
    }
    return averageSum / arr.length;
  };

  averageSumDigits = averageSum(array);
  while (averageSumDigits < 5) {
    array.push("9");
    averageSumDigits = averageSum(array);
  }

  console.log(array.join(""));
}

numberModification(5835);
