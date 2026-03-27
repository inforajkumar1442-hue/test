/*
Variables = Data Containers

JavaScript variables are containers for data.
JavaScript variables can be declared in 4 ways:

Modern JavaScript                       Older JavaScript
Using let                               Using var (Not Recommended)        
Using const                             Automatically (Not Recommended)
*/

// Example using let
let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;
console.log(z1);

// Example using const
const x2 = 5;
const y2 = 6;
const z2 = x2+y2;
console.log(z2);

/* 
One Statement, Many Variables
You can declare many variables in one statment.
Start the statement with let or const and separate the variables by comma:
*/

// Example its works
let person1 = "Raj Kumar Gupa", carName1 = "Volvo", price1 = 100000;
console.log(person1,carName1,price1);

// Example it also works
let person2 = "Raj Kumar Gupta",
carName2 = "Volvo",
price2 = 100000;
console.log(person2,carName2,price2);


