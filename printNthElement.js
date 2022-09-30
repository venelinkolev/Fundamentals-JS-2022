function printNthElement(arr) {
  const array = arr;
  const num = Number(array[array.length - 1]);
  let buffer = "";

  for (let i = 0; i < array.length - 1; i += num) {
    buffer += array[i] + " ";
  }
  console.log(buffer);
}

printNthElement(["dsa", "asd", "test", "test", "2"]);
