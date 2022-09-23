function nextDay(a, b, c) {
  let year = a;
  let month = b;
  let day = c;

  let date = new Date(year, month - 1, day);
  //console.log(date);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  let newDate = new Date(`${year}-${month}-${day}`);
  //let newDate = new Data(currentDate);
  newDate.setDate(newDate.getDate() + 1);
  year = newDate.getFullYear();
  month = newDate.getMonth() + 1;
  day = newDate.getDate();
  //console.log(newDate);
  //if (month < 10) month = "0" + month;
  //if (day < 10) day = "0" + day;
  //console.log(newDate.toISOString());
  //const newDay = newDate.getDate();
  //console.log(currentDate.slice(0, 10));
  //console.log(currentDate.slice(0, 10));
  console.log(year + "-" + month + "-" + day);
}
nextDay(1, 1, 1);
