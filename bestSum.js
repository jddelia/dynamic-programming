// This function returns the shortest list of numbers which sum up to a given target value.

function bestSum(target, nums) {
  if (target === 0) return [];
  if (target < 0) return false;

  let shortestList = null;
  for (let i = 0; i < nums.length; i++) {
    let result = bestSum(target - nums[i], nums);

    if (result) {
      let newList = [nums[i], ...result];
      if (!shortestList || newList.length < shortestList.length) {
        shortestList = newList;
      }
    }
  }

  return shortestList;
}

console.log(bestSum(7, [2, 3, 4]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(10, [6, 9]));
