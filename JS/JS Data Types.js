/*
JavaScript Data Types

A JavaScript variable can hold 8 types of data.
7 Primitive Data Types and 1 Object Data Type.
The Object data type can hold many different object types.

There are two types of Data Types

Primitive Data Types

Numeric Type    Non-Numeric Type        Objects
    Number          String                  Objects
    Bigint          Boolean                 Array
                    Null                    Function
                    Undefined               Date
                    Symbol                  RegExp
                                            Set
                                            Map

Type	Description
Number	A number representing a numeric value
Bigint	A number representing a large integer
String	A text of characters enclosed in quotes
Boolean	A data type representing true or false
Undefined	A variable with no assigned value
Null	A value representing object absence
Symbol	A unique primitive identifier
Object	A collection of key-value pairs of data
*/      

// Number
let length = 16;
let weight = 7.5;
console.log(length)
console.log(weight)

// BigInt
let x1 = 1234567890123456789012345n;
let y1 = BigInt(1234567890123456789012345)
console.log(x1)
console.log(y1)

// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let x2 = true;
let y2 = false;

// Undefined
let x3;
let y3;

// Null
let x4 = null;
let y4 = null;

// Symbol
const x5 = Symbol();
const y5 = Symbol();

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array Object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");