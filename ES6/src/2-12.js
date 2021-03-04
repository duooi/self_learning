// 检测数据类型
var checkType = value => {
  return Object.prototype.toString.call(value).slice(8,-1)
}

// 深拷贝
var deepClone = (obj) => {
  var result
  // 如果不是对象或者数组类型则返回值
  if(!checkType(obj) == 'Object' && !checkType(obj) == 'Array'){
    return obj
  // 如果是对象
  }else if(checkType(obj) == 'Object'){
    result = {}
  // 如果是数组
  }else if(checkType(obj) == 'Array'){
    result = []
  }
  // 遍历
  for(var key in obj){
    // 去除继承的属性
    if(obj.hasOwnProperty(key)){
      if(checkType(obj[key]) == 'Object' || checkType(obj[key]) == 'Array'){
        result[key] = deepClone(obj[key])
      }else{
        result[key] = obj[key]
      }
    }
  }
  return result
}



Object.prototype.foo = '123'

var obj = [{
  x : 1,
  y : 2,
  z : function(){},
  w : {
      a : 3,
      b : 4
  }
},1,2,'123']

// obj = [1,2,3]

console.log(deepClone(obj))