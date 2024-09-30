
// //Link-list Traversing Programm 

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// function travers(head){
//     let currNode = head;
//     while(currNode){
//         process.stdout.write(currNode.data + "->");
//         currNode = currNode.next;
//     }
// }

// const node1 = new Node(8);
// const node2 = new Node(12);
// const node3 = new Node(4);
// const node4 = new Node(7);
// const node5 = new Node(2);


// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// travers(node1);


//Finding The Lowest Value in a Link-List 

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function findLowestVal(head){
    let minVal = head.data;
    let currNode = head.next;
    while(currNode){
        if(currNode.data < minVal){
            minVal = currNode.data;
        }
        currNode = currNode.next;
    }
    return minVal;
}

const node1 = new Node(9);
const node2 = new Node(5);
const node3 = new Node(6);
const node4 = new Node(3);
const node5 = new Node(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("The Lowest Value in Link-List is : ", findLowestVal(node1));
