const numbers = [2,24,6,1,7,0,1];
const double = []

for(const num of numbers){
    const res = num*2;
    double.push(res);
}

console.log(double)

// using map to achieve the same thing

// call back function
const doubleIt = x => x*2;

// const doub = numbers.map(doubleIt)
const doub = numbers.map((x)=> x * 2)

const friends =['rakib', 'nokib', 'akib', 'sadik']

const resultArr = friends.map((name, index) =>{
    console.log(name.length, index);
})

console.log(doub)