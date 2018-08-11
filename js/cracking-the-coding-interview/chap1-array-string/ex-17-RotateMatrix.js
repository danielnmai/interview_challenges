function rotateMatrix (matrix) {
    if(matrix.length != matrix[0].length){
        console.log('not an NxN matrix')
        return
    }
    let n = matrix.length 

    //start with first layer = matrix length n, next layer will be n - 2
    for(let layer = n; layer >= 1; layer -= 2){
        let top = matrix[0], bottom = []
        let left = [], right = []

        for(let i = 0; i < layer; i++){
            let ar = matrix[i]
            right.push(ar[ar.length - 1])
            left.push(matrix[layer - i - 1][0])
            bottom.push(matrix[layer - 1][layer - 1 - i])
        }
        console.log(top)
        console.log(right)
        console.log(left)
        console.log(bottom)

        for(let i = 0; i < layer; i++){
            let temp = top[i]
            top[i] = left[i]
            left[i] = bottom[i]
            bottom[i] = right[i]
            right[i] = temp
        }
        console.log('-----------------')
        console.log(top)
        console.log(right)
        console.log(left)
        console.log(bottom)

    }
    



    console.log(matrix)
    return matrix
    // console.log(top)
    // console.log(bottom)

    // console.log(right)
    // console.log(left)
}

let matrix = [[1, 2, 3], [3, 4, 6], [7, 8, 9]]

rotateMatrix(matrix)
