class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertNode(value) {
    const newNode = new Tree(value);
    this.children.push(newNode);
  }
  removeNode(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        this.children.splice(i, 1);
        return;
      }
    }
  }
  breadthFirstTraverse() {
    let currentNode = this;
    const queue = [currentNode];
    const visited = [];
    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      queue.push(...currentNode.children);
    }
    return visited;
  }
  depthFirstTraverse() {
    let currentNode = this;
    const queue = [currentNode];
    const visited = [];
    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      queue.unshift(...currentNode.children);
    }
    return visited;
  }
}




