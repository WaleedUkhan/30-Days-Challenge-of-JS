// const arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);

//Array Map Method
let numbers = [2,4,6,8, 9];

let doubled1 = numbers.map((nums1)=> nums1 * 2);

let doubled2 = numbers.map((nums)=>{
    return nums * nums;
})

let doubled3 = numbers.map(function(num){
    return num - 3;
})

console.log(doubled1);
console.log(doubled2);
console.log(doubled3);