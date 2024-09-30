class Person {
   constructor(name,age){
     this.name = name;
     this.age= age;
   }
    methodOne(){
        return(`Hi mr ${this.name}`);
    }
    updatedAge(Age){
        return (`My updated Age is : ${Age}`);
    }
}

// let person1 = new Person("waleed", 21);
// console.log(person1);
// console.log(person1.methodOne());
// console.log(person1.updatedAge(25));

//Inheritance 

class Student extends Person  {
    constructor(name, age, studendtID){
        super(name,age);
        this.studendtID = studendtID;
    }
    getStdID(){
        return(`Here is the StdID: ${this.studendtID}`);
    }
    greet(upatedID){
        return(`updated stdID in Greeting Method: ${upatedID}`);
    }
}

let Std1 = new Student("Ali", 22, "12ABC");
// console.log(Std1);
// console.log(Std1.getStdID());
let res = Std1.greet("12102-67");
console.log(res);