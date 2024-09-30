/*  >>>>>>SPREAD  OPERATOR : 
The spread operator is used to spread the elements of an iterable (like an array or object) into individual elements. It is useful for copying arrays, merging arrays, spreading elements into function arguments, and more.
*/

//Copying Array
const arr = [1,23,24, "Ali"];
const arr1 = [...arr];
// console.log(arr1);


//Merging Array
const a1 = [3,4,5];
const a2 = [6,7,8];
const a3 = [...a1, ...a2];
// console.log(a3);



/* >>>>>>REST OPERATOR: 
    The rest operator is used to collect multiple elements into an array or object. It is often used in function parameters to handle a variable number of arguments, or in destructuring to gather the remaining elements.
*/

function min(...values){
    return values.reduce((acc, curr)=> acc+curr);
}
// console.log(min(10,14,16,18));


//Question One  First method. 
const arrA = [2,3,4,5];
const arrB = [7,8,9,10];
const mergedAB = [...arrA, ...arrB];
// console.log(mergedAB);

//Second Method 
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];

// console.log(newArray);  // [1, 2, 3, 4, 5, 6]



//Second Question 

function sum(...nums){
    return nums.reduce((acc1, curr1)=> acc1 + curr1);
}
console.log(sum(5,3,2,12,8,6));