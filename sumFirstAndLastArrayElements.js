function sumFirstAndLastArrayElements (input) {
    const first = Number(input[0]);
    const last = Number(input[input.length - 1]);

    console.log(first + last);

}
sumFirstAndLastArrayElements([10, 17, 22, 33]);