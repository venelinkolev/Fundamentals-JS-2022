function listOfProducts(arr) {
  const array = arr;
  array.sort();

  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}.${array[i]}`);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);