function aMinerTask(arr) {
  let minerTask = {};

  for (let i = 0; i < arr.length; i += 2) {
    let resours = arr[i];
    let quantity = Number(arr[i + 1]);

    if (minerTask[resours]) {
      let currentValue = minerTask[resours] + quantity;
      minerTask[resours] = currentValue;
    } else {
      minerTask[resours] = quantity;
    }
  }

  let resoursArray = Object.entries(minerTask);

  for (let [resours, quantity] of resoursArray) {
    console.log(`${resours} -> ${quantity}`);
  }
}

aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
