function gramophone(a, b, c) {
  const band = a;
  const album = b;
  const song = c;
  const rotation = 2.5;

  let formula = (album.length * band.length * song.length) / 2;

  console.log(`The plate was rotated ${Math.ceil(formula / rotation)} times.`);
}

gramophone(
  "Rammstein",
  "Sehnsucht",

  "Engel"
);
