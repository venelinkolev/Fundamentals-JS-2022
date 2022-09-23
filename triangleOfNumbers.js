function triangleOfNumbers(num) {
  const n = num;
  let buffer = "";
  for (let i = 1; i <= n; i++) {
    buffer = "";
    for (let j = 1; j < i; j++) {
      buffer += i + " ";
    }
    console.log((buffer += i + " "));
    //buffer = "";
  }
}

triangleOfNumbers(6);
