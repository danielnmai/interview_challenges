/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
 */   
var search = function(nums, target) {

  const pivot = getPivot(nums);

  console.log('pivot', pivot);

  if(pivot === 0 || target < nums[0]){
    return binarySearch(pivot, nums.length - 1);
  }
  
  return binarySearch(0, pivot - 1);

  function binarySearch(left, right){

    while(left <= right){

      const mid = left + Math.floor((right - left) / 2);
      console.log('mid', mid);

      if(nums[mid] < target){
        left = mid + 1;
      } else if(nums[mid] === target){
        return mid;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  function getPivot(nums){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] > nums[mid + 1])
      return mid + 1;
      else {
      if (nums[mid] < nums[left])
        right = mid - 1;
      else
        left = mid + 1;
      }
    }    
    return 0;
  }

    
};

const nums = [3,2];
console.log('target index', search(nums, 2));