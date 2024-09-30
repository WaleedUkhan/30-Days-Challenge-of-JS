//Simply treetraversing 

// class TreeNode{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
// const root = new TreeNode('R');
// const nodeA = new TreeNode('A');
// const nodeB = new TreeNode('B');
// const nodeC = new TreeNode('C');
// const nodeD = new TreeNode('D');
// const nodeE = new TreeNode('E');
// const nodeF = new TreeNode('F');
// const nodeG  = new TreeNode('G');

// root.left = nodeA;
// root.right = nodeB;

// nodeA.left = nodeC;
// nodeA.right = nodeD;

// nodeB.left = nodeE;
// nodeB.right = nodeF;

// nodeF.left = nodeG;

// //Test 
// console.log('Root,right,left, data:', root.right.left.data);
// console.log('Root,left,left, data:', root.left.left.data);
// console.log('Root,right,right,left, data:', root.right.right.data);



//++++++ IN_0RDER TRAVERSAL IN TREE+++++++

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    // console.log(node.data+ ",");

    process.stdout.write(node.data + ", "); 

    //process.stdout.write is NodeJS syntax to print data on sameline. while console.log will print each node on a newline so we use NodeJS syntax.

    inOrderTraversal(node.right);
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

// Test in-order traversal
inOrderTraversal(root);  // Output: C, A, D, R, E, B, G, F, 
