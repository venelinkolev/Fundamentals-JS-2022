function townInfo(a, b, c) {
  const town = a;
  const population = Number(b);
  const area = Number(c);

  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}

townInfo(
  "Sofia",

  1286383,

  492
);
