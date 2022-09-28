function commonElements(arr1, arr2) {
  const array1 = arr1;
  const array2 = arr2;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) console.log(array1[i]);
    }
  }
}

commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],

  ["s", "o", "c", "i", "a", "l"]
);
