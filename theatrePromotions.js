function theatrePromotions(a, b) {
  const typeOfDay = a;
  const age = b;
  let ticketPrice = 0;
  if (age < 0 || age > 122) console.log("Error!");
  else {
    switch (typeOfDay) {
      case "Weekday":
        if (age > 18 && age <= 64) ticketPrice = 18;
        else ticketPrice = 12;
        break;
      case "Weekend":
        if (age > 18 && age <= 64) ticketPrice = 20;
        else ticketPrice = 15;
        break;
      case "Holiday":
        if (age >= 0 && age <= 18) ticketPrice = 5;
        else if (age > 18 && age <= 64) ticketPrice = 12;
        else ticketPrice = 10;
        break;
    }
    console.log(ticketPrice + "$");
  }
}

theatrePromotions("Holiday", 15);
