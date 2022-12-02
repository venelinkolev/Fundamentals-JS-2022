function destinationMapper(string) {
  let pattern = /(=|\/)(?<destination>[A-Z][a-zA-Z]{2,})\1/g;
  let resultArray = [];
  let travelPoint = 0;

  let fineDestination = string.matchAll(pattern);

  for (let i of fineDestination) {
    let currentDestination = i.groups.destination;
    resultArray.push(currentDestination);

    travelPoint += currentDestination.length;
  }

  if (resultArray.length === 0) {
    console.log(`Destinations:\nTravel Points: 0`);
  } else {
    console.log(`Destinations: ${resultArray.join(', ')}`);
    console.log(`Travel Points: ${travelPoint}`);
  }

  //console.log(travelPoint, resultArray);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');
