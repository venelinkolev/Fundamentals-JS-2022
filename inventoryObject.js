function inventoryObject (arr) {
    class Heroes {
        constructor (heroName, heroLevel, items) {
            this.heroName = heroName;
            this.heroLevel = heroLevel;
            this.items = items;
        }

        print () {
            console.log(`Hero: ${this.heroName}\nlevel => ${this.heroLevel}\nitems => ${this.items}`);
        }
    }

    let heroesArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentHero = arr[i].split(" / ");

        heroesArray.push(new Heroes(currentHero[0], Number(currentHero[1]), currentHero[2]));
    }

    for (let i = 0; i < heroesArray.length; i++) {
        for (let j = i + 1; j < heroesArray.length; j++) {
            if (heroesArray[i].heroLevel > heroesArray[j].heroLevel) {
                let temp = heroesArray[i];
                heroesArray[i] = heroesArray[j];
                heroesArray[j] = temp;
            }
        }
    }

    for (let i of heroesArray) {
        i.print();
    }

    //console.log(heroesArray);
}

inventoryObject([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);
inventoryObject([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ]);