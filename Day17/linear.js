function LinearSearch(arr, trgtVal) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === trgtVal)) {
      return i;
    }
  }
  return -1;
}

let arr = [3, 6, 8, 3, 9, 11, 15, 18];
// let trgtVal = 9; // 9 found at Index 4 
let trgtVal = 15; // 15 fount at index 6 
// let trgtVal = 25; // value not found

let result = LinearSearch(arr, trgtVal);

if (result !== -1) {
  console.log("Value: ", trgtVal, "Fount At Index :", result);
} else {
  console.log("Value:", trgtVal, "Not Found");
}
