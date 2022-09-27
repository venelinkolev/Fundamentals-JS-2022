function triangleArea(a, b, c) {
  const side1 = Number(a);
  const side2 = Number(b);
  const side3 = Number(c);

  let semiPerimeter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );

  console.log(area);
}

triangleArea(
  2,

  3.5,

  4
);

// Area = √[s(s-a)(s-b)(s-c)]

// Here, "s" is the semi-perimeter of the triangle, i.e., s = (a + b + c)/2.
