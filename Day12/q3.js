// class Car{
//     constructor(name){
//         this.name = name;
//     }
//     static Hello(){
//         return("Hello Honda Civic");
//     }
// }

// const myCar = new Car("honda Civic");
// let result = Car.Hello();
// console.log(result);
// console.log(myCar.Hello()); //raising a typeError 

class person {
    constructor(name){
        this.name = name;
        // this.age = age;
    }
    static greetPerson(name){
        return `Hello G kaise ho MR: ${name}`;
    }
}
const person1 = new person("Zunair");
console.log(person1);
console.log(person.greetPerson("Naveed"));
//static ka simple hi funda ha k ye method directly class per lago hota ha. class k objects per error deta ha. 
