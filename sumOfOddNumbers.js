function sumOfOddNumbers(n) {
  const num = n;
  let sum = 0;
  let counter = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      sum += i;
      counter++;
    }
    if (counter == num) break;
  }

  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);
