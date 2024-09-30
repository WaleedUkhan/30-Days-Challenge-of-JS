// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(element) {
//         this.queue.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.queue.shift();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.queue[0];
//     }

//     isEmpty() {
//         return this.queue.length === 0;
//     }

//     size() {
//         return this.queue.length;
//     }
// }

// // Create a queue
// const myQueue = new Queue();

// myQueue.enqueue('A');
// myQueue.enqueue('B');
// myQueue.enqueue('C');
// console.log("Queue: ", myQueue.queue);

// console.log("Dequeue: ", myQueue.dequeue());

// console.log("Peek: ", myQueue.peek());

// // console.log("Front:", myQueue.front());


// console.log("isEmpty: ", myQueue.isEmpty());

// console.log("Size: ", myQueue.size());


/* Job Line or Something Like that in QUEUE  */

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}

class PrinterQueue {
    constructor() {
        this.printQueue = new Queue();
    }

    addPrintJob(job) {
        console.log(`Adding print job: ${job}`);
        this.printQueue.enqueue(job);
    }

    processPrintJob() {
        if (this.printQueue.isEmpty()) {
            console.log("No print jobs to process.");
        } else {
            const job = this.printQueue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }

    showNextJob() {
        if (this.printQueue.isEmpty()) {
            console.log("No print jobs in the queue.");
        } else {
            console.log(`Next print job: ${this.printQueue.peek()}`);
        }
    }

    printQueueSize() {
        console.log(`Number of jobs in queue: ${this.printQueue.size()}`);
    }
}

// Usage
const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Photo.jpg");
printerQueue.addPrintJob("Presentation.pptx");
printerQueue.addPrintJob("Data.xls");

printerQueue.showNextJob();  // Shows the next job to be processed
printerQueue.processPrintJob();  // Processes "Document1.pdf"

printerQueue.printQueueSize();  // Shows the number of remaining jobs

printerQueue.processPrintJob();  // Processes "Photo.jpg"
printerQueue.processPrintJob();  // Processes "Presentation.pptx"
printerQueue.processPrintJob();  // Processes "Data.xls"
printerQueue.processPrintJob();  // Tries to process when queue is empty

printerQueue.showNextJob();  // No jobs left

