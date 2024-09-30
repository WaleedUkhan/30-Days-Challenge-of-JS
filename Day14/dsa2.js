class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example Usage
const root = new TreeNode('R');
const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

// Test cases
console.log("Depth of the tree is:", calculateDepth(root));      // Output: 4
console.log("Depth of the left subtree is:", calculateDepth(root.left));  // Output: 2
console.log("Depth of the right subtree is:", calculateDepth(root.right)); // Output: 3
console.log("Depth of node A subtree is:", calculateDepth(nodeA)); // Output: 2
console.log("Depth of node B subtree is:", calculateDepth(nodeB)); // Output: 3
console.log("Depth of node F subtree is:", calculateDepth(nodeF)); // Output: 2
