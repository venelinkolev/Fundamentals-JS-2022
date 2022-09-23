function requiredReading(a, b, c) {
  const numberPage = Number(a);
  const readPageHour = Number(b);
  const daysReadBook = Number(c);

  let hoursPerDay = numberPage / readPageHour / daysReadBook;

  console.log(hoursPerDay);
}

requiredReading(
  432,

  15,

  4
);
