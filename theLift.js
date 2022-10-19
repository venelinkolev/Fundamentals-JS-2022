function theLift(arr) {
  let numberPeople = Number(arr[0]);
  let wagonArray = arr[1].split(" ").map(Number);
  const maxPeople = 4;
  //console.log(wagonArray);
  //   for (let i = 0; i < arr[1].length; i++) {
  //     wagonArray.push(Number(arr[1].charAt(i)));
  //     }

  for (let i = 0; i < wagonArray.length; i++) {
    if (wagonArray[i] < maxPeople) {
      let peopleGet = 0;
      peopleGet = maxPeople - wagonArray[i];
      if (numberPeople < peopleGet) {
        wagonArray[i] += numberPeople;
        numberPeople = 0;
      } else {
        wagonArray[i] += peopleGet;
        numberPeople -= peopleGet;
      }
      if (numberPeople === 0) break;
    }
  }

  let wagonIsFull = Boolean;
  wagonArray.filter((element) => {
    if (element !== maxPeople) wagonIsFull = false;
    else wagonIsFull = true;
  });

  if (numberPeople === 0 && wagonIsFull) {
    console.log(wagonArray.join(" "));
  } else {
    if (numberPeople > 0) {
      console.log(
        `There isn't enough space! ${numberPeople} people in a queue!`
      );
      console.log(wagonArray.join(" "));
    } else {
      console.log(`The lift has empty spots!`);
      console.log(wagonArray.join(" "));
    }
  }
  //console.log(wagonArray, numberPeople);
}

theLift(["15", "0 0 0 0"]);
theLift(["20", "0 2 0"]);
