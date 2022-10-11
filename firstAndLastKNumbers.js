function firstAndLastKNumbers(arr) {
  let array = arr;
  let kElements = array.shift();

  let firstKElements = array.slice(0, kElements);
  let lastKElements = array.slice(array.length - kElements, array.length);

  console.log(firstKElements.join(" "), "\n", lastKElements.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
