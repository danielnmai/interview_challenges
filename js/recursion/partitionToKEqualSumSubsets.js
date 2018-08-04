/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sortedNums = nums.sort((a, b) => {
        return  a - b })
    let length = sortedNums.length
    let biggestNum = sortedNums[length - 1] + sortedNums[length - 2]
    let numOfPairsList = []


    function countPairsOfSum(sum){
        if(sum == 0) return

        let freq = {}
        for(let i = 0; i < nums.length; i++){
            let num = nums[i]
            if(freq.hasOwnProperty(num)){
                freq[num]++
            }
            else {
                freq[num] = 1
            }
        }
        let count = 0
        for(let i = 0; i < nums.length; i++){
            let difference = sum - nums[i]
            if(freq[difference] != null){
                count += freq[difference]
                console.log(`sum: ${sum}, pair: (${nums[i]}, ${difference})`)
                
            }
            if(sum - nums[i] == nums[i]) {
                count--
            }
        }
        console.log(freq)
        numOfPairsList.push(count / 2)
        countPairsOfSum(sum - 1)
    }
    countPairsOfSum(biggestNum)

    console.log(numOfPairsList) 
    let maxPairsOfSum = Math.max(...numOfPairsList)
    console.log(maxPairsOfSum)
    
    return maxPairsOfSum >= k
};

let ar = [4, 3, 2, 3, 5, 2, 1], k = 4
let ar1 = [10, 12, 1, 2,10, 7, 5, 19, 13, 1]
let ar3 = [2,2,2,2,3,4,5]
console.log(canPartitionKSubsets(ar3, k))
