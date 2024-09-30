// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to traverse and print the linked list
function traverseAndPrint(head) {
  let currentNode = head;
  while (currentNode) {
    process.stdout.write(currentNode.data + " -> ");
    currentNode = currentNode.next;
  }
  console.log("null");
}

// Function to delete a specific node
function deleteSpecificNode(head, nodeToDelete) {
  // If the node to delete is the head node
  if (head === nodeToDelete) {
    return head.next;
  }

  let currentNode = head;
  while (currentNode.next && currentNode.next !== nodeToDelete) {
    currentNode = currentNode.next;
  }

  // If the node to delete is not found
  if (currentNode.next === null) {
    return head;
  }

  // Skip the node to delete
  currentNode.next = currentNode.next.next;

  return head;
}

// Create the nodes
let node1 = new Node(7);
let node2 = new Node(11);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(9);

// Link the nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("Before deletion:");
traverseAndPrint(node1);

// Delete node4
node1 = deleteSpecificNode(node1, node1);

console.log("\nAfter deletion:");
traverseAndPrint(node1);
