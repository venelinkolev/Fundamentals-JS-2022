function bonusScoringSystem(arr) {
  let studentsNumber = Number(arr.shift());
  let numberLectures = Number(arr.shift());
  let bonus = Number(arr.shift());
  let attendanceArray = arr.map(Number);

  let maxBonus = 0;
  let maxAttended = 0;

  for (let i = 1; i <= studentsNumber; i++) {
    let current = attendanceArray[i - 1];
    let totalBonus = (current / numberLectures) * (5 + bonus);

    if (maxBonus < totalBonus) {
      maxBonus = totalBonus;
      maxAttended = current;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(
    maxBonus
  )}.\nThe student has attended ${maxAttended} lectures.
  `);

  //console.log(studentsNumber, numberLectures, bonus, attendanceArray);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
