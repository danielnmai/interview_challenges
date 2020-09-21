/**
 * @param {number[][]} grid
 * @return {number}
 */


 /*
 
 1 3 1
 1 5 1
 4 2 1

 7 because 1 => 3 => 1 => 1 => 1 (m - 1, n - 1) return 0
 
 
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  
   function move(i, j){
      if(i === m || j === n){
        return Number.MAX_VALUE;
      }
      
      if(i === m - 1 && j === n - 1){
           return grid[i][j];
       }
       
       // move down
      let downSum = move(i + 1, j);
       // move right
      let rightSum = move(i, j + 1);
       
       return grid[i][j] + Math.min(downSum, rightSum);
   }

   move(0, 0);

   return move(0, 0);
   
};

const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
];




console.log(minPathSum(grid));