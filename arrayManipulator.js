function arrayManipulator(array, commandArray) {
  let mainArray = array;
  resultArray = [];
  //let isSumPairs = false;

  for (let i = 0; i < commandArray.length; i++) {
    let currentCommand = commandArray[i].split(" ");

    switch (currentCommand[0]) {
      case "add":
        mainArray.splice(currentCommand[1], 0, Number(currentCommand[2]));
        break;
      case "addMany":
        for (let i = 2; i < currentCommand.length; i++) {
          mainArray.splice(
            currentCommand[1] + i - 2,
            0,
            Number(currentCommand[i])
          );
        }
        break;
      case "contains":
        if (mainArray.includes(Number(currentCommand[1]))) {
          console.log(mainArray.indexOf(Number(currentCommand[1])));
        } else {
          console.log("-1");
        }
        break;
      case "remove":
        mainArray.splice(currentCommand[1], 1);
        break;
      case "shift":
        for (let i = 0; i < currentCommand[1]; i++) {
          let element = mainArray.shift();
          mainArray.push(element);
        }
        break;
      case "sumPairs":
        //isSumPairs = true;
        for (let i = 0; i < mainArray.length; i += 2) {
          if (i === mainArray.length - 1) {
            resultArray.push(mainArray[i]);
          } else {
            resultArray.push(mainArray[i] + mainArray[i + 1]);
          }
        }
        //console.log(resultArray);
        mainArray = resultArray;
        resultArray = [];
        break;
      case "print":
        console.log(`[ ${mainArray.join(", ")} ]`);
        break;
    }
  }
  //console.log(currentCommand);
}

// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],

//   ["add 1 8", "contains 1", "contains 3", "print"]
// );

// arrayManipulator(
//   [1, 2, 3, 4, 5],

//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );

arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 3],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
