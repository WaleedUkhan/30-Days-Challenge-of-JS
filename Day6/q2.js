// let arr = [10,12,13, 15, 21, "A", "H", 96];
// let [c,d, a, e] = [15,16, "A", 96];//Array se apni mrzi ki Values extract karna hi Destructuring hota ha.
// console.log(c);//ye to manual methods hen next ham is k liye specific method parhte hen ...Rest, ...Spread.
// console.log(d);
// console.log(a);
// console.log(e);


//Destructuring of Objects 

// let Obj = {
//     name:"Ali",
//     age: 12,
//     student: true,
//     Gender: "Male",
//     F_Name: "Mehmood"
// }

// let {name, age, F_Name} = Obj;
// console.log(name);
// console.log(age);
// console.log(F_Name);


//Destructuring of Nested Objects

const person = {
    name: 'John',
    address: {
      city: 'New York',
      zip: 10001
    }
  };
  
  const { address: { city, zip } } = person;
  console.log(city); // New York
  console.log(zip); // 10001
  
