function loadingBar(n) {
  const number = n;
  let loading = Array(10);

  for (let i = 0; i < loading.length; i++) {
    loading[i] = ".";
  }
  //console.log(loading);

  if (number === 0) {
    console.log(`${number}% [${loading.join("")}]`);
    console.log("Still loading...");
  } else {
    for (let i = 10; i <= number; i += 10) {
      loading.unshift("%");
      loading.pop();
    }
    if (number === 100) {
      console.log("100% Complete!");
      console.log(`[${loading.join("")}]`);
    } else {
      console.log(`${number}% [${loading.join("")}]`);
      console.log("Still loading...");
    }
  }
}

loadingBar(80);
