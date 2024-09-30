class Graph {
    constructor(size) {
        // Initialize an adjacency matrix (2D array) with all values set to 0.
        this.adjMatrix = Array(size).fill(null).map(() => Array(size).fill(0));
        this.size = size;
        // Initialize an array to hold vertex data, with empty strings as placeholders.
        this.vertexData = Array(size).fill('');
    }

    // Add an edge between vertex `u` and vertex `v`.
    addEdge(u, v) {
        if (u >= 0 && u < this.size && v >= 0 && v < this.size) {
            this.adjMatrix[u][v] = 1;
            this.adjMatrix[v][u] = 1; // For an undirected graph, make the connection both ways.
        }
    }

    // Assign data (like a name) to a vertex.
    addVertexData(vertex, data) {
        if (vertex >= 0 && vertex < this.size) {
            this.vertexData[vertex] = data;
        }
    }

    // Print the graph's adjacency matrix and vertex data.
    printGraph() {
        console.log("Adjacency Matrix:");
        this.adjMatrix.forEach(row => {
            console.log(row.join(' '));
        });

        console.log("\nVertex Data:");
        this.vertexData.forEach((data, vertex) => {
            console.log(`Vertex ${vertex}: ${data}`);
        });
    }
}

// Example usage:
const g = new Graph(4);
g.addVertexData(0, 'A'); // Adding data 'A' to vertex 0
g.addVertexData(1, 'B'); // Adding data 'B' to vertex 1
g.addVertexData(2, 'C'); // Adding data 'C' to vertex 2
g.addVertexData(3, 'D'); // Adding data 'D' to vertex 3
g.addEdge(0, 1); // A is connected to B
g.addEdge(0, 2); // A is connected to C
g.addEdge(0, 3); // A is connected to D
g.addEdge(1, 2); // B is connected to C

g.printGraph();
