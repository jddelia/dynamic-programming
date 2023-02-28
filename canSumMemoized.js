// This function indicates whether a list of number can add up to a target sum.

function canSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of nums) {
    if (canSum(target - num, nums, memo)) {
      memo[target] = true;
      return memo[target];
    }
  }

  memo[target] = false;
  return memo[target];
}

console.log(canSum(7, [2, 3, 4]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(2000, [6, 9]));
