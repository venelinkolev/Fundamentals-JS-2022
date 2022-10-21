function numbers(string) {
  let numbersArray = string.split(" ").map(Number);
  let avarageValue = 0;
  let length = numbersArray.length;
  let resultArray = [];

  for (let i = 0; i < length; i++) {
    avarageValue += numbersArray[i];
  }

  avarageValue /= length;

  for (let i = 0; i < length; i++) {
    if (numbersArray[i] > avarageValue) resultArray.push(numbersArray[i]);
  }

  resultArray = resultArray.sort((a, b) => b - a).splice(0, 5);

  if (length === 1 || resultArray.length === 0) {
    console.log("No");
  } else {
    //console.log(numbersArray, avarageValue, resultArray);
    console.log(resultArray.join(" "));
  }
}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1, 1");
numbers("-1 -2 -3 -4 -5 -6");
