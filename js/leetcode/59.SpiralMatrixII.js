/**
 * @param {number} n
 * @return {number[][]}
 */


 /**
  * 
  * Given a positive integer n, generate an n x n matrix filled with elements
  * from 1 to n2 in spiral order. 
  * 
  * 
  * 1 ->2 -> 3
  *          | 
  * 8 -> 9 - 4
  * |        |
  * 7 <- 6 <- 5
  * 
  */
var generateMatrix = function(n) {
  const matrix = [];

  // build up matrix with empty cells
  for( let i = 0; i < n; i++){
    let row = [];
    for(let j = 0; j < n; j++) {
      row.push(null);
    }
    matrix.push(row);
  }

  let fillNumber = 1;
  let leftBound = 0;
  let rightBound = n;
  let topBound = 0;
  let bottomBound = n - 1;

  while(fillNumber <= (n * n)) {

    // left -> right
    for(let i = leftBound; i < rightBound; i++) {
      matrix[topBound][i] = fillNumber;
      if(fillNumber === n * n) {
        break;
      };
      fillNumber++;
    }
    topBound++;

    // top -> bottom

    for(let i = topBound; i < bottomBound; i++) {
      matrix[i][bottomBound] = fillNumber;
      fillNumber++;
    }
    rightBound--;

    // right -> left
    for(let i = rightBound; i >= leftBound; i--){
      matrix[bottomBound][i] = fillNumber;
      fillNumber++;

    }
    bottomBound--;

    // bottom -> top
    for(let i = bottomBound; i >= topBound; i--){
      matrix[i][leftBound] = fillNumber;
      fillNumber++;
    }
    leftBound++;
  }
  return matrix;
};


generateMatrix(5);