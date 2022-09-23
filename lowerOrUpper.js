function lowerOrUpper(s) {
  let char = s;
  char = char.charCodeAt();
  console.log(char < 97 ? "upper-case" : "lower-case");
}

lowerOrUpper("a");
