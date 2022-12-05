function hero(arr) {
  let heroInfo = {};

  let heroes = [];

  while (arr[0] !== 'End') {
    let currentCommand = arr.shift().split(' ');

    let command = currentCommand[0];

    let currentHero = heroes.find((i) => i.nameHero === currentCommand[1]);

    let spellName = currentCommand[2];

    switch (command) {
      case 'Enroll':
        //console.log(currentHero);
        if (currentHero) {
          console.log(`${currentCommand[1]} is already enrolled.`);
        } else {
          let nameHero = currentCommand[1];

          heroInfo = { nameHero };
          heroInfo.spell = [];
          heroes.push(heroInfo);
        }
        break;
      case 'Learn':
        if (!currentHero) {
          console.log(`${currentCommand[1]} doesn't exist.`);
        } else {
          if (currentHero.spell.includes(spellName)) {
            console.log(
              `${currentCommand[1]} has already learnt ${spellName}.`
            );
          } else {
            currentHero.spell.push(spellName);
          }
        }
        break;
      case 'Unlearn':
        if (!currentHero) {
          console.log(`${currentCommand[1]} doesn't exist.`);
        } else {
          if (currentHero.spell.includes(spellName)) {
            let index = currentHero.spell.indexOf(spellName);
            currentHero.spell.splice(index, 1);
          } else {
            console.log(`${currentCommand[1]} doesn't know ${spellName}.`);
          }
        }
        break;
    }
  }

  console.log('Heroes:');

  for (let i of heroes) {
    console.log(`== ${i.nameHero}: ${i.spell.join(', ')}`);
  }
  //console.log(heroes[0]);
}

hero([
  'Enroll Stefan',
  'Enroll Peter',
  'Enroll Stefan',
  'Learn Stefan ItShouldWork',
  'Learn John ItShouldNotWork',
  'Unlearn George Dispel',
  'Unlearn Stefan ItShouldWork',
  'End',
]);
hero([
  'Enroll Stefan',
  'Learn Stefan ItShouldWork',
  'Learn Stefan ItShouldWork',
  'Unlearn Stefan NotFound',
  'End',
]);
hero([
  'Enroll Stefan',
  'Enroll Peter',
  'Enroll John',
  'Learn Stefan Spell',
  'Learn Peter Dispel',
  'End',
]);
