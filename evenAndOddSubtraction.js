function evenAndOddSubtraction(arr) {
  const array = arr;

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? (sumEven += array[i]) : (sumOdd += array[i]);
  }
  console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([3, 5, 7, 9]);
