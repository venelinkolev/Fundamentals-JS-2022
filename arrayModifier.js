function arrayModifier(arr) {
  let resultArray = arr.shift().split(" ").map(Number);
  let commandArray = arr;

  let index = 0;
  let command = commandArray[index];
  index++;
  //console.log(resultArray, commandArray);
  while (command !== "end") {
    currentCommand = command.split(" ");
    switch (currentCommand[0]) {
      case "swap":
        let temp = resultArray[currentCommand[1]];
        resultArray[currentCommand[1]] = resultArray[currentCommand[2]];
        resultArray[currentCommand[2]] = temp;
        break;
      case "multiply":
        resultArray[currentCommand[1]] =
          resultArray[currentCommand[1]] * resultArray[currentCommand[2]];
        break;
      case "decrease":
        for (let i = 0; i < resultArray.length; i++) {
          resultArray[i] -= 1;
        }
        break;
    }

    command = commandArray[index];
    index++;
  }
  console.log(resultArray.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
