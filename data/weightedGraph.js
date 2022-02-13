class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ value: vertex2, weight });
      this.adjacencyList[vertex2].push({ value: vertex1, weight });
    }
  }
  Dijkstra(start, target) {
    const distances = {};
    const previous = {};
    const path = [];
    const priorityQueue = new PriorityQueue();
    const vertices = Object.keys(this.adjacencyList);
    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      previous[vertex] = null;
      if (vertices[i] == start) {
        distances[vertex] = 0;
        priorityQueue.enqueue( vertex, 0 );
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue( vertex, Infinity );
      }
    }
    while (priorityQueue.values.length) {
      const vertex = priorityQueue.dequeue();
      if (vertex.value == target) {
        while (previous[vertex.value]) {
          path.push(vertex.value);
          vertex.value = previous[vertex.value];
        }
        return path.reverse();
      }
      for (let i = 0; i < this.adjacencyList[vertex.value].length; i++) {
        const adjacentVertex = this.adjacencyList[vertex.value][i];
        const newDistance = distances[vertex.value] + adjacentVertex.weight;
        if (newDistance < distances[adjacentVertex.value]) {
          distances[adjacentVertex.value] = newDistance;
          previous[adjacentVertex.value] = vertex.value;
          priorityQueue.enqueue( adjacentVertex.value, newDistance );
        }
      }
    }
  }
}
