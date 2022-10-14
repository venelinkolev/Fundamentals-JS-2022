function searchForANumber(arrOne, arrTwo) {
  let startArray = arrOne;
  let commandArray = arrTwo;

  let resultArray = [];
  let serchElement = false;
  let counter = 0;

  resultArray = startArray.slice(0, commandArray[0]);
  resultArray.splice(0, commandArray[1]);
  serchElement = resultArray.includes(commandArray[2]);

  if (serchElement) {
    for (let i of resultArray) {
      if (i === commandArray[2]) counter++;
    }
    console.log(`Number ${commandArray[2]} occurs ${counter} times.`);
  } else {
    console.log(`Number ${commandArray[2]} occurs ${counter} times.`);
  }
  //console.log(resultArray, serchElement);
}

searchForANumber(
  [7, 1, 5, 8, 2, 7],

  [3, 1, 5]
);
