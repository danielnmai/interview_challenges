/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 */
// var missingNumber = function(nums) {

//   const map = new Map();

//   for(let i = 0; i <= nums.length; i++) {
//     map.set(i, false);
//   }

//   for(let i = 0; i < nums.length; i++){
//     if(map.has(nums[i])){
//       map.set(nums[i], true);
//     }
//   }

//   for(const pair of map.entries()){
//     const [key, value] = pair;
//     if(value === false) return key;
//   }

//   return -1;
    
// };

// Follow up solution with O(1) space using Gauss formula
var missingNumber = function(nums) {
  const maxSum = nums.length * (nums.length + 1) / 2;
  let actualNum = 0;

  for(let i = 0; i < nums.length; i++) {
    actualNum += nums[i]
  }

  return maxSum - actualNum;
}

console.log('misssing number ', missingNumber([3, 0, 1]));
console.log('misssing number ', missingNumber([0,1]));
console.log('misssing number ', missingNumber([9,6,4,2,3,5,7,0,1]));
console.log('misssing number ', missingNumber([0]));