class Card {
    constructor(name,cost){
        this.name  = name ; 
        this.cost = cost  ; 

    }

   
}


class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost); 
        this.power = power ; 
        this.res = res ; 
    }
    attack(target){
        if( target instanceof Unit ) {
            // implement card text here
            target.res -= this.power ; 
        } else {
            throw new Error( "Target must be a unit!" );
        }
        
    }

    printMe(){
        console.log("Name: "+this.name+"\nPower: "+this.power+"\nRes: "+this.res);
    }
    
}

class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost); 
        this.text = text ; 
        this.stat =stat ; 
        this.magnitude = magnitude ; 
    }


    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.stat.toLowerCase() ==="resilience"){
                    target.res +=this.magnitude; 
            }
            else if(this.stat.toLowerCase() ==="power"){
                
                    target.power +=this.magnitude ; 
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const red_belt_ninja = new Unit("Red Belt Ninja",3,3,4);
red_belt_ninja.printMe();
console.log("---------------------------------");
const black_belt_ninja = new Unit("Black Belt Ninja",4,5,4);
black_belt_ninja.printMe();
console.log("---------------------------------");
const hard_algorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",+3);
const promise_rejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 3","resilience",-2)
const pair_programming = new Effect("Pair Programming",3,"increase target's power by 2","power",+2);

console.log("Hard Algorithm to  Red belt");
hard_algorithm.play(red_belt_ninja) ;
red_belt_ninja.printMe();
console.log("---------------------------------");

console.log("Unhandled Promise Rejection to  Black belt");
promise_rejection.play(black_belt_ninja);
black_belt_ninja.printMe(); 
console.log("---------------------------------");

console.log("Pair Programming to  Red belt");
pair_programming.play(red_belt_ninja);
red_belt_ninja.printMe();
console.log("---------------------------------");

console.log("Red belt attack Black belt") ; 
red_belt_ninja.attack(black_belt_ninja);
red_belt_ninja.printMe();
black_belt_ninja.printMe();












