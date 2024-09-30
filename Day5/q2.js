// // Concept of Nested Objects 
// let person = {
//     name: "John Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA"
//     },
//     hobbies: [
//       {
//         name: "Reading",
//         type: "Educational"
//       },
//       {
//         name: "Gaming",
//         type: "Entertainment"
//       }
//     ],
//     getDetails: function() {
//       return `${this.name} lives at ${this.address.street}, ${this.address.city}, ${this.address.country}.`;
//     }
//   };
  
//   console.log(person.name); // "John Doe"
//   console.log(person.address.city); // "New York"
//   console.log(person.hobbies[1].name); // "Reading"
//   console.log(person.getDetails()); // "John Doe lives at 123 Main St, New York, USA."

//Actual Question 

const libarary = {
    name: "MML",
    location: "Grid Road DIK", 
    BookDetails:[
        {
            BookName: "Eat That Frog First",
            Author: "James Bond"
        },
        {
            BookName: "EveryThing is Fucked",
            Author: "Mickle String"
        }, 
    ]
};

// console.log(libarary.BookDetails[1].Author);
// console.log(libarary.BookDetails[0].BookName);
// console.log(libarary.BookDetails[1].BookName);
// console.log(libarary);

// console.log(`Library Name: ${this.name}, location: ${this.location}`);

for(let k in libarary){
    console.log(libarary[k]);
    // console.log(k);
   
}

  