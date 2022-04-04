function quickSort(nums, start = 0, end = nums.length - 1) {

  // find the pivot 
  // assume that the pivot is always the first item 

  function pivot(start = 0, end = nums.length - 1) {
    let pivot = nums[start];
    let swapIndex = start;

    for(let i = start + 1; i < nums.length; i++) {
      if(pivot > nums[i]) {
        swapIndex++;
        swap(swapIndex, i);
      }
    }
    swap(swapIndex, start);

    return swapIndex;
  }



  
  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  if(start < end) {
    const pivotIndex = pivot(start, end);
    // sort left side
    quickSort(nums, start, pivotIndex - 1);
    // sort right side
    quickSort(nums, pivotIndex + 1, end);
  }

  return nums;


}

/**
 * 
 * 22 1 23 32 89 84 100 42
 *          p
 *          s
 *                       i
 * 
 */

const ar = [ 22, 1, 23, 32, 89, 84, 100,42];
console.log(quickSort(ar));