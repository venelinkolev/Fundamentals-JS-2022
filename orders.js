function orders(product, qty) {
  switch (product) {
    case "coffee":
      return (1.5 * qty).toFixed(2);
    case "coke":
      return (1.4 * qty).toFixed(2);
    case "water":
      return qty.toFixed(2);
    case "snacks":
      return (2 * qty).toFixed(2);
  }
}

orders("water", 5);
