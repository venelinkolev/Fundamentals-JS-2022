function division(n) {
  const num = n;
  if (
    num % 2 !== 0 &&
    num % 3 !== 0 &&
    num % 6 !== 0 &&
    num % 7 !== 0 &&
    num % 10 !== 0
  )
    console.log("Not divisible");
  else {
    if (
      num % 2 === 0 ||
      num % 3 === 0 ||
      num % 6 === 0 ||
      num % 7 === 0 ||
      num % 10 === 0
    ) {
      if (num % 10 === 0) console.log(`The number is divisible by 10`);
      else if (num % 7 === 0) console.log(`The number is divisible by 7`);
      else if (num % 6 === 0) console.log(`The number is divisible by 6`);
      else if (num % 3 === 0) console.log(`The number is divisible by 3`);
      else if (num % 2 === 0) console.log(`The number is divisible by 2`);
    }
  }
}

division(10);
