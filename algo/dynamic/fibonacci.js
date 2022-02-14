function fibRecursive(n) {
  if (n <= 2) {
    return 1;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibMemo(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

function fibTable(n) {
  if (n <= 2) {
    return 1;
  }
  const fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }
  return fibNumbers[n];
}
