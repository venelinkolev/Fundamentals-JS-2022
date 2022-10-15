function bunnyKill(arr) {
  let bunniesArray = arr;
  let coordinateArray = bunniesArray.pop().split(" ").join().split(",");
  let length = bunniesArray.length;
  let bunnyBombValue = 0;

  for (let i = 0; i < length; i++) {
    bunniesArray[i] = bunniesArray[i].split(" ");
  }

  for (let i = 0; i < coordinateArray.length; i += 2) {
    bunnyBombValue = bunniesArray[i][i + 1];
    console.log(bunnyBombValue);

    for (let j = 0; j < length; j++) {
      for (let k = 0; k < length; k++) {}
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
