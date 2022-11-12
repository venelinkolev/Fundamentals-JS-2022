function cutAndReverse(input) {
  let halfIndex = Math.floor(input.length / 2);

  let leftString = input.substring(0, halfIndex).split('').reverse().join('');
  let rightString = input.substring(halfIndex).split('').reverse().join('');

  console.log(`${leftString}\n${rightString}`);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
