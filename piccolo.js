function piccolo(arr) {
  let parkingSet = new Set();

  for (let i of arr) {
    let [direction, currentCar] = i.split(", ");

    if (direction === "IN") parkingSet.add(currentCar);
    else parkingSet.delete(currentCar);
  }

  let resultArray = Array.from(parkingSet).sort((a, b) => a.localeCompare(b));

  if (resultArray.length === 0) console.log("Parking Lot is Empty");
  else console.log(resultArray.join("\n"));
}

piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
