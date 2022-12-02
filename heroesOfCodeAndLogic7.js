function heroesOfCodeAndLogic7(arr) {
  let numbeHeroes = Number(arr.shift());
  let heroes = [];
  let heroesInfo = {};
  let maxHP = 100;
  let maxMP = 200;

  for (let i = 0; i < numbeHeroes; i++) {
    let currentHero = arr.shift().split(' ');

    let nameHero = currentHero[0];
    let hitPoints = Number(currentHero[1]);
    let manaPoints = Number(currentHero[2]);

    heroesInfo = { nameHero, hitPoints, manaPoints };
    heroes.push(heroesInfo);
  }

  while (arr[0] !== 'End') {
    let currentCommand = arr.shift().split(' - ');

    let command = currentCommand[0];
    let hero = currentCommand[1];

    let currentHero = heroes.find((i) => i.nameHero === hero);

    //    console.log(currentHero);
    switch (command) {
      case 'CastSpell':
        let manaNeeded = Number(currentCommand[2]);
        let spellName = currentCommand[3];

        if (currentHero.manaPoints >= manaNeeded) {
          currentHero.manaPoints -= manaNeeded;
          console.log(
            `${hero} has successfully cast ${spellName} and now has ${currentHero.manaPoints} MP!`
          );
        } else {
          console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
        break;
      case 'TakeDamage':
        let damage = Number(currentCommand[2]);
        let attacker = currentCommand[3];

        if (currentHero.hitPoints > damage) {
          currentHero.hitPoints -= damage;
          console.log(
            `${hero} was hit for ${damage} HP by ${attacker} and now has ${currentHero.hitPoints} HP left!`
          );
        } else {
          console.log(`${hero} has been killed by ${attacker}!`);
          let indexHero = heroes.indexOf(currentHero);
          heroes.splice(indexHero, 1);
        }
        break;
      case 'Recharge':
        let manaRecharge = Number(currentCommand[2]);

        if (currentHero.manaPoints + manaRecharge <= maxMP) {
          currentHero.manaPoints += manaRecharge;
          console.log(`${hero} recharged for ${manaRecharge} MP!`);
        } else {
          console.log(
            `${hero} recharged for ${maxMP - currentHero.manaPoints} MP!`
          );
          currentHero.manaPoints = maxMP;
        }
        break;
      case 'Heal':
        let hitRecharge = Number(currentCommand[2]);

        if (currentHero.hitPoints + hitRecharge <= maxHP) {
          currentHero.hitPoints += hitRecharge;
          console.log(`${hero} healed for ${hitRecharge} HP!`);
        } else {
          console.log(
            `${hero} healed for ${maxHP - currentHero.hitPoints} HP!`
          );
          currentHero.hitPoints = maxHP;
        }
        break;
    }
  }

  for (let i of heroes) {
    console.log(`${i.nameHero}`);
    console.log(`  HP: ${i.hitPoints}\n  MP: ${i.manaPoints}`);
  }
  // console.log(heroes);
}

heroesOfCodeAndLogic7([
  2,
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End',
]);
heroesOfCodeAndLogic7([
  4,
  'Adela 90 150',
  'SirMullich 70 40',
  'Ivor 1 111',
  'Tyris 94 61',
  'Heal - SirMullich - 50',
  'Recharge - Adela - 100',
  'CastSpell - Tyris - 1000 - Fireball',
  'TakeDamage - Tyris - 99 - Fireball',
  'TakeDamage - Ivor - 3 - Mosquito',
  'End',
]);
