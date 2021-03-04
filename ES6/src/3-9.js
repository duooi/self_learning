// console.log(0B0101)
// console.log(0o101)
// console.log(0101)

console.log(Number.isFinite(123))
console.log(Number.isFinite(5/0))
console.log(Number.isFinite(Infinity))
// 凡是数字之外的值传入isNaN都为false
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(true))
console.log(Number.isNaN(false))
console.log(Number.isNaN('123'))
console.log(Number.isNaN('string'))

console.log(Number.isInteger(1))
console.log(Number.isInteger(1.1))

console.log(Math.trunc(1.1))
console.log(Math.trunc(1.1))
console.log(Math.trunc(1.1))