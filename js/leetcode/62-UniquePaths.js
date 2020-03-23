/**
 * 
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Input: m = 7, n = 3
Output: 28
 */


 /**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const grid = [];
  for(let i = 0; i < n; i++){
    grid.push(new Array(m).fill(0));
  }

  for(let i = 0; i < n; i++){
      grid[i][m - 1] = 1;
  }
   
  for(let i = 0; i < m; i++) {
    grid[n - 1][i] = 1;
  }
   
  let i = n - 2;
  while(i >= 0){
    let j = m - 2;
   
    while( j >= 0) {
      grid[i][j] = grid[i + 1][j] + grid[i][j + 1];
      j--;
    }
    i--;
  }
   
  return grid[0][0];
};

console.log(uniquePaths(7, 3));