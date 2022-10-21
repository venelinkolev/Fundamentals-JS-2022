function shootForTheWin(arr) {
  let targets = arr.shift().split(" ").map(Number);
  let commandArray = arr;
  let length = targets.length;
  let shoots = 0;

  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "End") {
    command = Number(command);
    if (command < length) {
      if (targets[command] !== -1) {
        shoots++;
        let temp = targets[command];
        targets[command] = -1;

        for (let i = 0; i < length; i++) {
          if (targets[i] !== -1) {
            if (targets[i] > temp) targets[i] -= temp;
            else targets[i] += temp;
          }
        }
      }
    }

    command = commandArray[index];
    index++;
  }

  console.log(`Shot targets: ${shoots} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
