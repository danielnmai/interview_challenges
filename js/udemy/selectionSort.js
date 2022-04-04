function selectionSort(ar){
  let minIdx = 0;

  for(let i = 0; i < ar.length; i++) {
    for(let j = i + 1; j < ar.length; j++) {
      if(ar[j] < ar[i]){
        minIdx = j;
      }
    }

    swap(minIdx, i);
  }


  return ar;

  function swap(i, j) {
    const temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
  }

  /**
   * 
   * 4 1 2 3
   * i
   *   j
   *   m
   * 
   * 1 4 2 3
   *   i j
   *     m
   * 1 2 4 3
   * 
   * 
   * 1 2 4 3
   *     i j
   * 
   * 
   * j < i ?
   * 
   * minIdx = j
   * 1 4 2 3
   *   i
   *     j
   *     m
   * 
   * 1 2 4 3
   *     i
   *       j
   *       m
   * 1 2 3 4
   * 
   */
}

console.log(selectionSort([4,1,2,3]));