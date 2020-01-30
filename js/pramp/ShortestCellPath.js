/*
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011

**/

function shortestCellPath(grid, sr, sc, tr, tc) {
	/**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/

	// your code goes here
  
  let p = 0;
  
  function traverseBF(a, b, p) {
    if(grid[a][b] !== 1) return Infinity;   
    const nP = p + 1;
       
    // go right
    const right = traverseBF(a, b + 1, nP)
    // go left
    const left = traverseBF(a, b - 1, nP)
    
    // go up
    const up = traverseBF(a - 1, b, nP)
    
    // go down
    const down = traverseBF(a + 1, b, nP)
    
    return p + Math.min(right, left, up, down);
  }
  
  return p;
  
}
