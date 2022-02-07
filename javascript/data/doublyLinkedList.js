class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addNodeToHead(value) {
    const currentHead = this.head;
    const newHead = new Node(value);
    if (!currentHead) {
      this.head = newHead;
      this.tail = newHead;
      this.length++;
      return;
    }
    newHead.next = currentHead;
    currentHead.previous = newHead;
    this.head = newHead;
    this.length++;
    return;
  }
  removeNodeFromHead() {
    const currentHead = this.head;
    if (!currentHead) {
      return;
    }
    const newHead = currentHead.next;
    if (!newHead) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    currentHead.next = null;
    newHead.previous = null;
    this.head = newHead;
    this.length--;
    return;
  }
  addNodeToTail(value) {
    const currentTail = this.tail;
    const newTail = new Node(value);
    if (!currentTail) {
      this.head = newTail;
      this.tail = newTail;
      this.length++;
      return;
    }
    newTail.previous = currentTail;
    currentTail.next = newTail;
    this.tail = newTail;
    this.length++;
    return;
  }
  removeNodeFromTail() {
    const currentTail = this.tail;
    if (!currentTail) {
      return;
    }
    if (!currentTail.previous) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    const newTail = currentTail.previous;
    currentTail.previous = null;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return;
  }
  addNodeByIndex(value, index) {
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
    let currentNode;
    let counter;
    if (index <= this.length / 2) {
      currentNode = this.head;
      counter = 0;
      while (counter < index - 1) {
        currentNode = currentNode.next;
        counter++;
      }
      const newNode = new Node(value);
      const nextNode = currentNode.next;
      newNode.previous = currentNode;
      newNode.next = nextNode;
      nextNode.previous = newNode;
      currentNode.next = newNode;
      this.length++;
      return;
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (counter > index) {
        currentNode = currentNode.previous;
        counter--;
      }
      const newNode = new Node(value);
      const prevNode = currentNode.previous;
      newNode.next = currentNode;
      newNode.previous = prevNode;
      prevNode.next = newNode;
      currentNode.previous = newNode;
      this.length++;
      return;
    }
  }
  printListHeadToTail() {
    let currentNode = this.head;
    while (currentNode) {
      console.log("Previous:", currentNode.previous?.value || "null");
      console.log(`Value: ${currentNode.value}`);
      console.log("Next:", currentNode.next?.value || "null");
      console.log("---")
      currentNode = currentNode.next;
    }
  }
  printListTailToHead() {
    let currentNode = this.tail;
    while (currentNode) {
      console.log("Previous:", currentNode.previous?.value || "null");
      console.log(`Value: ${currentNode.value}`);
      console.log("Next:", currentNode.next?.value || "null");
      console.log("---")
      currentNode = currentNode.previous;
    }
  }
}






