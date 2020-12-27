/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.


 */
var increasingTriplet = function(nums) {
  let i = 0;
  let j = 1;
  let k = 2;

  for(let r = 0; r < nums.length; r++) {
    let temp_i = r;
    let temp_j = r + 1;
    let temp_k = r + 2;

    if(nums[temp_i] < nums[i]) {
      i = temp_i;
    }

    if(nums[temp_j] > nums[i]) {
      j = temp_j;
    }

    if(nums[temp_k] > nums[j]) {
      k = temp_k;
    }

    


    if(nums[k] > nums[j] && nums[j] > nums[i] &&
      (k > j && j > i)
      ) {
      return true;
    }

  }

  return false;

  
};

const nums = [1,0,2,0,0,-1,-1,-1,-1,3]

console.log(increasingTriplet(nums));˜