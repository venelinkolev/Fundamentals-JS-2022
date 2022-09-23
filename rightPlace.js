function rightPlace(a, b, c) {
  let string = a;
  const char = b;
  const result = c;
  let finalStr = string.replace("_", char);

  console.log(finalStr === result ? "Matched" : "Not Matched");
}

rightPlace(
  "Str_ng",
  "I",

  "Strong"
);
