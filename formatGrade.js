function formatGrade(grade) {
  let description = "";

  if (grade < 3.0) {
    description = "Fail";
    grade = 2;
  } else if (grade >= 3.0 && grade < 3.5) {
    description = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    description = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    description = "Very good";
  } else {
    description = "Excellent";
  }

  grade < 3
    ? console.log(`${description} (${grade})`)
    : console.log(`${description} (${grade.toFixed(2)})`);
}

formatGrade(2.99);
