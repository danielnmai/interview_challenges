function bubbleSort(arr) {

  /*

      5 4 3 2 1
              i
      j
      
      1 2 3 4 5
            i    
              j
  */

  let noSwaps;
  
//   for(let i = arr.length - 1; i >= 0; i--) {
//       let j = 0;
//       noSwaps = true;
//       while(j <= i - 1) {
//           if(arr[j] > arr[j + 1]) {
//               swap(j, j + 1);
//               noSwaps = false;
//           }
//           j++;
//       }
//       if(noSwaps) break;
//       console.log('ONE PASS DONE!')
//   }

    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length - 1; j >= i; j--) {
            if(arr[j] < arr[j - 1]) {
                swap(j, j - 1);
            }
        }
    }

  function swap(index1, index2) {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }
  console.log(arr);
  return arr;
}

bubbleSort([12,8, 13, 5,3,4,1,2,55]);