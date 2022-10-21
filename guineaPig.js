function guineaPig(arr) {
  let food = Number(arr.shift());
  let hay = Number(arr.shift());
  let cover = Number(arr.shift());
  let guineaWeight = Number(arr.shift());
  let index = 0;
  let isZero = false;

  for (let i = 1; i <= 30; i++) {
    food -= 0.3;

    if (i % 2 === 0) {
      hay -= food * 0.05;
    }

    if (i % 3 === 0) {
      cover -= guineaWeight / 3;
    }
    index = i;
    if (food.toFixed(2) <= 0 || hay.toFixed(2) <= 0 || cover.toFixed(2) <= 0) {
      console.log("Merry must go to the pet store!");
      isZero = true;
      break;
    }
  }
  if (index === 30 && !isZero)
    console.log(
      `Everything is fine! Puppy is happy! Food: ${food.toFixed(
        2
      )}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
    );
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
