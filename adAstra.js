function adAstra(arr) {
  let pattern =
    /(#|\|)(?<foodName>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

  const dayKcal = 2000;
  let sumKcal = 0;
  let resultFoodInfo = [];

  let findFood = arr.shift().matchAll(pattern);
  for (let i of findFood) {
    //console.log(i);
    let foodName = i.groups.foodName;
    let date = i.groups.date;
    let calories = Number(i.groups.calories);

    let resultString = `Item: ${foodName}, Best before: ${date}, Nutrition: ${calories}`;
    resultFoodInfo.push(resultString);

    sumKcal += calories;

    //console.log(foodName, date, calories);
  }

  console.log(
    `You have food to last you for: ${Math.floor(sumKcal / dayKcal)} days!`
  );

  if (resultFoodInfo.length > 0) {
    for (let i of resultFoodInfo) {
      console.log(i);
    }
  }
}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
adAstra([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
