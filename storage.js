function storage(arr) {
  let storage = new Map();

  for (let i of arr) {
    let [product, quantity] = i.split(" ");

    if (!storage.has(product)) {
      storage.set(product, quantity);
    } else {
      let currentProduct = Number(storage.get(product));
      let newQuantity = (currentProduct += Number(quantity));
      storage.set(product, newQuantity);
    }
  }

  for (let [product, quantity] of storage) {
    console.log(`${product} -> ${quantity}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
