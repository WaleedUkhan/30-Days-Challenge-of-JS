

// ++++++ My First Try to solve a leetcode problem I failed but nice try. 

// let arr = [2,3,5,6,7]
// function arrOfint(arr,target){
//     let addTwototarget = target + arr[0] + arr[1];
//     console.log(addTwototarget);
//     let indices = arr[0] + " " + arr[1];
//     let indexes = arr.indexOf(2) + " " + arr.indexOf(3);

//     console.log(indexes);
//     console.log(indices);
//     return indices;
// }
// console.log(arrOfint(arr, 4));
// arrOfint(arr,2);


//+++++ correct Approach to solution 


// function findIndices(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null; // Return null if no pair is found
// }

// // Test cases
// let arr = [2, 3, 5, 6, 7];

// console.log(findIndices(arr, 9)); // Output: [0, 4] (because arr[0] + arr[4] = 2 + 7 = 9)
// console.log(findIndices(arr, 10)); // Output: [1, 4] (because arr[1] + arr[4] = 3 + 7 = 10)
// console.log(findIndices(arr, 4)); // Output: null 
// console.log(findIndices(arr, 12)); // Output: [2,4] (because arr[2] + arr[4] = 5 + 7 = 12)



function indices(myArr, myTrg){

    for(let i = 0; i < myArr.length; i++){
        for(let j = i+1; j < myArr.length ; j++){
            if(myArr[i] + myArr[j] === myTrg){
                return [i,j];
            }
        }
    }
    return null; //no pair found
}

//Test case 
const myArr = [4,1,6,3,9,5];

console.log(indices(myArr, 12)); // myArr[3] = 3 , myArr[4] = 9 i-e 3+9 = 12
console.log(indices(myArr, 8));  // myArr[3] = 3 , myArr[5] = 5 i-e 3+5 = 8  
console.log(indices(myArr, 14)); // myArr[4] = 9 , myArr[5] = 5 i-e 9+5 = 14 
console.log(indices(myArr, 2)); 
console.log(indices(myArr, 0));
console.log(indices(myArr, 13));