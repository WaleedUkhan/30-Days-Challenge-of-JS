//THE GWAL YOU HAVE EATEN 

// async function MyFun() {
//   try {
//     const myPromise = await new Promise((res, rej) => {
//       const success = false;
//       if (success) {
//         res("No Error to Show");
//       } else {
//         rej(new Error("There is an Error Cograts for Programing it "));
//       }
//     })

//     myPromise
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//   } catch (error) {
//     console.error("Error Message:", error.message);
//   }
// }
// console.log(MyFun());


//The correct Approuch 
async function handleRandomPromise() {
    const randomPromise = new Promise((resolve, reject) => {
      const isSuccess = Math.random() >= 0.5; // Randomly decide success or failure
      setTimeout(() => {
        if (isSuccess) {
          resolve("The operation was successful!");
        } else {
          reject(new Error("The operation failed!"));
        }
      }, 1000); // Simulate an asynchronous operation with a 1-second delay
    });
  
    try {
      const result = await randomPromise;
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  handleRandomPromise();
  