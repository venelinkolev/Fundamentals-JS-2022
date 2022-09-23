function thePyramidOfKingDjoser(a, b) {
  let base = Number(a);
  let increment = Number(b);
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let count = 0;
  let step = 0;
  let bulk = 0;
  let pyramidHight = 0;

  for (let i = base; i >= 1; i -= 2) {
    count++;
    pyramidHight++;
    step = i * i;
    bulk = (i - 2) * (i - 2);
    if (i <= 2) {
      gold = step * increment;
    } else {
      if (count == 5) {
        stone = stone + bulk * increment;
        lapisLazuli = lapisLazuli + (step - bulk) * increment;
        count = 0;
      } else {
        stone = stone + bulk * increment;
        marble = marble + (step - bulk) * increment;
      }
    }
  }
  //Stone required: 165 Marble required: 112 Lapis Lazuli required: 8 Gold required: 1 Final pyramid height: 6
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHight * increment)}`);
}

thePyramidOfKingDjoser(23, 0.5);
