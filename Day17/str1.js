// let str = "Waleed Khan";
// let subStr = str.substring(7);
// console.log(subStr);

function longestSubStr(str) {
  let charMap = {};
  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charMap[char] !== undefined && charMap[char] >= start) {
      start = charMap[char] + 1;
    }

    charMap[char] = i;

    let currentLength = i - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }
  console.log(maxLength);
  
}

longestSubStr("zarori to nahi k sara string aik hi flow me xbcd9opquww");
