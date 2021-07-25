/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
  /*
  algorithm:
  go over words array
  for each word: compare its letter with another word
  if both words contain all unique characters, calculate the product
  keep going, if we see a greater product, set the max product to be it.
  
  the function to check if 2 strings contains unique chars is a little tricky.

  It requires bit operations.

  The idea is convert letters to a number representing a bit.

  for example, 'a' is 0, 'b' is 1, 'c' is 2... to 'z' is 26.

  so the word 'beef' will be interpreted as 'b' = 1, 'e' = '4', 'f' = 5

  We are going to SHIFT over n bits and OR that bit with 1

  // shift over n bits, where n is the char code
  a => '1' // because charcode of 'a' is 0, so we left shift 0 time
  b => '10' // because charcode of 'b' is 1, so we left shift 1 time
  c => '100'
  d => '1000'
  ...
  z => '10000000000000000000000000', because charcode of 'z' is 26, so we left shift 26 times
  << is the left shift binary operator
  how to do it: 1 << n where n is the char code 

  // OR the character and result. In Javascript '|' is the binary OR operator.
  a |= b => a = a | b;

For Example
 a = 1001
 b = 1010
 a  |= b
 a == '1011'

  explanation: https://leetcode.com/problems/maximum-product-of-word-lengths/discuss/489956/JavaScript-with-bitwise-explanation


  
  */
  
  let maxProduct = 0;


  /**
   * This function might be confusing, here is an explaination:
   * 
   * Take the string 'abc':
   * 
   * i = 0: int = 0, charInt 'a' = 0, int = 0 | 1 << 0 = 0 | 1 = 1
   * i = 1; int = 1, charInt 'b' = 1, int = 1 | 1 << 1 = 10 => int = 11
   * i = 2, int = 11, charInt 'c' = 2, int = 11 || 1 << 2 = 100 => int = 111
   * 
   * Take the string 'def'
   * 
   * i = 0, int = 0, charInt 'd' = 3, int = 0 | 1 << 3 = 1000 => int = 1000
   * i = 1, int = 1000, charInt 'e' = 4, int = 1000 | 1 << 4 = 10000 => int = 11000
   * i = 2, int = 11000, charInt 'f' = 5, int = 11000 | 1 << 5 = 100000 => int = 111000
   * 
   * if we take the binar OR operator of 'abc' and 'def' and we compare their values:
   * 
   * 'abc' = 0 0 0 1 1 1
   * 'def' = 1 1 1 0 0 0
   * b. OR = 0 0 0 0 0 0
   * => if their binary OR is 0, it means the 2 strings are unique, and none of characters appear in both strings.  
   * @param {*} str 
   */
  function convertToBinaryInt(str) {
    let int = 0;
    const baseCharCode = 'a'.charCodeAt(0);

    for(let i = 0; i < str.length; i++) {
      const charInt = str.charCodeAt(i) - baseCharCode;
      int |= 1 << charInt;
    }

    return int;
  }
  
  function hasAllUniqueChars(word1, word2) {
      const int1 = convertToBinaryInt(word1);
      const int2 = convertToBinaryInt(word2);

      if((int1 & int2) === 0) return true;
    
      return false;
  }
  
  for(let i = 0; i < words.length; i++) {
      for(let j = i + 1; j < words.length; j++) {
          const word1 = words[i];
          const word2 = words[j];
          
          if(hasAllUniqueChars(word1, word2)){
              maxProduct = Math.max(maxProduct, word1.length * word2.length);
          }
      }
      
  }
  
  return maxProduct;
};