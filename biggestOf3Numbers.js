function biggestOf3Numbers (a, b, c) {
    // const num1 = a;
    // const num2 = b;
    // const num3 = c;

    let biggest = 0;

    const arrey = [a, b, c];

    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] > biggest) biggest = Number(arrey[i]);
    }
    
    console.log(biggest);
}

biggestOf3Numbers( 43,

    43.2,
    
    43.1);