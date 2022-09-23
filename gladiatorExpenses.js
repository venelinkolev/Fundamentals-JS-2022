function gladiatorExpenses(a, b, c, d, e) {
  const lost = Number(a);
  const helmetPrice = Number(b);
  const swordPrice = Number(c);
  const shieldPrice = Number(d);
  const armorPrice = Number(e);

  let expenses = 0;
  let helmet = 0;
  let sword = 0;
  let shield = 0;
  let armor = 0;

  for (let i = 1; i <= lost; i++) {
    if (i % 2 === 0) helmet++;
    if (i % 3 === 0) sword++;
    if (i % 2 === 0 && i % 3 === 0) {
      shield++;
      if (shield % 2 === 0 && shield !== 0) armor++;
    }
  }
  expenses =
    helmet * helmetPrice +
    sword * swordPrice +
    shield * shieldPrice +
    armor * armorPrice;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(
  23,

  12.5,

  21.5,

  40,

  200
);
