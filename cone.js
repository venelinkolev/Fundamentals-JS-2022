function cone(a, b) {
  const radius = Number(a);
  const height = Number(b);
  const hypotenuse = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

  let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
  let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * hypotenuse;

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}

cone(
  3.3,

  7.8
);

// As review, the formula for the surface area of a right circular cone is SA = 𝛑r² + 𝛑rl. The formula for the volume of a right circular cone is V = (𝛑r²h)/3
