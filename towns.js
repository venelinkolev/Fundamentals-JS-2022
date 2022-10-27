function towns(arr) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentTown = arr[i].split(" | ");
    let townObject = {};

    townObject.town = currentTown[0];
    townObject.latitude = Number(currentTown[1]).toFixed(2);
    townObject.longitude = Number(currentTown[2]).toFixed(2);

    resultArray.push(townObject);
  }

  for (let i of resultArray) {
    console.log(i);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
