
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  addNodeToHead(value) {
    const currentHead = this.head;
    const newHead = new Node(value);
    if (!currentHead) {
      this.head = newHead;
      this.length++;
      return;
    }
    newHead.next = currentHead;
    this.head = newHead;
    this.length++;
    return;
  }
  removeNodeFromHead() {
    const currentHead = this.head;
    if (!currentHead) {
      return;
    }
    if (!currentHead.next) {
      this.head = null;
      this.length--;
      return;
    }
    const newHead = currentHead.next;
    currentHead.next = null;
    this.head = newHead;
    this.length--;
    return;
  }
  addNodeToTail(value) {
    const newTail = new Node(value);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = newTail;
      this.length++;
      return;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newTail;
    this.length++;
    return;
  }
  removeNodeFromTail() {
    let currentNode = this.head;
    if (!currentNode) {
      return;
    }
    if (!currentNode.next) {
      this.removeFromHead();
      return;
    }
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.length--;
    return;
  }
  addNodeByIndex(value, index){
    if (index > this.length) {
      return;
    }
    if (index === 0) {
      this.addNodeToHead(value);
      return;
    }
    if (index === this.length) {
      this.addNodeToTail(value);
      return;
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }
  removeNodeByIndex(index) {
    if (index > this.length - 1) {
      return;
    }
    if (index === 0) {
      this.removeNodeFromHead();
      return;
    }
    if (index === this.length - 1){
      this.removeNodeFromTail();
      return;
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
    return;
  }
  removeNodeByValue(value) {
    if (!this.containsValue(value)) {
      return;
    }
    let currentNode = this.head;
    if (!currentNode) {
      return;
    }
    if (currentNode.value === value) {
      this.removeNodeFromHead();
      return;
    }
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
    return;
  }
  containsValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  printList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`Val: ${currentNode.value}`);
      currentNode = currentNode.next;
    }
  }
}



