//Merging 2 Packages
// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    let result = []
    let hash = {}
    for (let i = 0; i < arr.length; i++){
        let weight = arr[i],  diff = limit - weight
    
        if (hash.hasOwnProperty(diff)) {
            result.push(i, hash[diff] )
        } else {
            hash[weight] = i
        }
    }

    return result
  }

  let arr = [4, 6, 10, 15, 16], limit = 21
  console.log(getIndicesOfItemWeights(arr, limit))



