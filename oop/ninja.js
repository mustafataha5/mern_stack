class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(" Hello " + this.name)
    }

    showStats() {
        console.log(` Name: ${this.name}\n Health: ${this.health}\n Speed: ${this.speed}\n Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
