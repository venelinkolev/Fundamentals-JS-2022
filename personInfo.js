function personInfo(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return person;
  //console.log(person.age, person.firstName, person.lastName);
}

personInfo(
  "Peter",

  "Pan",

  "20"
);
personInfo(
  "George",

  "Smith",

  "18"
);
