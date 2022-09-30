function dungeonestDark(arr) {
  let arrayString = arr.toString();
  let arrayRooms = [];
  let lastRoomStart = 0;
  let arrayRoomsArray = [];

  const initialHealth = 100;
  let health = 100;
  let initialCoins = 0;

  for (let i = 0; i < arrayString.length; i++) {
    for (let j = i + 1; j < arrayString.length; j++) {
      if (arrayString[j] === "|") {
        lastRoomStart = j + 1;
        arrayRooms.push(arrayString.slice(i, j));
        i = j + 1;
      }
    }
  }

  arrayRooms.push(arrayString.slice(lastRoomStart, arrayString.length));

  //   console.log(arrayRooms);
  //   console.log(lastRoomStart);
  //   console.log("-----------");

  for (let i = 0; i < arrayRooms.length; i++) {
    let currentElement = arrayRooms[i];
    for (let j = 0; j < currentElement.length; j++) {
      if (currentElement[j] === " ") {
        arrayRoomsArray.push(currentElement.slice(0, j));
        arrayRoomsArray.push(
          currentElement.slice(j + 1, currentElement.length)
        );
      }
    }
  }
  arrayRoomsArray.push("END");

  //   console.log(arrayRoomsArray);
  //   console.log("---------");

  let index = 0;
  let counter = 0;

  let currentRoomContains = arrayRoomsArray[index];
  index++;

  let currentRoomNumber = Number(arrayRoomsArray[index]);
  index++;

  while (currentRoomContains !== "END") {
    counter++;
    switch (currentRoomContains) {
      case "potion":
        health += currentRoomNumber;
        if (health > initialHealth) {
          console.log(
            `You healed for ${currentRoomNumber - (health - initialHealth)} hp.`
          );
          health = initialHealth;
          console.log(`Current health: ${health} hp.`);
        } else {
          console.log(`You healed for ${currentRoomNumber} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        initialCoins += currentRoomNumber;
        console.log(`You found ${currentRoomNumber} coins.`);
        break;
      default:
        health -= currentRoomNumber;
        if (health > 0) {
          console.log(`You slayed ${currentRoomContains}.`);
        } else {
          console.log(`You died! Killed by ${currentRoomContains}.`);
          console.log(`Best room: ${counter}`);
        }
    }
    if (health < 1) break;
    currentRoomContains = arrayRoomsArray[index];
    index++;

    currentRoomNumber = Number(arrayRoomsArray[index]);
    index++;
  }

  if (currentRoomContains === "END") {
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${health}`);
  }
  // let room1 = arrayString.slice(0, 6);
  // console.log(room1);
  // console.log(arrayString.indexOf("|"));
  // console.log(arrayString.length);
  // console.log(arrayString.charAt(0));
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
