/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map();
  let lHS = 0;

  // get all the nums and their frequency of occurence
  for(let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  // sort the nums
  const sortedNums = Array.from(map.keys()).sort((a, b) => a - b);

  // loop through the sorted nums, if the diff is 1, add up their counts and get the max count
  for(let i = 0; i < sortedNums.length - 1; i++) {
    const curNum = sortedNums[i];
    const nextNum = sortedNums[i + 1];

    if(nextNum - curNum === 1) {
      lHS = Math.max(lHS, map.get(curNum) + map.get(nextNum));
    }
  }


  return lHS;

};

const nums = [1, 2, 2, 2, 2, 4, 3, 3, 3, 3, 3, 7];
const nums1 = [1,3,2,2,5,2,3,7];

console.log(findLHS(nums1));