function bunnyKill(arr) {
  let bunniesArray = arr;
  let coordinateArray = bunniesArray.pop().split(" ").join().split(",").map(Number);
  let length = bunniesArray.length;
  let bunnyBombValue = 0;
  let demage = 0;
  let bunniesKilled = 0;

  for (let i = 0; i < length; i++) {
    bunniesArray[i] = bunniesArray[i].split(" ").map(Number);
  }

  console.log(bunniesArray);

  for (let i = 0; i < coordinateArray.length; i += 2) {
    let coorX = coordinateArray[i];
    let coorY = coordinateArray[i + 1];
    console.log(coorX, coorY);

    bunnyBombValue = bunniesArray[coorX][coorY];
    console.log(bunnyBombValue);
    console.log(bunniesArray);

    if (coorX - 1 >= 0 && coorY - 1 >= 0) { 
    bunniesArray[coorX][coorY + 1] -= bunnyBombValue;
    bunniesArray[coorX][coorY - 1] -= bunnyBombValue;
    bunniesArray[coorX + 1][coorY] -= bunnyBombValue;
    bunniesArray[coorX - 1][coorY] -= bunnyBombValue;
    bunniesArray[coorX + 1][coorY + 1] -= bunnyBombValue;
    bunniesArray[coorX - 1][coorY - 1] -= bunnyBombValue;
    }
    console.log(bunniesArray);
 
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < length; k++) {

      }
    }
  }

  console.log(bunniesArray);
  console.log(coordinateArray);
}

bunnyKill([
  "5 10 15 20",

  "10 10 10 10",

  "10 15 10 10",

  "10 10 10 10",

  "2,2 0,1",
]);
