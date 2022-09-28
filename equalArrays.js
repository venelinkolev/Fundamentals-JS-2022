function equalArrays(arr1, arr2) {
  const array1 = arr1;
  const array2 = arr2;

  let sumArray1 = 0;
  let sumArray2 = 0;

  for (let i = 0; i < array1.length; i++) {
    array1[i] = Number(array1[i]);
    sumArray1 += array1[i];
  }

  for (let i = 0; i < array2.length; i++) {
    array2[i] = Number(array2[i]);
    sumArray2 += array2[i];
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }

  if (sumArray1 === sumArray2) {
    console.log(`Arrays are identical. Sum: ${sumArray1}`);
  }
}

equalArrays(
  ["1", "2", "3", "4", "5"],

  ["1", "2", "4", "4", "5"]
);
