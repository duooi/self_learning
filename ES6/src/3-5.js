// 新的数据结构：set
// let s1 = new Set([1,2,3,2])

// s1.add('imooc').add('es6')

// console.log(s1)
// console.log(s1.has('imooc'))

// s1.delete('es6')

// s1.clear()

// 遍历
// for(let key of s1){
//   console.log(key)
// }
// for(let key of s1.keys()){
//   console.log(key)
// }
// for(let key of s1.values()){
//   console.log(key)
// }
// for(let key of s1.entries()){
//   console.log(key)
// }

// console.log(s1)

// 去重
// let s2 = new Set([5,6,3,8,3])

// console.log(s2)

// 合并去重
// let s3 = new Set([...s1, ...s2])

// console.log(Array.from(s3))

// Array.from(s1).filter(item => s2.has)

// 提取重复项
// let result = Array.from(s1).filter(item => s2.has(item))
// console.log(result)

// 提取非重复项
// let s1 = new Set([1,2,5,7,3])
// let s2 = new Set([4,8,7,6,2,1])

// let arr1 = Array.from(s1).filter(item => !s2.has(item))
// let arr2 = Array.from(s2).filter(item => !s1.has(item))

// let result = [...arr1, ...arr2]

// console.log(result)

// WeakSet 弱类型Set
const obj1 = {
  name : 'obj1'
}
const obj2 = {
  name : 'obj2'
}
let ws1 = new WeakSet()
let ws2 = new WeakSet()

ws1.add(obj1)
ws2.add(obj2)

// ws2.delete(obj2)

console.log(ws1.has(obj1))

console.log(ws1,ws2)

