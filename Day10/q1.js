// try {
//    let res = piDiv();
//    console.log(res);
// } catch (error) {
//    console.error( error.message);
// }

//Second question

//Ganda code 
// try {
//   function dividTwo() {
//     let a = 6;
//     let b = 0;
//     return a / b;
//   }
//   throw new Error("Denominator is Zero so it will produce an Error handle it Gracfully");
// } catch (error) {
//     console.error(error.message);
// }


//Optimized Code 

function dividTwo() {
    let a = 6;
    let b = 0;
  
    if (b === 0) {
      throw new Error("Denominator is zero, so it will produce an error. Handle it gracefully.");
    }
    
    return a / b;
  }
  
  try {
    let result = dividTwo();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
  