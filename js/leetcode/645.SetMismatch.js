/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const frequencies = new Map();
  const result = new Array(2);

  for(let i = 1; i <= nums.length; i++) {
    frequencies.set(i, 1);
  }

  for(let i = 0; i < nums.length; i++) {
    if(frequencies.has(nums[i])) {
      frequencies.set(nums[i], frequencies.get(nums[i]) - 1);
    }
  }
  
  for(const pair of frequencies.entries()) {
    const [key, value] = pair;
    if(value === -1) result[0] = key;
    if(value === 1) result[1] = key;
  }

  return result;
};

findErrorNums([3,2,3,4,6,5]);
findErrorNums([3,2,2]);
findErrorNums([1,1]);
findErrorNums([2,2]);