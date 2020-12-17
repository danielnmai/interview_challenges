/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const result = [];
  const n = nums.length;

  if(n === 0) return formatRange(lower, upper);
  
  // missing range in the beginning
  if(nums[0] > lower) result.push(formatRange(lower, nums[0] - 1));

  for(let i = 0; i < n; i++) {
    if(nums[i] - nums[i - 1] > 1) {
      result.push(formatRange(nums[i - 1] + 1, nums[i] - 1));
    }
  }

  // missing range at the end
  if(nums[n - 1] < upper) result.push(formatRange(nums[n - 1] + 1, upper));

  
  return result;


  function formatRange(lower, upper) {
    if(lower === upper) {
      return `${lower}`
    } 
    else {
      return `${lower}->${upper}`;
    }
  }
 
};

const nums = [0,1,3,50,75];
// const nums1 = [-15, -13, -5, -1]
// const lower1 = -20;
// const upper1 = 1;

const lower = 0;
const upper = 99;

console.log(findMissingRanges(nums, lower, upper));
// console.log(findMissingRanges(nums1, lower1, upper1));


