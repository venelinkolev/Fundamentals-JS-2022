function amazingNumbers(n) {
  let number = n;
  number = number.toString();
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(
    sum.toString().includes("9")
      ? `${number} Amazing? True`
      : `${number} Amazing? False`
  );
}

amazingNumbers(1233);
