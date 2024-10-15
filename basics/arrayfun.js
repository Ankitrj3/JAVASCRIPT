const marvel_hero = ["thor","loki","iron man","spiderman"]
const dc_hero = ["superman","batman","aquaman","wounderwomen"]

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[4][2])


// console.log(marvel_hero.concat(dc_hero));

const arr = [...marvel_hero, ...dc_hero];
console.log(arr);

let arr1 = [1,234,12,55,89];
console.log(arr1);
console.log(arr1.reverse());
console.log(arr1.includes(12));
console.log(arr1.concat(marvel_hero));
arr1.push(marvel_hero);
console.log(arr1);
arr1.pop();
console.log(arr1);
console.log(arr1.findIndex);


const arr11 = [12,34,23,13,[2,3,45],7,[425,67,343]]
console.log(arr11)

const realarr = arr11.flat(Infinity)//flat is used to convert the multiple array into one array
console.log(realarr.valueOf())

console.log(Array.isArray(realarr))//[233424,45,31,[342,13,5],67,34,4,[5,4352,45]]

console.log(Array.from("ankit"))//used to create array by using from function

let a = 100;
let b = 200;
let c = 300;

console.log(Array.of(a,b,c))//by using of function we can print the values using the keys 

