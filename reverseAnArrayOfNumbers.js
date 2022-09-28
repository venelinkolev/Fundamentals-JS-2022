function reverseAnArrayOfNumbers (n, arr) {
    const number = Number(n);
    let array = arr;

    let newArray = [];

    for (let i = 0; i < number; i++) {
        newArray[i] = array[i];
    }
    let buffer = "";
    for (let j = newArray.length - 1; j >= 0; j--) {
        buffer += newArray[j] + " ";
    }
    console.log(buffer);
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);