// function BinarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){
//         const mid = Math.floor((left + right)/ 2);

//         if(arr[mid] === target){
//             console.log("target found at index:");
//             return mid;
//         }else if(arr[mid] < target){
//             left = mid + 1; //search in the right half
//         }else{
//             right = mid - 1;//seach in the left half
//         }
//     }
//     return -1;//Target Not Found
// }

// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// console.log(BinarySearch(sortedArray,9));//returns index number i-e 4
// console.log(BinarySearch(sortedArray,14));//returns -1 if index not exists 
// console.log(BinarySearch(sortedArray,1));



//+++++++++++ using Recursion function +++++++++++


function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: If the search space is invalid, return -1
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found at index mid
    }

    // If target is smaller than middle element, search in the left half
    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }

    // If target is larger than middle element, search in the right half
    return binarySearchRecursive(arr, target, mid + 1, right);
}

// Test cases
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(`Index of 7: ${binarySearchRecursive(sortedArray, 7)}`);   // Output: 3 (index of 7 in the array)
console.log(`Index of 14: ${binarySearchRecursive(sortedArray, 14)}`); // Output: -1 (14 is not in the array)
console.log(`Index of 1: ${binarySearchRecursive(sortedArray, 1)}`);   // Output: 0 (index of 1 in the array)
console.log(`Index of 19: ${binarySearchRecursive(sortedArray, 19)}`); // Output: 9 (index of 19 in the array)
