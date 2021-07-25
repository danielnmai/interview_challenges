function findPath(matrix) {

  const row = matrix.length - 1;
  const col = matrix[0].length - 1;

  let path = []

  
  /* DYNAMIC PROGRAMMING */
  function move(x, y) {

    if(x > row || y > col) return false;

    const isAtBottomRight = x === row && y === col;

    // hitting obstacle
    if(matrix[x][y] === 1) {
      return false;
    }
    if(isAtBottomRight || move(x + 1, y) || move(x, y + 1)) {
      path.push([x, y]);
      return true;
    }
    return false;
  }

  move(0, 0);

  return path;



  /* DYNAMIC PROGRAMMING WITH MEMOIZATION */
  // const memo = [];

  // for(let i = 0; i < matrix.length; i++) {
  //   memo.push(new Array(matrix[i].length).fill(-1));
  // }


  
  // function move(x, y) {
  //   console.log('memo matrix ', memo);
  //   if(x > row || y > col) return 0;

  //   // reach destination
  //   if(x === row && y === col) {
  //     return 1;
  //   }

  //   // hitting an obstacle
  //   if(matrix[x][y] === 1) {
  //     return 0;
  //   }

  //   if(memo[x][y] !== -1) {
  //     return memo[x][y];
  //   }
  //   // move right
  //   const rightPaths = move(x + 1, y);

  //   // move down
  //   const downPaths = move(x, y + 1);
  //   memo[x][y] = rightPaths + downPaths;

  //   return memo[x][y];
  // }

  // // start from top left corner
  // return move(0, 0);

}

console.log(findPath([[0, 1, 0], [0, 0, 0], [0, 0, 0]]));