// This function returns the list of numbers which sum up to a given target value.

function howSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return false;

  for (let i = 0; i < nums.length; i++) {
    let result = howSum(target - nums[i], nums, memo);

    if (result) {
      memo[target] = [nums[i], ...result];
      return memo[target];
    }
  }

  memo[target] = false;
  return memo[target];
}

console.log(howSum(7, [2, 3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(2000, [6, 9]));
