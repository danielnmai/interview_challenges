function findContestMatches(n){
    let ar = [], result = ''
    for(let i = 0; i < n; i++){
        ar.push(i + 1)
    }
    if(ar.length == 2){
        result = JSON.stringify(ar)
    }
    
    function findPairs(ar){        
        if(ar.length == 2) return
        let smallerAr = []        

        for(let i = 0; i < ar.length / 2; i++){
            let length = ar.length - 1
            smallerAr.push([ar[i], ar[ length - i]])
        }
        result = JSON.stringify(smallerAr)
        findPairs(smallerAr)
    }
    findPairs(ar)

    return result.replace(/\[/g, '(').replace(/\]/g, ')')
}

console.log(findContestMatches(2))