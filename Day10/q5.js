// const randomPromis = new Promise((res,rej)=>{
//     const isSuccess =  Math.random() >= 0.5;
//     setTimeout(()=>{
//         if(isSuccess){
//             res("The Operation was successfull");
//         }
//         else{
//             rej(new Error("Operation Failed"));
//         }
//     }, 1000)
// })

// randomPromis
// .then((message)=>{
//     console.log("Success:", message);
// })
// .then((error)=>{
//     console.error("failed:", error);
// })


// Create a promise that randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() >= 0.5; // Randomly decide success or failure
    setTimeout(() => {
      if (isSuccess) {
        resolve("The operation was successful!");
      } else {
        reject(new Error("The operation failed!"));
      }
    }, 1000); // Simulate an asynchronous operation with a timeout of 1 second
  });
  
  // Handle the promise
  randomPromise
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  