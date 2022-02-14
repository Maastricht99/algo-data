function fibonacciRecursive(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciDynamic(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  const res = fibonacciDynamic(n - 1, memo) + fibonacciDynamic(n - 2, memo);
  memo[n] = res;
  return res;
}

