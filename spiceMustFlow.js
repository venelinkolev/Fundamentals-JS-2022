function spiceMustFlow(n) {
  const workerSpice = 26;
  const spicesNorme = 100;
  let spices = Number(n);
  let days = 0;
  let totalSpices = 0;

  if (spices < 100) {
    if (spices >= workerSpice * 2) {
      spices -= workerSpice * 2;
      days = 1;
      console.log(days);
      console.log(spices);
    } else {
      days = 1;
      console.log(days);
      console.log(spices);
    }
  } else {
    while (spices >= spicesNorme) {
      days++;
      totalSpices += spices - workerSpice;
      spices -= 10;
    }

    totalSpices -= workerSpice;

    console.log(days);
    console.log(totalSpices);
  }
}
spiceMustFlow(450);
