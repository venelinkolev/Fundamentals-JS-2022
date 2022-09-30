function tseamAccount(arr) {
  const array = arr;
  let accountPeter = array[0];
  array.shift();

  let newArray = separatedToSingleString(array, " ");
  let accountPeterArray = separated(accountPeter);

  function separated(array) {
    let startIndex = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        newArray.push(array.slice(startIndex, i));
        startIndex = i + 1;
      }
    }
    newArray.push(array.slice(startIndex, array.length));
    //console.log(newArray);
    return newArray;
  }

  function separatedToSingleString(array, char) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let currentElement = array[i];
      for (let j = 0; j < currentElement.length; j++) {
        if (currentElement[j] === char) {
          newArray.push(currentElement.slice(0, j));
          newArray.push(currentElement.slice(j + 1, currentElement.length));
        }
      }
    }
    newArray.push(array[array.length - 1]);
    return newArray;
  }

  function separatedStringToArray (string, char) {
    let newArray = [];
    // for (let i = 0; i < string.length; i++) {
    //   let currentElement = string[i];
      for (let j = 0; j < string.length; j++) {
        if (string[j] === char) {
          newArray.push(string.slice(0, j));
          newArray.push(string.slice(j + 1, string.length));
        }
      }
    //}
    //newArray.push(array[array.length - 1]);
    return newArray;
  }

  function removeElement(array, value) {
    return array.filter((element) => {
      return element !== value;
    });
  }

  let index = 0;

  let currentCommand = newArray[index];
  index++;

  while (currentCommand !== "Play!") {
    let game = newArray[index];
    //game = String(game);
    index++;
    switch (currentCommand) {
      case "Install":
        if (!accountPeterArray.includes(game)) accountPeterArray.push(game);
        break;
      case "Uninstall":
        if (accountPeterArray.includes(game))
          accountPeterArray = removeElement(accountPeterArray, game);
        break;
      case "Update":
        if (accountPeterArray.includes(game)) {
          accountPeterArray = removeElement(accountPeterArray, game);
          accountPeterArray.push(game);
        }
        break;
      case "Expansion":
        let exp = separatedStringToArray(game, "-");
        let expGame = exp[0];
        if ((accountPeterArray.includes(expGame))) {
          accountPeterArray.splice(
            accountPeterArray.indexOf(expGame) + 1,
            0,
            `${expGame}:${exp[1]}`
          );
        }
        break;
    }
    currentCommand = newArray[index];
    index++;
  }

  console.log(accountPeterArray.join(" "));
  //console.log(newArray);
}

tseamAccount([
  "CS WoW Diablo",

  "Install LoL",

  "Uninstall WoW",

  "Update Diablo",

  "Expansion CS-Go",

  "Play!",
]);

tseamAccount(['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!']);