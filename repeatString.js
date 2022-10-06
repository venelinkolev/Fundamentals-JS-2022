function repeatString(string, number) {
  //console.log(string.repeat(number));

  let buffer = "";

  for (let i = 1; i <= number; i++) buffer += string;

  console.log(buffer);
}

repeatString("abc", 3);
