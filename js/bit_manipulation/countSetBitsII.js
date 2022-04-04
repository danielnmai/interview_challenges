/*
Write a program to return an array of number of 1’s in the binary representation of every number in the range [0, n].

Input: n = 6

Output: [0, 1, 1, 2, 1, 2, 2]

Explanation: 
0 --> 0
1 --> 1
2 --> 1
3 --> 2
4 --> 1
5 --> 2
6 --> 2

use brian kernighan algorithm to calculate the number of setbits for each n from 0 to n
*/

function countSetBitsII(n) {
  
  function countSetBitForEachNum(num) {
    let count = 0;
    while(num > 0) {
      num &= num - 1;
      count++;
    }
    return count;
  }
  const result = [];

  for(let i = 0; i <= n; i++) {
    result.push(countSetBitForEachNum(i));
  }

  return result;
}

console.log(countSetBitsII(6));