/*
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). 
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"

*/

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shifts) {
    

  for(const shift of shifts){
    const [direction, amount] = shift;
    let i = 0;

    while(i < amount){
      s = rotate(s, direction);
      i++;
    }
  }

  function rotate(string, direction){
    const strArr = string.split('');
    if(direction === 0){
    const char = strArr.shift();    
      strArr.push(char);
    } else if(direction === 1){
      const char = strArr.pop();
      strArr.unshift(char);
    }
    return strArr.join('');
  }

  return s;   
    
};

// const s = "abc";

// const shift = [[0,1],[1,2]];

const s = "abcdefg";

const shift = [[1,1],[1,1],[0,2],[1,3]];

console.log(stringShift(s, shift));