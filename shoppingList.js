function shoppingList(arr) {
  let listArray = arr.splice(0, 1).join().split("!");
  let commandArray = arr;

  let index = 0;
  let command = commandArray[index];
  index++;

  //console.log(listArray);
  while (command !== "Go Shopping!") {
    let currentCommand = command.split(" ");
    switch (currentCommand[0]) {
      case "Urgent":
        if (!listArray.includes(currentCommand[1]))
          listArray.unshift(currentCommand[1]);
        break;
      case "Unnecessary":
        if (listArray.includes(currentCommand[1]))
          listArray.splice(listArray.indexOf(currentCommand[1]), 1);
        break;
      case "Correct":
        if (listArray.includes(currentCommand[1]))
          listArray.splice(
            listArray.indexOf(currentCommand[1]),
            1,
            currentCommand[2]
          );
        break;
      case "Rearrange":
        let temp = "";
        if (listArray.includes(currentCommand[1])) {
          temp = listArray.splice(listArray.indexOf(currentCommand[1]), 1);
          listArray.push(temp);
        }
        break;
    }
    command = commandArray[index];
    index++;
  }

  console.log(listArray.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",

  "Unnecessary Milk",

  "Urgent Tomatoes",

  "Go Shopping!",
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
