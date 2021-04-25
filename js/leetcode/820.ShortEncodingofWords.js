/**
 * @param {string[]} words
 * @return {number}
 */
 var minimumLengthEncoding = function(words) {
    const wordSet = new Set(words);

    let sum = 0;

    for(const word of words) {
      for(let k = 1; k < word.length; k++) {
        wordSet.delete(word.substring(k));
      }
    }

    for(const word of wordSet.values()) {
      sum += word.length + 1;
    }
    return sum;
};

console.log(minimumLengthEncoding(['time', 'me', 'bell']));