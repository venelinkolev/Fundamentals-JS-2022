function experienceGaining(arr) {
  let experienceNeeded = arr.shift();
  let numberBattles = arr.shift();

  let commandArray = arr;
  let experience = 0;
  let countBattles = 0;

  for (let i = 1; i <= numberBattles; i++) {
    let command = commandArray[i - 1];
    countBattles++;

    if (i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
      if (i % 3 === 0) experience += command * 1.15;
      if (i % 5 === 0) experience += command * 0.9;
      if (i % 15 === 0) experience += command * 1.05;
    } else {
      experience += command;
    }

    if (experience >= experienceNeeded) break;
  }

  if (experience >= experienceNeeded) {
    console.log(
      `Player successfully collected his needed experience for ${countBattles} battles.`
    );
  } else {
    console.log(
      `Player was not able to collect the needed experience, ${(
        experienceNeeded - experience
      ).toFixed(2)} more needed.`
    );
  }

  //console.log(experience);
}

experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
