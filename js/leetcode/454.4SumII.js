/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const map = new Map();
    let count = 0;

    for(const a of A) {
      for(const b of B) {
        const twoSum = a + b;
        map.has(twoSum) ? map.set(twoSum, (map.get(twoSum) + 1)) : map.set(twoSum, 1);
      }
    }

    for(const c of C) {
      for(const d of D) {
        const otherTwoSum = -(c + d);
        if(map.has(otherTwoSum)) {
          count += map.get(otherTwoSum);
        };
      }
    }


    return count;
};
const A = [0,1,-1]
const B = [-1,1,0]
const C = [0,0,1]
const D = [-1,1,1]

console.log(fourSumCount(A, B, C, D))

