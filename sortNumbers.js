function sortNumbers(a, b, c) {
  //   const num1 = Number(input[0]);
  //   const num2 = Number(input[1]);
  //   const num3 = Number(input[2]);
  let temp = 0;
  let newStr = [a, b, c];

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[i] > newStr[j]) {
        temp = newStr[i];
        newStr[i] = newStr[j];
        newStr[j] = temp;
      }
    }
  }
  for (let n = 0; n < newStr.length; n++) {
    console.log(newStr[n]);
  }
}

sortNumbers(0, 0, 2);
