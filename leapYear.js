function leapYear(y) {
  const year = y;
  if (year % 4 === 0) {
    if (year % 400 === 0 && year % 100 === 0) {
      if (year % 400 === 0) console.log("yes");
      else if (year % 100 !== 0) console.log("no");
    } else if (year % 100 !== 0) console.log("yes");
    else console.log("no");
  } else console.log("no");
}
leapYear(1900);
