/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let curPointer = 0;
  for(let i = 1; i < nums.length; i++){
    if(nums[i] !== nums[curPointer]){
      nums[curPointer + 1] = nums[i];
      curPointer++;
    }
    nums[i] = null;
  }
  console.log('nums ', nums);
  return curPointer + 1;
};

const ar = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const ar1 = [1, 2];
console.log(removeDuplicates(ar1));
