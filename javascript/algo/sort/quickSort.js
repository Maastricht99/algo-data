function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      const temp = arr[i];
      arr[i] = swapIndex;
      arr[swapIndex] = temp;
    }
  }
  const temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;

  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}



console.log(quickSort([11, 3,2,1,4,5, 9]));