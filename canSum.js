// This function indicates whether a list of numbers can sum up to a given target value.

function canSum(target, nums) {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of nums) {
    if (canSum(target - num, nums)) {
      return true;
    }
  }

  return false;
}

console.log(canSum(7, [2, 3, 4]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(200, [6, 9]));
