function mirrorWords(arr) {
  const pattern =
    /(@|#)(?<wordOne>[a-zA-Z]{3,})\1{2}(?<wordTwo>[a-zA-Z]{3,})\1/g;

  const reverseWord = (word) => {
    let buffer = '';
    for (let i = word.length - 1; i >= 0; i--) {
      buffer += word[i];
    }
    return buffer;
  };

  let finalMirrorWords = {};
  let text = arr.shift();
  let resultMatches = text.matchAll(pattern);
  let isMirrorWords = false;

  let counterPairs = 0;
  for (let i of resultMatches) {
    counterPairs++;
    let wordOne = i.groups.wordOne;
    let wordTwo = i.groups.wordTwo;
    let wordTwoReverse = reverseWord(i.groups.wordTwo);

    if (wordOne === wordTwoReverse) {
      isMirrorWords = true;
      finalMirrorWords[wordOne] = wordTwo;
    }
    //console.log(wordOne, wordTwo);
  }

  if (counterPairs === 0) {
    console.log(`No word pairs found!\nNo mirror words!`);
  } else if (counterPairs > 0 && isMirrorWords) {
    console.log(`${counterPairs} word pairs found!`);
    console.log('The mirror words are:');
  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
