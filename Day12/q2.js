// class College {
//     constructor(name){
//         this.collegeName = name;
//     }
//     get cName(){
//        return this.collegeName;
//     }
//     set cName(D){
//         return this.collegeName = D;
//     }
// }
// let c1 =new College("GOVT DEGREE COLLGE NO.1");
// console.log(c1);



//Getters and Setters 


// class Person {
//     constructor(fName, lName){
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//     get FullName(){
//        return this.firstName + " " +  this.lastName;
//     }

//     set FullName(x){
//         return this.FullName = x;
//     }
   
// }
// let per1 = new Person("Mamoon", "Khan");
// console.log(per1);


// per1.FullName = "Ali Ahmed";
// console.log(per1.firstName); 
// console.log(per1.lastName); 


//Corrected Code of above quetion 

class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    get FullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set FullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let per1 = new Person("Mamoon", "Khan");
console.log(per1.FullName); // Mamoon Khan

per1.FullName = "Ali Ahmed";
console.log(per1.firstName); // Ali
console.log(per1.lastName);  // Ahmed
