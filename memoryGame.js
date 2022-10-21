function memoryGame(arr) {
  let resultArray = arr.shift().split(" ");
  let counter = 0;
  let index = 0;
  let command = arr[index];
  index++;

  //console.log(resultArray);
  while (command !== "end") {
    counter++;
    let currentCommand = command.split(" ");

    if (
      currentCommand[0] < 0 ||
      currentCommand[0] > resultArray.length - 1 ||
      currentCommand[1] < 0 ||
      currentCommand[1] > resultArray.length - 1 ||
      currentCommand[0] === currentCommand[1]
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      resultArray.splice(
        resultArray.length / 2,
        0,
        `-${counter}a`,
        `-${counter}a`
      );
    } else {
      if (resultArray[currentCommand[0]] === resultArray[currentCommand[1]]) {
        console.log(
          `Congrats! You have found matching elements - ${
            resultArray[currentCommand[0]]
          }!`
        );
        if (currentCommand[0] > currentCommand[1]) {
          resultArray.splice(currentCommand[0], 1);
          resultArray.splice(currentCommand[1], 1);
        } else {
          resultArray.splice(currentCommand[1], 1);
          resultArray.splice(currentCommand[0], 1);
        }
      } else {
        console.log("Try again!");
      }
    }
    if (resultArray.length === 0) {
      console.log(`You have won in ${counter} turns!`);
      break;
    }

    command = arr[index];
    index++;
  }

  if (resultArray.length > 0 && command === "end") {
    console.log(`Sorry you lose :(
      ${resultArray.join(" ")}
      `);
  }

  //console.log(resultArray, arr);
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);

memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);

memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
