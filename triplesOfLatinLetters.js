function triplesOfLatinLetters(n) {
  const number = Number(n);
  //   let buffer;
  //   let string = String.fromCharCode(96 + number);
  //   console.log(typeof number);
  //   console.log(string);

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      for (let h = 1; h <= number; h++) {
        let char1 = String.fromCharCode(96 + i);
        let char2 = String.fromCharCode(96 + j);
        let char3 = String.fromCharCode(96 + h);
        console.log(char1 + char2 + char3);
      }
    }
  }
}

triplesOfLatinLetters("2");
