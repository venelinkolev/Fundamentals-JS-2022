function arrayManipulations(arr) {
  let array = arr[0];
  array = array.split(" ");
  //  console.log(array);

  arr.shift();
  let finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    let command = "";
    let numberFirst = 0;
    let numberIndex = 0;

    finalArray = arr[i].split(" ");

    command = finalArray[0];
    numberFirst = finalArray[1];
    if (command === "Insert") numberIndex = finalArray[2];
    switch (command) {
      case "Add":
        array.push(numberFirst);
        break;
      case "Remove":
        array = array.filter((element) => element !== numberFirst);
        break;
      case "RemoveAt":
        array.splice(numberFirst, 1);
        break;
      case "Insert":
        array.splice(numberIndex, 0, numberFirst);
        break;
    }
  }

  console.log(array.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]);
arrayManipulations([
  "6 12 2 65 6 42",

  "Add 8",

  "Remove 12",

  "RemoveAt 3",

  "Insert 6 2",
]);
