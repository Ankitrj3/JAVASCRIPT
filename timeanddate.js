let mydate = new Date();
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toTimeString())
console.log(typeof mydate)
console.log(mydate.toJSON())
console.log(mydate.toISOString())
console.log(mydate.toUTCString())

let myd = new Date(2023,0,23,45,3)//in javascrpit month start with 0
console.log(myd)
console.log(myd.toString())

let dd = new Date("01-12-2023")
console.log(dd);
console.log(dd.toString())

let timestamp = Date.now()
console.log(timestamp);

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
console.log(newdate.getMonth()+1)//because the month starts with 0 that why i add +1 show month in better manner
console.log(newdate.getDate())
console.log(newdate.getFullYear())
console.log(newdate.getTime()/1000)
console.log(newdate.toString())


console.log(`the current date is ${newdate.getDate()} - ${newdate.getMonth()+1} - ${newdate.getFullYear()} and cuurent time is hour only ${newdate.getHours()}`)