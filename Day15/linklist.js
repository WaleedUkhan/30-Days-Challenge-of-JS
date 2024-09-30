// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// //creating Nodes 
// const node1 = new Node(3);
// const node2 = new Node(5);
// const node3 = new Node(13);
// const node4 = new Node(2);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// let currentNode = node1;
// while (currentNode) {
//     process.stdout.write(currentNode.data + " -> ");
//     currentNode = currentNode.next;
// }
// console.log("null");

//Excerise quesiton NO.1

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(4);
const node2 = new Node(2);
const node3 = new Node(5);

node1.next = node2;
node2.next = node3; 

let currNode = node1;
while(currNode){
    process.stdout.write(currNode.value + " -> ");
    currNode = currNode.next;
}

// console.log(value);
console.log(null);
