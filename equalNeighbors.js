function equalNeighbors(arr) {
  const arrayMatrix = arr;
  let neighbor = 0;
  let length = arrayMatrix.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < arrayMatrix[i].length - 1; j++) {
      if (arrayMatrix[i][j] === arrayMatrix[i][j + 1]) neighbor++;
    }
    for (let k = 0; k < length - 1; k++) {
      if (arrayMatrix[k][i] === arrayMatrix[k + 1][i]) neighbor++;
    }
  }
  console.log(neighbor);
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);

equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
