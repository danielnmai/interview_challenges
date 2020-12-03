/**
 * @param {string} s
 * @return {string}
 * 
 * 
 * 
 Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

  Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 */
var removeDuplicateLetters = function (s) {

  const lastOccurence = new Map();
  const seen = new Set();

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    lastOccurence.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!seen.has(char)) {
      const stackTop = stack[stack.length - 1];
      while (stack.length !== 0 && char < stackTop && lastOccurence.get(stackTop) > i) {
        seen.clear(stack.pop());
      }
      seen.add(char);
      stack.push(char);˜
    }

  }
  return stack.join('');
};

const s = "cbacdcbc";
console.log(removeDuplicateLetters(s));
console.log('b' > 'c');