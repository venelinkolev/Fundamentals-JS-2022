function radioCrystals(arr) {
  const target = arr[0];
  let counterCut = 0;
  let counterLap = 0;
  let counterGrind = 0;
  let counterEtch = 0;
  //let counterTransport = 0;

  function transport(thickness) {
    Math.floor(thickness);
    console.log("Transporting and washing");
  }

  let currentThickness = arr[1];

  console.log(`Processing chunk ${currentThickness} microns`);

  while (currentThickness >= target) {
    currentThickness /= 4;
    counterCut++;
    if (currentThickness / 4 < target) {
      console.log(`Cut x${counterCut}`);
      break;
    }
  }
  transport(currentThickness);

  while (currentThickness >= target) {
    currentThickness -= currentThickness * 0.2;
    counterLap++;
    let testResult = currentThickness - currentThickness * 0.2;
    if (testResult < target) {
      console.log(`Lap x${counterLap}`);
      break;
    }
  }
  transport(currentThickness);

  while (currentThickness >= target) {
    currentThickness -= 20;
    counterGrind++;
    let testResult = currentThickness - 20;
    if (testResult < target) {
      console.log(`Grind x${counterGrind}`);
      break;
    }
  }
  transport(currentThickness);

  while (currentThickness >= target - 2) {
    currentThickness -= 2;
    counterEtch++;
    let testResult = currentThickness - 2;
    if (testResult <= target - 2) {
      console.log(`Etch x${counterEtch}`);
      break;
    }
  }
  transport(currentThickness);

  while (currentThickness < target) {
    currentThickness += 1;
    console.log(`X-ray x1`);
  }
  console.log(`Finished crystal ${currentThickness} microns`);
}

radioCrystals([1000, 4000, 8100]);
