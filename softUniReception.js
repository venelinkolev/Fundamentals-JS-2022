function softUniReception(arr) {
  let numberStudent = Number(arr.pop());
  let employeeArray = arr.map(Number);

  let breakHours = 0;
  let hours = 0;
  let studentsPerHour = employeeArray[0] + employeeArray[1] + employeeArray[2];

  while (numberStudent !== 0) {
    if (numberStudent - studentsPerHour >= 0) {
      numberStudent -= studentsPerHour;
      hours++;
      if (numberStudent === 0) break;
    } else {
      numberStudent = 0;
      hours++;
      break;
    }
    if (hours % 3 === 0) breakHours++;
  }
  console.log(`Time needed: ${hours + breakHours}h.`);
}

softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
