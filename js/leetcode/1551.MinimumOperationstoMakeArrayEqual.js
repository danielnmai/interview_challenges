/**
 * @param {number} n
 * @return {number}
 * 
 * You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e. 0 <= i < n).

In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.

Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equal.
 */
 var minOperations = function(n) {
    
  const numOfOperations = Math.floor(n / 2);
  let min = 0;
  let endIndx = n - 1;
  
  for(let i = 0; i < numOfOperations; i++) {
      min += Math.abs(i - endIndx);
      endIndx--;
  }
  
  return min;
  
};

console.log(minOperations(9));˜