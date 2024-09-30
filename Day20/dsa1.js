// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// const node1 = new Node(4);
// const node2 = new Node(3);
// const node3 = new Node(7);
// const node4 = new Node(2);

// node1.next = node2;

// node2.prev = node1;
// node2.next = node3;

// node3.prev = node2;
// node3.next = node4;

// node4.prev = node3;

// console.log("Traversing Forward");

// let currNode = node1;
// while(currNode){
//     process.stdout.write(currNode.data + "->");
//     currNode = currNode.next;
// }
// console.log(null);

// console.log("Traversing Backward");
// let bcurrNode = node4;
// while(bcurrNode){
//     process.stdout.write(bcurrNode.data + "<-");
//     bcurrNode = bcurrNode.prev;
// }
// console.log(null);

//Sinlgy Circular link-list

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// const node1 = new Node(6);
// const node2 = new Node(3);
// const node3 = new Node(7);
// const node4 = new Node(9);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// node4.next = node1;

// let currNode = node1;
// let stratNode = node1;

// process.stdout.write(currNode.data + "->");
// currNode = currNode.next;

// while (currNode !== stratNode) {
//   process.stdout.write(currNode.data + "->");
//   currNode = currNode.next;
// }

// console.log("....");


// Doubly Circular Link-List 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(13);
const node4 = new Node(2);

// Setting up the forward and backward links
node1.next = node2;
node1.prev = node4;  // Circular link

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;

node4.prev = node3;
node4.next = node1;  // Circular link

// Traversing forward
console.log("\nTraversing forward:");
let currentNode = node1;
let startNode = node1;
process.stdout.write(currentNode.data + " -> ");
currentNode = currentNode.next;

while (currentNode !== startNode) {
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next;
}
console.log("...");  // Indicating it's circular

// Traversing backward
console.log("\nTraversing backward:");
currentNode = node4;
startNode = node4;
process.stdout.write(currentNode.data + " -> ");
currentNode = currentNode.prev;

while (currentNode !== startNode) {
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.prev;
}
console.log("...");  // Indicating it's circular


