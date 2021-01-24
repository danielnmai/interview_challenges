/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let curX = x;
    let startIdx = 0;
    let endIdx = nums.length - 1;
    let steps = 0;

    while(startIdx <= endIdx) {
      const start = nums[startIdx];
      const end = nums[endIdx];

      const endDiff = Math.abs(curX - end);
      const startDiff = Math.abs(curX - start);

      if(endDiff < startDiff) {
        curX = endDiff;
        endIdx--;
        steps++;
      } else {
        curX = startDiff;
        startIdx++;
        steps++;
      }
      if(curX === 0) return steps;

    }
    return -1;
};

const array = [3,2,20,1,1,3];
const x = 10;

console.log(minOperations(array, x));