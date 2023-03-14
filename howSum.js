// This function returns the list of numbers which sum up to a given target value.

function howSum(target, nums) {
  if (target === 0) return [];
  if (target < 0) return false;

  for (let i = 0; i < nums.length; i++) {
    let result = howSum(target - nums[i], nums);

    if (result) {
      return [nums[i], ...result];
    }
  }

  return false;
}

console.log(howSum(7, [2, 3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(200, [6, 9]));
