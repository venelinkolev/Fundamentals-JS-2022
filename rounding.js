function rounding(a, b) {
  const num = a;
  let precision = b;
  let print = 0;

  if (precision > 15) {
    precision = 15;
    print = parseFloat(num.toFixed(precision));
    console.log(print);
  } else {
    print = parseFloat(num.toFixed(precision));
    console.log(print);
  }
  //console.log(num.toFixed(precision));
}
rounding(3.14159254565487745215466878545121, 18);
