function countOcc(str){
    let countChar = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i];//  char string a aik character 
        // console.log(char);
        
        if(countChar[char]){
            countChar[char]++;
        }
        else{
            countChar[char] = 1;
        }

    }
    return countChar;
}

let myStr = countOcc("w ele e-d");
console.log(myStr);
