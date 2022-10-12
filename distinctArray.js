function distinctArray(arr) {
  let array = arr;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) array.splice(j, 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) array.splice(j, 1);
    }
  }

  console.log(array.join(" "));
}

distinctArray([
  20, 8, 12, 13, 4,

  4, 8, 5,
]);
