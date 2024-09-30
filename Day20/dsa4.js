class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Function to travers the list 

function traverse(head){
    let currNode = head;
    while(currNode){
        process.stdout.write(currNode.data + "->");
        currNode = currNode.next;
    }
    console.log(null);
    
}

//function to insert new Node in list 

function insertNode(head, newNode, position){
    if(position === 1){
        newNode.next = head;
        return newNode;
    }

    let currentNode = head;
    for(let i = 0; i < position - 2; i++){
        if(currentNode === null){
            break;
        }
        currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return head;
}

const node1 = new Node(7);
const node2 = new Node(3);
const node3 = new Node(2);
const node4 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("Original list:");
traverse(node1);


const newNode = new Node(54);
insertNode(node1, newNode, 3);

console.log("\n After Insertion");
traverse(node1);
