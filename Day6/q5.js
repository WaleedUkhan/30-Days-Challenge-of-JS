// const name = "waleed";
// const age = 19;
// const gender = "male";

// const Obj = {
//     name, 
//     age,
//     gender, 
//     sayHello(){
//         return(`hello mr: ${name}`);
//     }
// }
// console.log(Obj.sayHello());

const e1 = "Ali";
const e2 = 23; 
const e3 = true

const eObj = {
    e1,
    e2,
    e3, 
    sayHello(){
        console.log(`HI ${this.e1} are You married ${thi.e3} `);
    },
    //computed method
    [`$ageAfterFive`] (){
        return e2 + 5;
    }
};

// console.log(eObj.$ageAfterFive()); 

//Question No.2 

// Variables to be used as property names
const prop1 = 'firstName';
const prop2 = 'lastName';
const prop3 = 'age';

// Values for the properties
const value1 = 'Alice';
const value2 = 'Smith';
const value3 = 25;

// Creating the object with computed property names
const person = {
  [prop1]: value1, // Computed property name
  [prop2]: value2, // Computed property name
  [prop3]: value3, // Computed property name
};

// Logging the object to the console
console.log(person);
