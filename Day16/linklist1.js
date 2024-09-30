class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end of the linked list
    addToEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node from the end of the linked list
    removeFromEnd() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
    }

    // Method to display all nodes in the linked list
    displayAllNodes() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.addToEnd(10);
linkedList.addToEnd(20);
linkedList.addToEnd(30);

linkedList.displayAllNodes(); // Outputs: 10 20 30

console.log("After RemoveMethod");

linkedList.removeFromEnd();
linkedList.displayAllNodes(); // Outputs: 10 20
