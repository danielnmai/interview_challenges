/**
 * @param {string} s
 * @return {string[][]}
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.
 */
var partition = function (s) {
  const result = [];

  const helper = (str, array) => {

    if (str.length === 0 && array.length !== 0) {
      result.push(array);
      return;
    }

    for (let i = 0; i < str.length; i++) {

      const subs = str.substring(0, i + 1);

      if (isPalindrome(subs)) {
        helper(str.substring(i + 1), [...array, subs]);
      }
      
    }

  };

  helper(s, []);

  return result;


  function isPalindrome(s) {
    let left = 0; right = s.length - 1;

    while (left <= right) {
      if (s[left] !== s[right]) return false;
      else {
        left++;
        right--
      }
    }
    return true;
  }
};

const s1 = 'aaccbccaa';
console.log(partition(s1));˜