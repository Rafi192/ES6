// Create a new array where each number is doubled.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((x) => x*2)

console.log(doubled);

// Create a new array where each number is converted to a string with a $ sign in front.

const toString = numbers.map((x)=> {
    x = `$${x}`;
})

console.log(toString)