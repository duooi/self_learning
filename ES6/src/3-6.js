// Map
let m1 = new Map()

m1.set('name','map').set({
  attr : 'name'
},'map')

m1.delete('name')

console.log(m1.has('name'))

console.log(m1)

// WeakMap
let m2 = new WeakMap()

const obj = {
  attr : 'name'
}

m2.set(obj,'weakMap')

console.log(m2.get(obj))