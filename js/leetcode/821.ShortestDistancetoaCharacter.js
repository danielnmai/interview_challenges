/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {

  /*
  s = l o v e l e e t c o d e

  e

  3 2 1 0 1 0 0 1 2 2 1 0

  index of e in s: 3, 5, 6, 11

  0 1 2 3 4 5 6 7 8 9 10 11
  | 3 - 0 | = 3
  | 3 - 1 | = 2
  | 3 - 2 | = 1
  | 3 - 3 | = 0
  | 3 - 4 | = 1
  | 5 - 5 | = 0
  | 6 - 6 | = 0
  | 6 - 7 | = 1
  | 6 - 8 | = 2
  | 11 - 9 | = 2 ( NOT 6 - 9 = 3)
  | 11 - 10 | = 1
  | 11 - 11 | = 0

  */
 const answer = [];

  const indexesOfC = [];
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if(char === c) {
      console.log('char ', char);
      indexesOfC.push(i);
    }
  }

  console.log('indexes of c ', indexesOfC);

  let curIdx = 0;
  let curP = indexesOfC[curIdx];
  let nextP = curIdx + 1 < indexesOfC.length ? indexesOfC[curIdx + 1] : curP;

  for(let i = 0; i < s.length; i++) {
    const curPDiff = Math.abs(i - curP);
    const nextPDiff = Math.abs(i - nextP);

    if(curPDiff <= nextPDiff) {
      answer.push(curPDiff);
    } else {
      answer.push(nextPDiff);
      if(curIdx < indexesOfC.length - 2) {
        curIdx++;
        if(curIdx < s.length) {
          curP = indexesOfC[curIdx];
        }
        if(curIdx + 1 < s.length) { 
          nextP = indexesOfC[curIdx + 1]; 
        }
      }
     
    }
  }

  return answer;
};

console.log(shortestToChar('aaab', 'b'));