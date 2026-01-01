const food = ["Rice", "Beans", "Akamu", "Jollof"];
const food2 = ["Potato", "Chicken", "Fried rice", "Indomie"];

const Combo = [...food, ...food2];

//Destructuring with Spraed
const [food0, food1, ...rest] = food;

console.log(Combo[6]);//Fried rice will be the result

//Spread with Object
const Person = {
    name: "Rasheed",
    surname: "olaniran",
    age: 27
}
const Person2 = {
    occupation: "Moderator",
    weight: "76kg",
    salary: 2000000
}

const onePerson = {...Person, ...Person2};

console.log(Person.age);
console.log(onePerson);