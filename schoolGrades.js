function schoolGrades(arr) {
  let studentObject = {};

  for (let i of arr) {
    let studentArray = i.split(" ");
    let studentName = studentArray.shift();
    let gradeArray = studentArray;

    // if (!studentObject.hasOwnProperty(studentName)) {
    //   for (let i of studentArray) {
    //     sumGrade += Number(i);
    //   }

    //   studentObject[studentName] = sumGrade / numberGrade;
    // } else {
    //   for (let i of studentArray) {
    //     sumGrade += Number(i);
    //   }
    //   let currentGrade = Number(studentObject[studentName]);
    //   studentObject[studentName] = (currentGrade + sumGrade / numberGrade) / 2;
    // }

    if (!studentObject.hasOwnProperty(studentName)) {
      studentObject[studentName] = gradeArray;
    } else {
      studentObject[studentName] =
        studentObject[studentName].concat(gradeArray);
    }
  }

  let resultArray = Object.entries(studentObject).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let i of resultArray) {
    let currentArray = i[1];
    let sumGrade = 0;
    let length = currentArray.length;
    for (let j = 0; j < length; j++) {
      sumGrade += Number(currentArray[j]);
    }
    i[1] = sumGrade / length;
  }

  //console.log(resultArray);
  for (let [student, grade] of resultArray) {
    console.log(`${student}: ${grade.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
