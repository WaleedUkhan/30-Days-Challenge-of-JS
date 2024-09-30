// function arrSum(arr){
//     if(arr.length === 0){
//         return 0;//base case
//     }
//     else{
//         return arr[0] + arrSum(arr.slice(1));//Recursive case 
//     }
// }
// console.log(arrSum([1,3,4,6,8]));
// console.log(arrSum([12,3,12,6,10]));

function maxOfarr(arr){
    if(arr.length === 0){
        return 0;
    }
    else{
         return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
    }
}
console.log(maxOfarr([12,14,15,61,16,17,45]));