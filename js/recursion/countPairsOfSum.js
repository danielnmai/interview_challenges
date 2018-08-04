function countPairsOfSum(ar, sum){
    let freq = {}
    for(let i = 0; i < ar.length; i++){
        let num = ar[i]
        if(freq.hasOwnProperty(num)){
            freq[num]++
        }
        else {
            freq[num] = 1
        }
    }
    console.log(freq)
    let count = 0
    for(let i = 0; i < ar.length; i++){
        let difference = sum - ar[i]
        if(freq[difference] != null){
            count += freq[difference]
            
        }
        if(sum - ar[i] == ar[i]) {
            count--
        }
    }
    return count / 2
}

let ar = [4, 3, 2, 3, 5, 2, 1]
let ar1 = [1, 5, 7, -1, 5]
countPairsOfSum(ar, 5)

