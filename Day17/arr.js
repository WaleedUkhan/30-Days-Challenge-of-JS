// function rotateArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let rotedArr = arr.slice(1).concat(arr[0]);
//     // console.log(rotedArr);
//     return rotedArr;
//   }
// }
// let myArr = [5, 4, 3, 2, 1];
// let res = rotateArr(myArr);
// console.log(res);

//Q1 

// function rotateN(arr, N){
//     N = N % arr.length; // Ensures that N  is within the bounds of the array length.
//     return arr.slice(N).concat(arr.slice(0,N));
// }
// let arr = [9,3,5,11,13];
// let N = 2;
// let rotatedArr = rotateN(arr, N);
// console.log(rotatedArr);// [13,11,5,3,9]


//Q2 

function twoSortedArr(arr1, arr2){
    let merge =  arr1.concat(arr2);

    merge.sort((a,b)=> a - b);
    return merge;
   
}

let arr1 = [3,4,1,2];
let arr2 = [7,8,9,12];
let res = twoSortedArr(arr1 , arr2);
console.log(res);
