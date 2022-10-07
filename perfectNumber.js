function perfectNumber(n) {
  const number = n;
  let sumDivisors = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) sumDivisors += i;
  }

  sumDivisors / 2 === number
    ? console.log("We have a perfect number!")
    : console.log("It's not so perfect.");

  //console.log(sumDivisors);
}

perfectNumber(1236498);
