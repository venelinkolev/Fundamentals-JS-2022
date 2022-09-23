function concatenateName(a, b, c) {
  const name1 = a;
  const name2 = b;
  const delimiter = c;

  console.log(`${name1}${delimiter}${name2}`);
}

concatenateName(
  "John",

  "Smith",

  "->"
);
