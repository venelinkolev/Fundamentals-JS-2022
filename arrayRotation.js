function arrayRotation(arr, n) {
  let array = arr;
  const rotations = n;
  let countRotations = 0;

  while (countRotations !== rotations) {
    for (let i = 0; i < array.length - 1; i++) {
      let temp = 0;
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
    countRotations++;
  }
  console.log(array.join(" "));
}

arrayRotation([2, 4, 15, 31], 5);
