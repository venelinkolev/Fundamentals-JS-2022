function reverseInPlace (input) {
    let array = input;
    let temp = 0;
    let buffer = "";
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    for (let i = 0; i < array.length; i++) {
        buffer += array[i] + " ";
    }
    console.log(buffer);

}

reverseInPlace(['33', '123', '0', 'dd']);