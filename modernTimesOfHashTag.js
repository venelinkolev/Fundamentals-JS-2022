function modernTimesOfHashTag(text) {
  //let index = text.indexOf('#');
  let textArray = text.split(' ');

  for (let i of textArray) {
    let word = i;
    if (word.startsWith('#')) {
      if (word.length > 1) {
        let isNotOnlyLetters = false;
        for (let j = 1; j < word.length; j++) {
          let char = word[j].toLowerCase();
          //console.log(char.charCodeAt());
          if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
            isNotOnlyLetters = true;
            break;
          }
        }
        if (!isNotOnlyLetters) {
          let currentWord = i.substring(1);
          console.log(currentWord);
        }
      }
    }
  }
}

modernTimesOfHashTag(
  'Nowadays everyone uses #23 to tag a #special word in #socialMedia'
);
modernTimesOfHashTag(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);
