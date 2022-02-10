class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newLast = new Node(val);
    const currentLast = this.last;
    if (!currentLast) {
      this.first = newLast;
      this.last = newLast;
      this.size++;
      return;
    }
    currentLast.next = newLast;
    this.last = newLast;
    this.size++;
    return;
  }
  dequeue() {
    const currentFirst = this.first;
    if (!currentFirst) {
      return;
    }
    const newFirst = currentFirst.next;
    this.first = newFirst;
    this.length--;
    return currentFirst;
  }
}



