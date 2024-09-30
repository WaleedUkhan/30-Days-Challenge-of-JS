async function myAsyncFun(){
    try {
        let result = await new Promise((res, rej)=>{
            setTimeout(()=>{
                res("Promis is resolved in 2 seconds")
            }, 2000)
        }); 
        console.log(result);
    } catch (error) {
        console.log("An error Occured",error);
    }
}
myAsyncFun();