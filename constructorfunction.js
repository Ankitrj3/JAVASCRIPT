const sum = new Function('a','b','return a+b');
console.log(sum(12,34))

const disvide = new Function('j','m','return j/m');
console.log(disvide(36,12))

const sub = new Function("a","b","return a-b");
console.log(sub(34,2))


let a = new Function('a','b','return a+b');
console.log(a(12,34))