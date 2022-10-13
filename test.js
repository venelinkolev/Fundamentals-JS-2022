let base = 0;
function solve(b, increment) {
  base = b;
  //   console.log(base);
}
function transport(thickness) {
  thickness = Math.floor(thickness);
  console.log(thickness);
  console.log("Transporting and washing");
  return thickness;
}

solve(12.8, 1);
base = transport(base);
console.log(base);
//transport(base);

function bombNumbers(array1, array2) {
  let [bomb, power] = array2;
  while (array1.includes(bomb)) {
    array1.splice(Math.max(0, array1.indexOf(bomb) - power), power * 2 + 1);
  }
  console.log(array1.reduce((a, b) => a + b, 0));
}

function bombNumbers(bombField, bombArray) {
  let bombIndex = null;
  let power = bombArray[1];
  let sum = 0;
  let chargedBomb = bombField.includes(bombArray[0]);

  if (chargedBomb) {
    // IF there isn't special-bomb-number DO NOTHING
    while (chargedBomb) {
      //IF there is more than one bobs
      bombIndex = bombField.indexOf(bombArray[0]); //Index of special-bomb-number
      bombField.splice(bombIndex + 1, power); // Removing element on the right side of the bomb excluding bomb
      if (bombIndex - power < 0) {
        //IF bombs will deploy elements before 0;
        bombField.splice(0, bombIndex + 1); //  Removing all elements including bombIndex
      } else {
        bombField.splice(bombIndex - power, power + 1); // Starting index , power + bomb
      }
      chargedBomb = bombField.includes(bombArray[0]); // check for another bomb
    }
    for (let i = 0; i < bombField.length; i++) {
      sum += bombField[i];
    }
    console.log(sum);
  }
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
