function flightSchedule(arr) {
  //   let flightList = arr[0];
  //   let changedStatuses = arr[1];
  //   let flightStatus = arr[2];

  let [flightList, changedStatuses, flightStatus] = arr;
  let flightObject = {};

  for (let i of flightList) {
    let currentFlight = i.split(" ");
    //flightObject[currentFlight[0]] = currentFlight[1];

    flightObject.numberFlight = currentFlight[0];
    flightObject.destination = currentFlight[1];
    flightObject.status = "Ready to fly";
    console.log(flightObject);
  }
}

flightSchedule([
  [
    "WN269 Delaware",

    "FL2269 Oregon",

    "WN498 Las Vegas",

    "WN3145 Ohio",

    "WN612 Alabama",

    "WN4010 New York",

    "WN1173 California",

    "DL2120 Texas",

    "KL5744 Illinois",

    "WN678 Pennsylvania",
  ],

  [
    "DL2120 Cancelled",

    "WN612 Cancelled",

    "WN1173 Cancelled",

    "SK430 Cancelled",
  ],

  ["Cancelled"],
]);
