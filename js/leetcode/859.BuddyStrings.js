/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length || A.length < 2 || B.length < 2) return false;

    let diffIndexes = [];
    let numOfDifferences = 0;
    
    for(let i = 0 ; i < A.length; i++) {
      if(A[i] !== B[i]) {
        diffIndexes.push(i);
        numOfDifferences++
      }

      if(numOfDifferences > 2) return false;
    }

    if(A === B) {
      const seen = new Set();
      for(let i = 0; i < A.length; i++){
        if(seen.has(A[i])) {
          return true;
        } else { 
          seen.add(A[i]);
        }
      }
      return false;
    }

    const [firstIdx, secondIdx] = diffIndexes;

    const AAr = A.split('');
    const temp = AAr[firstIdx];
    AAr[firstIdx] = AAr[secondIdx];
    AAr[secondIdx] = temp;


    return AAr.join('') === B;
};

// const s1 = 'ab';
// const s2 = 'ab';

// console.log(buddyStrings(s1, s2));