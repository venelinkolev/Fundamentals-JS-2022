function palindromeIntegers(arr) {
  const array = arr;

  for (let i = 0; i < array.length; i++) {
    palidrome(String(array[i]));
  }

  function palidrome(string) {
    let isPalindrom = true;
    let centerLength = string.length / 2;

    if (string.length === 1) {
      console.log(isPalindrom);
      return;
    }
    if (string.length === 2) {
      if (string[0] === string[1]) {
        console.log(isPalindrom);
        return;
      } else {
        isPalindrom = false;
        console.log(isPalindrom);
        return;
      }
    }

    for (let i = 0; i < Math.floor(centerLength); i++) {
      if (string[i] !== string[string.length - i - 1]) {
        isPalindrom = false;
        break;
      }
    }
    console.log(isPalindrom);
  }
}

palindromeIntegers([32, 2, 232, 1010]);
