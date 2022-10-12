function houseParty(arr) {
  let currentArray = [];
  let resultNameArray = [];

  for (let i = 0; i < arr.length; i++) {
    currentArray = arr[i].split(" ");
    //console.log(currentArray);

    let name = currentArray[0];
    let command = currentArray[2];
    let index = 0;

    switch (command) {
      case "going!":
        !resultNameArray.includes(name)
          ? resultNameArray.push(name)
          : console.log(`${name} is already in the list!`);
        break;
      case "not":
        if (!resultNameArray.includes(name)) {
          console.log(`${name} is not in the list!`);
        } else {
          index = resultNameArray.indexOf(name);
          resultNameArray.splice(index, 1);
        }
        break;
    }
    //console.log(resultNameArray);
  }

  console.log(resultNameArray.join("\n"));
}

houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
