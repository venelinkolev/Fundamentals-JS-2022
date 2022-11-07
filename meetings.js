function meetings(arr) {
  let meetingList = {};

  for (let i of arr) {
    let [day, name] = i.split(" ");

    if (!meetingList.hasOwnProperty(day)) {
      meetingList[day] = name;
      console.log(`Scheduled for ${day}`);
    } else console.log(`Conflict on ${day}!`);
  }

  for (let key in meetingList) console.log(`${key} -> ${meetingList[key]}`);
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
