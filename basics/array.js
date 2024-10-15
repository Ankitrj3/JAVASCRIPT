const arr =[1,2,4,45,23,2312,5,'ankit',true,24.3]

console.log(arr.reverse())

const a1 =["asnkd","ankit","robin","rocky"]
console.log(a1.concat(arr))

a1.push("sumit");
console.log(a1);
a1.pop();
console.log(a1);//it delete last value form array

a1.unshift(23);// add the element from first
console.log(a1)

console.log(a1.sort())

a1.shift();
console.log(a1);//delete from first

console.log(a1.includes("ankit"))

console.log(a1.join());
console.log(typeof(a1.join()));

// slice and splice

const ae = a1.slice(1,2)
console.log(ae)

const s = a1.splice(1,2)//it manipulate the original array 
console.log(a1);
console.log(s)