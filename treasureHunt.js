function treasureHunt(arr) {
  let treasureArray = arr.shift().split("|");
  let commandArray = arr;
  let sumLength = 0;

  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "Yohoho!") {
    let currentCommand = command.split(" ");
    //console.log(currentCommand);
    switch (currentCommand[0]) {
      case "Loot":
        for (let i = 1; i < currentCommand.length; i++) {
          if (!treasureArray.includes(currentCommand[i])) {
            treasureArray.unshift(currentCommand[i]);
          }
        }
        break;
      case "Drop":
        let indexDrop = currentCommand[1];
        if (indexDrop >= 0 && indexDrop < treasureArray.length) {
          treasureArray.push(treasureArray.splice(indexDrop, 1).join());
        }
        break;
      case "Steal":
        //console.log(treasureArray);
        let steal = currentCommand[1];
        let stealArray = treasureArray.splice(-steal);
        console.log(stealArray.join(", "));
        break;
    }

    command = commandArray[index];
    index++;
  }

  for (let i = 0; i < treasureArray.length; i++) {
    sumLength += treasureArray[i].length;
  }

  if (treasureArray.length === 0) console.log("Failed treasure hunt.");
  else
    console.log(
      `Average treasure gain: ${(sumLength / treasureArray.length).toFixed(
        2
      )} pirate credits.`
    );
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
