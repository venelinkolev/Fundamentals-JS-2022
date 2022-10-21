function heartDelivery(arr) {
  let houseArrey = arr.shift().split("@").map(Number);
  let commandArray = arr;
  let length = houseArrey.length;

  let index = 0;
  let command = commandArray[index];
  index++;
  let currentIndex = 0;

  //console.log(houseArrey, commandArray);
  while (command !== "Love!") {
    let currentCommand = command.split(" ");
    let jump = Number(currentCommand[1]);

    currentIndex += jump;
    if (currentIndex < length) {
      if (houseArrey[currentIndex] === 0)
        console.log(`Place ${currentIndex} already had Valentine's day.`);
      else {
        houseArrey[currentIndex] -= 2;
        if (houseArrey[currentIndex] === 0)
          console.log(`Place ${currentIndex} has Valentine's day.`);
      }
    } else {
      currentIndex = 0;
      if (houseArrey[currentIndex] === 0)
        console.log(`Place ${currentIndex} already had Valentine's day.`);
      else {
        houseArrey[currentIndex] -= 2;
        if (houseArrey[currentIndex] === 0)
          console.log(`Place ${currentIndex} has Valentine's day.`);
      }
    }

    command = commandArray[index];
    index++;
  }

  let resultArray = houseArrey.filter((element) => element !== 0);

  //console.log(houseArrey);
  if (resultArray.length !== 0) {
    console.log(`Cupid's last position was ${currentIndex}.`);
    console.log(`Cupid has failed ${resultArray.length} places.`);
  } else {
    console.log(`Cupid's last position was ${currentIndex}.`);
    console.log("Mission was successful.");
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
