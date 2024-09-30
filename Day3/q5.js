//These both were very tough for me so I have taken help from AI

// function Outer(inner, times){
//     for(let i = 0; i<times; i++){
//         inner();
//     }
// }

// function sayHi(){
//     console.log("Hi everyOne");
// }

// Outer(sayHi, 4);

function applyFunctions(func1, func2, value) {
  let result1 = func1(value);
  let result2 = func2(result1);
  return result2;
}

// Example usage:
function double(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

let value = 5;
let finalResult = applyFunctions(double, addOne, value);
console.log(finalResult); // Outputs: 11
