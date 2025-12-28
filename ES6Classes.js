class Car {
    constructor(name) {
        this.brand = name;
    }

    present(){
        return "I have a " + this.brand;
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.Model = mod;
    }

    finality(){
        return this.brand + " Is of " + this.Model + " Model";
    }
}

const myCar = new Car("Bugati");
const myModel = new Model("Bugati", "Gangsta");

console.log(myCar);
console.log(myCar.present());
console.log(myModel.finality());