class student{
    constructor(name,roll){
        this.name = name;
        this.roll = roll;

        student.totalStudent++; //Increasing the static property 
    }

//static method ki zarorat nahi the but practice k liye bna diyya  ha 
    static totalStds(){
        return `inside Static method : ${student.totalStudent}`; //static Method
    }

}

student.totalStudent = 0;//static property 


//instances of Student class 

const std1 = new student("Ali", 37);
const std2 = new student("Waleed", 27);
const std3 = new student("Waqas", 1);
const std4 = new student("Eleven", 11);

//Getting static property
console.log(`Total student Found in this Class are: ${student.totalStudent}`);


//Getting Static Method 
// console.log(student.totalStds());