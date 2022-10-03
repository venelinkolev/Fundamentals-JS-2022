function diagonalAttack(arr) {
  const array = arr;
  const arrLength = array.length;
  let newArray = Array(arrLength);
  let printMatrix = Array(arrLength);
  let buffer = "";
  let string = "";
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arrLength; i++) {
    newArray[i] = [];
    printMatrix[i] = [];
  }

  for (let i = 0; i < arrLength; i++) {
    let startChar = 0;
    for (let j = 0; j < array[i].length; j++) {
      buffer = "";
      string = array[i];
      if (string[j] === " ") {
        buffer += string.slice(startChar, j);
        //newArray[i] = Array().push(string.slice(startChar, j));
        startChar = j + 1;
        newArray[i].push(Number(buffer));
      }
    }
    buffer += string.slice(startChar, array[i].length);
    newArray[i].push(Number(buffer));
    //console.log(buffer);
    //console.log(newArray);
  }

  //   for (let i = 0; i < arrLength; i++) {
  //     console.log(newArray[i]);
  //   }

  for (let i = 0; i < arrLength; i++) {
    leftDiagonalSum += newArray[i][i];
  }
  //console.log(leftDiagonalSum);

  let counter = 0;
  for (let i = arrLength - 1; i >= 0; i--) {
    rightDiagonalSum += newArray[i][counter];
    counter++;
  }
  //console.log(rightDiagonalSum);

  if (leftDiagonalSum !== rightDiagonalSum) {
    for (let i = 0; i < arrLength; i++) {
      console.log(newArray[i].join(" "));
    }
  } else {
    for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < arrLength; j++) {
        printMatrix[i][j] = leftDiagonalSum;
      }
    }
    for (let i = 0; i < arrLength; i++) {
      printMatrix[i][i] = newArray[i][i];
    }
    counter = 0;
    for (let i = arrLength - 1; i >= 0; i--) {
      printMatrix[i][counter] = newArray[i][counter];
      counter++;
    }

    for (let i = 0; i < arrLength; i++) {
      console.log(printMatrix[i].join(" "));
    }
  }
}

diagonalAttack([
  "5 3 12 3 1",

  "11 4 23 2 5",

  "101 12 3 21 10",

  "1 4 5 2 2",

  "5 22 33 11 1",
]);
