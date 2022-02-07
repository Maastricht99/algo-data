class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);
    const currentFirst = this.first;
    if (!currentFirst) {
      this.first = newNode;
      this.size++;
      return;
    }
    newNode.next = currentFirst;
    this.first = newNode;
    this.size++;
    return;
  }
  pop() {
    const currentFirst = this.first;
    if (!currentFirst) {
      return;
    }
    const newFirst = currentFirst.next;
    this.first = newFirst;
    return currentFirst;
  }
}



