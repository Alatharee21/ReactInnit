//var(A global scope and also a function scope)
// let(A block scope and limited to where it is defined)
// const

//This shows x being declared twice but did not affect as x in function is hidden from outside the function.

scope1 = ()=>{
    let x = 67;
    return x;
}

let x = 68;

console.log(scope1());
console.log(x);


var y = 15;//A function can access this because it is global.

gscope = ()=>{
    //var y = 16;//Cannot be accessed outisde of the function
    console.log(y);
}

gscope();
console.log(y);

const z = "Element can be changed but Z cannot be redeclared";

/*const z = 56; //Cannot redeclare block-scope z
var z = 56; //Cannot redeclare block-scope z
let z = 56; //Cannot redeclare block-scope z*/

console.log(z);