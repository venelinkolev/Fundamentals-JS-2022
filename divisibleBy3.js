function divisibleBy3() {
  for (let i = 3; i <= 100; i++) {
    let divisible = i % 3;
    if (divisible === 0) console.log(i);
  }
}

divisibleBy3();
