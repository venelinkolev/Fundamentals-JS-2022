function worldTour(arr) {
  let tourStops = arr.shift();
  //let initialStopsList = tourStops;

  let command = arr.shift();

  while (command !== 'Travel') {
    let currentCommandArray = command.split(':');
    //console.log(currentCommandArray);
    let currentCommand = currentCommandArray[0];
    switch (currentCommand) {
      case 'Add Stop':
        let index = Number(currentCommandArray[1]);
        if (index >= 0 && index < tourStops.length) {
          let firstLetters = tourStops.substring(0, index);
          let secondLetters = tourStops.substring(index);
          tourStops = firstLetters + currentCommandArray[2] + secondLetters;
        }
        console.log(tourStops);
        break;
      case 'Remove Stop':
        let indexStart = Number(currentCommandArray[1]);
        let indexEnd = Number(currentCommandArray[2]);

        if (
          indexStart >= 0 &&
          indexEnd >= 0 &&
          indexStart < tourStops.length &&
          indexEnd < tourStops.length
        ) {
          firstLetters = tourStops.substring(0, indexStart);
          secondLetters = tourStops.substring(indexEnd + 1);
          tourStops = firstLetters + secondLetters;
        }
        console.log(tourStops);
        break;
      case 'Switch':
        let oldString = currentCommandArray[1];
        let newString = currentCommandArray[2];

        if (tourStops.includes(oldString)) {
          tourStops = tourStops.split(oldString).join(newString);
        }
        console.log(tourStops);
        break;
    }

    command = arr.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${tourStops}`);
}

worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
worldTour([
  'Albania:Bulgaria:Cyprus:Deuchland',
  'Add Stop:3:Nigeria',
  'Remove Stop:4:8',
  'Switch:Albania: Azərbaycan',
  'Travel',
]);
