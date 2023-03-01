// This function solves for fibonacci(n), where n is the nth place in the sequence.

function fibonacci(n) {
  if (n === 0) return 0;

  if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(40)); // 102334155
