
function findMissingNumber(ar) {
    let hash = {}
    let missingNum = 0
    let max = Math.max(...ar)
   
    for(let val of ar){
        hash[val] = 1    
    }

    for(let i = 1; i < max; i++){
        if(!hash.hasOwnProperty(i)) {
            missingNum = i
            break
        }    
    }
    

    return missingNum  
}

let ar = [5, 3, 1, 4 ] // output 2


console.log(findMissingNumber(ar))
