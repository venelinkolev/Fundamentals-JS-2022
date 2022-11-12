function pascalCaseSplitter(string) {
  let resultArray = [];
  let index = 0;

  for (let i = 1; i < string.length; i++) {
    let char = string[i];
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      resultArray.push(string.substring(index, i));
      index = i;
    }
  }
  resultArray.push(string.substring(index));

  console.log(resultArray.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
