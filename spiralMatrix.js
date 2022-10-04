function spiralMatrix (dem1, dem2) {
    let array = Array(dem1);
    let arrayMatrix = [];
    let arrayCounter = 1;
    let row = 0;
    let column = 0;
    let rowEnd = dem1 - 1;
    let columnEnd = dem2 -1;

    for (let i = 0; i < dem1; i++) {
        arrayMatrix.push(Array(dem1));
        for (let j = 0; j < dem2; j++) {
            arrayMatrix[i][j] = 0;
        }
    }
    
    for (let i = row; i <= rowEnd; i++) {
        arrayMatrix[row][i] = arrayCounter;
        arrayCounter++;
    }
    row++;

    for (let i = row; i <= columnEnd; i++) {
        arrayMatrix[i][columnEnd] = arrayCounter;
        arrayCounter++;
    }
    columnEnd--;

    for (let i = columnEnd; i >= column; i--) {
        arrayMatrix[rowEnd][i] = arrayCounter;
        arrayCounter++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= row; i--) {
        arrayMatrix[i][column] = arrayCounter;
        arrayCounter++;
    }    
    column++;

    console.log(arrayMatrix);
}

spiralMatrix(5, 5);