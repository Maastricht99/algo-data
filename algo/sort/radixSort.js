function getDigit(number, place) {
  const strNumber = number.toString();
  const position = strNumber.length - 1 - place;
  return +strNumber[position] || 0;
}

function getDigitFormula(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(number) {
  const strNumber = number.toString();
  return strNumber.replace("-", "").length;
}

function digitCountFormula(number) {
  if (number === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(arr) {
  if (!arr.length) {
    return 0;
  }
  let highestCount = digitCount(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if(digitCount(arr[i]) > highestCount) {
      highestCount = digitCount(arr[i]);
    }
  }
  return highestCount;
}

function radixSort(arr) {
  const highestCount = mostDigits(arr);
  for (let i = 0; i < highestCount; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]); 
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

