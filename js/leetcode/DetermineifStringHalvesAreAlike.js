/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  const firstString = s.substr(0, s.length / 2);
  const secondString = s.substr(s.length / 2);
  
  let noOfVowelsFirstStr = 0, noOfVowelsSecondStr = 0;
  
  for(let i = 0; i < firstString.length; i++) {
      if(vowels.includes(firstString[i])) noOfVowelsFirstStr++;
      if(vowels.includes(secondString[i])) noOfVowelsSecondStr++;
  }
  
  return noOfVowelsFirstStr === noOfVowelsSecondStr;
  
};

console.log(halvesAreAlike('AbCdEfGh'));