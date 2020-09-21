/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if(text1.length === 0 || text2.length === 0) return 0;

  const memo = new Array(text1.length + 1);
  for(let i = 0; i <= text1.length; i++){
    memo[i] = new Array(text2.length + 1).fill(-1);
  }

  return memoSolve(0, 0);

  function memoSolve(p1, p2) {        
    // Check whether or not we've already solved this subproblem.
    // This also covers the base cases where p1 == text1.length
    // or p2 == text2.length.
    if (memo[p1][p2] != -1) {
      return memo[p1][p2];
    }

    // Option 1: we don't include text1[p1] in the solution.
    let option1 = memoSolve(p1 + 1, p2);
====7
    // Option 2: We include text1[p1] in the solution, as long as
    // a match for it in text2 at or after p2 exists.
    let firstOccurence = text2.indexOf(text1.charAt(p1), p2);
    let option2 = 0;
    if (firstOccurence != -1) {
      option2 = 1 + memoSolve(p1 + 1, firstOccurence + 1);
    }

    // Add the best answer to the memo before returning it.
    memo[p1][p2] = Math.max(option1, option2);
    return memo[p1][p2];
  }


  function memoLCS(idx1, idx2){
    
    // if we already calculate the value, just return right away
    if(idx1 === text1.length - 1 || idx2 === text2.length - 1 || memo[idx1][idx2] !== -1){
      return memo[idx1][idx2];
    }

    // First case: the first letter is not part of the optimal solution
    const case1 = memoLCS(idx1 + 1, idx2);

    const firstOccurence = text2.indexOf(text1.charAt(idx1), idx2);
    let case2 = 0;

    if(firstOccurence !== -1){
      //Second case: first leltter is part of the optimal solution
      case2 = 1 + memoLCS(idx1 + 1, firstOccurence + 1);
    }

    memo[idx1][idx2] = Math.max(case1, case2);
    return memo[idx1][idx2];  
  }

  // const firstLetter = text1[0];
  // const firstOccurence = text2.indexOf(firstLetter);

  // // First case: the first letter is not part of the optimal solution
  // const case1 = longestCommonSubsequence(text1.substring(1), text2);

  // let case2 = 0;

  // if(text2.includes(firstLetter)){
  //   //Second case: first leltter is part of the optimal solution
  //   case2 = 1 + longestCommonSubsequence(text1.substring(1), text2.substring(firstOccurence + 1));
  // }
  
  // return Math.max(case1, case2);
};

const text1 =abcde";
const text2 = "ace";

console.log(longestCommonSubsequence(text1, text2));