function maxSequenceOfEqualElements(arr) {
  const array = arr;
  let leftArray = [];
  let rightArray = [];
  let tempArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j + 1]) {
        leftArray.push(array[i]);
        i++;
      } else {
        leftArray.push(array[j]);
        break;
      }
    }
    if (leftArray.length > rightArray.length) {
      rightArray = leftArray;
      tempArray = leftArray;
    }
    if (leftArray.length === rightArray.length) {
      rightArray = tempArray;
    }

    leftArray = [];
  }
  //   if (tempArray.length === rightArray.length) {
  //     console.log(tempArray);
  //   } else {
  console.log(rightArray.join(" "));
  //}
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
