/*
An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. It is also used by some to mean a word or phrase in which each letter appears the same number of times, not necessarily just once.

You task is to write a method isogram? that takes a string argument and returns true if the string has the properties of being an isogram and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

Properties:

must be a string
cannot be nil or empty
each letter appears the same number of times (not necessarily just once)
letter case is not important (= case insensitive)
non-letter characters (e.g. hyphens) should be ignored
*/
const alphabets = {
  'a' : 0, 'b' : 0, 'c' : 0, 'd' : 0, 'e' : 0,
  'f' : 0, 'g' : 0, 'h' : 0, 'i' : 0, 'j' : 0,
  'k' : 0, 'l' : 0, 'm' : 0, 'n' : 0, 'o' : 0,
  'p' : 0, 'q' : 0, 'r' : 0, 's' : 0, 't' : 0,
  'u' : 0, 'v' : 0, 'w' : 0, 'x' : 0, 'y' : 0,
  'z' : 0,
}
const isIsogram = str => {  
  if( str.length === 0) return false;
  for(char of str) {
    if(!isLetter(char) && char !== ' ') {
      return false;
    }
    else {
      if(alphabets.hasOwnProperty(char)) {
        alphabets[char]++;
      }
    }
  }
  console.log(Object.values(alphabets));
  console.log(alphabets);
   return Object.values(alphabets).filter(val => val !== 0).every(
    (val, i, ar) => val === ar[0])
}

const isLetter = char => {
  return /^[a-z]+$/i.test(char)
}

// console.log(isIsogram('that takes afsadgda argument'));
console.log(isIsogram('abcdefghijk'));