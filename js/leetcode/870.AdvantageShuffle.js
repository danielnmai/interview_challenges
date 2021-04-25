/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 * 
 * Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
 * 
 */
var advantageCount = function (A, B) {

  const map = new Map();
  const result = [];

  for (let i = 0; i < A.length; i++) {
    map.set(i, A[i]);
  }

  function findSmallestNumGreaterThanT(t) {
    let smallestNum;
    let removedIndex;

    for (const [index, value] of map.entries()) {
      if (value > t) {
        if(!smallestNum) {
          smallestNum = value;
          removedIndex = index;
        }
        if(value < smallestNum) {
          smallestNum = value;
          removedIndex = index;
        }
      }
    }
    map.delete(removedIndex);

    return smallestNum ? smallestNum : null;
  }


  for (let i = 0; i < B.length; i++) {
    const smallestNum = findSmallestNumGreaterThanT(B[i]);

    result.push(smallestNum ? smallestNum : A[i]);
  }

return result;
    
};

const ar1 = [2, 7, 11, 15];
const ar2 = [1, 10, 4, 11];

A = [12,24,8,32], B = [13,25,32,11]


console.log(advantageCount(A, B));