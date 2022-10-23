function manOWar(arr) {
  let pirateShip = arr.shift().split(">").map(Number);
  let warship = arr.shift().split(">").map(Number);
  let maxHealth = Number(arr.shift());

  let commandArray = arr;
  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "Retire") {
    let currentCommand = command.split(" ");
    let stop = false;

    switch (currentCommand[0]) {
      case "Fire":
        let indexFire = Number(currentCommand[1]);
        if (indexFire >= 0 && indexFire < warship.length) {
          warship[indexFire] -= Number(currentCommand[2]);
          if (warship[indexFire] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            stop = true;
            break;
          }
        }
        break;
      case "Defend":
        let startIndex = Number(currentCommand[1]);
        let endIndex = Number(currentCommand[2]);
        if ((startIndex >= 0 && startIndex < pirateShip.length) &&
        (endIndex >= 0 && endIndex < pirateShip.length)) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= Number(currentCommand[3]);
            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              stop = true;
              break;
            }
          }
        }
        break;
      case "Repair":
        let repairIndex = Number(currentCommand[1]);
        let repairHealth = Number(currentCommand[2]);
        if (repairIndex >= 0 && repairIndex < pirateShip.length) {
          pirateShip[repairIndex] += repairHealth;
          if (pirateShip[repairIndex] > maxHealth) pirateShip[repairIndex] = maxHealth;
        }
        break;
      case "Status":
        let needRepairValue = maxHealth * 0.2;
        let needRepairArray = pirateShip.filter(element => element < needRepairValue);
        console.log(`${needRepairArray.length} sections need repair.`);
        break;
    }

    if (stop) break;

    command = commandArray[index];
    index++;
  }

  let pirateShipSum = 0;
  let warshipSum = 0;

  for (let i = 0; i < pirateShip.length; i++) {
    pirateShipSum += pirateShip[i];
  }

  for (let i = 0; i < warship.length; i++) {
    warshipSum += warship[i];
  }

  if (command === "Retire") {
    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`);
  }
  //console.log(pirateShip, warship, maxHealth, commandArray);
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
console.log("------------------------------");
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
