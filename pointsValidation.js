function pointsValidation(arr) {
  // √[(x₂ - x₁)² + (y₂ - y₁)²].
  const x1 = arr[0];
  const y1 = arr[1];
  const x2 = arr[2];
  const y2 = arr[3];

  let distance = (x1, y1, x2, y2) => {
    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (result % 1 === 0)
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  };

  distance(x1, y1, 0, 0);
  distance(x2, y2, 0, 0);
  distance(x1, y1, x2, y2);
}

pointsValidation([2, 1, 1, 1]);
