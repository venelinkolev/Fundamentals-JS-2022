function plantDiscovery(arr) {
  let n = arr.shift();
  const plantObject = {};

  for (let i = 0; i < n; i++) {
    let currentPlant = arr.shift().split('<->');

    plantObject[currentPlant[0]] = {
      rarity: currentPlant[1],
      rating: [],
    };
  }
  let command = arr.shift();

  while (command !== 'Exhibition') {
    let currentCommand = command.split(': ');

    switch (currentCommand[0]) {
      case 'Rate':
        let [plant, rating] = currentCommand[1].split(' - ');
        if (plantObject[plant]) {
          plantObject[plant].rating.push(rating);
        } else {
          console.log('error');
        }

        break;
      case 'Update':
        let [plantUpdate, rarity] = currentCommand[1].split(' - ');
        if (plantObject[plantUpdate]) {
          plantObject[plantUpdate].rarity = rarity;
        } else {
          console.log('error');
        }
        break;
      case 'Reset':
        if (plantObject[currentCommand[1]]) {
          plantObject[currentCommand[1]].rating = [];
        } else {
          console.log('error');
        }
        break;
    }

    command = arr.shift();
  }
  console.log(`Plants for the exhibition:`);

  for (let key in plantObject) {
    let averageRating = 0;
    let currentRatingArray = plantObject[key].rating;
    if (currentRatingArray.length === 0) {
      averageRating = 0;
    } else {
      for (let i = 0; i < currentRatingArray.length; i++) {
        averageRating += Number(currentRatingArray[i]);
      }
      averageRating /= currentRatingArray.length;
    }
    console.log(
      `- ${key}; Rarity: ${
        plantObject[key].rarity
      }; Rating: ${averageRating.toFixed(2)}`
    );
  }
}

plantDiscovery([
  '4',

  'Arnoldii<->4',
  'Arnoldii<->9',

  'Woodii<->7',

  'Welwitschia<->2',

  'Rate: Woodii - 10',

  'Rate: Welwitschia - 7',

  'Rate: Arnoldii - 3',

  'Rate: Woodii - 5',

  'Update: Woodii - 5',

  'Reset: Arnoldii',
  'Rate: Ven - 10',

  'Exhibition',
]);
plantDiscovery([
  '2',

  'Candelabra<->10',

  'Oahu<->10',

  'Rate: Oahu - 7',

  'Rate: Candelabra - 6',

  'Exhibition',
]);
