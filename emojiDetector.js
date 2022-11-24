function emojiDetector(arr) {
  let patternDigit = /\d/g;

  let sumDigits = 1;
  //let digit = patternDigit.exec(arr.shift());
  let digit = arr[0].match(patternDigit);
  for (let i of digit) {
    sumDigits *= Number(i);
  }
  console.log(`Cool threshold: ${sumDigits}`);

  let patternEmoji = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
  let counterEmoji = 0;
  let resultEmoji = arr[0].matchAll(patternEmoji);
  let resultEmojiArray = [];

  for (let i of resultEmoji) {
    let sumCharCode = 0;
    counterEmoji++;

    let currentEmoji = i.groups.emoji;

    for (let i = 0; i < currentEmoji.length; i++) {
      sumCharCode += currentEmoji[i].charCodeAt();
    }
    if (sumCharCode > sumDigits) {
      resultEmojiArray.push(i[0]);
    }

    //console.log(sumCharCode);
  }

  console.log(`${counterEmoji} emojis found in the text. The cool ones are:`);
  for (let i of resultEmojiArray) {
    console.log(i);
  }

  //   console.log(counterEmoji);
  //   console.log(resultEmojiArray);
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
emojiDetector([
  '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink::**Vali** ::valid_emoji::',
]);
