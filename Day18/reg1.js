//+++++++++ question 1
// const str = "JavaScript is a popular programming language. Many developers love JAVASCRIPT.";

// const regex = /JavaScript/gi; //g for: Global and i for case-insensitivty.

// const matches = str.match(regex);
// console.log(matches);

//++++++ 2nd question 

// const str = "The year is 2024 and the time is 12:45 PM.";
// const regex = /\d+/g;// \d for digits included in string 

// const matches = str.match(regex);
// console.log(matches);

// +++++ question 3 

// const str = "The quick Brown Fox Jumps Over the Lazy Dog.";
// const regex = /\b[A-Z][a-z]*\b/g; // \b is a word boundary, ensuring we match whole words.[A-Z] rep capital a to z. 

// const matches = str.match(regex);
// console.log(matches);

//+++++ question 4 


// const str = "In 2024, there are 365 days in a year, and 12 months.";
// const regex = /\d+/g;

// const matches = str.match(regex);
// console.log(matches);


//++++++ question 5 

// const phoneNumber = "(123) 456-7890";
// const regex = /\((\d{3})\) (\d{3})-(\d{4})/;

/*  

\( and \) match the literal parentheses.
(\d{3}) captures a sequence of exactly 3 digits (area code).
(\d{3}) captures a sequence of exactly 3 digits (central office code).
(\d{4}) captures a sequence of exactly 4 digits (line number).

*/

// const matches = phoneNumber.match(regex);
// if (matches) {
//   const areaCode = matches[1];
//   const centralOfficeCode = matches[2];
//   const lineNumber = matches[3];
  
//   console.log("Area Code:", areaCode);
//   console.log("Central Office Code:", centralOfficeCode);
//   console.log("Line Number:", lineNumber);
// } else {
//   console.log("No match found.");
// }



//+++++ question 6 

// const email = "waleedkhan@amazon.com";
// const regex = /^([^@]+)@([^@]+)$/;

// // ^ asserts the start of the string.
// // ([^@]+) captures one or more characters that are not @ (the username).
// // @ matches the literal @ character.
// // ([^@]+) captures one or more characters that are not @ (the domain).
// // $ asserts the end of the string.  

// const matches = email.match(regex);
// if (matches) {
//   const username = matches[1];
//   const domain = matches[2];
  
//   console.log("Username:", username);
//   console.log("Domain:", domain);
// } else {
//   console.log("No match found.");
// }




