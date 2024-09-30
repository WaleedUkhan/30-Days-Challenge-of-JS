function BinarySearch(arr, targetVal){
    let left = 0;
    let right = arr.length -1;
//while me jo condition given he ye is k sboot ha k Array must be sorted from left to right. 
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === targetVal){
            return mid;
        }
        if(arr[mid] < targetVal){
              left = mid + 1;
        }
        else{
              right = mid -1;
        }
    }
   return -1;//if targetVal does not exists in arr 
}

let arr = [3, 6, 8, 12, 15, 18];//Array must be sorted 

let targetVal = 15;

let result = BinarySearch(arr, targetVal);

if(result !== -1){
    console.log("Value :", targetVal , "Found At Index: ", result );
}
else{
    console.log("Value: ", targetVal , "Not Found");
    
}