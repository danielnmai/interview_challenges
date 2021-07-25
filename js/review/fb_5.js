/**
 * 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

-1 0 1 2

1 0 1 4

-3 -1 0 2 4
9   1 0 4 16

-3 -2 -1 4 5 6

[-3 -2 -1] [4 5 6]
num = 6

[ 1, 4, 9, 16, 25, 36]

*/
function sortedSquares(nums) {
    let low = 0;
    let high = nums.length - 1;

    const result = new Array(nums.length);

    for(let i = nums.length - 1; i >= 0; i--) {
        let square;
        if(Math.abs(nums[low]) < Math.abs(nums[high])){
            square = nums[high];
            high--
        } else {
            square = nums[low];
            low++;
        }
        result[i] = (square * square);

    }

    return result;


}
    

console.log(getSquares([-4,-1, 0, 2,3]));
