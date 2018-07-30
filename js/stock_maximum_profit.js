// You will be given a list of stock prices for a given day and your goal is to return the maximum profit that 
// could have been made by buying a stock at the given price and then selling the stock later on.
// For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because 
// if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made.
// If no profit could have been made, return -1.


//BRUTE-FORCE SOLUTION: run 2 loops to compare the profit (the difference) of any 2 prices.
//Time complexity: O(n^2)

function findMaxProfitNotOptimized(ar){
    let maxProfit = -1
    let profit = 0
    for(let i = 0; i < ar.length; i++){
        for(let j = i + 1; j < ar.length; j++){
            profit = ar[j] - ar[i]
            if(profit > maxProfit) maxProfit = profit
        }
    }
    return maxProfit
}

//Optimized solution
function findMaxProfit(ar){
    let maxProfit = -1
    let profit, sellingPrice
    let shouldChangeBP = true
    let buyingPrice = ar[0]

    for(let i = 0; i < ar.length - 1; i++){
        if(shouldChangeBP || ar[i] < buyingPrice){
            buyingPrice = ar[i]
        }
        sellingPrice = ar[i+1]
        profit = sellingPrice - buyingPrice
        if(profit < 0) continue
        else if(profit > maxProfit){
            maxProfit = profit
            shouldChangeBP = false
        }
    }
    return maxProfit
}

let ar = [1, 45, 24, 35, 31, 40, 38, 11, 1, 20] 
console.log(findMaxProfitNotOptimized(ar))
console.log(findMaxProfit(ar))


