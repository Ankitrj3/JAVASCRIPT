// revision of function or methods in js

function myFunction(){
    console.log("hello mr ankit ranjan");
    console.log("hi mr ankit ranjan");
}
myFunction();
myFunction();

function my(message){
    console.log(message);
}
my("hello ankit sir");

function sum(a,b){
     console.log(a+b);
}
sum(34,5675);

function rut(x,y){
    let s = x+y;
    return s
}
let j = rut(23,45);
console.log(j);

// arrow function

let arrowsum = (a,b)=>{
    console.log(a+b);
};
console.log(arrowsum());

let mul = (a,b)=>{
    console.log(a*b);
};

const a = ()=>{
    console.log("hola");
};
console.log(a);

// vowels

function countVowels(str){
    count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels("ankit"))

// foreach method 
// foreach is higher order function

let arr = [1,23,44,567,43];
arr.forEach(function printVal(val){
       console.log(val)
});
arr.forEach((val)=>{
    console.log(val)
})

let kc = ['ankit','ranjan','aman','shivansh'];
kc.forEach((val)=>{
    console.log(val.toUpperCase());
})

let square = [12,35,57,23,11,67];

square.forEach((val)=>{
    console.log(val*val);
})

// map method
// it similar like forEach method
// diffrence is to create new array

let  nums = [12,453,2325];
let num = nums.map((val)=>{
    return val+val;
});
let mull = nums.map((val)=>{
    return val*val;
})
console.log(nums);
console.log(num);
console.log(mull);

// filter method

let newarr = nums.filter((val)=>{
    return val % 2==0 ;
})
console.log(newarr);
// reduce method 
// it used to find the sum of array
// one result and second is current 

let redarr = nums.reduce((res,cur)=>{
    return res+cur;
})

console.log(redarr);

let marks = [90,34,56,98,99,34];
let toppers = marks.filter((val)=>{
    return val  >  90;
});
console.log(toppers);

// create an array what user will send n as a data

let n = prompt("enter the number ");
let arr1= [];
for(let i=1;i<=n;i++){
    arr1[i-1]=i;
    
}
console.log(arr1);
let ank = arr1.reduce((prev,cur)=>{
    return prev+cur;
});
console.log(ank);

let jk = arr1.reduce((res,cur)=>{
    return res*cur;
})
console.log(jk);
