function thePianist(arr) {
  let n = arr.shift();
  const pieceList = {};

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = arr.shift().split('|');
    pieceList[piece] = [];
    let pieceInfo = pieceList[piece];
    pieceInfo.push(composer, key);
  }

  let command = arr.shift();

  while (command !== 'Stop') {
    let currentCommandArray = command.split('|');

    switch (currentCommandArray[0]) {
      case 'Add':
        if (pieceList.hasOwnProperty(currentCommandArray[1])) {
          console.log(
            `${currentCommandArray[1]} is already in the collection!`
          );
        } else {
          pieceList[currentCommandArray[1]] = [];
          pieceInfo = pieceList[currentCommandArray[1]];
          pieceInfo.push(currentCommandArray[2], currentCommandArray[3]);
          console.log(
            `${currentCommandArray[1]} by ${currentCommandArray[2]} in ${currentCommandArray[3]} added to the collection!`
          );
        }
        break;
      case 'Remove':
        if (pieceList.hasOwnProperty(currentCommandArray[1])) {
          delete pieceList[currentCommandArray[1]];
          console.log(`Successfully removed ${currentCommandArray[1]}!`);
        } else {
          console.log(
            `Invalid operation! ${currentCommandArray[1]} does not exist in the collection.`
          );
        }
        break;
      case 'ChangeKey':
        if (pieceList.hasOwnProperty(currentCommandArray[1])) {
          pieceInfo = pieceList[currentCommandArray[1]];
          pieceInfo.pop();
          pieceInfo.push(currentCommandArray[2]);
          console.log(
            `Changed the key of ${currentCommandArray[1]} to ${currentCommandArray[2]}!`
          );
        } else {
          console.log(
            `Invalid operation! ${currentCommandArray[1]} does not exist in the collection.`
          );
        }
        break;
    }

    //console.log(currentCommandArray);
    command = arr.shift();
  }

  let finalResultArray = Object.entries(pieceList);

  for (let i of finalResultArray) {
    let piece = i[0];
    let composer = i[1][0];
    let key = i[1][1];

    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
  }

  //console.log(finalResultArray);
}

thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop',
]);
