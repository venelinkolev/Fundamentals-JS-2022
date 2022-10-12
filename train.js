function train(arr) {
  let array = arr[0];
  const maxCapacity = Number(arr[1]);
  array = array.split(" ").map(Number);

  arr.shift();
  arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let resultArray = [];
    let command = "";
    let number = 0;

    resultArray = arr[i].split(" ");
    command = resultArray[0];
    number = resultArray[1];

    switch (command) {
      case "Add":
        array.push(number);
        break;
      default:
        for (let j = 0; j < array.length; j++) {
          command = Number(command);
          //console.log(command, typeof command);
          if (array[j] + command <= maxCapacity) {
            array[j] += command;
            break;
          }
        }
      //console.log(`${i} ${command}`);
    }
  }
  console.log(array.join(" "));
  //console.log(arr);
}

train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
