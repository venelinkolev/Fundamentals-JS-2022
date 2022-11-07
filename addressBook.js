function addressBook(arr) {
  let addressBookObject = {};

  for (let i of arr) {
    let [name, addres] = i.split(":");

    addressBookObject[name] = addres;
  }

  let resultArray = Object.entries(addressBookObject).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let i of resultArray) {
    console.log(`${i[0]} -> ${i[1]}`);
  }

  //console.log(resultArray[0]);
}

addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
