let BookObj = {
    title: "The Art of Laziness",
    author: "Naveed Khan",
    price: 200,
    publishingYear: 2016,

     // methodOne: ()=>{
    //     return(`title name is : ${BookObj.title} and athor name is : ${BookObj.author}`);
    // },

    // methodTwo: ((year)=>{
    //     return (`The publishin year is NOW: ${year}`)
    // }), 

    methodThree: function(){
        return `Book title: ${this.title}, and Book releasing year: ${this.publishingYear}`;
    }

}

// console.log(BookObj);
// console.log(BookObj.author);
// console.log(BookObj.price);
// console.log(BookObj.methodOne());


// let res = BookObj.methodTwo(2014);
// console.log(res);

// console.log(BookObj.methodThree());


for(let i in BookObj){
    console.log(BookObj[i]);
    // console.log(i);
}
