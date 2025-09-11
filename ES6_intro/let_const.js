const name = 'Bangladesh';
// name = 'bd';//Const variables can not be modified

// In JavaScript, 
// const does not mean immutable (unchangeable).

// It only means: 
// 👉 You cannot reassign the variable to a new value.

let price = 213123;
price = 222; // let variables cab be modified.

console.log(price);

// console.log(device)
var device = 'laptop'


// Objects and Arrays

// Objects and arrays are reference types.

// A const variable
//  that holds an object/array cannot be reassigned to a new object/array,
//  but the contents of the object/array can still be modified.

const obj = {name:'hasan', age:23, country:'UAE'}

obj.city ='Dubai';
console.log(obj)

Object.assign(obj, {hobby:"coding"})

console.log(obj)

