class Node{
    constructor(value){ 
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(5);
const node2 = new Node(2);

const node3 = new Node(9);
// const node4 = new Node(3);
// const node5 = new Node(7);

node1.next = node2;
node2.next = node3;

// node3.next = node4;
// node4.next = node5;

//SIMPLE PRINTING 
console.log(node1);
console.log(node2);

// console.log(node3);
// console.log(node4);

// Print Through Loop
// let currentNode = node1;
// while(currentNode){
//     process.stdout.write(currentNode.value + "->");
//     currentNode = currentNode.next;
// }

// console.log(null);// Optional 