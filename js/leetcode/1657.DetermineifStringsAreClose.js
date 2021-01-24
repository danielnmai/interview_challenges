/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

  const map1 = new Map();
  const map2 = new Map();

  if(word1.length != word2.length) {
    return false;
  }

  for(let i = 0 ; i < word1.length; i++) {
    const char = word1[i];
    if(map1.has(char)) {
      const frequency = map1.get(char);
      map1.set(char, frequency + 1);
    } else {
      map1.set(char, 1);
    }
  }

  for(let i = 0 ; i < word2.length; i++) {
    const char = word2[i];
    if(map2.has(char)) {
      const frequency = map2.get(char);
      map2.set(char, frequency + 1);
    } else {
      map2.set(char, 1);
    }
  }

  const keys1 = [ ...map1.keys()].sort();
  const keys2 = [ ...map2.keys()].sort();

  for(let i = 0; i < keys1.length; i++){
    if(keys1[i] !== keys2[i]) return false;
  }

  const values1 = [ ...map1.values()].sort();
  const values2 = [ ...map2.values()].sort();


  for(let i = 0; i < values1.length; i++){
    if(values1[i] !== values2[i]) return false;
  }

  return true;

};


const string1 = "cabbba";
const string2 = "aabbss";

console.log(closeStrings(string1, string2));

