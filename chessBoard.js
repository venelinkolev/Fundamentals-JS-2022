function chessBoard(n) {
  const size = n;
  let matrix = [];
  //let arrey = [];

  //   function createArrey() {
  //     for (let j = 0; j < size; j++) {
  //       arrey[j] = 0;
  //     }
  //     return arrey;
  //   }
  //   let test = createArrey();

  //   function createArrey() {
  //     for (let j = 0; j < size; j++) {
  //       arrey[j] = 0;
  //     }
  //     return arrey;
  //   }

  for (let i = 0; i < size; i++) {
    matrix[i] = Array(size);
  }

  //console.log(matrix);

  console.log('<div class="chessboard">');

  for (let i = 1; i < size + 1; i++) {
    if (i % 2 === 0) {
      for (let j = 1; j < size + 1; j++) {
        j % 2 === 0
          ? (matrix[i - 1][j - 1] = '    <span class="black"></span>')
          : (matrix[i - 1][j - 1] = '    <span class="white"></span>');
      }
    } else {
      for (let q = 1; q < size + 1; q++) {
        q % 2 === 0
          ? (matrix[i - 1][q - 1] = '    <span class="white"></span>')
          : (matrix[i - 1][q - 1] = '    <span class="black"></span>');
      }
    }
  }

  for (let h = 0; h < size; h++) {
    console.log("  <div>");
    for (let y = 0; y < size; y++) {
      console.log(matrix[h][y]);
    }
    console.log("  </div>");
  }
  console.log("</div>");
}
chessBoard(3);
