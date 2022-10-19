function computerStore(arr) {
  let index = 0;
  let command = arr[index];
  index++;

  let total = 0;
  let finish = true;
  if (command === "special" || command === "regular") finish = false;

  while (finish) {
    command = Number(command);
    if (command < 0) {
      console.log("Invalid price!");
    } else {
      total += command;
    }

    command = arr[index];
    index++;
    if (command === "special" || command === "regular") finish = false;
  }
  let totalTax = total * 1.2;
  let tax = totalTax - total;
  if (total === 0) {
    console.log("Invalid order!");
  } else {
    if (command === "special") {
      totalTax = totalTax * 0.9;
      console.log(`Congratulations you've just bought a new computer!
  Price without taxes: ${total.toFixed(2)}$
  Taxes: ${tax.toFixed(2)}$
  -----------
  Total price: ${totalTax.toFixed(2)}$
  `);
    } else {
      console.log(`Congratulations you've just bought a new computer!
  Price without taxes: ${total.toFixed(2)}$
  Taxes: ${tax.toFixed(2)}$
  -----------
  Total price: ${totalTax.toFixed(2)}$
  `);
    }
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
computerStore(["regular"]);
