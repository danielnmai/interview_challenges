function sortKSortedArray(arr, k){
  const minHeap = [];

  let index = 0;
  for(let i = 0; i < k; i++){
    minHeap.push(arr[i]);
  }

  for(let i = k + 1; i < arr.length; i++){
    arr[index++] = minHeap.shift();
    minHeap.pop();
    minHeap.push(arr[i]);
  }
  while(minHeap.length > 0){
    arr[index++] = minHeap.shift();
    minHeap.pop();
  }

  return arr;

}

const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
const k = 2;

console.log(sortKSortedArray(arr, k));
