"use strict "// treat all codes in newer version of js

// alert(4+4) //we are using node js not browser thats why it will give error

console.log(34+4);

console.log("ankit");
// code readibility should high

// stack is primative datatype
// in stack copy the varible  
let name = "ankitrj";
let age = 12;
// let login = true;
let a = name;
a = "fucker"
console.log(a)
console.log(name)

// datatype
// String , number , bigint , boolean , null => standalone value as well as datatype in javascript
// undefined => it mean we didnt declare the value in variable , if dont assign the value in  js then automatically js assign undefined
// symbol => unique


// console.log(typeof null)
// null is object in js

// console.log(typeof undefined)

// Type	typeof return value	Object wrapper
// Null	"object"	N/A
// Undefined	"undefined"	N/A
// Boolean	"boolean"	Boolean
// Number	"number"	Number
// BigInt	"bigint"	BigInt
// String	"string"	String
// Symbol	"symbol"    symbol

// non primative datatypes

// objects,function,array

let x = [23,45 ,233,56]
console.log(x)

let obj2 = {
    "da":"ankit",
    "s":"aarya",
    "aa":"sumit"
}

console.log(obj2)


// heap is for non primative datatype
// heap work send same reference
let i = obj2;

i.da="ankirters"

console.log(i.da)
console.log(obj2)