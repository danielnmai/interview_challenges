function bubbleSort(ar){

  for(let i = ar.length - 1; i >= 0; i--) {
    for(let j = 0; j < i; j++) {
      if(ar[j] > ar[i]) {
        swap(i, j);
      }
    }
  }

  return ar;
    function swap(i, j) {
    const temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
  }
  /**
   *  4, 1, 3, 42, 111
   *                i
   *  j
   * 
   * 
   */
}

console.log(bubbleSort([4, 1, 3, 42, 111]));