function printAndSum(m, n) {
  const min = m;
  const max = n;
  let sum = 0;
  let buffer = "";

  for (let i = min; i <= max; i++) {
    buffer += i + " ";
    sum += i;
  }
  console.log(buffer);
  console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);
