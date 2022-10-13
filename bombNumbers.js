function bombNumbers(arrOne, arrTwo) {
  let targetArray = arrOne;
  let bombArray = arrTwo;
  let sum = 0;

  let bombNumber = bombArray[0];
  let detonationNumber = bombArray[1];
  let index = 0;

  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === bombNumber) {
      index = i;

      targetArray.splice(index + 1, detonationNumber);

      if (index - detonationNumber < 0) {
        targetArray.splice(0, index + 1);
      } else {
        targetArray.splice(index - detonationNumber, detonationNumber + 1);
      }
      i = 0;
    }
  }

  for (let i of targetArray) {
    sum += i;
  }

  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2], [2, 3]);
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
