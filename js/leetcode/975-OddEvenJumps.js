/**
 * @param {number[]} A
 * @return {number}
 * 
 * You are given an integer array A.  From some starting index, you can make a series of jumps.  The (1st, 3rd, 5th, ...) jumps in the series are called odd numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even numbered jumps.

You may from index i jump forward to index j (with i < j) in the following way:

During odd numbered jumps (ie. jumps 1, 3, 5, ...), you jump to the index j such that A[i] <= A[j] and A[j] is the smallest possible value.  If there are multiple such indexes j, you can only jump to the smallest such index j.
During even numbered jumps (ie. jumps 2, 4, 6, ...), you jump to the index j such that A[i] >= A[j] and A[j] is the largest possible value.  If there are multiple such indexes j, you can only jump to the smallest such index j.
(It may be the case that for some index i, there are no legal jumps.)
A starting index is good if, starting from that index, you can reach the end of the array (index A.length - 1) by jumping some number of times (possibly 0 or more than once.)

Return the number of good starting indexes.

Input: [10,13,12,14,15]
Output: 2
there are 2 different starting indexes (i = 3, i = 4) where we can reach the end with some number of jumps.

Input: [2,3,1,1,4]
Output: 3
there are 3 different starting indexes (i = 1, i = 3, i = 4) where we can reach the end with some number of jumps.

Input: [5,1,3,4,2]
Output: 3
Explanation: 
We can reach the end from starting indexes 1, 2, and 4.
 */
var oddEvenJumps = function(A) {
  let goodIndices = 0;

  // If the array has at least one number, thereotically we can reach to the end of the array from that number
  // For example: A = [5] => number of good index is 1 because we can go to the end of ar from index 0.
  if(A.length > 0){
    goodIndices++;
  }

  for(let i = 0; i < A.length; i++){
    let startIndex = i;
    let j = startIndex + 1;
    let jumps = 1;
    while(startIndex < A.length){
      // Odd numbered jumps
      if(jumps % 2 === 1){        
        j = getSmallestLargerIndex(startIndex, A);
        // if j is not found => i is not a good index
        if(j === -1){
          break;
        }
        // if j reach the end => we can jump to the end of the array => so i is a good index
        else if(j === A.length - 1) {
          goodIndices++;
          break;
        }

        // else j is something else: we have jumped: update the jump step and our start Index
        else {
          jumps++;
          startIndex = j;
          // if we successfully jump to the end of the array, i is a good index
          if(startIndex === A.length - 1){
            goodIndices++;
          }
        }
      }
      // Even numbered jumps
      if(jumps % 2 === 0){
        j = getLargestSmallerIndex(startIndex, A);
         // if j is not found => i is not a good index, break immediately
         if(j === -1){
          break;
        }
        // if j reach the end => we can jump to the end of the array => so i is a good index
        else if(j === A.length - 1) {
          goodIndices++;
          break;
        }

        // else j is something else, we have jumped: update the jump step and our start Index
        else {
          jumps++;
          startIndex = j;
          // if we successfully jump to the end of the array, i is a good index
          if(startIndex === A.length - 1){
            // console.log('good index here: A[j] = ', A[j]);
            goodIndices++;
          }
        }
      }
    }
  }
  
  function getSmallestLargerIndex(curIdx, ar) {
    const num = ar[curIdx];
    let idx = -1;
    let min;
    for(let i = curIdx + 1; i < ar.length; i++){
      if(ar[i] >= num){
        if(!min){
          min = ar[i];
          idx = i;
        } else {
          if(ar[i] < min){
            min = ar[i];
            idx = i;
          }
        }
      }      
    }
    return idx;
  }
  
  function getLargestSmallerIndex(curIdx, ar){
    const num = ar[curIdx];
    let idx = -1;
    let max;
    for(let i = curIdx + 1; i < ar.length; i++){
      if(ar[i] <= num){
        if(!max){
          max = ar[i];
          idx = i;
        } else {
          if(ar[i] > max){
            max = ar[i];
            idx = i;
          }
        }
      }      
    }
    return idx;
  }

  return goodIndices;    
};




const ar = [5, 5, 5, 1.1, 3, 6, -4, 1.05, -3];
const ar1 = [5, 1, 3, 4, 2];
const ar2 = [10,13,12,14,15];
const ar3 = [2,3,1,1,4];

// console.log(getSmallestLargerIndex(0, ar1));
// console.log(getLargestSmallerIndex(1, ar));

console.log(oddEvenJumps(ar3));