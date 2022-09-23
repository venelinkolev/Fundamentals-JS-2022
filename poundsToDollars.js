function poundsToDollars(n) {
  let number = Number(n);
  const dollars = 1.31;

  number *= dollars;
  console.log(number.toFixed(3));
}

poundsToDollars(80);
