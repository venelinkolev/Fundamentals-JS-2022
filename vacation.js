function vacation(a, b, c) {
  const people = a;
  const type = b;
  const day = c;

  let price = 0;

  switch (type) {
    case "Students":
      if (day === "Friday" && people >= 30) price = 0.85 * (people * 8.45);
      else if (day === "Friday") price = people * 8.45;

      if (day === "Saturday" && people >= 30) price = 0.85 * (people * 9.8);
      else if (day === "Saturday") price = people * 9.8;

      if (day === "Sunday" && people >= 30) price = 0.85 * (people * 10.46);
      else if (day === "Sunday") price = people * 10.46;
      break;
    case "Business":
      if (day === "Friday" && people >= 100) price = (people - 10) * 10.9;
      else if (day === "Friday") price = people * 10.9;
      if (day === "Saturday" && people >= 100) price = (people - 10) * 15.6;
      else if (day === "Saturday") price = people * 15.6;
      if (day === "Sunday" && people >= 100) price = (people - 10) * 16;
      else if (day === "Sunday") price = people * 16;
      break;
    case "Regular":
      if (day === "Friday" && people >= 10 && people <= 20)
        price = 0.95 * (people * 15);
      else if (day === "Friday") price = people * 15;
      if (day === "Saturday" && people >= 10 && people <= 20)
        price = 0.95 * (people * 20);
      else if (day === "Saturday") price = people * 20;
      if (day === "Sunday" && people >= 10 && people <= 20)
        price = 0.95 * (people * 22.5);
      else if (day === "Sunday") price = people * 22.5;
      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40, "Business", "Saturday");
