function dungeonestDark(arr) {
  let arrayString = arr.toString();
  let arrayRooms = [];
  let lastRoomStart = 0;

  for (let i = 0; i < arrayString.length; i++) {
    for (let j = i + 1; j < arrayString.length; j++) {
      if (arrayString[j] === "|") {
        lastRoomStart = j + 1;
        arrayRooms.push(arrayString.slice(i, j));
        i = j + 1;
      }
    }
  }
  arrayRooms.push(arrayString.slice(lastRoomStart, arrayString.length - 1));

  console.log(arrayRooms);
  console.log(lastRoomStart);
  console.log("-----------");
  let room1 = arrayString.slice(0, 6);
  console.log(room1);
  console.log(arrayString.indexOf("|"));
  console.log(arrayString.length);
  console.log(arrayString.charAt(0));
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
