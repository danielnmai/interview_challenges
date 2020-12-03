/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  
  if(points.length === 0) return 0;

  let numOfArrows = 1;

  points.sort((a, b) => a[0] - b[0]);

  let curXend = points[0][1];
  for(const [xStart, xEnd] of points) {
    if(xStart > curXend) {      
      curXend = xEnd;
      numOfArrows++;
    } else {
      curXend = Math.min(curXend, xEnd);
    }
  }

  
  console.log('points ', points);
  console.log('num of arrows needed', numOfArrows);
  return numOfArrows;
};

const points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]];
const points1 = [[1,2],[3,4],[5,6],[7,8]];
const points2 = [[1,2],[2,3],[3,4],[4,5]];
const points3 =  [[1,2]];
const points4 = [[2,3],[2,3]];

findMinArrowShots(points);
// findMinArrowShots(points1);
// findMinArrowShots(points2);
// findMinArrowShots(points3);
// findMinArrowShots(points4);