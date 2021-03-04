let obj = {
  name : 'obj',
  age : 18,
  _password : '***'
}

obj = new Proxy(obj,{
  get(target,prop){
    return prop in target ? target[prop] : prop
  },
  set(target,prop,val){
    if(prop in target){
      target[prop] = val
    }else{
      console.log('error') 
    }
  },
  has(target,prop){
    return prop in target ? 'true' : 'false'
  },
  ownKeys(target){
    return Object.keys(target).filter(item => !item.startsWith('_'))
  }
})

console.log(obj.attr) 

obj.name = '111'
obj.attr = '123'

console.log(obj)
console.log('name' in obj)
console.log('attr' in obj)
console.log('other' in obj)

for(let key in obj){
  console.log(key)
}