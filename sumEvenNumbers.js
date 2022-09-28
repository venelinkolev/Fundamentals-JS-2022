function sumEvenNumbers(arr) {
  let array = arr;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) sum += array[i];
  }

  console.log(sum);
}

sumEvenNumbers(["2", "4", "6", "8", "10"]);
