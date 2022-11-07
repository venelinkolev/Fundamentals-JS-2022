function partyTime(arr) {
  let guestListVIP = [];
  let guestListRegular = [];

  let command = arr.shift();

  while (command !== "PARTY") {
    let currentChar = Number(command[0]);
    //console.log(currentChar);
    if (!currentChar) guestListRegular.push(command);
    else guestListVIP.push(command);

    command = arr.shift();
  }

  for (let i of arr) {
    if (guestListRegular.includes(i))
      guestListRegular.splice(guestListRegular.indexOf(i), 1);
    else if (guestListVIP.includes(i))
      guestListVIP.splice(guestListVIP.indexOf(i), 1);
  }

  let resultArray = guestListVIP.concat(guestListRegular);

  console.log(resultArray.length);
  for (let i of resultArray) {
    console.log(i);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
