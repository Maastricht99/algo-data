
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
  addToHead(node) {
    const currentHead = this.head;
    const newHead = node;
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
  removeFromHead() {
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
  addToTail(node) {
    const newTail = node;
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
  removeFromTail() {
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
  contains(value) {
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
    while (currentNode.next) {
      console.log(`Val: ${currentNode.value}`);
      currentNode = currentNode.next;
    }
  }
}
