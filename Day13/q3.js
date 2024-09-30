function outer(name){
    function InnerGreet(){
        return(`Hello Mr: ${name}, and Welcome to Closures `);

    }
   return InnerGreet();
}
console.log(outer("Waleed "));
console.log(outer("Zahoor Khan "));