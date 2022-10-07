function carWash(arr) {
  const array = arr;
  let index = 0;
  let percentage = 0;

  let command = array[0];
  index++;

  while (command !== undefined) {
    switch (command) {
      case "soap":
        percentage += 10;
        break;
      case "water":
        percentage = percentage + percentage * 0.2;
        break;
      case "vacuum cleaner":
        percentage = percentage + percentage * 0.25;
        break;
      case "mud":
        percentage = percentage - percentage * 0.1;
        break;
    }
    command = array[index];
    index++;
  }
  console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
