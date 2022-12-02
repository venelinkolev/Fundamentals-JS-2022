function fancyBarcodes(arr) {
  let patternBarcode = /(@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/g;
  let patternDigit = /\d/g;

  let numberBarcode = arr.shift();

  for (let i = 0; i < numberBarcode; i++) {
    let currentBarcode = arr[i];
    let matchBarcode = currentBarcode.match(patternBarcode);
    //console.log(matchBarcode);

    if (matchBarcode === null) {
      console.log('Invalid barcode');
    } else {
      let matchDigit = currentBarcode.match(patternDigit);

      if (matchDigit === null) {
        console.log('Product group: 00');
      } else {
        console.log(`Product group: ${matchDigit.join('')}`);
      }
      //console.log(matchDigit);
    }
  }
}

fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);
fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);
