function sumDigits(n) {
  let number = n;
  number = String(number);
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }

  console.log(sum);
}
sumDigits(543);
