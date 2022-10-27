function employees(arr) {
  let employeesArray = arr;
  let length = employeesArray.length;

  let resultArray = [];

  for (let i = 0; i < length; i++) {
    let employer = {};
    let personalNumber = employeesArray[i].length;
    let currnetEmployer = employeesArray[i];

    employer.firstName = currnetEmployer;
    employer.personalNumber = personalNumber;

    resultArray.push(employer);
  }

  for (let i of resultArray) {
    console.log(`Name: ${i.firstName} -- Personal Number: ${i.personalNumber}`);
  }

  //console.log(resultArray);
}

employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
