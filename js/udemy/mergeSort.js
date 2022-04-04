function mergeSort(nums) {

  if(nums.length == 1) return nums;
  // split the array into 2 halves

  const mid = Math.floor(nums.length / 2);

  const leftAr = nums.slice(0, mid);
  const rightAr = nums.slice(mid);
  // sort each array
  const sortedLeftAr = mergeSort(leftAr);
  const sortedRightAr = mergeSort(rightAr);

  // merge them together

  return merge(sortedLeftAr, sortedRightAr);

  function merge(leftAr, rightAr){
    let left = 0;
    let right = 0;
    const result = [];

    while(left < leftAr.length && right < rightAr.length) {
        if(leftAr[left] < rightAr[right]) {
          result.push(leftAr[left]);
          left++;
        } else {
          result.push(rightAr[right]);
          right++
        }
    }

    // push remaining items into correct order
    while(left < leftAr.length) result.push(leftAr[left++]);
    while(right < rightAr.length) result.push(rightAr[right++]);

    return result;
  }
}

const ar = [32, 1, 84, 42, 89, 23, 100, 22];
/**
 * 
 * 32 1 84 42 89 23 100 22
 * 
 * 32 1 84 42       89 23 100 22
 * 
 * 32 1   84 42     89 23      100 22
 * 
 * 1 32   42 84     23 89    22 100
 * 1 32 42 84       22 23 89 100
 * 
 * 1 22 23 32 42 89 100
 * 
 * 
 * 
 * 
 * 
 */

console.log(mergeSort(ar));