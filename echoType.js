function echoType(i) {
  let input = i;

  console.log(typeof input);
  if (input === null) console.log("Parameter is not suitable for printing");
  else console.log(input);
}

echoType(null);
