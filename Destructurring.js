//Old ways
const vehicles = ["A car", "A truck", "A Bus"];

const car = vehicles[0];
const truck = vehicles[1];
const bus = vehicles[2];

console.log(car);
console.log(truck);
console.log(bus);

//New Way
const food = ["Agbado", "Garri", "Ewa"];
const [corn, cassava, legume] = food;

console.log(cassava);

const phones = ["iPhone", "Andriod", "Samsung"];
const [Expensive, , LeveleUp] = phones;//middle omitted but comma is still there so it will be known that it was skipped and allows the next be for the next!

console.log(LeveleUp);

//Helpful when a function return value is an array. const dateInfo(dat) = [d,m,y]
 
function dateInfo(dat) {
  const d = dat.getDate();
  const m = dat.getMonth() + 1;
  const y = dat.getFullYear();

  return [d, m, y];
}

//Therefore const
const [date, month, year] = dateInfo(new Date());

console.log(dateInfo(new Date()));

console.log(date);
console.log(month);
console.log(year);

//Destructuring Works on object too
const Person = {
    firstName: "Rasheed",
    lastName: "Olaniran",
    age: 26,
    occupation: "moderator"
}

const {firstName, lastname, age, occupation, country = "Nigeria"} = Person;


console.log(country);
console.log(occupation);
//Instead of (Both gives same result)
console.log(Person.occupation);