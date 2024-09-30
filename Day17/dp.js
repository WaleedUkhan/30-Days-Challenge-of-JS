function dp(n){
    //Base  cases 
    if(n === 0 ) return 0;
    if(n === 1) return 1;

    //Array to store the Fibonacci numbers up to N 
    let fib = new Array(n + 1);

    //Initializing Base cases 

    fib[0]= 0; 
    fib[1]= 1;

    //Fill the array using the relationship F(n) = F(n-1) + F(n-2)
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    //result for F(n)
    return fib[n];

}
console.log(dp(10));

// let res = dp(9);
// console.log(res);

// 0 + 1 + 1  + 2 + 3 + 5 + 8 + 13 + 21 + 34 = 55
