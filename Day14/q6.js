function countOcc(arr, maxOcc, index = 0){
    if(index > arr.length){
        return 0;
    }

    // Check if the current element is the target
     const countAtCurrentIndex = arr[index] === maxOcc ? 1 : 0;

    // Recursively count occurrences in the rest of the array
    return countAtCurrentIndex + countOcc(arr, maxOcc, index + 1);

}

// Test cases

const array = [1, 2, 3, 2, 4, 2, 5, 2];

console.log(`Occurrences of 2: ${countOcc(array, 2)}`);  // Output: 4
console.log(`Occurrences of 5: ${countOcc(array, 5)}`);  // Output: 1
console.log(`Occurrences of 10: ${countOcc(array, 10)}`); // Output: 0
console.log(`Occurrences of 1: ${countOcc(array, 1)}`);  // Output: 1