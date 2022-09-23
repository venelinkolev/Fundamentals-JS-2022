function reverseString(s) {
  let string = s;
  let buffer = "";
  for (let i = string.length - 1; i >= 0; i--) {
    buffer += string[i];
  }
  console.log(buffer);
}

reverseString("SoftIni");
