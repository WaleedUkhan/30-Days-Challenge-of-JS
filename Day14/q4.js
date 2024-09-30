function isPalindrome(str){
      // Remove non-alphanumeric characters and convert to lowercase
      str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

       // Recursive helper function
    function checkPalindrome(left, right) {
        // Base case: If the left index is greater or equal to the right index, it's a palindrome
        if (left >= right) {
            return true;
        }
        // Check if the characters at the current indices are the same
        if (str[left] !== str[right]) {
            return false;
        }
        // Move towards the middle
        return checkPalindrome(left + 1, right - 1);
    }

     // Start the recursive check from the ends of the string
     return checkPalindrome(0, str.length - 1);
}

// Test cases
const testCases = [
    "A man, a plan, a canal, Panama",
    "racecar",
    "hello",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "Waleed"
];

testCases.forEach(testCase => {
    console.log(`"${testCase}" is a palindrome: ${isPalindrome(testCase)}`);
});