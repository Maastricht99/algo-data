
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insertValue(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index >= 1) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        const temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
      }
      index = parentIndex;
    }
    return;
  }
}

