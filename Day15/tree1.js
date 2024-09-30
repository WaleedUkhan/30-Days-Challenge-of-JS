// // let prev2 = 0;
// // let prev1 = 1;
// // console.log(prev2);
// // console.log(prev1);



// // for(let fibo = 0; fibo<9; fibo++){
// //     let newfibo = prev1 + prev2;
// //     console.log(newfibo);
// //     prev2 = prev1;
// //     prev1 = newfibo;
// // }

// function fibonaci(n){
//     if(n ===0){
//         return 0;
//     }else if(n ===1){
//         return 1;
//     }else{
//         return fibonaci(n-1) + fibonaci(n-2);
//     }
// }

// for(let i = 0; i < 10; i++){
//     console.log(fibonaci(i));
// }

//++++++++++++ POST-ORDER TRAVERSAL IN TREEE ++++++++


class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function postOrderTraversal(node){
    if(node === null){
        return ;
    }
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
}


//Creating Nodes 

const root = new TreeNode('R');
const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');


// Construct the tree
root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;

// Traverse
postOrderTraversal(root);