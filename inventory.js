function inventory(arr) {
  let inventoryArray = arr.shift().split(", ");
  let commandArray = arr;

  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "Craft!") {
    let currentCommand = command.split(" - ");
    let item = currentCommand[1];

    switch (currentCommand[0]) {
      case "Collect":
        if (!inventoryArray.includes(item)) {
          inventoryArray.push(item);
        }
        break;
      case "Drop":
        if (inventoryArray.includes(item)) {
          let indexDrop = inventoryArray.indexOf(item);
          inventoryArray.splice(indexDrop, 1);
        }
        break;
      case "Combine Items":
        let combineArray = item.split(":");
        let oldItem = combineArray[0];
        let newItem = combineArray[1];

        if (inventoryArray.includes(oldItem)) {
          let indexOldItem = inventoryArray.indexOf(oldItem);
          inventoryArray.splice(indexOldItem + 1, 0, newItem);
        }
        break;
      case "Renew":
        if (inventoryArray.includes(item)) {
          let indexRenew = inventoryArray.indexOf(item);
          let newPositionItem = inventoryArray.splice(indexRenew, 1);
          inventoryArray.push(newPositionItem);
        }
        break;
    }

    command = commandArray[index];
    index++;
  }

  console.log(inventoryArray.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
