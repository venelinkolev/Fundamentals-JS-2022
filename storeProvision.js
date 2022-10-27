function storeProvision(localStore, orderedForDelivery) {
  class Products {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  }

  let storeArray = [];
  let resultArray = [];

  let index = 0;
  let product = localStore[index];
  index++;

  while (product !== undefined) {
    let quantity = Number(localStore[index]);
    index++;

    storeArray.push(new Products(product, quantity));

    product = localStore[index];
    index++;
  }

  index = 0;
  product = orderedForDelivery[index];
  index++;

  while (product !== undefined) {
    let quantity = Number(orderedForDelivery[index]);
    index++;

    storeArray.push(new Products(product, quantity));

    product = orderedForDelivery[index];
    index++;
  }

  for (let i = 0; i < storeArray.length; i++) {
    //for (let j = i + 1; j < storeArray.length; j++) {
    let indexResult = i + 1;
    while (indexResult !== storeArray.length) {
      if (storeArray[i].name === storeArray[indexResult].name) {
        storeArray[i].quantity += storeArray[indexResult].quantity;
        resultArray.push(storeArray[i]);
        storeArray.splice(indexResult, 1);
        indexResult = i + 1;
      }
      indexResult++;
    }
  }

  //   for (let i = 0; i < storeArray.length; i++) {
  //     for (let j = i + 1; j < storeArray.length; j++) {
  //       if (storeArray[i].name === storeArray[j].name) {
  //         storeArray[i].quantity += storeArray[j].quantity;
  //         resultArray.push(storeArray[i]);
  //         storeArray.splice(j, 1);
  //       }
  //     }
  //   }

  for (let i of storeArray) {
    console.log(`${i.name} -> ${i.quantity}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
console.log("------------------------");
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
