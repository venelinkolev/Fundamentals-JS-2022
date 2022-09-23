function login(input) {
  let index = 0;

  const userName = input[index];
  index++;

  let revStr = reverseString(userName);

  let current = input[index];
  index++;

  let counter = 0;

  while (current !== revStr) {
    if (current !== revStr) {
      if (counter === 3) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
      counter++;
    }

    current = input[index];
    index++;
  }
  if (current === revStr) {
    console.log(`User ${userName} logged in.`);
  }
  function reverseString(s) {
    let newString = "";
    for (let i = s.length - 1; i >= 0; i--) {
      newString += s[i];
    }
    return newString;
  }
}

//login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);

//login(["momo", "omom"]);
