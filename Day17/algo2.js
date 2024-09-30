function partition(array, low, high) {

  /*Purpose: This function is designed to rearrange the elements in a portion of the array, so that all elements less than or equal to a chosen pivot element are on its left, and all elements greater than the pivot are on its right. It then returns the final position of the pivot element. */

  const pivot = array[high];
  let i = low - 1; //means low is empty for the moment

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++; // added 1 to empty(low)

      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
      /*The element at index j is swapped with the element at index i. This effectively places the element array[j] in the correct position in the "less than or equal to pivot" section, while array[i] moves to the position of array[j]. */
    }
  }

  // Swap array[i + 1] and array[high] (the pivot)
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

function quicksort(array, low = 0, high = null) {
  if (high === null) {
    high = array.length - 1;
  }

  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quicksort(array, low, pivotIndex - 1);//recursive function on left-sub-Array
    quicksort(array, pivotIndex + 1, high);//recursive function on right-sub-Array
  }
}

// Example usage:
const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
quicksort(myArray);
console.log("Sorted array:", myArray);
