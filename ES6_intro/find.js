const numbers = [12,4,5,1,0,9,4];

numbers.sort((a,b) => a - b)
const result = numbers.find(x => x > 5);

console.log(result)

