/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    
    
  /*
  0 1 2 3 4 5
0  a b c d e f
1  u v w x y z

deletion indices {0, 2, 3} (D.length is 3) column 0, 2, 3 items are removed
after deletion:
b  e   f
v  y   z

=> each column in the array are sorted in increasing order, we can return D.length
  
  
  
  */
  if(A === null) return -1;
  
  const rowLength = A.length;
  const colLength = A[0].length;
  console.log('row length ', rowLength);
  console.log('col length ', colLength);
  let minDeletionSize = 0;

  for(let col = 0; col < colLength; col++){
    for(let row = 0; row < rowLength - 1; row++){
      if(A[row][col] > A[row + 1][col]){
       minDeletionSize++;
       break;
      }
    }
  }
  
  return minDeletionSize;  
  
};

const ar = ["rrjk","furt","guzm"];
const ar1 = ["cba","daf","ghi"];
const ar3 = ['a', 'b'];
const ar4 = ["zyx","wvu","tsr"];

/*

z y x
w v u
t s r

  0 1 2
0 c b a
1 d a f
2 g h i

*/

console.log(minDeletionSize(ar1));