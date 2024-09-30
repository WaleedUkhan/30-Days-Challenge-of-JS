function memoize(fn) {
    // Step 2: Create a cache to store results of previous computations
    const cache = {};

    // Step 3: Return a new function that uses the cache
    return function(...args) {
        const key = JSON.stringify(args); // Use arguments as the cache key

        if (key in cache) {
            return cache[key]; // Return cached result if exists
        } else {
            const result = fn(...args); // Compute result
            cache[key] = result; // Store result in cache
            return result; // Return computed result
        }
    };
}

// Example usage:

// A function to compute factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // 120, computed
console.log(memoizedFactorial(5)); // 120, cached
console.log(memoizedFactorial(6)); // 720, computed
console.log(memoizedFactorial(6)); // 720, cached
