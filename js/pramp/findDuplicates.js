/*
    Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates
    that returns an array of all passport numbers that are both in arr1 and arr2. 
    Note that the output array should be sorted in an ascending order.
    LLet N and M be the lengths of arr1 and arr2, respectively.
    Solve for two cases and analyze the time & space complexities of your solutions:
    M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.
*/

const findDuplicates = (ar1, ar2) => {
    let result = []
    for(let num of ar1) {
        if(binarySearch(ar2, num) !== -1) {
            result.push(num)
        }
    }
    
    function binarySearch (ar, t) {
        let l = 0, r = ar.length - 1        
        while(l <= r) {
            let m = Math.floor((l + r) / 2)
            if(ar[m] > t) {
                r = m - 1
            }
            else if (ar[m] < t){
                l = m + 1
            }
            else {
                return m
            }
        }
        return -1
    }
    return result
}
let ar1 = [1, 2, 3, 5, 6, 7], ar2 = [3, 6, 7, 8, 20]
console.log(findDuplicates(ar1, ar2))