function pirates(arr) {
  let targetedCities = [];
  let cities = {};

  while (arr[0] !== 'Sail') {
    let currentCity = arr.shift().split('||');
    let city = currentCity[0];
    let population = Number(currentCity[1]);
    let gold = Number(currentCity[2]);

    let findCity = targetedCities.find((i) => i.city === city);
    if (findCity) {
      findCity.population += population;
      findCity.gold += gold;
    } else {
      cities = {city , population, gold};
      targetedCities.push(cities);
    }
  }
  //console.log(targetedCities);

  while (arr[0] !== 'End') {
    let currentEvent = arr.shift().split('=>');
    let event = currentEvent[0];
    let cityEvent = currentEvent[1];

    let findCity = targetedCities.find((i) => i.city === cityEvent);

    switch (event) {
      case 'Plunder':
        let people = Number(currentEvent[2]);
        let plunderGold = Number(currentEvent[3]);

        findCity.population -= people;
        findCity.gold -= plunderGold;
        console.log(`${cityEvent} plundered! ${plunderGold} gold stolen, ${people} citizens killed.`);

        if (findCity.population === 0 || findCity.gold === 0) {
          console.log(`${cityEvent} has been wiped off the map!`);
          let index = targetedCities.indexOf(findCity);
          targetedCities.splice(index, 1);
        }
        break;
        case 'Prosper':
          let prosperGold = Number(currentEvent[2]);

          if (prosperGold > 0) {
            findCity.gold += prosperGold;
            console.log(`${prosperGold} gold added to the city treasury. ${cityEvent} now has ${findCity.gold} gold.`);
          } else {
            console.log(`Gold added cannot be a negative number!`);
          }
          break;
    }
  }
 
  if (targetedCities.length === 0) {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
  } else {
    console.log(`Ahoy, Captain! There are ${targetedCities.length} wealthy settlements to go to:`);
    
    for (let i of targetedCities) {
      console.log(`${i.city} -> Population: ${i.population} citizens, Gold: ${i.gold} kg`);
    }
  }
}

pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);
pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
