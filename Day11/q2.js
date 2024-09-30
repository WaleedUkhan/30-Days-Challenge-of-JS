

const { add, subtract, multiply, divide } = require('./q2import.js');

const num1 = 10;
const num2 = 5;

console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}.`);
console.log(`The difference of ${num1} and ${num2} is ${subtract(num1, num2)}.`);
console.log(`The product of ${num1} and ${num2} is ${multiply(num1, num2)}.`);
try {
  console.log(`The division of ${num1} by ${num2} is ${divide(num1, num2)}.`);
} catch (error) {
  console.error(error.message);
}
