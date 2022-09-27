function primeNumberChecker(n) {
  const number = Number(n);
  let prime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) prime = false;
  }
  prime ? console.log("true") : console.log("false");
}

primeNumberChecker(7);
