class Vehicle {

    constructor(manufactor,model,color){
        this.mile = 0
        this.manufactor = manufactor ; 
        this.color = color ; 
        this.model = model ; 
    }
    drive() {
        this.mile+= 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.mile} miles on it.`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}

car = new Vehicle("BMW","E8","Black") ; 
car.drive() ; 
console.log(car.mile);
const m5 = new M5("Blue");
m5.childFunction();




const arr =Object.freeze([1, 2 ,3, 4])
arr.push(5);
console.log(arr)