var arr = [1, 2, 3, 4, 5,"ankir",true, {name: "ankir", age: 23}, [1,2,3,4,5]];

// foreach loop , map , filter , find , indexOf 

var a = [1,2,34,344,3,6];
// forEach
a.forEach(function(val){
    console.log(val + "Hello");
})

// map 
var newArr = a.map(function(val){
    return 13+val;
})
console.log(newArr);

// filter
var NewArrFilter = a.filter(function(val){
    if(val < 10){
        return true;
    }
})

console.log(NewArrFilter);

// find

var Newfind = a.find(function(val){
    if(val == 3){
        return val;
    }
})
console.log(Newfind);

// indexOf
console.log(a.indexOf(344));
console.log(a.indexOf(11)); // it return -1 if element is not present in array

// objects

var obj = {
    name : "ankit",
    age : 23,
    isStudent : true,
    address : {
        city : "Delhi",
        state : "Delhi"
    },
}
Object.freeze(obj); // it will not allow to change the value of object
console.log(obj.name);
console.log(obj.address.city);
console.log(obj.address);

// function length

function add(a,b){
    return a+b;
}
console.log(add.length);

// Asyn
async function abdc(){
    var blob = await fetch("https://jsonplaceholder.typicode.com/posts");
    var ans = blob.json();
    console.log(ans);
}
abdc();