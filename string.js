const name = "ankit"
const repocount = 50

console.log(name+repocount)

console.log(`your name is ${name} and your repo count is ${repocount}`)//this method is know as string metopolation
//now a days we are using htis method to add concat the varibles with string

const name1 = new String('ankit')

console.log(name1[2])

let n ="ankir";
console.log(n[2])

console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.charAt(1))
console.log(name1.replace('a','l'))
console.log(name1.search('t'))
console.log(name1.substring(0,2))
console.log(name1.slice(-5,3))

const ankit ="      ankir      "
console.log(ankit)
console.log(ankit.trim())//it remove the unused spaces only from the string

const email = "ankitrobinranjan@gmail.com"
console.log(email.replace("robin","Rj"))
console.log(email.includes("@gmail.com"))//it check wheater the data exist or not

const a = 'lovely professional university punjab'

const k = new String('rj ankit')
console.log(typeof(k))

const j ="jammy trigger";
console.log(typeof(j))

const m ="2+2";
console.log(eval(m))
const nk = new String(m)
console.log(eval(nk))
// eval function is used for adding the numbers in one variables

let hj = "2+3+4+4"
console.log(eval(hj))
console.log(eval(hj.valueOf()))

const kl = "ankita! "
console.log(kl.repeat(3))

console.log(`your name will reapeat 5 times ${kl.repeat(5)}`)

const hm = a.split(' ')
console.log(hm[2])

const ss = new String('joony jonny yes papa !')
console.log(ss)
console.log(ss.valueOf())
