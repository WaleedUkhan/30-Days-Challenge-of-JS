//Custom Error Class
class validationError extends Error{
    constructor(message){
        super(message),
        this.name= "validationError";
    }
}

//Validation input 

function validatInput(input){
    if(!input || input.trim() === ""){
        throw new validationError("Input can not be Empty");
    }
    return "Valid Input: " + input;
}


try {
    let userInput = "waleed Khan";
    let result = validatInput(userInput);
    console.log(result);
} catch (error) {
    if(error instanceof validationError){
        console.error(`Validation Error ${error.message}`);
    }else{
        console.error(`An unexpected error Occured ${error.message}`);
    }
}
finally{
    console.log(`Validation process completed`);
}