function noCode(){
    return("Inside the Try Block and now it will Work");
}
try {
    let res = noCode();
    console.log(res);
    
} catch (error) {
    console.error(error.message);
}
finally{
    console.log("Finally Some results are produces ");
}