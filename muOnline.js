function muOnline(string) {
  const initialHealth = 100;
  let health = 100;
  let bitcoins = 0;
  let counterRoom = 0;
  let isDied = false;

  let commandArray = string.split("|");

  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== undefined) {
    let currentCommand = command.split(" ");
    counterRoom++;

    switch (currentCommand[0]) {
      case "potion":
        let currentHealth = Number(currentCommand[1]);
        if (health + currentHealth > initialHealth) {
          console.log(`You healed for ${initialHealth - health} hp.`);
          health = 100;
          console.log(`Current health: ${health} hp.`);
        } else {
          health += currentHealth;
          console.log(`You healed for ${currentHealth} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        bitcoins += Number(currentCommand[1]);
        console.log(`You found ${currentCommand[1]} bitcoins.`);
        break;
      default:
        health -= Number(currentCommand[1]);
        if (health > 0) {
          console.log(`You slayed ${currentCommand[0]}.`);
        } else {
          console.log(`You died! Killed by ${currentCommand[0]}.`);
          console.log(`Best room: ${counterRoom}`);
          isDied = true;
        }
    }
    if (isDied) break;

    command = commandArray[index];
    index++;
  }

  if (command === undefined) {
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
  }

  //console.log(commandArray);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
