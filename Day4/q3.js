// const arr = [1,2,3,4,5,6,8,13,18,19,21,23,26];

// let EvenNums = arr.filter((nums)=>{
//     if(nums%2==0){
//         return nums;
//     }
// })
// console.log(EvenNums);

// //Easy ALternative Code 
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4]


//reduce method  with Arrow Function

let arr = [2,4,6,8,9];
let sumUp = arr.reduce((acc,curr)=> acc + curr, 0);
console.log(sumUp);

//without Arrow Function 
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 2);
console.log(sum); // Output: 15

