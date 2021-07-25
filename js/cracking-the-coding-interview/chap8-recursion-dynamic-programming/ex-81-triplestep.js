

// [2, 3, 4, 2];

function countWaysToReachUpstairs(n) {

  /* DYNAMIC PROGRAMMING (RECURSION) */

  // let totalWays = 0;
  // const MAX_JUMPS = 3;

  // function jump(i) {

  //   if(i > n) return;

  //   if(i === n) totalWays++;

  //   // jump(i + 1);
  //   // jump(i + 2);
  //   // jump(i + 3);

  //   for(let j = i + 1; j <= i + MAX_JUMPS) {
  //     jump(j);
  //   }
  // }

  // jump(0);
  // return totalWays;

  /* DYNAMIC PROGRAMMING WITH OPTIMIZATION (MEMO) */

  let totalWays = 0;
  const memo = new Array(n).fill(-1);

  function jump(i) {
    if(i > n) return 0;

    if(i === n) {
      return 1;
    }

    if(memo[i] !== -1) return memo[i];

    let n1 = jump(i + 1);
    let n2 = jump(i + 2);
    let n3 = jump(i + 3);

    memo[i] = n1 + n2 + n3;

    return memo[i];
  }

  jump(0);
  return jump(0);

  /* BOTTOM-UP DYNAMIC PROGRAMMING */

  /* GREEDY */

  let n1 = 1; // total step needed if n = 0
  let n2 = 1; // total step needed if n = 1
  let n3 = 2; // total step needed if n = 2

  const dp = [n1, n2, n3];

  for(let i = 3; i <= n; i++) {
    const curWays = (i - n1) + (i - n2) + (i - n3);
    totalWays += curWays;
  }

  return totalWays;
}
console.log(countWaysToReachUpstairs(37))