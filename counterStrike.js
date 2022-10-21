function counterStrike(arr) {
  let energy = Number(arr.shift());
  const commandArray = arr;
  let win = 0;

  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "End of battle") {
    command = Number(command);
    if (command > energy) {
      console.log(
        `Not enough energy! Game ends with ${win} won battles and ${energy} energy`
      );
      break;
    } else {
      energy -= command;
      win++;
    }

    if (win % 3 === 0) energy += win;

    command = commandArray[index];
    index++;
  }

  if (command === "End of battle")
    console.log(`Won battles: ${win}. Energy left: ${energy}`);
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
