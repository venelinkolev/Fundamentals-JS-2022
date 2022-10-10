function radioCrystals(arr) {
  let index = 0;

  const target = arr[index];
  index++;

  let counterCut = 0;
  let counterLap = 0;
  let counterGrind = 0;
  let counterEtch = 0;
  //let counterTransport = 0;

  function transport(thickness) {
    thickness = Math.floor(thickness);
    console.log("Transporting and washing");
    return thickness;
  }

  function finishCrystals(currentThickness) {
    console.log(`Processing chunk ${currentThickness} microns`);

    if (currentThickness / 4 >= target) {
      while (currentThickness > target) {
        currentThickness /= 4;
        counterCut++;
        if (currentThickness / 4 < target) {
          console.log(`Cut x${counterCut}`);
          currentThickness = transport(currentThickness);
          counterCut = 0;
          break;
        }
      }
    }

    if (currentThickness - currentThickness * 0.2 >= target) {
      while (currentThickness > target) {
        currentThickness -= currentThickness * 0.2;
        counterLap++;
        let testResult = currentThickness - currentThickness * 0.2;
        if (testResult < target) {
          console.log(`Lap x${counterLap}`);
          currentThickness = transport(currentThickness);
          counterLap = 0;
          break;
        }
      }
    }

    if (currentThickness - 20 >= target) {
      while (currentThickness > target) {
        currentThickness -= 20;
        counterGrind++;
        let testResult = currentThickness - 20;
        if (testResult < target) {
          console.log(`Grind x${counterGrind}`);
          currentThickness = transport(currentThickness);
          counterGrind = 0;
          break;
        }
      }
    }

    if (currentThickness - 2 >= target) {
      while (currentThickness > target) {
        currentThickness -= 2;
        counterEtch++;
        let testResult = currentThickness - 2;
        if (testResult < target && testResult + 1 === target) {
          currentThickness -= 2;
          counterEtch++;
          console.log(`Etch x${counterEtch}`);
          currentThickness = transport(currentThickness);
          counterEtch = 0;
          break;
        } else {
          if (testResult < target) {
            console.log(`Etch x${counterEtch}`);
            currentThickness = transport(currentThickness);
            counterEtch = 0;
          }
        }
      }
    }

    if (currentThickness < target) {
      currentThickness += 1;
      console.log(`X-ray x1`);
    }
    console.log(`Finished crystal ${currentThickness} microns`);
  }

  let currentThickness = arr[index];
  index++;

  while (currentThickness !== undefined) {
    if (currentThickness === target) {
      console.log(`Finished crystal ${currentThickness} microns`);
    } else {
      finishCrystals(currentThickness);
    }

    currentThickness = arr[index];
    index++;
  }
}

radioCrystals([1002, 6501, 10000, 2011, 900]);
