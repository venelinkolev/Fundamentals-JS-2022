function needForSpeed3(arr) {
  let numberCars = Number(arr.shift());
  let cars = [];
  let carsStore = {};
  let tankMaxLiters = 75;

  for (let i = 0; i < numberCars; i++) {
    let currentCar = arr.shift().split('|');
    let car = currentCar[0];
    let mileage = Number(currentCar[1]);
    let fuel = Number(currentCar[2]);

    carsStore = {car, mileage, fuel};
    cars.push(carsStore);
  }

  while (arr[0] !== 'Stop') {
    let command = arr.shift().split(' : ');

    switch (command[0]) {
      case 'Drive':
        let carDrive = command[1];
        let distance = Number(command[2]);
        let fuelDrive = Number(command[3]);

        let currentDriveCar = cars.find((i) => i.car === carDrive);

        if (currentDriveCar.fuel >= fuelDrive) {
          currentDriveCar.mileage += distance;
          currentDriveCar.fuel -= fuelDrive;
          console.log(`${carDrive} driven for ${distance} kilometers. ${fuelDrive} liters of fuel consumed.`)
        } else {
          console.log('Not enough fuel to make that ride');
        }

        if (currentDriveCar.mileage > 100000) {
          let index = cars.indexOf(currentDriveCar);
          cars.splice(index, 1);
          console.log(`Time to sell the ${carDrive}!`)
        }
        //console.log(currentDriveCar.car);
        break;
        case 'Refuel':
          let carRefuel = command[1];
          let fuelLiters = Number(command[2]);

          let currentRefuelCar = cars.find((i) => i.car === carRefuel);
          //console.log(currentRefuelCar);
          if (currentRefuelCar.fuel + fuelLiters <= tankMaxLiters) {
            currentRefuelCar.fuel = currentRefuelCar.fuel + fuelLiters;
            //console.log(currentRefuelCar.fuel);
            console.log(`${carRefuel} refueled with ${fuelLiters} liters`)
          } else {
            console.log(`${carRefuel} refueled with ${tankMaxLiters - currentRefuelCar.fuel} liters`)
            currentRefuelCar.fuel = tankMaxLiters;
            //console.log(currentRefuelCar.fuel);
          }
          break;
          case 'Revert':
            let carRevert = command[1];
            let kilometers = command[2];

            let currentRevertCar = cars.find((i) => i.car === carRevert);
            currentRevertCar.mileage -= kilometers;
            //console.log(currentRevertCar.mileage);
            if (currentRevertCar.mileage < 10000) {
              currentRevertCar.mileage = 10000;
            } else {
              console.log(`${carRevert} mileage decreased by ${kilometers} kilometers`);
            }
            break;
    }
  }
  for (let i of cars) {
    console.log(`${i.car} -> Mileage: ${i.mileage} kms, Fuel in the tank: ${i.fuel} lt.`)
  }
  //console.log(arr);
}

needForSpeed3([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop',
]);
needForSpeed3([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop',
]);
