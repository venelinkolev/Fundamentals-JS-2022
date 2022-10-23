function deckOfCards(arr) {
  let cardsList = arr.shift().split(", ");
  let numberCommands = Number(arr.shift());

  let commandArray = arr;

  for (let i = 0; i < numberCommands; i++) {
    let command = commandArray[i].split(", ");
    //console.log(command);
    switch (command[0]) {
      case "Add":
        if (cardsList.includes(command[1])) {
          console.log("Card is already in the deck");
        } else {
          cardsList.push(command[1]);
          console.log("Card successfully added");
        }
        break;
      case "Remove":
        if (!cardsList.includes(command[1])) {
          console.log("Card not found");
        } else {
          let indexRemove = cardsList.indexOf(command[1]);
          cardsList.splice(indexRemove, 1);
          console.log("Card successfully removed");
        }
        break;
      case "Remove At":
        let indexRemoveAt = Number(command[1]);
        if (indexRemoveAt >= 0 && indexRemoveAt < cardsList.length) {
          cardsList.splice(indexRemoveAt, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;
      case "Insert":
        let indexInsert = Number(command[1]);
        let insertCard = command[2];

        if (indexInsert >= 0 && indexInsert < cardsList.length) {
          if (cardsList.includes(insertCard)) {
            console.log("Card is already added");
          } else {
            cardsList.splice(indexInsert, 0, insertCard);
            console.log("Card successfully added");
          }
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }
  // "Card is already in the deck"
  // "Card successfully added"
  // "Card successfully removed"
  // "Card not found"
  // "Index out of range"
  // "Card is already added"

  console.log(cardsList.join(", "));
}

deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);
deckOfCards([
  "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
  "2",
  "Add, Two of Clubs",
  "Remove, Five of Hearts",
]);
deckOfCards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1",
]);
