// Define multiple promises
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 1"), 5000); // Resolves after 1 second
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 2"), 2000); // Resolves after 2 seconds
  });
  
  const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Result from promise 3"), 1500); // Resolves after 1.5 seconds
  });

   //Promis.All
  Promise.all([promise1,promise2,promise3])
  .then(results=>{
    console.log('All results:', results);
  })
  .catch(err=>{
    console.log('Error', err);
  })

 //Promis.race
Promise.race([promise1,promise2,promise3])
.then(result=>{
    console.log("The First Promise Resolved is:",result);
})
.catch(err=>{
    console.log(err);
})