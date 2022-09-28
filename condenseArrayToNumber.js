function condenseArrayToNumber(arr) {
  let array = arr;

  if (array.length === 1) {
    console.log(array[0]);
  } else {
    while (array.length !== 2) {
      let newArray = [];
      for (let i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i] + array[i + 1];
      }
      array = newArray;
    }
    console.log(array[0] + array[1]);
  }
}

condenseArrayToNumber([1]);
