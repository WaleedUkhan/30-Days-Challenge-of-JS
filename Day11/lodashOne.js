// main.js

const _ = import('lodash');

const numbers = [1, 2, 3, 4, 5, 6];
const shuffledNumbers = _.shuffle(numbers);

console.log(`Original numbers: ${numbers}`);
console.log(`Shuffled numbers: ${shuffledNumbers}`);
