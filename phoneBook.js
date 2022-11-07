function phoneBook(arr) {
  let phoneBookObject = {};

  for (let i of arr) {
    let [name, phoneNumber] = i.split(" ");

    phoneBookObject[name] = phoneNumber;
  }

  for (let key in phoneBookObject) {
    console.log(`${key} -> ${phoneBookObject[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
