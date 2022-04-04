function insertionSort(arr) {

  const N = arr.length;
  for(let i = 1; i < N; i++) {
    let j = i;
    while(j >= 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1);
      j--;
    }

  }

    function swap(index1, index2) {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }
  return arr;
}

/*

  GOOD for incoming stream of data
  we can put the correct element into the correct spot while the element is coming
  

  5 4 2 3 1
    i
  4 5 2 3 1
      i
  4 2 5 3 1
      i
  2 4 5 3 1
        i
  2 4 3 5 1
        i

  2 3 1 4 5
          i
       


*/

console.log(insertionSort([5,3,4,1,2,55]));
