function radioCrystals(arr) {
  const target = arr[0];
  let counterCut = 0;
  let counterLap = 0;
  let counterGrind = 0;
  let counterEtch = 0;
  let counterTransport = 0;

  let currentThickness = arr[1];

  while (currentThickness >= target) {
    currentThickness /= 4;
    counterCut++;
    if (currentThickness / 4 < target) break;
  }

  console.log(currentThickness, counterCut);
}

radioCrystals([1375, 50000]);
