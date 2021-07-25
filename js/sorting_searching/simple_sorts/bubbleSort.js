function bubbleSort(arr) {

  /*

      5 3 4 1 2
              i
      j              
  */

  let noSwaps;
  
  for(let i = arr.length - 1; i >= 0; i--) {
      let j = 0;
      noSwaps = true;
      while(j <= i - 1) {
          if(arr[j] > arr[j + 1]) {
              swap(j, j + 1);
              noSwaps = false;
          }
          j++;
      }
      if(noSwaps) break;
      console.log('ONE PASS DONE!')
  }

  function swap(index1, index2) {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }

  return arr;
}

bubbleSort([12,8, 13, 5,3,4,1,2,55]);