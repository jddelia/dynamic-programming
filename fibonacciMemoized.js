// This function solves for fibonacci(n), where n is the number of terms in the sequence.

function fibonacci(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;

  if (n === 1) {
    return 1;
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(100)); // 354224848179262000000
