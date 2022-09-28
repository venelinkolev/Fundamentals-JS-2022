function addAndSubtract(arr) {
  let array = arr;
  let sumOldArray = 0;
  let sumNewArray = 0;

  for (let i = 0; i < array.length; i++) {
    sumOldArray += array[i];
    if (array[i] % 2 === 0) {
      array[i] = array[i] + i;
      sumNewArray += array[i];
    } else {
      array[i] = array[i] - i;
      sumNewArray += array[i];
    }
  }
  console.log(array);
  console.log(sumOldArray);
  console.log(sumNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
