/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 * 
 * room = [
  [1,1,1,1,1,0,1,1],
  [1,1,1,1,1,0,1,1],
  [1,0,1,1,1,1,1,1],
  [0,0,0,1,0,0,0,0],
  [1,1,1,1,1,1,1,1]
],
 */
var cleanRoom = function(robot) {

  /**
   * parameters
   * robot: type Robot
   * x : type integer the column index of the room
   * y : type integer the row index of the room
   * dir: type integer to tell what direction the robot should go
   * c : type Set to store cleaned cells
   * 
   */
  dfs(robot, 0, 0, 0, 0, new Set());
  

  function dfs(robot, x, y, direction, cleanedCells){
    const cell = `${x}-${y}`;
    // if we already clean this cell, return
    if(cleanedCells.has(cell)){
      return;
    }
    robot.clean();
    cleanedCells.add(cell);
    // explore and clean in 4 directions (up, right, down, left)
    for(let i = 0; i < 4; i++){
      if(robot.move()){
        let nextX = x;
        let nextY = y;
        switch(direction){
          // go up
          case 0: 
            nextY = nextY - 1; 
            break;
          case 90: 
            nextX = nextX + 1;
            break;
          case 180:
            nextY = nextY + 1;
            break;
          case 270:
            nextX = nextX - 1;
            break;
        }
        dfs(robot, nextX, nextY, direction, cleanedCells);

        // Do rotations to make sure the robot returns to its original rotation
        // Essentially do a 360 degree turn
        robot.turnLeft();
        robot.turnLeft();
        robot.move();
        robot.turnRight();
        robot.turnRight();
      }
      //after going up, proceed with going right, down and left
      // so direction will be 0 -> 90 -> 180 -> 270
      direction = direction + 90;
      robot.turnRight();
      direction = direction % 360; // reset direction
    }
  }
  
  
};