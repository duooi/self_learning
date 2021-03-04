// 码点
// console.log('\u20BB7')
// console.log('\u{20BB7}')

// 字符串遍历
// let string = 'imooc'
// for(let s of string){
//   console.log(s)
// }

// 模板字符串
// let s1 = `imooc`
// let name = 'Doogie'

// s1 = `imooc${1 + 2}`
// s1 = `imooc${name}`
// s1 = `<h1>
//         你好啊
//       </h1>`

// console.log(s1)

// es6 方法
// let s1 = 'imooc'

// console.log(String.fromCodePoint(0x20BB))
// console.log(String.fromCodePoint(0x20BB7))

let s1 = 'imooc'

console.log(s1.includes('im'))
console.log(s1.startsWith('im'))
console.log(s1.endsWith('oc'))
console.log(s1.repeat(3))