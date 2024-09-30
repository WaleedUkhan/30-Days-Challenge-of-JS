// Implementation of Stack using Array 

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(element) {
//     this.stack.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is Empty";
//     }
//     return this.stack.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.stack[this.stack.length - 1];
//   }
//   isEmpty() {
//     return this.stack.length === 0;
//   }

//   size() {
//     return this.stack.length;
//   }
// }


// // Create a stack
// const myStack = new Stack();

// myStack.push('A');
// myStack.push('B');
// myStack.push('C');
// myStack.push('D');
// myStack.push('E');
// console.log("Stack: ", myStack.stack);

// console.log("Pop: ", myStack.pop());

// console.log("Peek: ", myStack.peek());

// console.log("isEmpty: ", myStack.isEmpty());

// console.log("Size: ", myStack.size());


//  Implementation of Stack using Link-list 

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     push(value) {
//         const newNode = new Node(value);
//         if (this.head) {
//             newNode.next = this.head;
//         }
//         this.head = newNode;
//         this.size += 1;
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         const poppedNode = this.head;
//         this.head = this.head.next;
//         this.size -= 1;
//         return poppedNode.value;
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.head.value;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     stackSize() {
//         return this.size;
//     }
// }

// // Usage
// const myStack = new Stack();
// myStack.push('A');
// myStack.push('B');
// myStack.push('C');

// console.log("Pop: ", myStack.pop());
// console.log("Peek: ", myStack.peek());
// console.log("isEmpty: ", myStack.isEmpty());
// console.log("Size: ", myStack.stackSize());



// Day-16 Question No.2 

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

function reverseString(str) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Pop all characters from the stack and form the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Usage
const originalString = "WALEED KHAN";
const reversedString = reverseString(originalString);

console.log("Original String: ", originalString);
console.log("Reversed String: ", reversedString);
