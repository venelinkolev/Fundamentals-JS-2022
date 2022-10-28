function makeADictionary(arr) {
  let termsObject = [];
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    termsObject.push(Object.entries(JSON.parse(arr[i])));
  }

  for (let i = 0; i < termsObject.length; i++) {
    for (let j = i + 1; j < termsObject.length; j++) {
      if (termsObject[i][0][0] === termsObject[j][0][0]) {
        termsObject.splice(i, 1);
      }
    }
    resultArray.push(termsObject[i][0]);
  }

  //   for (let i = 0; i < termsObject.length; i++) {
  // }
  let sortArray = [];

  for (let i of resultArray) {
    sortArray.push(i[0]);
  }

  sortArray.sort();
  let finalArray = [];

  //console.log(resultArray[0][0]);

  for (let i = 0; i < sortArray.length; i++) {
    let indexSort = 0;
    while (indexSort !== resultArray.length) {
      if (sortArray[i] === resultArray[indexSort][0]) {
        finalArray.push(resultArray[indexSort]);
        resultArray.splice(indexSort, 1);
      }
      if (resultArray.length === 0) break;
      if (resultArray.length <= indexSort) break;
      indexSort++;
    }
  }

  function print(array) {
    let term = array[0];
    let definition = array[1];

    console.log(`Term: ${term} => Definition: ${definition}`);
  }

  for (let i of finalArray) {
    print(i);
  }
  //console.log(sortArray);
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Bus": "aaasssdd"}',
]);
