function convertToObject(string) {
  let personObject = JSON.parse(string);

  //   for (let i of Object.keys(personObject)) {
  //     console.log(`${i}: ${personObject[i]}`);
  //   }

  for (let [i, j] of Object.entries(personObject)) {
    console.log(`${i}: ${j}`);
  }

  //console.log(personObject);
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
