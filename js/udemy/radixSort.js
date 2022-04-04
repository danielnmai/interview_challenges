function digitCount(num) {
  if(num == 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigit(nums) {
  let mostDigit = 0;
  for(let i = 0; i < nums.length; i++) {
    mostDigit = Math.max(mostDigit, digitCount(nums[i]));
  }

  return mostDigit;
}


function radixSort(nums) {
  const topDigit = mostDigit(nums);

  let result = Array.from(nums);

  for(let k = 0; k < topDigit; k++) {
  let buckets = Array.from({length: 10}, () => []);

    for(let i = 0; i < result.length; i++) {
      const digitAtK = getDigit(result[i], k);
      buckets[digitAtK].push(result[i]);
    }

    result = buckets.flat();
  }

  return result;

}


const ar = [4, 1, 3, 42, 111, 342334, 13, 424, 85600, 38899139, 293, 39884, 22];

/**
 * 0: 85600 
 * 1: 1, 111, 
 * 2: 42, 22
 * 3: 3, 13, 293
 * 4: 4, 424, 39884
 * 5:
 * 6:
 * 7:
 * 8:
 * 9: 38899139
 * 
 * 
 */
console.log(getDigit(23124423, 5));
console.log(mostDigit(ar));
console.log(radixSort(ar));