function magicMatrices(arr) {
  const arrayMatrix = arr;
  const arrayLength = arrayMatrix.length;
  let isMagic = true;
  let sumNumber = [];

  for (let i = 0; i < arrayLength; i++) {
    let sumRow = 0;
    let sumColum = 0;
    for (let j = 0; j < arrayLength; j++) {
      sumRow += arrayMatrix[i][j];
      sumColum += arrayMatrix[j][i];
     //console.log(sumColum, "----", sumRow);
      //console.log("--------");
    }
    sumNumber.push(sumColum);
    sumNumber.push(sumRow);
    // if (sumColum !== sumNumber || sumRow !== sumNumber) {
    //   isMagic = false;
    //   break;
    // }
    //console.log(sumColum, "----", sumRow);
    //console.log("--------");

    // if (sumColum !== sumRow) {
    //   isMagic = false;
    //   break;
    // }
  }
  //console.log(sumNumber);
  let temp = sumNumber[0];
  sumNumber.filter((element) => {
    if (element !== temp) {
      isMagic = false;
    }
    return isMagic;
  });
  //console.log(secondCheck);
  isMagic ? console.log(isMagic) : console.log(isMagic);
}
magicMatrices([
  [1, 1, 1],
  [1, 2, 1],
  [1, 1, 1],
]);

magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);

magicMatrices([
  [4, 5, 6],

  [6, 5, 4],

  [5, 5, 5],
]);

magicMatrices([
  [0, 0, 0],

  [0, 0, 0],

  [0, 0, 0],
]);

magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
