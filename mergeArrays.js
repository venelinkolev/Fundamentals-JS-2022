function mergeArrays(arr1, arr2) {
  const array1 = arr1;
  const array2 = arr2;

  let newArray = [];
  let buffer = "";

  for (let i = 1; i <= array1.length; i++) {
    if (i % 2 === 0) {
      newArray[i - 1] = array1[i - 1] + array2[i - 1];
    } else {
      newArray[i - 1] = Number(array1[i - 1]) + Number(array2[i - 1]);
    }
  }
  //console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    i === newArray.length - 1
      ? (buffer += newArray[i])
      : (buffer += newArray[i] + " - ");
  }
  console.log(buffer);
}

mergeArrays(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);
