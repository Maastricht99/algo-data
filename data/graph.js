class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        const vertex2 = this.adjacencyList[vertex][i];
        for (let j = 0; j < this.adjacencyList[vertex2].length; j++) {
          if (this.adjacencyList[vertex2][j] === vertex) {
            this.adjacencyList[vertex2].splice(j, 1);
          }
        }
      }
      delete this.adjacencyList[vertex];
    }
  }
  removeVertex2(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const vertex2 = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, vertex2);
      }
    }
    delete this.adjacencyList[vertex];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
      if (this.adjacencyList[vertex1][i] === vertex2) {
        this.adjacencyList[vertex1].splice(i, 1);
      }
    }
    for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
      if (this.adjacencyList[vertex2][i] === vertex1) {
        this.adjacencyList[vertex2].splice(i, 1);
      }
    }
  }
}

