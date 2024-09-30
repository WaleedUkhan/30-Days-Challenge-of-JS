// let myName = "naveed";

// function outer(){
//     let name = "Waleed";
//     function inner(){
//         console.log(myName);
//         console.log("Inner Function",name);//it will print Waleed 
//     }
//     function innerTwo(){
//         // console.log("InnerTwo:", name);
//         console.log("InnerTwo:", myName);
//     }

//     inner();
//     innerTwo();
// }
// outer();
// // console.log("TOO OUTER:", name);


// function myClosure(){
//     let privateCounter = 0;
//     function One(){  
//         console.log("Current Value:", privateCounter);
//     }
//     function Two(){
//         privateCounter+=1;
//         console.log("INCREMENTED VALUE: ",privateCounter);
//     }
//     One();
//     Two();
// }

// myClosure();

function myClosure() {
    let privateCounter = 0;

    function getCurrentValue() {
        console.log("Current Value:", privateCounter);
        return privateCounter; // return the current value
    }

    function incrementValue() {
        privateCounter += 1;
        console.log("Incremented Value:", privateCounter);
        return privateCounter; // return the incremented value
    }

    return {
        getCurrentValue,
        incrementValue
    };
}

const counter = myClosure();

// Now you can call the functions independently
counter.getCurrentValue(); // Outputs: Current Value: 0
counter.incrementValue();  // Outputs: Incremented Value: 1
counter.getCurrentValue(); // Outputs: Current Value: 1
counter.incrementValue();  // Outputs: Incremented Value: 2
