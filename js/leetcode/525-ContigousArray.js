/**
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

  let maxLength = 0;
  let count = 0;
  
  const map = new Map();
  // map.set(0, -1);

  for(let i = 0; i < nums.length; i++){
    count = count + (nums[i] === 0 ? - 1 : 1);
    
    if(map.has(count)){
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLength;
   
    
};

const nums = [0,0,1,0,0,0,1,1];

console.log(findMaxLength(nums));