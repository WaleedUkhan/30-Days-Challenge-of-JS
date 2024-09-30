function myLogic(arr, trgNum){
    // The outer (i) loop is used to pick the first number from the array.

    for(let i = 0; i < arr.length; i++){

        // The inner loop is used to pick the second number from the array, starting from the element right after the one chosen by the outer loop. 
        
        for(let j =i + 1; j < arr.length; j++ ){
            if(arr[i] + arr[j] === trgNum){
                return [i,j];
            }
        }
    }
    return null;
}
console.log(myLogic([1,4,5,2,4,6], 7));// [0,5] return the indices of numbers which are added 

