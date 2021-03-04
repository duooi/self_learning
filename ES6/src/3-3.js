class Person{
  constructor(name, age){
    this.name        = name
    this.age         = age
    this._gender     = 0
  }
  get gender(){
    return this._gender
  }
  sayName(){
    console.log(this.name)
  }
  // 静态方法
  static sayHello(){
    console.log('Hello static')
  }
}

var person = new Person('李四',18)

Person.sayHello()

class Coder extends Person{
  constructor(name,age,company){
    super(name,age)
    // 添加自己的属性
    this.company = company
    this._sex    = 0
  }
  get sex(){
    return this._sex == 1 ? 'male' : 'female'
  }
  set sex(val){
    this._sex = val
  }
  sayCompany(){
    console.log(this.company)
  }
}

var coder = new Coder('张三',28,'百度')

coder.sex = 1

console.log(coder.sex)
console.log(coder.gender)
Coder.sayHello()