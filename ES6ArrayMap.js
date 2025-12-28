//This doees not exactly demonstrate how it works in React

const numbers = [1,2,3,4,5];
const doubled = numbers.map(c=> c*2);
const divby2 = numbers.map((z) => {return z*2});

console.log(numbers);
console.log(doubled[0]);
console.log(divby2[3]);

//Maybe this does but not in Javascript, it does not but in react

const fruitList = ['Apple', 'Avocado', 'Banana', 'Pineapple'];

function theApp() {
    return(
        <ul>
            {fruitList.map(fruit=>
            <li key={fruit}>
                {fruit}
            </li>
            )}
        </ul>
    )
}

console.log(theApp());