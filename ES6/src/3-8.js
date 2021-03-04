// y修饰符
// const str = 'abc_ac_b'
// const reg1 = /[^_]+/y
// const reg2 = /[^_]+/g

// console.log(reg1.exec(str))
// console.log(reg1.exec(str))
// console.log(reg1.exec(str))

// console.log(reg2.exec(str))
// console.log(reg2.exec(str))
// console.log(reg2.exec(str))

// u修饰符
const str = '\uD842\uDFB7'

const reg = /\uD842/u

console.log(reg.test(str))

