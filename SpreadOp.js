const food = ["Rice", "Beans", "Akamu", "Jollof"];
const food2 = ["Potato", "Chicken", "Fried rice", "Indomie"];

const Combo = [...food, ...food2];

//Destructuring with Spraed
const [food0, food1, ...rest] = food;

console.log(Combo[6]);//Fried rice will be the result