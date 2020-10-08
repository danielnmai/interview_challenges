/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end){
    let mid = Math.floor((start + end ) / 2);
    if(nums[mid] < target) start = mid + 1;
    else if(nums[mid] > target) end = mid - 1;
    else return mid;
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 0;

console.log(search(nums, target));