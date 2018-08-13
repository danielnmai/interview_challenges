function rotateMatrix(matrix){
    if(matrix.length == 0 || matrix.length != matrix[0].length){
        return false
    }
    let n = matrix.length
    for(let layer = 0; layer < n / 2; layer++){
        let first = layer, last = n - 1 - layer
        
        for(let i = first; i < last; i++){
            let offset = i - first
            //save top
            let top = matrix[first][i]
            //bottom - > left
            matrix[last - offset][first] = matrix[last][last - offset]

            //right -> bottom
            matrix[last][last - offset] = matrix[i][last]

            //top -> right
            matrix[i][last] = top // right <-- saved top

        }
    }
    console.log(matrix)
    return true
}

let matrix = [[1, 2, 3], [3, 4, 6], [7, 8, 9]]
rotateMatrix(matrix)