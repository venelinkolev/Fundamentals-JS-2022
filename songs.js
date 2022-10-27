function songs(arr) {
  class Songs {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let numbrSongs = arr.shift();
  let filter = arr.pop();

  let songsArray = arr;
  let songsObject = [];
  let resultArray = [];

  for (let i = 0; i < numbrSongs; i++) {
    let currentSong = songsArray[i].split("_");
    let typeList = currentSong[0];
    let name = currentSong[1];
    let time = currentSong[2];

    songsObject.push(new Songs(typeList, name, time));
  }

  for (let i of songsObject) {
    if (filter === "all") resultArray.push(i.name);
    else if (i.typeList === filter) resultArray.push(i.name);
  }

  //console.log(songsObject[1]);
  console.log(resultArray.join("\n"));
}

songs([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);
songs([
  4,

  "favourite_DownTown_3:14",

  "listenLater_Andalouse_3:24",

  "favourite_In To The Night_3:58",

  "favourite_Live It Up_3:48",

  "listenLater",
]);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
