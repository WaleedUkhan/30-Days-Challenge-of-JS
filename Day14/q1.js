// function factorial(n){
//     if(n<=1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(6));


function fibonaci(n){
    if(n<=1) return 1;

    return fibonaci(n-1) + fibonaci(n-2);
}
console.log(fibonaci(8));
console.log(fibonaci(10));
console.log(fibonaci(11));
