//Pre-requisits <<<<<

//Async, Await, setTimeOut, setInterval <<<<

//          >>>>>>setTimeout((), timeInMilliSeconds)
//  console.log("Start");
// setTimeout(() => {
//   console.log("This message is delayed by 2 seconds");
// }, 2000);
// console.log("End");



//          ,,,,setInterval and clearInterval,,,,

// let count = 0; 
// const intervalID = setInterval(()=>{
//     count += 1;
//     console.log(`This message is logged every 2 second. Count: ${count}`);

//     if(count === 6){
//         clearInterval(intervalID);
//         console.log("Stopped by ClearInterval");
//     }
// }, 2000)

//Basic syntax of Promise 

// const myPromise = new Promise((res, rej)=>{
//     const count = 15;
//     if(count === 15){
//         res("Success");
//     }
//     else{
//         rej("Failed");
//     }
// }); 

// myPromise
// .then((mesg)=>{
//     console.log(mesg);
// })
// .catch((err)=>{
//     console.log(err);
// });


const message = new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("THis is REJECTED but after 2 seconds ");
        }, 2000)
})
message
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})