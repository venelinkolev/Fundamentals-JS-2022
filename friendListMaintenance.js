function friendListMaintenance(arr) {
  let friendsListArray = arr.shift().split(", ");
  let blackListedArray = [];
  let lostArray = [];

  let commandArray = arr;

  let index = 0;
  let command = commandArray[index];
  index++;

  while (command !== "Report") {
    let currentCommand = command.split(" ");

    switch (currentCommand[0]) {
      case "Blacklist":
        let name = currentCommand[1];
        if (!friendsListArray.includes(name)) {
          console.log(`${name} was not found.`);
        } else {
          friendsListArray[friendsListArray.indexOf(name)] = "Blacklisted";
          console.log(`${name} was blacklisted.`);
          blackListedArray.push(name);
        }
        break;
      case "Error":
        let indexError = currentCommand[1];
        if (indexError >= 0 && indexError < friendsListArray.length) {
          if (
            !(
              friendsListArray[indexError] === "Blacklisted" ||
              friendsListArray[indexError] === "Lost"
            )
          ) {
            console.log(
              `${friendsListArray[indexError]} was lost due to an error.`
            );
            lostArray.push(friendsListArray[indexError]);
            friendsListArray[indexError] = "Lost";
          }
        }
        break;
      case "Change":
        let indexChange = currentCommand[1];
        let newName = currentCommand[2];

        if (indexChange >= 0 && indexChange < friendsListArray.length) {
          let oldName = friendsListArray[indexChange];
          friendsListArray[indexChange] = newName;
          console.log(`${oldName} changed his username to ${newName}.`);
        }
        break;
    }

    command = commandArray[index];
    index++;
  }

  if (command === "Report") {
    console.log(
      `Blacklisted names: ${blackListedArray.length}\nLost names: ${lostArray.length}`
    );
    console.log(friendsListArray.join(" "));
  }
}

friendListMaintenance([
  "Mike, John, Eddie",
  "Blacklist Mike",
  "Error 0",
  "Report",
]);
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
friendListMaintenance([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
