
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
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0){
      this.values[0] = end;
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let leftChild;
        let rightChild;
        let swap = null;
        if (leftIndex < length) {
          leftChild = this.values[leftIndex];
          if (leftChild > element) {
            swap = leftIndex;
          }
        }
        if (rightIndex < length) {
          rightChild = this.values[rightIndex];
          if ((!swap && rightChild > element) || 
            (swap && rightChild > leftChild)) {
            swap = rightIndex;
          }
        }       
        if (swap) {
          this.values[index] = this.values[swap];
          this.values[swap] = element;
          index = swap;
        } else {
          break;
        }
      }
    }
    return max;
  }
}
