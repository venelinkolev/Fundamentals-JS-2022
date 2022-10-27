function movies(arr) {
  class Movie {
    constructor(nameMovie) {
      this.name = nameMovie;
    }
  }

  let moviesArray = [];
  //let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    let index = 0;
    if (currentCommand.includes("addMovie")) {
      currentCommand.shift();
      let movieAdd = currentCommand.join(" ");
      moviesArray.push(new Movie(movieAdd));
    }

    if (currentCommand.includes("directedBy")) {
      index = currentCommand.indexOf("directedBy");
      let movieDirectedBy = currentCommand.slice(0, index).join(" ");
      let director = currentCommand.slice(index + 1).join(" ");

      for (let i of moviesArray) {
        if (i.name === movieDirectedBy) i.director = director;
      }
    }
    if (currentCommand.includes("onDate")) {
      index = currentCommand.indexOf("onDate");
      let movieOnDate = currentCommand.slice(0, index).join(" ");
      let date = currentCommand[index + 1];

      for (let i of moviesArray) {
        if (i.name === movieOnDate) i.date = date;
      }
    }
  }

  for (let i of moviesArray) {
    if (i.date !== undefined && i.director !== undefined) {
      //resultArray.push(i);
      console.log(JSON.stringify(i));
    }
  }

  //console.log(resultArray);
}

movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
console.log("-------------");
movies([
  "addMovie The Avengers",

  "addMovie Superman",

  "The Avengers directedBy Anthony Russo",

  "The Avengers onDate 30.07.2010",

  "Captain America onDate 30.07.2010",

  "Captain America directedBy Joe Russo",
]);
