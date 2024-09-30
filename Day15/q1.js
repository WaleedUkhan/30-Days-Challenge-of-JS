//Finding Minimum value in an Array

// let arr = [4,5,9,1, 2,7,10];

// function minArr(arr){
//     let minVal = arr[0];
//     // console.log(minVal);
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]< minVal){
//             minVal = arr[i];
//         }
//     }
//     return minVal;
// }
// console.log(minArr(arr));

//++++ Finding Maximux value in an Array

// let arr = [4,3,5, 12,7,2,8];
// function maxArr(arr){
//     let maxVal = arr[0];
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > maxVal){
//             maxVal = arr[i];
//         }
//     }
//     return maxVal;
// }

// console.log(maxArr(arr));

//Array Bubble Sort

const arr = [7, 2, 5, 9, 11, 3, 4];
let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
         // Swap elements
         let temp = arr[j];
         arr[j] = arr[j + 1];
         arr[j + 1] = temp;
      }
    }
  }
console.log("Sorted Array:",arr);
