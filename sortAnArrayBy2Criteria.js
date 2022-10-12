function sortAnArrayBy2Criteria(arr) {
  let array = arr;
  let resultArray = [];
  let temp = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      if (array[i].length > array[j].length) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].length === array[i + 1].length) {
      resultArray.push(array[i]);
      resultArray.push(array[i + 1]);
      resultArray.sort((a, b) => a.localeCompare(b));
      array[i] = resultArray[0];
      array[i + 1] = resultArray[1];
      resultArray = [];
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].length === array[i + 1].length) {
      resultArray.push(array[i]);
      resultArray.push(array[i + 1]);
      resultArray.sort((a, b) => a.localeCompare(b));
      array[i] = resultArray[0];
      array[i + 1] = resultArray[1];
      resultArray = [];
    }
  }

  //array.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
  console.log(array.join("\n"));
}

sortAnArrayBy2Criteria(["gamma", "beeta", "alpha", "beta", "gamma"]);
