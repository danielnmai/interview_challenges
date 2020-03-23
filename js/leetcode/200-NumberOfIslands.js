/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    const seen = new Set();
    let onesCount = 0;
    let islandsCount = 0;

    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
        if(grid[i][j] === "1" && !seen.has(`${i}-${j}`)){
          expand(i, j);
          console.log('expanding: i: ', i);
          console.log('expanding: j: ', j);
          islandsCount++;
        }
      }
    }
    function expand(i, j){   
      if(i < 0 || j < 0 || i === grid.length|| j === grid[0].length){
        return;
      }
      if(grid[i][j] === "0"){
        return;
      }
      if(!seen.has(`${i}-${j}`)){
        if(grid[i][j] === "1") {
          onesCount++;
        }        
        seen.add(`${i}-${j}`);
        // move up
        expand(i - 1, j);
        // move down
        expand(i + 1, j);
        // move right
        expand(i, j + 1);
        // move left
        expand(i, j - 1); 
      }
   

    }
    expand(0, 0);
    console.log('seen ', seen);
    
    return islandsCount;
};

const grid = 
[["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]]; // return 3, which is the number of 1s in the grid

const grid2 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

console.log(numIslands(grid));