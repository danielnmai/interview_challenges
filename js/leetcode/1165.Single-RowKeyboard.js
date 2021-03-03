/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {

  const map = new Map();
  keyboard.split('').forEach((char, index) => map.set(char, index));

  let curIdx = 0;
  let totalTime = 0;

  for(let i = 0; i < word.length; i++) {
    const char = word[i];
    const time = Math.abs(map.get(char) - curIdx); // c: 2 - 0 = 2
    totalTime += time;
    curIdx = map.get(char);
  }

  return totalTime;
};

/*
  char = c
  time = 2 - 0 = 2

  totalTime = 2

  curIdx = 2

  char = b
  time = 1 - 2 = 1
  totalTime = 2 + 1 = 3

  char = a

  time = 0 - 1 = 1
  totalTime = 1 + 3 = 4

  curIndx = 0



*/

console.log(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode'));