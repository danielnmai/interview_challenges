/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
  

  // let distance = 0;
  // let minDistance = Number.MAX_SAFE_INTEGER;

  // let visited = [];
  // for(let i = 0; i < height; i++) {
  //   const row = [];
  //   for(let j = 0; j < width; j++) {
  //     row[j] = false;
  //   }
  //   visited.push(row);
  // }

  // function move(x, y) {
  //   if(x === height || y === width || x < 0 || y < 0) {
  //     return;
  //   }
  //   distance += 1;
    
  //   if(x === nuts[1][0] && y === nuts[1][1]) {
  //     console.log('found nuts ', x, y);
  //     console.log('distance ', distance);
  //     minDistance = Math.min(distance, minDistance);
  //   }

  //   visited[x][y] = true;
  //   // move down
  //   if(!visited[x][y + 1]) move(x, y + 1);

  //   // move up 
  //   if(!visited[x][y - 1]) move(x, y - 1);

  //   // move left
  //   if(x - 1 >= 0 && !visited[x - 1][y]) move(x - 1, y);

  //   // move right
  //   if(x + 1 < height && !visited[x + 1][y]) move(x + 1, y);
  // }

  // move(squirrel[0], squirrel[1]);
  // console.log(' visited ', visited );
  // console.log(' min distance ', minDistance );



  let totalDistance = 0;
  let d = Number.MIN_SAFE_INTEGER;

  function distance(pointA, pointB) {
    return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
  }

  for(const nut of nuts) {
    totalDistance += distance(nut, tree) * 2;
    d = Math.max(d, distance(nut, tree) - distance(nut, squirrel));
  }
  return totalDistance -  d;
};

console.log(minDistance(5, 7, [2, 2], [4, 4], [[3,0], [2, 5]]));