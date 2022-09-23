function specialNumbers(n) {
  const number = n;
  let sum = 0;
  let string = "";
  for (let i = 1; i <= number; i++) {
    string = i.toString();
    sum = 0;
    for (let j = 0; j < string.length; j++) {
      sum += Number(string[j]);
    }
    if (sum == 5 || sum == 7 || sum == 11) console.log(`${i} -> True`);
    else console.log(`${i} -> False`);
    //console.log(i);
  }
}
specialNumbers(20);
