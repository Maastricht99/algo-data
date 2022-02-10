class HashTables {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    let result = 0;
    for (let i = 0; i < key.length; i++) {
      let value = key[i].charCodeAt(0) - 96;
      result = (result + value) % this.keyMap.length;
    }
    return result;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return;
  }
  get(key) {
    const index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return;
  }
}
