let myObj = {
    name: "waleed ",
    email: "abc@gmail.com",
    phone: "0230-123456",
    address: "Madina town",
    College: "Govt Deg-1",
    Shop:[
        {
            name1:"chai biscuits",
            location:"Kachehri"
        },
        {
            size: "2-rooms",
            Bill: "very High"
        }
    ]
}

for(key in myObj){
    // console.log(key);
    console.log(myObj[key]);
}