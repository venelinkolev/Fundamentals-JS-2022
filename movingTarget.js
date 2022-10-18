function movingTarget(arr) {
  let targetArray = arr.shift().split(" ").map(Number);
  let commandArray = arr;

  //console.log(targetArray);
  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "End") {
    let currentCommand = command.split(" ");

    switch (currentCommand[0]) {
      case "Shoot":
        if (targetArray[currentCommand[1]] !== undefined) {
          targetArray[currentCommand[1]] -= Number(currentCommand[2]);
          if (targetArray[currentCommand[1]] <= 0)
            targetArray.splice(currentCommand[1], 1);
        }
        break;
      case "Add":
        if (targetArray[currentCommand[1]] !== undefined) {
          targetArray.splice(currentCommand[1], 0, currentCommand[2]);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        if (Number(currentCommand[1]) - Number(currentCommand[2]) >= 0) {
          targetArray.splice(
            Number(currentCommand[1]) - Number(currentCommand[2]),
            2 * Number(currentCommand[2]) + 1
          );
        } else {
          console.log("Strike missed!");
        }
        break;
    }

    command = commandArray[index];
    index++;
  }
  console.log(targetArray.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",

  "Shoot 5 10",

  "Shoot 1 80",

  "Strike 2 1",

  "Add 22 3",

  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
