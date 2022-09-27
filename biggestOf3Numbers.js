function biggestOf3Numbers (a, b, c) {
    // const num1 = a;
    // const num2 = b;
    // const num3 = c;

    const arrey = [a, b, c];
    let biggest = Number(arrey[0]);

    for (let i = 1; i < arrey.length; i++) {

        if (Number(arrey[i]) > biggest) biggest = Number(arrey[i]);
    }
    
    console.log(biggest);
}

biggestOf3Numbers(130,

    5,
    
    99);