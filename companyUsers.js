function companyUsers(arr) {
  let companyUsers = {};

  for (let i of arr) {
    let [company, user] = i.split(" -> ");

    if (companyUsers[company]) {
      let includeUser = companyUsers[company];
      if (!includeUser.includes(user)) companyUsers[company].push(user);
    } else {
      companyUsers[company] = [];
      companyUsers[company].push(user);
    }

    //console.log(company, user);
  }

  let resultArray = Object.entries(companyUsers).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let i of resultArray) {
    console.log(`${i[0]}`);
    for (let j of i[1]) {
      console.log(`-- ${j}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
