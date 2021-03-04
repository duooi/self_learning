let s1 = Symbol()
let s2 = Symbol()

console.log(s1 == s2)

let s3 = Symbol('foo')
let s4 = Symbol('bar')

console.log(s3, s4)

let obj = {
  name : 'obj',
  toString(){
    return this.name
  }
}

let s5 = Symbol(obj)

console.log(s5)
console.log(s5.description)

let s6 = Symbol.for('foo')
let s7 = Symbol.for('foo')

// Symbol.for 声明的Symbol变量在全局作用域中，因此描述相同的情况下s6 == s7
console.log(s6 == s7)
// 在当前作用域下寻找有无s6这个symbol变量，有的话返回key
console.log(Symbol.keyFor(s6))


