function SelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n ; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let minValue = arr.splice(minIndex, 1)[0];
    arr.splice(i, 0, minValue);
  }
  return arr;
}
let arr = [5, 4, 9, 7, 1, 8, 3];
let result = SelectionSort(arr);
console.log("Sorted Array:", result);
