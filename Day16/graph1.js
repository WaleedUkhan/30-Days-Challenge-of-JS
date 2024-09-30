class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    // Breadth-First Search
    bfs(startingVertex) {
      const queue = [startingVertex]; // Queue to track the vertices to visit
      const result = []; // Array to store the order of visited vertices
      const visited = {}; // Object to keep track of visited vertices
      visited[startingVertex] = true;
  
      while (queue.length > 0) {
        const currentVertex = queue.shift(); // Get the first vertex from the queue
        result.push(currentVertex); // Add it to the result array
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true; // Mark neighbor as visited
            queue.push(neighbor); // Add neighbor to the queue
          }
        });
      }
  
      return result; // Return the order of visited vertices
    }
  }
  
  // Example usage:
  const g = new Graph();
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  
  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('B', 'D');
  g.addEdge('C', 'E');
  g.addEdge('D', 'E');
  
  console.log(g.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E']
  