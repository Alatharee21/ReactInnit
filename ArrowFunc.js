const theFunc = () => {
    console.log("Arrow function");
}

theFunc();

const nextFunc= ()=> console.log("Hello World!");//no {} ,Works if function have only one statement 

nextFunc();

const nexthFunc= (value)=> console.log("Hello World! " + value);

nexthFunc("Rasheed");

const nextsFunc= value=> console.log("Hello World! " + value);//no (), works if there is only one parameters

nextsFunc("notRasheed");

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    profile(){
        return "My name is " + this.name + " and i am " + this.age + " Years old.";
    }
}

const person = new Person("Rasheed", 26);

console.log(person.name);
console.log(person.age);
console.log(person.profile());