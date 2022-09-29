function equalSums(arr) {
  let array = arr;
  let sumLeft = 0;
  let sumRight = 0;
  let noSuchIndex = true;

  if (array.length === 1) {
    console.log(0);
  } else {
    for (let i = 1; i < array.length; i++) {
      sumLeft = 0;
      sumRight = 0;
      noSuchIndex = true;
      for (let h = 0; h < i; h++) {
        sumLeft += array[h];
      }
      for (let j = i + 1; j < array.length; j++) {
        sumRight += array[j];
      }
      if (sumLeft === sumRight) {
        console.log(i);
        break;
      } else {
        noSuchIndex = false;
      }
    }
    if (!noSuchIndex) console.log("no");
  }
}

equalSums([
  10, 5, 5, 99,

  3, 4, 2, 5, 1,

  1, 4,
]);
