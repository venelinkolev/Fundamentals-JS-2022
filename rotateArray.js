function rotateArray(arr) {
  const array = arr;
  const numberRotation = Number(array[array.length - 1]);
  let newArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i];
  }
  //console.log(newArray);
  let temp = 0;
  for (let j = 0; j < numberRotation; j++) {
    temp = newArray[newArray.length - 1];
    newArray.pop();
    newArray.unshift(temp);
  }
  console.log(newArray.join(" "));
}

rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
