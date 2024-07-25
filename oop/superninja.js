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

class  Sensei extends Ninja {
    constructor(name){
        super(name) ; 
        super.health = 200 ; 
        this.wisdom = 10 ; 
    }
    speakWisdom(){
        super.drinkSake();
    }
} 


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"









