function maxNumber(arr) {
  const array = arr;
  let buffer = "";
  let top = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (j === array.length - 1) {
        if (array[i] >= array[j]) {
          top = true;
          break;
        }
      } else {
        if (array[i] > array[j + 1]) {
          top = true;
        } else {
          top = false;
          break;
        }
      }
    }
    if (top) buffer += array[i] + " ";
    top = false;
  }
  console.log(buffer);
}

maxNumber([14, 24, 3, 19, 15, 17]);
