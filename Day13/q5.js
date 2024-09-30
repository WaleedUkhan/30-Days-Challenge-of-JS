// Step 1: Initialize an array to store the functions
const functionArray = [];

// Step 2: Create a loop to iterate over the desired number of times
for (let i = 0; i < 10; i++) {
    // Step 3: Define a function inside the loop using a closure
    functionArray.push((function(index) {
        return function() {
            console.log(index);
        };
    })(i));
}


// Step 5: Call each function to verify it logs the correct index

for (let j = 0; j < functionArray.length; j++) {
    functionArray[j]();  // Should log 0, 1, 2, ..., 9
}