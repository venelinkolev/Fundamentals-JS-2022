function integerAndFloat(a, b, c) {
  const num1 = a;
  const num2 = b;
  const num3 = c;

  let sum = num1 + num2 + num3;

  console.log(sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`);
}

integerAndFloat(100, 200, 303);
