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
  depthFirstTraverse() {
    let currentNode = this;
    const stack = [currentNode];
    const visited = [];
    while (stack.length) {
      currentNode = stack.shift();
      visited.push(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.unshift(currentNode.children[i]);
      }
    }
    return visited;
  }
  breadthFirstTraverse() {
    let currentNode = this;
    const queue = [currentNode];
    const visited = [];
    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.push(currentNode.children[i]);
      }
    }
    return visited;
  }
}





