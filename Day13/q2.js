
// function getID(){
//     let uID = Math.floor(Math.random()* 5)+ 1;
//     return uID;
// }

// function lastID(){
//     let id = getID();
//     console.log("Lastly Created ID:", id);
//     id+=1;
//     console.log("Incremented ID:", id);
// }
// lastID();

function main(){

    let privateID = 0;

    function getID(){
        privateID+=1;
        return privateID;
    }
    return getID;
}
const generateID = main();

console.log(generateID());
console.log(generateID());
console.log(generateID());


// function main() {
//     let privateID = 0;

//     function getID() {
//         privateID += 1;
//         return privateID;
//     }
    
//     return getID;
// }

// const generateID = main();  // Store the returned function from main

// console.log(generateID());  // Outputs: 1
// console.log(generateID());  // Outputs: 2
// console.log(generateID());  // Outputs: 3
