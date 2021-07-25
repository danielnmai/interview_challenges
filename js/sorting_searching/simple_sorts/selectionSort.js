function selectionSort(arr) {

  /*

  5 3 4 1 2
  1 2 3 4 5
          i
          j
          m

  */
  const N = arr.length;
  for(let i = 0; i < N; i++) {
      let min = i;
      for(let j = i + 1; j < N; j++){
          if(arr[min] > arr[j]) {
              min = j;
          }
      }
      if(i !== min) swap(min, i);

  }

  function swap(index1, index2) {
      console.log('swap ', arr[index1], arr[index2]);
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }

return arr;   
}

selectionSort([12,8, 13, 5,3,4,1,2,55]);