// This function returns the shortest list of numbers which sum up to a given target value.

function bestSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return false;

  let shortestList = null;
  for (let i = 0; i < nums.length; i++) {
    let result = bestSum(target - nums[i], nums, memo);

    if (result) {
      memo[target] = [nums[i], ...result];
      if (!shortestList || memo[target].length < shortestList.length) {
        shortestList = memo[target];
      }
    }
  }

  memo[target] = false;
  return shortestList;
}

console.log(bestSum(7, [2, 3, 4]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(2000, [6, 9]));
