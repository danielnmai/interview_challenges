function selectionSort(arr) {

  /*

    i
       
    5 1 2 4 3

        k


        2nd smallest element
        5 - 2 +
    0 1 2 3 4    
    1 2 3 4 5

    5 4 3 2 1


  */
  const N = arr.length;

  for(let i = 0; i < N; i++) {
      let min = i;
      for(let j = i + 1; j < N; j++) {
          if(arr[j] < arr[min]) {
              min = j;
              console.log('min ', min);
          }
      }
      if(min !== i) swap (min, i); // little optimization to reduce number of swapping
  }

  function swap(index1, index2) {
      console.log('swap ', index1, index2);
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }

  console.log('arr', arr)
return arr;   
}

selectionSort([5, 1, 2, 4, 3]);