function bubbleSort(arr) {
  let toSwap = true;
  while (toSwap) {
    toSwap = false;
    counter++;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        toSwap = true;
      }
    }
  }
  return arr;
}

// Less efficient if the array is nearly sorted
function bubbleSort2(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}