/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0;
  const set = new Set();
  let ans = 0;

  while(j < s.length) {
    if(!set.has(s.charAt(j))){
      set.add(s.charAt(j));
      j++;
      ans = Math.max(set.size(), ans);
    } else {
      set.delete(s.charAt(i));
      i++;    
    }
  }
  return ans;
}; 