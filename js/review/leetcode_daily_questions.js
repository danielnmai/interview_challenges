function minDistance(numRows, numCols, area) {
    let steps = 0
    function move(x, y) {
        if(x >= numRows - 1 || y >= numCols) {
            return - 1
        }
        if(validMove(x, y)) {

            if(area[x][y] == 1) {
                steps += 1
            }                    
        } else {
            return 
        }
        //move up
        move(x - 1, y)
        //move down
        move(x + 1, y)
        //move left
        move(x, y - 1)
        //move right
        move(x, y + 1) 

        
    }

    function validMove(x, y){
        return (x >= 0 && x < numRows) && 
                (y >= 0 && y  < numRows)
    }

    move(0, 0)
    console.log(steps)
    return steps
}

let area = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]
]
minDistance(3, 3, area)
console.log(area[2][1])