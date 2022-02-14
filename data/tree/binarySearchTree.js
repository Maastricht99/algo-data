class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    const newNode = new Node(value);
    let currentNode = this.root;
    if (!currentNode) {
      this.root = newNode;
      return;
    }
    while (currentNode) {
      if (newNode.value === currentNode.value) {
        return
      }
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }
  findNode(value) {
    let currentNode = this.root;
    if (!currentNode) {
      return false;
    }
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value > currentNode.value) {
        if (!currentNode.right) {
          return false;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (!currentNode.left) {
          return false;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return false;
  }
}
