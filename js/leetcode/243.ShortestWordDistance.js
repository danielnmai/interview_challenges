/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
 */
var shortestDistance = function(words, word1, word2) {
  let idx1;
  let idx2;
  let minDistance;

  for(let i = 0; i < words.length; i++) {
    const curWord = words[i];

    if(curWord === word1) {
      idx1 = i;
    }

    if(curWord === word2) {
      idx2 = i;
    }

    const curMinDistance = Math.abs(idx1 - idx2);

    if(!minDistance && !isNaN(idx1) && !isNaN(idx2)) {
      minDistance = curMinDistance;
    } else {
      minDistance = Math.min(curMinDistance, minDistance);
    }    
  }

  return minDistance;
};
const words = ["practice", "makes", "perfect", "coding", "makes"];
const words1 = ["this","is","a","long","sentence","is","fun","day","today","sunny","weather","is","a","day","tuesday","this","sentence","run","running","rainy"];




// console.log(shortestDistance(words, "makes", "coding"));
console.log(shortestDistance(words1, "weather", "long"));
