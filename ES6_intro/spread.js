const numbers = [2,50,54,0,1]
console.log(numbers)

const spreadNum = [...numbers];
console.log(typeof(spreadNum))

const max = Math.max(23,4,1,0,55,100);
console.log(max)

const newMax = Math.max(...numbers)
console.log(newMax)

const employee = {name:'Helan', age:25}
const details ={...employee,city:'turkey'}
console.log(details)

const newSpreadArr = [12,5,6,details,...numbers, 45]
console.log(newSpreadArr)