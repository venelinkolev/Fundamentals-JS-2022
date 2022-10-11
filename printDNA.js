function printDNA(num) {
  const number = num;

  //ATCGTTAGGG
  const element = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  let resultArray = Array(6);

  let index = 0;
  let length = resultArray.length / 2;
  let rotate = 0;

  while (rotate !== number) {
    resultArray.fill("*", 0, 6);
    for (let i = 0; i < length; i++) {
      for (let j = index; j < index + 1; j++) {
        resultArray[2 - i] = element[j];
        resultArray[i + 3] = element[j + 1];
        rotate++;
        console.log(resultArray.join(""));
        resultArray[2 - i] = "-";
        resultArray[i + 3] = "-";
      }
      index += 2;
      if (index === element.length) index = 0;
      if (rotate === number) break;
    }
    if (rotate !== number) {
      resultArray[0] = "*";
      resultArray[5] = "*";
      resultArray[1] = element[index];
      resultArray[4] = element[index + 1];
      rotate++;
      console.log(resultArray.join(""));

      index += 2;
      if (index === element.length) index = 0;
    }
  }

  //console.log(resultArray);
}

printDNA(10);
