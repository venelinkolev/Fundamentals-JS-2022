function nXNMatrix(n) {
  const number = n;
  let matrix = Array(number);

  for (let i = 0; i < number; i++) {
    matrix[i] = Array(number);
  }

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      matrix[i][j] = number;
    }
  }

  for (let i = 0; i < number; i++) {
    console.log(matrix[i].join(" "));
  }
}

nXNMatrix(3);
