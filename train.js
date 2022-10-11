function train(arr) {
  let array = arr[0];
  array = array.split(" ").map(Number);

  arr.shift();
  arr.shift();

  const maxCapacity = arr[1];

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
          if (array[i] + command <= maxCapacity) array[i] += Number(command);
        }
    }
  }
  console.log(array);
  console.log(arr);
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
