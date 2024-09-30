// let num = 1;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=5);

//Manual Method

// let num = 6;
// let fact = 1;
// do{
//     fact*=num;
//     num--;
// }
// while(num>=1);
// console.log(fact);

//JS script for this code

function factorial() {
  let num = 6;
  let fact = 1;
  do {
    fact *= num;
    num--;
  } while (num >= 1);
  console.log(fact);
}
factorial();
