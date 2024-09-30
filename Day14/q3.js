// function reverseStr(str){
//     if(str.length === ''){
//         return 0;
//     }
//     return str.split('').reverse().join('');
// }
// console.log(reverseStr("Waleed"));

//Recursive funtion 

function reverseStr(str){
        if(str === ''){
            return '';
        }

        //what substring DO: 
        //obviously gives a portion of string, takes two params (startIndex, endIndex). startIndex is must.endIndex is optional
        return reverseStr(str.substring(1)) + str[0];
    }

console.log(reverseStr("Hello"));
