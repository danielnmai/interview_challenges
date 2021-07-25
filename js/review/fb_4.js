/**
 * 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
 
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:
Input: nums = []
Output: []
Example 3:
Input: nums = [0]
Output: []
 
Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
 
[-1, 0, 1, 2, -1, -4]

[-4, -1, -1, 0, 1, 2]

-1, -1, 2
-1 0 1
*/
function threesum(nums, target) {
    const result = [];
    const seen = new Map();

    const sortedNums = nums.sort((a, b) => a - b);

    console.log('sorted nums ', sortedNums);

    for(let i = 0; i < sortedNums.length; i++) {
        const target = sortedNums[i];
        let low = i + 1;
        let high = sortedNums.length - 1;

        while(low < high) {
            // console.log('low ', low, 'high ', high);
            const complement = - sortedNums[low] - sortedNums[high];
            if(complement > target) {
                console.log('reaching here complement > target', complement, 'low ', low, 'high' , high);
                high--;
            }
            else if(complement < target) {
                low++;
            }
            else {
                const triplet = [sortedNums[low], sortedNums[high], target].sort((a, b) => a - b);
                const key = `${triplet[0]}-${triplet[1]}-${triplet[2]}`;

                if(!seen.has(key)) seen.set(key, triplet);
                low++;
                high--;
            }
        }
    }
    return [...seen.values()];
}
    

console.log(threesum([-1,0,1,2,-1,-4]));
