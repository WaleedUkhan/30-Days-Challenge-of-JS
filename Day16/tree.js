/* _________________ FIRST QUESTION ________________ */

// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// const root = new TreeNode(5);

// root.left = new TreeNode(8);
// root.right = new TreeNode(11);
// console.log(root);



/* _________________SECOND  QUESTION ________________ */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively find the correct place to insert a new node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Method to perform in-order traversal and display the nodes
    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);  // Traverse the left subtree
            result.push(node.value);                  // Visit the node
            this.inOrderTraversal(node.right, result); // Traverse the right subtree
        }
        return result;
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order Traversal:", tree.inOrderTraversal());  // Output: [2, 3, 4, 5, 6, 7, 8]

