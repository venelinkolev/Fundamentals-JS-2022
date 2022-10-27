function makeADictionary (arr) {
    let termsObject = [];

    for (let i = 0; i < arr.length; i++) {
        termsObject.push(Object.entries(JSON.parse(arr[i])));
    }

    for (let i = 0; i < termsObject.length; i++) {
        for (let j = i + 1; j < termsObject.length; j++) {
            if (termsObject[i][0][0] === termsObject[j][0][0]) {
                termsObject.splice(i, 1);
            }
        }
    }
    
    console.log(termsObject);
}

makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Bus": "aaasssdd"}'
]);