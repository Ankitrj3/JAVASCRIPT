const balance = new Number(1000)
console.log(balance)
console.log(balance.valueOf())

console.log(balance.toString().length);
console.log(typeof balance)
console.log(balance.toFixed(2))//it fixed the decimals in values

const as = 132.2922
console.log(as.toPrecision(4))

const hun =12000000
console.log(hun.toLocaleString('en-IN'))//1,20,00,000

// *******************Maths***********************

// this is bydefault libaray which comes with javascript

console.log(Math.abs(-12))
console.log(Math.sqrt(34))
console.log(Math.round(23.344))
console.log(Math.pow(2,3))
console.log(Math.floor(23.4))
console.log(Math.min(12,34,2,3))
const arr = [12,34,45,2]
console.log(Math.max(...arr))
console.log((Math.random()*10)+1)

console.log(Math.floor(Math.random()*10)+1+10)