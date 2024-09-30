//custom Error Class 
class CustomError extends Error {
    constructor(message) {
      super(message); // Pass the message to the built-in Error constructor
      this.name = "CustomError"; // Set the name property to the custom error name
    }
  }

  //function Throwing Custom Error 
  function riskyFunction() {
    throw new CustomError("This is a custom error message.");
  }

  //Handling with Try-catch block 

  try {
    riskyFunction();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Custom error caught: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error.message}`);
    }
  } finally {
    console.log("Execution finished, error or not.");
  }
  
  
  