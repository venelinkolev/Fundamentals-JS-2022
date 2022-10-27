function cats(arr) {
  class Cats {
    constructor(name, age) {
      this.nameCats = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.nameCats}, age ${this.age} says Meow`);
    }
  }

  let length = arr.length;
  let catsArray = [];

  for (let i = 0; i < length; i++) {
    let currentCat = arr[i].split(" ");
    catsArray.push(new Cats(currentCat[0], currentCat[1]));
  }

  for (let i of catsArray) {
    i.meow();
  }

  //console.log(catsArray[0]);
}

cats(["Candy 1", "Poppy 3", "Nyx 2"]);
cats(["Mellow 2", "Tom 5"]);
