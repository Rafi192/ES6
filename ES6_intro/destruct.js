// object and array destructuring

const product =  {name:'shirt', price:500, quantity: 7};

const price = product.price;

const discount = product.price*20/100;
const youPay = product.price - discount
const vatAmount = product.price* 7/100;

const totalAMount = youPay + vatAmount;

console.log(totalAMount)

const arr = [12,4,19,24];
const [first,second] = arr;
console.log(first)

