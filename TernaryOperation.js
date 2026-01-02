function ternaryB(x){
    if(x >= 5){
    console.log("Fair")
}else{
    console.log("Not good")
}
}

ternaryB(3);

//In ternary
function Internary(x){
    x >= 5 ? console.log("fair"):console.log("Not good");
}

Internary(10);

//Adding template strings using backtics
const namee = "Olaniran Rasheed";
const age = 27;
const message = `Hi! My name is ${namee} and in this year 2026, i will be ${age} years of age in the month of 
April`;


console.log(message);