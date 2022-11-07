function cardGame(arr) {
  let playersObject = {};

  let powerCard = (valueCards, type) => {
    let value = valueCards;
    switch (type) {
      case "S":
        value *= 4;
        break;
      case "H":
        value *= 3;
        break;
      case "D":
        value *= 2;
        break;
      case "C":
        value *= 1;
        break;
    }
    return value;
  };

  for (let i of arr) {
    let [player, card] = i.split(": ");

    card = card.split(", ");

    if (playersObject[player])
      playersObject[player] = playersObject[player].concat(card);
    else playersObject[player] = card;
  }

  for (let key in playersObject) {
    let currentPlayerCards = playersObject[key];
    let index = 0;

    while (index !== currentPlayerCards.length) {
      for (let i = index + 1; i < currentPlayerCards.length; i++) {
        if (currentPlayerCards[index] === currentPlayerCards[i]) {
          currentPlayerCards.splice(i, 1);
          i--;
        }
      }

      index++;
    }

    let valueCards = 0;
    for (let k = 0; k < currentPlayerCards.length; k++) {
      let firstChar = "";
      let secondChar = "";
      if (currentPlayerCards[k].length !== 3) {
        firstChar = currentPlayerCards[k][0];
        secondChar = currentPlayerCards[k][1];
      } else {
        firstChar = currentPlayerCards[k].slice(0, 2);
        secondChar = currentPlayerCards[k][2];
      }
      let currentValue = 0;

      if (Number(firstChar) >= 2 && Number(firstChar) <= 10) {
        currentValue = Number(firstChar);
        valueCards += powerCard(currentValue, secondChar);
      } else {
        if (firstChar === "J") {
          currentValue = 11;
          valueCards += powerCard(currentValue, secondChar);
        }
        if (firstChar === "Q") {
          currentValue = 12;
          valueCards += powerCard(currentValue, secondChar);
        }
        if (firstChar === "K") {
          currentValue = 13;
          valueCards += powerCard(currentValue, secondChar);
        }
        if (firstChar === "A") {
          currentValue = 14;
          valueCards += powerCard(currentValue, secondChar);
        }
      }
    }

    //currentPlayerCards.push(valueCards);

    playersObject[key] = valueCards;

    //console.log(currentPlayerCards);
  }

  for (let key in playersObject) {
    console.log(`${key}: ${playersObject[key]}`);
  }
  //console.log(playersObject);
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",

  "Tomas: 3H, 10S, JC, KD, 5S, 10S",

  "Andrea: QH, QC, QS, QD",

  "Tomas: 6H, 7S, KC, KD, 5S, 10C",

  "Andrea: QH, QC, JS, JD, JC",

  "Peter: JD, JD, JD, JD, JD, JD",
]);
cardGame([
  "John: 2C, 4H, 9H, AS, QS",

  "Slav: 3H, 10S, JC, KD, 5S, 10S",

  "Alex: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "Slav: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "Alex: 6H, 7S, KC, KD, 5S, 10C",

  "Thomas: QH, QC, JS, JD, JC",

  "John: JD, JD, JD, JD",
]);
