function BubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) { // n - 1 - 1 for 1st iteration and so on i-e n -2 - 1 , i -3 - 1
// The n - i - 1 condition in the inner loop ensures that the already sorted portion of the array is not rechecked, optimizing the process.

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

let arr = [9,2,7,5,8,4,1,32];
console.log("Sorted Array:", BubbleSort(arr));
