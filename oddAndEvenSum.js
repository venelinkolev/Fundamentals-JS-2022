function oddAndEvenSum(num) {
  function numberToDigits(num) {
    let number = String(num);
    let array = [];

    for (let i = 0; i < number.length; i++) {
      array.push(Number(number[i]));
    }

    return array;
  }

  let arrayDigits = numberToDigits(num);
  sumEvenAndSumOdd(arrayDigits);

  function sumEvenAndSumOdd(array) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEven += array[i];
      } else {
        sumOdd += array[i];
      }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
  }

  //console.log(arrayDigits);
}

oddAndEvenSum(3495892137259234);
