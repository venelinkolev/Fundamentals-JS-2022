function sumFirstAndLast(arr) {
  const array = arr;
  let firstArrElement = Number(array.shift());
  let lastArrElement = Number(array.pop());

  console.log(firstArrElement + lastArrElement);
}

sumFirstAndLast(["5", "10"]);
