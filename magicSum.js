function magicSum(arr, n) {
  const array = arr;
  const number = n;
  let currentPairs = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Number(array[i]) + Number(array[j]) === number) {
        currentPairs.push(array[i]);
        currentPairs.push(array[j]);
        console.log(currentPairs.join(" "));
        currentPairs = [];
      }
    }
  }
}
magicSum(
  [1, 2, 3, 4, 5, 6],

  6
);
