function manOWar(arr) {
  let pitateShip = arr.shift().split(">").map(Number);
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
        let indexFire = currentCommand[1];
        if (indexFire >= 0 && indexFire < warship.length) {
          warship[indexFire] -= currentCommand[2];
          if (warship[indexFire] <= 0) {
            console.log(`"You won! The enemy ship has sunken."`);
            stop = true;
            break;
          }
        }
        break;
      case "Defend":
        break;
      case "Repair":
        break;
      case "Status":
        break;
    }

    if (stop) break;

    command = commandArray[index];
    index++;
  }

  console.log(pitateShip, warship, maxHealth, commandArray);
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
