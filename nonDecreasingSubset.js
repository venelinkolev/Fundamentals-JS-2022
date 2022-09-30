function nonDecreasingSubset(arr) {
  const array = arr;
  let newArray = [];
  newArray.push(array[0]);
  let temp = newArray[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] >= temp) {
      newArray.push(array[i + 1]);
      temp = array[i + 1];
    }
  }

  //   newArray = array.filter((number) => {
  //     number = String(number);
  //     number > array[array.indexOf(number) + 1];
  //   });
  console.log(newArray.join(" "));
}

nonDecreasingSubset([1, 2, 3, 4]);
