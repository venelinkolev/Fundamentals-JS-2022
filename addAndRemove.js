function addAndRemove(arr) {
  const array = arr;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    currentCommand = array[i];
    switch (currentCommand) {
      case "add":
        newArray.push(i + 1);
        break;
      case "remove":
        newArray.pop();
        break;
    }
  }
  //console.log(newArray);
  if (newArray.length < 1) {
    console.log("Empty");
  } else {
    console.log(newArray.join(" "));
  }
}

addAndRemove(["remove", "remove", "remove"]);
