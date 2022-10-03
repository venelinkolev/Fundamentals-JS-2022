function orbit(arr) {
  const width = Number(arr[0]);
  const height = Number(arr[1]);
  const x = Number(arr[2]);
  const y = Number(arr[3]);
  const arrLength = height;
  let matrix = Array(arrLength);
  let counter = 1;

  for (let i = 0; i < arrLength; i++) {
    matrix[i] = [];
  }

  matrix[x][y] = counter;
  counter++;
  let zero = 0;
  let currentCounter = 0;
  let insideCounter = counter;
  for (let i = y + 1; i < arrLength; i++) {
    matrix[i][i] = insideCounter;
    matrix[currentCounter][i] = insideCounter;
    matrix[i][currentCounter] = insideCounter;
    matrix[zero][i] = insideCounter;
    matrix[i][zero] = insideCounter;
    insideCounter++;
    currentCounter++;
  }
  currentCounter = 0;
  insideCounter = counter;
  for (let i = y - 1; i >= 0; i--) {
    matrix[i][i] = insideCounter;
    matrix[currentCounter][i] = insideCounter;
    matrix[i][currentCounter] = insideCounter;
    matrix[zero][i] = insideCounter;
    matrix[i][zero] = insideCounter;
    insideCounter++;
    currentCounter++;
  }

  for (let i = 0; i < arrLength; i++) {
    console.log(matrix[i].join(" "));
    console.log("------");
  }
}

//orbit([4, 4, 0, 0]);

orbit([5, 5, 2, 2]);
