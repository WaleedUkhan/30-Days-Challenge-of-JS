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
  
    // Breadth-First Search to find the shortest path between two nodes
    bfsShortestPath(startingVertex, targetVertex) {
      const queue = [[startingVertex]]; // Queue to store paths
      const visited = new Set(); // Set to keep track of visited nodes
  
      while (queue.length > 0) {
        const path = queue.shift(); // Get the first path from the queue
        const vertex = path[path.length - 1]; // Get the last node from the path
  
        // If this vertex has been visited, skip it
        if (visited.has(vertex)) {
          continue;
        }
  
        // Mark the vertex as visited
        visited.add(vertex);
  
        // If the vertex is the target, return the path
        if (vertex === targetVertex) {
          return path;
        }
  
        // For each neighboring vertex, create a new path and add it to the queue
        for (const neighbor of this.adjacencyList[vertex]) {
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
  
      return null; // Return null if no path is found
    }
  }
  
  // Example usage:
  
  // Create a new graph
  const network = new Graph();
  
  // Add vertices (nodes)
  network.addVertex('A');
  network.addVertex('B');
  network.addVertex('C');
  network.addVertex('D');
  network.addVertex('E');
  network.addVertex('F');
  
  // Add edges (connections)
  network.addEdge('A', 'B');
  network.addEdge('A', 'C');
  network.addEdge('B', 'D');
  network.addEdge('C', 'E');
  network.addEdge('D', 'E');
  network.addEdge('D', 'F');
  network.addEdge('E', 'F');
  
  // Find the shortest path between two nodes
  const shortestPath = network.bfsShortestPath('A', 'F');
  console.log(shortestPath); // Output: ['A', 'B', 'D', 'F']  