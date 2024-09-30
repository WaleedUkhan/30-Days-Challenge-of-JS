function reverseInteger(number) {
    // Convert the number to a string and remove the negative sign if present
    const isNegative = number < 0;
    let reversedString = Math.abs(number).toString().split('').reverse().join('');

    // Convert the reversed string back to an integer
    let reversedNumber = parseInt(reversedString, 10);

    // If the original number was negative, make the reversed number negative
    if (isNegative) {
        reversedNumber *= -1;
    }

    return reversedNumber;
}

// Test cases
console.log(reverseInteger(12345));  // Output: 54321
console.log(reverseInteger(-987));   // Output: -789
console.log(reverseInteger(1000));   // Output: 1 (leading zeros are dropped)
console.log(reverseInteger(-1000));  // Output: -1 (leading zeros are dropped)
console.log(reverseInteger(0));      // Output: 0 (reversing 0 is still 0)
